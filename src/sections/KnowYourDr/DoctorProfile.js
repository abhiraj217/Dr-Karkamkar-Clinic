import React, { useEffect } from "react";
import "./DoctorProfile.css";

import doctorImg from "../../assets/about/banner/banner_1.png";

import {
  Stethoscope,
  Activity,
  Bone,
  Award,
  BriefcaseMedical,
  CheckCircle,
  BookOpen,
  Trophy
} from "lucide-react";

const DoctorProfile = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* -------- Specialization Cards -------- */
  const expertise = [
    {
      icon: <Bone size={30} />,
      title: "Shoulder Surgery",
      desc: "Dr. Karkamkar is adept at diagnosing and treating various shoulderconditions,offering both surgical and non-surgical solutions tailored to each patient's needs."
    },
    {
      icon: <Activity size={30} />,
      title: "Knee Surgery",
      desc: "From minimally invasive arthroscopic procedures to complex knee replacements, Dr.Karkamkar provides cutting-edge treatment options designed to restoremobility and alleviate pain."

    },
    {
      icon: <Stethoscope size={30} />,
      title: "Hip Surgery",
      desc: "With a focus on innovative techniques and patient-centered care, Dr.Karkamkar excels in performing hip surgeries, ensuring optimal outcomes and fasterrecovery times."

    },
    {
      icon: <BriefcaseMedical size={30} />,
      title: "Trauma & Emergency Care",
      desc: "Complex trauma, fractures, orthopedic emergencies"
    },
    {
      icon: <Award size={30} />,
      title: "Sports Medicine",
      desc: "Sports injuries, ACL reconstruction, cartilage regeneration"
    }
  ];

  /* -------- Timeline Data (Alternating Cards) -------- */
