function Hero() {
  try {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const slides = [
      { type: 'image', url: 'images/slide4.jpg', caption: 'فعالية ' },
      { type: 'image', url: 'images/slide5.jpg', caption: 'اجتماع ' },
      { type: 'image', url: 'images/slide6.jpg', caption: 'ندوة ' }
    ];

    React.useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }, []);

    return (
      <section id="hero" className="relative h-[500px] overflow-hidden" data-name="hero" data-file="components/Hero.js">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.url} alt={slide.caption} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">معاً نبني المستقبل</h2>
                <p className="text-xl md:text-2xl mb-8">منصة تفاعلية للشباب المبدع</p>
                <button onClick={() => window.open("https://forms.gle/BXCx11URXUCPCoTk8","_blank")} className="btn-primary">انضم إلينا</button>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}