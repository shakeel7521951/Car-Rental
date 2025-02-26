import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import AlertDialog from "../alert/AlertDialog";
import Update from "../popup/Update";
import AddProduct from "../popup/Add";
import {
  useDeleteServiceMutation,
  useGetAllServicesQuery,
} from "../../../redux/slices/ServiceApi";
import { toast } from "react-toastify";

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [addProductOpen, setAddProductOpen] = useState(false);
  const [servicesList, setServicesList] = useState([]);

  const { data, isLoading, error } = useGetAllServicesQuery();
  const [deleteService] = useDeleteServiceMutation();

  useEffect(() => {
    if (data?.services) {
      setServicesList(data.services);
    }
  }, [data]);

  if (isLoading)
    return <p className="text-blue-700 text-lg">Loading services...</p>;

  const handleDelete = async () => {
    if (!selectedProductId) return;

    try {
      const response = await deleteService(selectedProductId);

      if (response.error) {
        toast.error(
          response.error.data?.message || "Failed to delete service",
          {
            position: "top-center",
          }
        );
      } else {
        toast.success(
          response.data?.message || "Service deleted successfully",
          {
            position: "top-center",
          }
        );

        setServicesList((prev) =>
          prev.filter((service) => service._id !== selectedProductId)
        );
      }
    } catch (error) {
      toast.error("An error occurred while deleting", {
        position: "top-center",
      });
    }

    setDialogOpen(false);
    setSelectedProductId(null);
  };

  const filteredProducts = servicesList.filter(
    (service) =>
      service.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.serviceCategory.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onClick={() => setAddProductOpen(true)}
        className="px-4 py-2 mb-10 bg-blue-700 cursor-pointer text-white rounded-lg hover:bg-blue-500 transition"
      >
        + Add New Service
      </motion.button>

      {isLoading && (
        <p className="text-blue-700 text-lg">Loading services...</p>
      )}
      {error && <p className="text-red-700 text-lg">Failed to fetch data.</p>}

      {!isLoading && !error && (
        <motion.div
          className="bg-white backdrop-blur-md shadow-lg rounded-xl p-6 border border-blue-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-blue-700">Cars List</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search cars..."
                className="bg-white text-blue-700 placeholder-blue-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
              <Search
                className="absolute left-3 top-2.5 text-blue-700"
                size={18}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            {filteredProducts.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                      Passengers
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-700">
                  {filteredProducts.map((service) => (
                    <motion.tr
                      key={service._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-700 flex gap-2 items-center">
                        <img
                          src={
                            service.servicePic ||
                            "https://via.placeholder.com/50"
                          }
                          alt={service.serviceName}
                          className="size-10 rounded-full"
                        />
                        {service.serviceName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-700">
                        {service.serviceCategory}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-700">
                        ${service.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-700">
                        {service.passengers}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-700">
                        <button
                          className="text-indigo-500 cursor-pointer hover:text-indigo-300 mr-2"
                          onClick={() => {
                            setSelectedProductId(service._id);
                            setUpdateOpen(true);
                          }}
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          className="text-red-500 cursor-pointer hover:text-red-300"
                          onClick={() => {
                            setSelectedProductId(service._id);
                            setDialogOpen(true);
                            handleDelete(service._id)
                          }}
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center text-gray-500 py-4">
                No services found.
              </p>
            )}
          </div>
        </motion.div>
      )}

      {/* Add Product Popup */}
      <AddProduct
        isOpen={addProductOpen}
        onClose={() => setAddProductOpen(false)}
      />
    </>
  );
};

export default ProductsTable;
