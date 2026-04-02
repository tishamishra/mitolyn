import Image from 'next/image';

type WhatIsMitolynProps = {
  title: string;
  paragraphs: string[];
};

export default function WhatIsMitolyn({ title, paragraphs }: WhatIsMitolynProps) {
  return (
    <>
      <section className="header3 cid-tB83YwBUMj py-10 text-center" id="header3-1l" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
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

      <section className="image1 cid-uppXbGMVU6 py-12 bg-white" id="image1-80">
        <div className="container mx-auto px-4">
          <div className="row align-items-center flex flex-col md:flex-row gap-8">
            <div className="col-12 col-lg-4">
              <div className="image-wrapper rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://ik.imagekit.io/affin/mitolyn-supplement.webp?updatedAt=1765361274900" 
                  alt="Mitolyn-supplement" 
                  width={400} 
                  height={400}
                  className="w-full h-auto"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
            <div className="col-12 col-lg flex-1">
              <div className="text-wrapper">
                <p className="text-base md:text-lg lg:text-xl leading-relaxed" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                  {paragraphs[0]}
                  <br /><br />
                  {paragraphs[1]}
                  <br /><br />
                  {paragraphs[2]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

