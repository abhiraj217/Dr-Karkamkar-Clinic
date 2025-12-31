 import kneeImage from '../../assets/banner/hipJoinImage.jpg';
import shoulderImg from '../../assets/banner/legjointImage.jpg';
import legJointImg from '../../assets/banner/skulljointImage.jpg';
import traumaImg from '../../assets/banner/jointxrayImage.jpg';
import sportsFootabaall from '../../assets/banner/footaballlimage.jpg';

 const servicesData = [
    {
      id: 1,
      title: "Knee Treatment",
      description: "We provide comprehensive care for knee injuries, arthritis, and joint replacements. Our specialists focus on restoring strength, mobility, and long-term comfort with advanced surgical and non-surgical techniques.",
      image: shoulderImg,
      path:"/services/knee-replacement"
    },
    {
      id: 2,
      title: "Shoulder Treatment",
      description: "Expert diagnosis and treatment for shoulder dislocations, rotator cuff injuries, and chronic pain. We use modern therapies and procedures to help you regain full motion and prevent future complications.",
      image: kneeImage,
      path:"/services/shoulder-replacement"
    },
    {
      id: 3,
      title: "Hip Treatment",
      description: "Our hip care program includes advanced procedures for fractures, arthritis, and replacements. We emphasize personalized treatment plans to relieve pain, restore function, and enhance overall quality of life.",
      image: legJointImg,
      path:"/services/hip-replacement"
    },
    {
      id: 4,
      title: "Trauma Care",
      description: "We provide emergency and long-term trauma care solutions, from fractures and joint injuries to complex orthopedic trauma cases. Our team ensures safe recovery with immediate attention and structured follow-up plans.",
      image: traumaImg,
      path:"/services/trauma"
    },
    {
      id: 5,
      title: "Sports Medicine",
      description: "Specialized care for sports-related injuries such as ligament tears, tendon damage, and overuse injuries. Our goal is to get athletes back to peak performance with safe, effective, and faster recovery methods.",
      image: sportsFootabaall,
      path:"/services/sports"
    },
  ];

  export default servicesData;