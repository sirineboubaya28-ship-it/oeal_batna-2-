function OrgStructure() {
  try {
    const [selectedMember, setSelectedMember] = React.useState(null);

    const president = {
      name: 'صكاك همام ضياء الدين',
      position: 'الرئيس',
      phone: '0550729502',
      image: 'images/president.jpg'
    };
    
    const boardMembers = [
      { name: ' مباركي موسى أنيس', position: 'نائب الرئيس', phone: '+213 668 227 002', image: 'images/member1.jpg' },
      { name: ' قزي مصطفى', position: 'مسؤول التنظيم ', phone: '+213 698 384 032', image: 'images/member2.jpg' },
      { name: '  بوبعاية سيرين ', position: 'مسؤول الشؤون البيداغوجيا ', image: 'images/member12.jpg' },
      { name: 'لبرارة أيوب', position: 'مسؤول الشؤون الاجتماعية', phone: '+213 555 897 337', image: 'images/member5.jpg' },     
      { name: '  سي عبدالله زين الدين ', position: 'مسؤول الإعلام ', phone: '+213 777 194 806', image: 'images/member11.jpg' },
      { name: 'معصم مريم  ', position: 'مسؤول النشاطات التكوين و التدريب  ', image: 'images/member9.jpg' },
      { name: 'سمون العيد ', position: 'مسؤول الإدارة و المالية والوسائل العامة', phone: '+213 784 464 094', image: 'images/member7.jpg' },
      { name: 'بوبريمة محمد إسلام ', position: 'مسؤول العلاقات الخارجية', phone: '+213 779 432 968', image: 'images/member10.jpg' },
      { name: 'قشي عبد الحليم', position: 'مسؤول الثانويين', phone: '+213 794 025 882', image: 'images/member4.jpg' },
      { name: ' بلفراق عبد المومن ', position: 'مسؤول التخطيط والاستشراف', phone: '+213 650 048 537', image: 'images/member8.jpg' },
      { name: 'دحماني خالد ', position: 'عضو ', phone: '+213 698 835 828', image: 'images/member6.jpg' },
      { name: 'عيشي باسم', position: 'عضو  ', phone: '+213 674 351 317 ', image: 'images/member3.jpeg' },
      
      
    ];

    return (
      <section id="structure" className="py-16 bg-[var(--bg-light)]">
        <div className="container mx-auto px-4">
          <h2 className="section-title">المكتب الولائي باتنة -2-</h2>

          {/* الرئيس */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-xl p-8 border-2 border-[var(--primary-color)]">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-green-200 to-green-100 rounded-full blur-lg opacity-50"></div>
                  <img
                    src={president.image}
                    alt="president"
                    className="relative w-48 h-48 rounded-full object-cover border-4 border-[var(--primary-color)] shadow-2xl"
                  />
                </div>
                <div className="flex-1 text-center md:text-right">
                  <h3 className="text-3xl font-bold mb-2 text-[var(--text-dark)]">{president.name}</h3>
                  <p className="text-xl text-[var(--primary-color)] font-semibold mb-4">{president.position}</p>
                  <p className="text-[var(--text-light)] leading-relaxed">
                    يشرف السيد {president.name} على المكتب الولائي باتنة -2- للمنظمة الطلابية الجزائرية الحرة، حيث يقوم على تنسيق جميع المكاتب الفرعية في جامعة باتنة -2-  
                    الهاتف: {president.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* شريط الأعضاء */}
          <div className="overflow-x-auto">
            <div className="flex gap-6 py-6 px-2 min-w-max bg-white rounded-xl shadow-lg">
              {boardMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-gradient-to-br from-green-400 to-blue-400 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 p-1"
                  />
                  <p className="mt-2 text-sm font-semibold text-[var(--text-dark)]">{member.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* نافذة العضو */}
          {selectedMember && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-2xl p-6 relative max-w-md w-full">
                {/* زر الإغلاق */}
                <button
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                  onClick={() => setSelectedMember(null)}
                >
                  &times;
                </button>

                {/* الصورة والمعلومات */}
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-1">{selectedMember.name}</h3>
                <p className="text-[var(--primary-color)] mb-1">{selectedMember.position}</p>
                <p className="text-sm text-[var(--text-light)]">{selectedMember.phone}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  } catch (error) {
    console.error('OrgStructure component error:', error);
    return null;
  }
}
