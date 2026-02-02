function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      message: ''
    });
    const [submitStatus, setSubmitStatus] = React.useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      setSubmitStatus('sending');
      
      try {
        const mailtoLink = `mailto:oealbatna02@gmail.com?subject=رسالة من ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0Aالبريد الإلكتروني: ${formData.email}`;
        window.location.href = mailtoLink;
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        setSubmitStatus('error');
      }
    };

    return (
      <section id="contact" className="py-16" data-name="contact" data-file="components/Contact.js">
        <div className="container mx-auto px-4">
          <h2 className="section-title">اتصل بنا</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border rounded-lg px-4 py-3"
                  required
                />
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border rounded-lg px-4 py-3"
                  required
                />
                <textarea
                  placeholder="رسالتك أو مشكلتك"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="5"
                  className="w-full border rounded-lg px-4 py-3"
                  required
                ></textarea>
                <button type="submit" className="btn-primary w-full">
                  إرسال الرسالة
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center">تم إرسال رسالتك بنجاح!</p>
                )}
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center">
                    <div className="icon-map-pin text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">العنوان</h4>
                    <p className="text-[var(--text-light)]">مكتب باتنة 2، جامعة باتنة 2، باتنة، الجزائر</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center">
                    <div className="icon-phone text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">الهاتف</h4>
                    <p className="text-[var(--text-light)]">+213 555 000 000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center">
                    <div className="icon-mail text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">البريد الإلكتروني</h4>
                    <p className="text-[var(--text-light)]">oealbatna02@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center">
                    <div className="icon-share-2 text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">تابعنا</h4>
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center hover:bg-[var(--secondary-color)]">
                        <div className="icon-facebook text-lg"></div>
                      </a>
                      <a href="#" className="w-10 h-10 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center hover:bg-[var(--secondary-color)]">
                        <div className="icon-instagram text-lg"></div>
                      </a>
                      <a href="#" className="w-10 h-10 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center hover:bg-[var(--secondary-color)]">
                        <div className="icon-twitter text-lg"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}