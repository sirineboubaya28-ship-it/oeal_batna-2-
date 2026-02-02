function Footer() {
  try {
    return (
      <footer className="bg-[var(--text-dark)] text-white py-8" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="font-bold text-xl mb-4">المنظمة الطلابية الجزائرية الحرة</h3>
              <p className="text-gray-300">مكتب باتنة 2 - منصة تفاعلية للشباب المبدع</p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">روابط سريعة</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#hero" className="hover:text-[var(--secondary-color)]">الرئيسية</a></li>
                <li><a href="#national" className="hover:text-[var(--secondary-color)]">المكتب الوطني</a></li>
                <li><a href="#structure" className="hover:text-[var(--secondary-color)]">الهيكلة</a></li>
                <li><a href="#activities" className="hover:text-[var(--secondary-color)]">الأنشطة</a></li>
                <li><a href="#contact" className="hover:text-[var(--secondary-color)]">اتصل بنا</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">تواصل معنا</h3>
              <div className="space-y-2 text-gray-300">
                <p>جامعة باتنة 2، باتنة، الجزائر</p>
                <p>+213 555 000 000</p>
                <p>oelg.batna2@university.dz</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 text-center text-gray-300">
            <p>&copy; 2025 المنظمة الطلابية الجزائرية الحرة - مكتب باتنة 2. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}