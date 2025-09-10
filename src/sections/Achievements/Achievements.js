import React, { useEffect, useRef, useState } from 'react';
import './Achievements.css';

const Achievements = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  
  // Initial and target values for counters
  const counters = [
    { id: 1, start: 5, end: 2000, duration: 2000, suffix: '+', label: 'Happy', sublabel: 'Patients' },
    { id: 3, start: 5, end: 1252, duration: 2500, suffix: '+', label: 'Patients', sublabel: 'Operated' },
    { id: 2, start: 5, end: 20, duration: 1500, suffix: '+', label: 'Years', sublabel: 'of Experience' },
  ];

  // Values to display during animation
  const [counterValues, setCounterValues] = useState(counters.map(counter => 0));

  useEffect(() => {
    // Set up Intersection Observer to detect when section is in view
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !animate) {
        setAnimate(true);
      }
    }, { threshold: 0.2 }); // Trigger when 20% of the section is visible

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animate]);

  useEffect(() => {
    // Start the counter animation when animate is true
    if (animate) {
      counters.forEach((counter, index) => {
        const startTime = Date.now();
        const endTime = startTime + counter.duration;
        
        const updateCounter = () => {
          const currentTime = Date.now();
          
          if (currentTime >= endTime) {
            // Animation complete
            setCounterValues(prev => {
              const newValues = [...prev];
              newValues[index] = counter.end;
              return newValues;
            });
            return;
          }
          
          // Calculate current value based on time elapsed
          const elapsedTime = currentTime - startTime;
          const progress = elapsedTime / counter.duration;
          const currentValue = Math.floor(counter.start + (counter.end - counter.start) * progress);
          
          setCounterValues(prev => {
            const newValues = [...prev];
            newValues[index] = currentValue;
            return newValues;
          });
          
          // Continue animation
          requestAnimationFrame(updateCounter);
        };
        
        requestAnimationFrame(updateCounter);
      });
    }
  }, [animate]);

  return (
    <section 
      id="achievements"
      className="achievements-section common-padding"
      data-aos="fade-up"
      data-aos-duration="2000"
      ref={sectionRef}
    >
      <div className='container achieve-container'>
        <div className='section-title'>
          <span>Our Achievements</span>
          <h2>Please look at our Achievements!</h2>
        </div>
        <div className='achieve-div'>
          {counters.map((counter, index) => (
            <div className='achieve-inner-div' key={counter.id}>
              <h3 className="counter-number">{counterValues[index]}{counter.suffix}</h3>
              <p><span>{counter.label}</span> {counter.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;