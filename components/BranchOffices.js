function BranchOffices() {
  try {
    const [expandedCollege, setExpandedCollege] = React.useState(null);
    const [expandedDorm, setExpandedDorm] = React.useState(null);

    const toggleCollege = (key) => {
      setExpandedCollege(expandedCollege === key ? null : key);
    };

    const toggleDorm = (key) => {
      setExpandedDorm(expandedDorm === key ? null : key);
    };

    const branches = [
      {
        id: "college-infomath",
        name: "كلية الإعلام الآلي والرياضيات",
        icon: "cpu",
        president: {
          name: "دادة أحمد عبد الرحيم  ",
          phone: "+213 555 200 001",
          image: "images/preinfo.jpg"
        }
      },
      {
        id: "college-st",
        name: "كلية العلوم والتكنولوجيا",
        icon: "flask-conical",
        president: {
          name: "بلحابس إسلام  ",
          phone: "+213 555 200 003",
          image: "images/prest.jpg"
        }
      },
      {
        id: "college-biology",
        name: "كلية علوم الطبيعة والحياة",
        icon: "sprout",
        president: {
          name: "بوراس ناهد  ",
          phone: "+213 555 200 005",
          image: "images/fille.png"
        }
      },
      {
        id: "college-security",
        name: "معهد الوقاية والأمن الصناعي",
        icon: "shield-check",
        president: {
          name: " دحماني خالد ",
          phone: "+213 555 200 007",
          image: "images/prehse.jpg"
        }
      },
      
       {
        id: "college-staps",
        name: "معهد علوم وتقنيات النشاطات البدنية والرياضية    ",
        icon: "shield-check",
        president: {
          name: " نموشي فايز",
          phone: "+213 555 200 007",
          image: "images/prestaps.jpg"
        }
      },
      
      {
        id: "college-languages",
        name: "كلية اللغات",
        icon: "languages",
        president: {
          name: "العايب بسملة ",
         
          image: "images/fille.png"
        }
      },
      {
        id: "college-geoscience",
        name: "كلية علوم الأرض والكون",
        icon: "globe",
        president: {
          name: "عيشي باسم ",
          phone: "+213 555 200 011",
          image: "images/pregeo.png"
        }
      },

      // الإقامات
      {
        id: "dorm-fesdis1-m",
        name: "الإقامة فيسديس 1 ذكور",
        icon: "building",
        president: {
          name: "بلفراق عبد المومن  ",
          phone: "+213 656 044 637",
          image: "images/fes1.jpg"
        }
      },
      {
        id: "dorm-fesdis2-f",
        name: "الإقامة فيسديس 2 إناث",
        icon: "building-2",
        president: {
          name: "علول مروة  ",

          image: "images/fille.png"
        }
      },
      {
        id: "dorm-fesdis3-m",
        name: "الإقامة فيسديس 3 ذكور",
        icon: "building",
        president: {
          name: "رئيس المكتب",
          phone: "+213 555 200 017",
          image: "images/fes3.png"
        }
      },
      {
        id: "dorm-fesdis4-m",
        name: "الإقامة فيسديس 4 ذكور",
        icon: "building",
        president: {
          name: "ايوب  ",
          phone: "+213 555 200 019",
          image: "images/fes4.jpg"
        }
      },
      {
        id: "dorm-fesdis5-f",
        name: "الإقامة فيسديس 5 إناث",
        icon: "building-2",
        president: {
          name: "بوراس ناهد ",
          phone: "+213 555 200 021",
          image: "images/fille.png"
        }
      },
      {
        id: "dorm-fesdis6-f",
        name: "الإقامة فيسديس 6 إناث",
        icon: "building-2",
        president: {
          name: "سندس  ",
          phone: "+213 555 200 023",
          image: "images/fille.png"
        }
      }
    ];

    return (
      <section id="branches" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">المكاتب الفرعية</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            
            {/* الكليات والمعاهد */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-[var(--primary-color)]">
                الكليات والمعاهد
              </h3>
              <div className="space-y-3">
                {branches
                  .filter(b => b.icon !== "building" && b.icon !== "building-2")
                  .map(branch => (
                    <div key={branch.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between p-4"
                        onClick={() => toggleCollege(branch.id)}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <div className={`icon-${branch.icon} text-2xl text-[var(--primary-color)]`}></div>
                          </div>
                          <h3 className="text-base font-bold">{branch.name}</h3>
                        </div>
                        <div className={`icon-chevron-down text-xl transition-transform ${
                            expandedCollege === branch.id ? "rotate-180" : ""
                        }`}></div>
                      </button>

                      {expandedCollege === branch.id && (
                        <div className="px-6 pb-6 pt-2 border-t">
                          <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                            <img
                              src={branch.president.image}
                              className="w-28 h-28 rounded-full border-4 border-[var(--primary-color)] mb-3"
                            />
                            <h4 className="font-bold text-lg">{branch.president.name}</h4>
                            <p className="text-[var(--primary-color)] font-semibold">الرئيس</p>
                            <p className="text-sm text-[var(--text-light)] mt-1">
                              {branch.president.phone}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>

            {/* الإقامات الجامعية */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-[var(--primary-color)]">
                الإقامات الجامعية
              </h3>
              <div className="space-y-3">
                {branches
                  .filter(b => b.icon === "building" || b.icon === "building-2")
                  .map(branch => (
                    <div key={branch.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between p-4"
                        onClick={() => toggleDorm(branch.id)}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <div className={`icon-${branch.icon} text-2xl text-[var(--primary-color)]`}></div>
                          </div>
                          <h3 className="text-base font-bold">{branch.name}</h3>
                        </div>
                        <div className={`icon-chevron-down text-xl transition-transform ${
                            expandedDorm === branch.id ? "rotate-180" : ""
                        }`}></div>
                      </button>

                      {expandedDorm === branch.id && (
                        <div className="px-6 pb-6 pt-2 border-t">
                          <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                            <img
                              src={branch.president.image}
                              className="w-28 h-28 rounded-full border-4 border-[var(--primary-color)] mb-3"
                            />
                            <h4 className="font-bold text-lg">{branch.president.name}</h4>
                            <p className="text-[var(--primary-color)] font-semibold">الرئيس</p>
                            <p className="text-sm text-[var(--text-light)] mt-1">
                              {branch.president.phone}
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
    );
  } catch (error) {
    console.error("BranchOffices component error:", error);
    return null;
  }
}
