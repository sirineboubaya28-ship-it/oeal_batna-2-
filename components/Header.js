function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };

    return (
      <header className="bg-white shadow-md sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="images/logo.jpeg"  alt="Logo" className="w-16 h-16 object-cover rounded-full bg-gray-200"  />

              <div>
                <h1 className="text-xl font-bold text-[var(--text-dark)]">المنظمة الطلابية الجزائرية الحرة</h1>
                <p className="text-sm text-[var(--text-light)]">المكتب الولائي باتنة 02</p>
              </div>
            </div>

            <button 
              className="md:hidden text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="icon-menu"></div>
            </button>

            <nav className="hidden md:flex gap-6 items-center">
              <button onClick={() => scrollToSection('hero')} className="hover:text-[var(--primary-color)] transition">الرئيسية</button>
              <button onClick={() => scrollToSection('national')} className="hover:text-[var(--primary-color)] transition">المكتب الوطني</button>
              <button onClick={() => scrollToSection('structure')} className="hover:text-[var(--primary-color)] transition">الهيكلة</button>
              <button onClick={() => scrollToSection('branches')} className="hover:text-[var(--primary-color)] transition">المكاتب الفرعية</button>
              <button onClick={() => scrollToSection('activities')} className="hover:text-[var(--primary-color)] transition">الأنشطة</button>
              <button onClick={() => scrollToSection('contact')} className="px-4 py-2 border-2 border-[var(--primary-color)] text-[var(--primary-color)] rounded-lg hover:bg-[var(--primary-color)] hover:text-white transition">اتصل بنا</button>
            </nav>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-3 pb-4">
              <button onClick={() => scrollToSection('hero')} className="text-right hover:text-[var(--primary-color)]">الرئيسية</button>
              <button onClick={() => scrollToSection('national')} className="text-right hover:text-[var(--primary-color)]">المكتب الوطني</button>
              <button onClick={() => scrollToSection('structure')} className="text-right hover:text-[var(--primary-color)]">الهيكلة</button>
              <button onClick={() => scrollToSection('branches')} className="text-right hover:text-[var(--primary-color)]">المكاتب الفرعية</button>
              <button onClick={() => scrollToSection('activities')} className="text-right hover:text-[var(--primary-color)]">الأنشطةوالفعاليات</button>
              <button onClick={() => window.open("https://forms.gle/BXCx11URXUCPCoTk8","_blank")} className="text-right hover:text-[var(--primary-color)]">اتصل بنا</button>
            </nav>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}