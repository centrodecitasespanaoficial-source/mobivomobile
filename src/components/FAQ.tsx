import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-3 text-lg text-gray-500">Everything you need to know about mobile deals.</p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`card overflow-hidden transition-all ${openIndex === i ? 'shadow-lg shadow-navy-900/5' : ''}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-base font-semibold text-navy-900">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180 text-electric-500' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
