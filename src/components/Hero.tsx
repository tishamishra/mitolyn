import { mitolynYoutube } from '@/lib/youtube';

type HeroProps = {
  title: string;
  intro: string;
};

export default function Hero({ title, intro }: HeroProps) {
  return (
    <section 
      className="relative flex flex-col items-center pt-8 pb-12 md:pt-12 md:pb-16" 
      style={{
        background: 'linear-gradient(to right, #e8d5ff 0%, #d5e8ff 100%)',
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-black" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.2' }}>
            {title}
          </h1>
          <p className="text-base md:text-lg text-black leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Arial, sans-serif' }}>
            {intro}
          </p>
        </div>

        <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-900/10 bg-black">
          <div className="aspect-video w-full">
            <iframe
              src={mitolynYoutube.embedUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full border-0"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
