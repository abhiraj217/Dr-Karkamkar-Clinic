
import "./Services.css";
import  servicesData from "../Services/ServiceData";


const Services = () => {
 

  return (
    <section
      id="service-section"
      className="service-section pt-100 pb-70"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
       <div className="container">
        {/* Left-aligned heading */}
        <div className="service-header">
          <p className="service-subtitle">OUR SERVICES</p>
          <h2 className="service-title">
            We provide advanced orthopedic treatments and care
          </h2>
        </div>

        {/* Grid with fixed rows */}
      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-image-wrapper">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="know-more-btn">Know More</button>
            </div>
          </div>
        ))}
      </div>

      </div>
    </section>
  );
};

export default Services;