function Activities() {
  try {
    const [activities, setActivities] = React.useState([
      {
        id: 1,
        title: 'حملة تشجير وطنية ',
        description: 'تم غرس اكثر من مليون شجرة عبر كامل التراب الوطني الجزائري',
        date: '2025-10-25',
        images :['/images/activity1-1.jpg',
        '/images/activity1-2.jpg'] ,
        likes: 145,
        liked: false,
        rating: 92,
        comments: []
      },
      {
        id: 3,
        title: '  الندوة الوطنية لرؤساء المكاتب الولائية ومسؤولي التنظيم سكيكدة ',
        description: 'مشاركة  المكتب الولائي باتنة 02 في الندوة الوطنية للمكاتب الولائية المُنعقدة بجامعة 20أوت1955 بسكيكدة. وتأتي هذه المشاركة في إطار تعزيز التنسيق الوطني وتبادل الخبرات بين مختلف المكاتب الولائية، إضافة إلى مناقشة مستجدات الدخول الجامعي وتطوير العمل التنظيمي. ',
        date: '2025-10-25',
        images :['/images/activity3-1.jpg',
        '/images/activity3-2.jpg'] ,
        likes: 145,
        liked: false,
        rating: 92,
        comments: []
      },
      {
        id: 2,
        title: 'إحياء الذكرى ال71 لاندلاع الثورة التحريرية',
        description: ' محاضرات تاريخية / مسابقات فكرية تاريخية / عروض مسرحية وأناشيد وطنية',
        date: '2025-11-18',
        images : ['/images/activity2-1.jpg',
          '/images/activity2-2.jpg'],
        likes: 198,
        liked: false,
        rating: 88,
        comments: []
      },
      
      {
        id: 4,
        title: 'إحياء ذكرى اليوم الدولي للتضامن مع الشعب الفلسطيني',
        description: ' المنظمة الطلابية الجزائرية الحرة – المكتب الولائي باتنة 02 بحمد الله وفضله، نظّم المكتب الولائي اليوم فعالية إحياء اليوم الدولي للتضامن مع الشعب الفلسطيني، وذلك بقاعة المكتبة المركزية بجامعة باتنة 2، حيث شهدت المناسبة حضورًا مميزًا للطلبة والضيوف. ✨ تضمّن البرنامج:🔻 محاضرات تاريخية أثرت معارف الطلبة حول القضية🔻 مسابقة فكرية تاريخية في جو تنافسي 🔻 عروض مسرحية وأناشيد حول القضية الفلسطينية 🔻 فقرات متنوعة ومفاجآت أدخلت البهجة على الحضور لقد كانت هذه الفعالية محطة مهمة لترسيخ القيم النبيلة للقضية الفلسطينية في أوساط الطلبة وتعزز الوعي التاريخي والنضالي لديهم.🙏 شكرًا لكل من ساهم في إنجاح هذا النشاط من طلبة، مؤطرين، وضيوف.📸 إليكم بعض صور الحفل في الأسفل✊🏻🇵🇸 عاشت فلسطين حرّة أبيّة❤️فاللهم انصر اخوتنا في فلسطين  ',
        date: '2025-12-09',
        images : ['/images/activity4-1.jpg',
          '/images/activity4-2.jpg' , '/images/activity4-3.jpg' ],
        likes: 198,
        liked: false,
        rating: 88,
        comments: []
      },
      
      {
        id: 5,
        title: '  تنظيم المسابقة الوطنية لترتيل القرآن وتجويده   ',
        description: ' 🔥المسابقة الوطنية الجامعية "تراتيل" 🔥📖تعلن المنظمة الطلابية الجزائرية الحرة – المكتب الفرعي للاقامة الجامعية فيسديس 06 - وبالتنسيق مع مصلى الرحمة – عن تنظيم الطبعة الأولى من المسابقة الوطنية الجامعية في تجويد وترتيل القرآن الكريم🔹 تحت شعار:﴿ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا ﴾✨ فرصة لإبراز صوتك، وإتقان تلاوتك، والتنافس في أجواء إيمانية راقية.📌 ترقبوا التفاصيل قريبًا… كونوا في الموعد 🔥',
        date: '2026-01-04',
        images : ['/images/activity5-1.jpg',],
        likes: 198,
        liked: false,
        rating: 88,
        comments: []
      },
      
      {
        id: 6,
        title: 'الدورة التكوينية في قراءة التحاليل الطبيةالعامة',
        description: ' ✅️ دورة تكوينية في قراءة التحاليل الطبية العامة✨ هل تريد أن تفهم نتائج تحاليلك الطبية بنفسك؟✨ هل تحتار في تفسير ورقة التحاليل؟نحن المنظمة الطلابية الجزائرية الحرة المكتب الفرعي لكلية علوم الطبيعة والحياة يسرّنا دعوتكم للمشاركة و حضور دورة تكوينية علمية في:🧪 قراءة التحاليل الطبية العامةوالتي سيشرف عليها دكتور مختص في المجال 👨‍⚕️👩‍⚕️حيث سنتعرف على:✔️ مكونات ورقة التحليل وكيفية قراءتها✔️ أهم تحاليل الدم والمؤشرات الحيوية✔️ التحاليل البيوكيميائية، الهرمونية والمناعية✔️ نصائح عملية لفهم نتائج التحاليل ومتابعة صحتك🎓 تُمنح شهادات مشاركة لجميع الحضور وذلك يوم : 📅 الاثنين 2 فيفري 2026⏰ إبتداءا من الساعة 10:00 صباحًا📍 المكتبة المركزية – جامعة باتنة 02 -🔻 بإمكان الجميع المشاركة ... كونوا في الموعد 🔥',
        date: '2026-01-29',
        images : ['/images/activity6-1.jpg'],
        likes: 198,
        liked: false,
        rating: 88,
        comments: []
      },
    ]);

    const [newComments, setNewComments] = React.useState({});

    const handleLike = (activityId) => {
      setActivities(activities.map(activity => 
        activity.id === activityId 
          ? { ...activity, liked: !activity.liked, likes: activity.liked ? activity.likes - 1 : activity.likes + 1 }
          : activity
      ));
    };

    const handleAddComment = (activityId) => {
      const comment = newComments[activityId];
      if (comment && comment.trim()) {
        setActivities(activities.map(activity =>
          activity.id === activityId
            ? { ...activity, comments: [...activity.comments, { text: comment, date: new Date().toISOString() }] }
            : activity
        ));
        setNewComments({ ...newComments, [activityId]: '' });
      }
    };

    return (
      <section id="activities" className="py-16 bg-[var(--bg-light)]" data-name="activities" data-file="components/Activities.js">
        <div className="container mx-auto px-4">
          <h2 className="section-title">الأنشطة والفعاليات</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                {activity.images && activity.images.length > 0 && (
  <div className="flex overflow-x-auto gap-2 py-2">
    {activity.images.map((img, idx) => (
      <img
        key={idx}
        src={img}
        alt={activity.title}
        className="w-48 h-32 object-cover rounded-lg flex-shrink-0"
      />
    ))}
  </div>
)}

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                  <p className="text-[var(--text-light)] mb-2">{activity.description}</p>
                  <p className="text-sm text-[var(--text-light)] mb-4">
                    <span className="icon-calendar-days text-lg ml-1"></span>
                    {new Date(activity.date).toLocaleDateString('ar-DZ')}
                  </p>

                  <div className="flex items-center justify-between mb-4 pb-4 border-b">
                    <button
                      onClick={() => handleLike(activity.id)}
                      className={`flex items-center gap-2 ${activity.liked ? 'text-[var(--accent-color)]' : 'text-[var(--text-light)]'}`}
                    >
                      <div className={`icon-heart text-xl ${activity.liked ? 'fill-current' : ''}`}></div>
                      <span>{activity.likes}</span>
                    </button>
                    <div className="flex items-center gap-2">
                      <div className="text-[var(--primary-color)] font-bold">{activity.rating}%</div>
                      <div className="icon-thumbs-up text-xl text-[var(--primary-color)]"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {activity.comments.map((comment, idx) => (
                      <div key={idx} className="bg-gray-50 p-2 rounded text-sm">
                        {comment.text}
                      </div>
                    ))}
                    
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newComments[activity.id] || ''}
                        onChange={(e) => setNewComments({ ...newComments, [activity.id]: e.target.value })}
                        placeholder="أضف تعليقاً..."
                        className="flex-1 border rounded px-3 py-2 text-sm"
                      />
                      <button
                        onClick={() => handleAddComment(activity.id)}
                        className="bg-[var(--primary-color)] text-white px-4 py-2 rounded text-sm hover:bg-[var(--secondary-color)]"
                      >
                        إرسال
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Activities component error:', error);
    return null;
  }
}