//   const journey = [
//     {
//       tag: "GRADUATION",
//       title: "MBBS",
//       desc: "D. Y. Patil Medical College, Kolhapur (1995-2001).",
//       align: "left"
//     },
//     {
//       tag: "POSTGRADUATION",
//       title: "M.S. Ortho from Armed Forces Medical College (A.F.M.C.) Pune University (2002-2005).",
//       desc: "This is one of the most premium institute of India ranked second among all medical colleges. ",
//       align: "right"
//     },
//     {
//       tag: "EXPERIENCE",
//       title: "Unit Head in YCM Hospital",
//       desc: " Dr.Karkamkar had vast experience of managing complex and trauma cases individually. ",
//       align: "left"
//     },
//     {
//       tag: "INTERNATIONAL FELLOWSHIPS",
//       title: "Italy • Korea • Germany",
//       desc: "Special interest in sports medicine he further upgraded his knowledge by doing fellowship at national and international centers (Italy , Korea, Germany ). ",
//       align: "right"
//     },
//     {
//       tag: "CONSULTANT",
//       title: "Consultant Orthopedic, Arthroscopic and Arthroplasty surgeon (Since 2007) ",
//       desc: "He also has numerous publications in international and regional journals to his credit.(specialist in joint replacement, Ligament Reconstruction,Cartilage regenerartion ).",
//       align: "left"
//     }
//   ];
const journey = [
  {
    tag: "GRADUATION",
    title: "MBBS",
    desc: "Completed MBBS from D. Y. Patil Medical College, Kolhapur (1995–2001).",
    align: "left"
  },
  {
    tag: "POSTGRADUATION",
    title: "M.S. Orthopaedics – AFMC Pune (2002–2005)",
    desc: "Armed Forces Medical College (AFMC) is one of India’s most prestigious institutions, ranked among the top medical colleges.",
    align: "right"
  },
  {
    tag: "EXPERIENCE",
    title: "Unit Head – YCM Hospital",
    desc: "Gained extensive experience managing complex orthopedic and trauma cases independently.",
    align: "left"
  },
  {
    tag: "INTERNATIONAL FELLOWSHIPS",
    title: "Italy • Korea • Germany",
    desc: "Pursued advanced training in Sports Medicine and Arthroscopy across renowned national and international centers.",
    align: "right"
  },
  {
    tag: "CONSULTANT",
    title: "Consultant Orthopedic, Arthroscopy & Arthroplasty Surgeon (Since 2007)",
    desc: "Specialist in joint replacement, ligament reconstruction, cartilage regeneration, with multiple international publications to his credit.",
    align: "left"
  }
];

  /* -------- Fellowships -------- */
  const fellowships = [
    "Joint Replacement Surgery – Deenanath Mangeshkar Hospital (2006)",
    "Sports Medicine & Arthroscopy – Hyderabad (2007)",
    "Sports Medicine & Arthroscopy – Rizzoli Institute, Italy (2008)",
    "Shoulder Arthroscopy & Arthroplasty – Italy (2012)",
    "Visiting Surgeon – Shoulder Speciality, South Korea (2017)",
    "Clinical Fellowship in Trauma – Kiel, Germany (2017)"
  ];

  /* -------- Achievements -------- */
  const achievements = [
    "1st Rank – AFMC National Level PG Entrance Exam",
    "Padmashree Dr. K H Sancheti Gold Medal – 1st Rank in M.S. Orthopaedics (2005)",
    "Col K D Khare Award – Highest marks in AFMC MS Ortho Exam"
  ];

  /* -------- Memberships -------- */
  const memberships = [
    "Maharashtra Medical Council",
    "Indian Arthroscopy Society",
    "Poona Orthopaedic Society",
    "Bombay Orthopaedic Society",
    "Indian Foot & Ankle Society",
    "Indian Shoulder & Elbow Society",
    "Indian Medical Association",
    "AO Trauma – Switzerland"
  ];

  /* -------- Publications -------- */
  const publications = [
    "Simple Technique for Correction of Neglected congenital Hallux Varus deformity: Techniques in Foot and Ankle Surgery Journal: 13(3):158-166, September 2014",
    "Posteromedial Tibial Plateau Fracture fixation with Antiglide Plate using posteromedial supine approach : A series of 21 patients: The Journal of Maharashtra Orthopaedic Association: 2014:9(2):6-11",
    " Management of Finger Tip Injuries with Modified Dorsal Tension Band Suture Technique: A series of 288 fingertip injuries: Journal of MOA:Accepted for publication",
    "Use of reverse distal femoral LCP in proximal femoral fractures - a salvage option: Indian Journal of Orthopaedics: under review"
  ];

  return (
    <section className="doctorProfileSection">

      {/* ==================== HERO SECTION ==================== */}
      <div className="doctorHero container">
        <div className="doctorText" data-aos="fade-right">
          <span className="heroLabel">KNOW YOUR DOCTOR</span>

          <h1 className="doctorName">Dr. Sachin Karkamkar</h1>

          <p className="doctorDesignation">
            Senior Consultant Orthopedic Surgeon & Arthroscopy Specialist
          </p>

          <div className="credentialsRow">
            <span className="credential">MBBS</span>
            <span className="credential">M.S. (Orthopedic)</span>
            <span className="credential">ISAKOS Fellow – Italy & Germany</span>
          </div>

          <p className="doctorIntro">
            Dr. Sachin Karkamkar, a highly respected and accomplished Senior Consultant Orthopedic Surgeon in
            Hadapsar Pune. With a remarkable career dedicated to the field of orthopedics, Dr. Karkamkar is
            recognized for his expertise in shoulder, knee, and hip surgeries.
          </p>
        </div>

        <div className="doctorImageWrapper" data-aos="fade-left">
          <img src={doctorImg} className="doctorImg" alt="Dr Sachin Karkamkar" />
          <div className="imageDecoration"></div>
        </div>
      </div>

      {/* ==================== SPECIALIZATION ==================== */}
      <div className="container mt-80">
        <h2 className="sectionTitle">Areas of Specialization</h2>

        <div className="expertiseGrid">
          {expertise.map((item, index) => (
            <div className="expertiseCard" key={index}
            data-aos="fade-up"
            data-aos-delay={index * 120}
            >
              <div className="expertiseIcon">{item.icon}</div>
              <h3 className="expertiseTitle">{item.title}</h3>
              <p className="expertiseDesc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* // add this near the top of the file if CheckCircle isn't already imported: */}


{/* ==================== SPECIAL EXPERTISE (NEW UI) ==================== */}
<div className="container mt-80" data-aos="fade-up">
  <h2 className="sectionTitle">Special Expertise</h2>

  <div className="specialExpertise">
    <div className="expertiseItem" data-aos="fade-up" data-aos-delay="50">
      <div className="expertiseIcon"><CheckCircle size={20} /></div>
      <div className="expertiseBody">
        <h4>Knee, Hip & Shoulder Replacement</h4>
        <p>Comprehensive joint replacement surgery with modern implants and fast-recovery protocols.</p>
      </div>
    </div>

    <div className="expertiseItem" data-aos="fade-up" data-aos-delay="120">
      <div className="expertiseIcon"><CheckCircle size={20} /></div>
      <div className="expertiseBody">
        <h4>Shoulder Arthroscopy</h4>
        <p>Dislocation management and rotator cuff repairs using minimally invasive arthroscopic techniques.</p>
      </div>
    </div>

    <div className="expertiseItem" data-aos="fade-up" data-aos-delay="190">
      <div className="expertiseIcon"><CheckCircle size={20} /></div>
      <div className="expertiseBody">
        <h4>Knee Arthroscopy</h4>
        <p>Ligament & meniscus repairs plus cartilage procedures for durable restoration of function.</p>
      </div>
    </div>

    <div className="expertiseItem" data-aos="fade-up" data-aos-delay="260">
      <div className="expertiseIcon"><CheckCircle size={20} /></div>
      <div className="expertiseBody">
        <h4>Complex Trauma & Hip Fractures</h4>
        <p>Management of complex trauma and peri-articular fractures with evidence-based protocols.</p>
      </div>
    </div>
  </div>
</div>


      {/* ==================== PROFESSIONAL JOURNEY (TIMELINE) ==================== */}
      <div className="doctor-journey-section container mt-80">
        <h2 className="sectionTitle">Professional Journey</h2>

        <div className="journey-timeline">

            {journey.map((j, i) => (
            <React.Fragment key={i}>
                <div
                className={`journey-item ${j.align}`}
                data-aos={j.align === "left" ? "fade-right" : "fade-left"}
                data-aos-delay={i * 150}
                >
                <div className="journey-card">
                    <span className="journey-tag">{j.tag}</span>
                    <h3 className="journey-title">{j.title}</h3>
                    <p className="journey-desc">{j.desc}</p>
                </div>
                </div>

                <div className="journey-dot"></div>
            </React.Fragment>
            ))}


        </div>
      </div>

      {/* ==================== FELLOWSHIPS ==================== */}
        <div className="container mt-80">
        <h2 className="sectionTitle">Fellowships</h2>

        <div className="infoCardGrid">
            {fellowships.map((item, index) => (
            <div
                className="infoCard"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 120}
            >
                <CheckCircle size={22} className="infoIcon" />
                <p>{item}</p>
            </div>
            ))}
        </div>
        </div>


      {/* ==================== ACHIEVEMENTS ==================== */}
        <div className="container mt-80">
        <h2 className="sectionTitle">Honors & Achievements</h2>

        <div className="infoCardGrid">
            {achievements.map((item, index) => (
            <div
                className="infoCard"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 120}
            >
                <Trophy size={22} className="infoIcon" />
                <p>{item}</p>
            </div>
            ))}
        </div>
        </div>


      {/* ==================== MEMBERSHIPS ==================== */}
        <div className="container mt-80">
        <h2 className="sectionTitle">Memberships</h2>

        <div className="membershipBadgeGrid">
            {memberships.map((m, index) => (
            <div
                key={index}
                className="membershipBadge"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
            >
                {m}
            </div>
            ))}
        </div>
        </div>


      {/* ==================== PUBLICATIONS ==================== */}
        <div className="container mt-80 mb-80">
        <h2 className="sectionTitle">Publications</h2>

        <div className="infoCardGrid">
            {publications.map((item, index) => (
            <div
                className="infoCard"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
            >
                <BookOpen size={22} className="infoIcon" />
                <p>{item}</p>
            </div>
            ))}
        </div>
        </div>


    </section>
  );
};

export default DoctorProfile;
