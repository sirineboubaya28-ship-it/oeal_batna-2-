function NationalOffice() {
  try {
    return (
      <section id="national" className="py-16 bg-white" data-name="national-office" data-file="components/NationalOffice.js">
        <div className="container mx-auto px-4">
          <h2 className="section-title">المكتب التنفيذي الوطني</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-[var(--primary-color)]">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-green-200 to-green-100 rounded-full blur-lg opacity-50"></div>
                  <img 
                    src="/images/np.jpeg" 
                    alt="فاتح سريبلي" 
                    className="relative w-48 h-48 rounded-full object-cover border-4 border-[var(--primary-color)] shadow-2xl"
                  />
                </div>
                <div className="flex-1 text-center md:text-right">
                  <h3 className="text-3xl font-bold mb-2 text-[var(--text-dark)]">فاتح سريبلي</h3>
                  <p className="text-xl text-[var(--primary-color)] font-semibold mb-4">رئيس المكتب التنفيذي الوطني</p>
                  <p className="text-[var(--text-light)] leading-relaxed">
                    يقود السيد فاتح سريبلي المكتب التنفيذي الوطني للمنظمة الطلابية الجزائرية الحرة، 
                    حيث يشرف على تنسيق جميع المكاتب الولائية في الجامعات الجزائرية ويعمل على تمثيل الطلبة 
                    والدفاع عن مصالحهم على المستوى الوطني.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border-r-4 border-[var(--primary-color)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="icon-target text-2xl text-[var(--primary-color)]"></div>
                  </div>
                  <h3 className="text-xl font-bold">رؤيتنا</h3>
                </div>
                <p className="text-[var(--text-light)] leading-relaxed">
                  بناء منظمة طلابية حرة ومستقلة تمثل جميع الطلبة الجزائريين وتدافع عن حقوقهم 
                  وتساهم في تطوير التعليم العالي في الجزائر.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-r-4 border-[var(--secondary-color)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="icon-lightbulb text-2xl text-[var(--primary-color)]"></div>
                  </div>
                  <h3 className="text-xl font-bold">مهامنا</h3>
                </div>
                <ul className="text-[var(--text-light)] space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="icon-check text-lg text-[var(--primary-color)] mt-1"></div>
                    <span>تمثيل الطلبة في المؤسسات الوطنية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="icon-check text-lg text-[var(--primary-color)] mt-1"></div>
                    <span>تنظيم الأنشطة الطلابية الوطنية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="icon-check text-lg text-[var(--primary-color)] mt-1"></div>
                    <span>الدفاع عن الحقوق الطلابية</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('NationalOffice component error:', error);
    return null;
  }
}