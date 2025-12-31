
import "./Services.css";
import  servicesData from "../Services/ServiceData";
import { useNavigate } from "react-router-dom";


const Services = () => {
  const navigate = useNavigate();

  return (
    <section
      id="service-section"
      className="service-section pt-100 pb-70"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="container">

        <div className="service-header">
          <p className="service-subtitle">OUR SERVICES</p>
          <h2 className="service-title">
            We provide advanced orthopedic treatments and care
          </h2>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <button
                  className="know-more-btn"
                  onClick={() => navigate(service.path)}
                >
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


export default Services;