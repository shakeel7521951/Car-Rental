import { useState } from "react";

const faqData = [
  {
    question: "What types of hosting plans do you offer?",
    answer:
      "We offer shared hosting, VPS hosting, dedicated server hosting, and cloud hosting plans.",
  },
  {
    question: "What is the uptime guarantee for your hosting services?",
    answer: "We guarantee an uptime of 99.9% for all our hosting services.",
  },
  {
    question: "Do you provide website migration assistance?",
    answer:
      "Yes, we offer free website migration assistance for new customers.",
  },
  {
    question: "What security measures do you have in place?",
    answer:
      "We employ advanced security measures including firewalls, DDoS protection, and regular security audits.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F2F4FF] h-screen flex justify-center items-center">
      <section className="max-w-5xl mx-auto py-10 sm:py-20">
        <div className="flex items-center justify-center flex-col gap-y-2 py-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-medium text-slate-700/70">
            Questions related to web hosting
          </p>
        </div>
        <div className="w-full px-7 md:px-10 xl:px-2 py-4">
          <div className="mx-auto w-full max-w-5xl border border-slate-400/20 rounded-lg bg-white">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-[#0A071B]/10">
                <button
                  className="flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 focus:outline-none p-5"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{item.question}</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className={`mt-1.5 md:mt-0 flex-shrink-0 h-5 w-5 text-[#5B5675] transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
