'use client';

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  title: string;
  items: FAQItem[];
  safetyTitle: string;
  safetyParagraphs: string[];
};

export default function FAQ({ title, items, safetyTitle, safetyParagraphs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className="header3 cid-tB88MG5MRU py-10 text-center" id="header3-1p" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="align-center container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-lg-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>{title}</strong>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="content16 cid-tTNurdHq8c py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50" id="content16-69">
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-md-10">
              <div id="bootstrap-accordion_36" className="panel-group accordionStyles accordion">
                {items.map((faq, index) => (
                  <div key={index} className="card mb-4 rounded-2xl overflow-hidden shadow-lg border-4 border-blue-300 hover:border-blue-500 transition-all duration-300">
                    <div className="card-header bg-gradient-to-r from-blue-100 to-purple-100">
                      <button
                        type="button"
                        className="panel-title w-full text-left p-6 flex justify-between items-center hover:bg-gradient-to-r hover:from-blue-200 hover:to-purple-200 transition-all duration-300"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      >
                        <h6 className="font-extrabold text-xl md:text-2xl" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
                          <strong>{faq.question}</strong>
                        </h6>
                        <span className="text-purple-600 text-4xl font-bold">
                          {openIndex === index ? '−' : '+'}
                        </span>
                      </button>
                    </div>
                    {openIndex === index && (
                      <div className="panel-collapse">
                        <div className="panel-body p-6 bg-white">
                          <p className="text-lg leading-relaxed" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content5 cid-uwxDbNctQa py-16 bg-gradient-to-br from-green-50 via-white to-teal-50" id="content5-8m">
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-md-12 col-lg-10">
              <div className="bg-white rounded-2xl p-10 shadow-2xl border-4 border-green-400">
                <h4 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>{safetyTitle}</h4>
                <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                {safetyParagraphs[0]}
                <br /><br />
                {safetyParagraphs[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

