import React, { useState, useEffect } from "react";
import "./PhotoGallery.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import imgone from "../../assets/photoGalleryPics/ex3.jpg";
import imgtwo from "../../assets/photoGalleryPics/0120.jpg";
import imgthree from "../../assets/photoGalleryPics/radio1.jpg";
import imgfour from "../../assets/photoGalleryPics/ex4.jpg";
import imgfive from "../../assets/photoGalleryPics/ex2.jpg";
import imgsix from "../../assets/photoGalleryPics/0121.jpg";
import imgseven from "../../assets/photoGalleryPics/radio2.jpg";
import imgeight from "../../assets/photoGalleryPics/ex6.jpg";
import beforeImg from "../../assets/beforeAfterImages/beforePic.jpg";   
import afterImg from "../../assets/beforeAfterImages/afterPic.jpg";
import patientBeforeImg from "../../assets/beforeAfterImages/patientBeforePic.jpg";
import patientAfterImg from "../../assets/beforeAfterImages/patientafterPic.jpg";
import jawBeforeImg from "../../assets/beforeAfterImages/jawBeforeImg.jpg";
import jawafterImg from "../../assets/beforeAfterImages/jawAfterIg.jpg"

const PhotoGallery = () => {
  const [isPhotoVisible, setPhotosVisible] = useState(false);

  const togglePics = () => {
    setPhotosVisible(!isPhotoVisible);
  };

  // Reset carousel to first slide when dropdown opens
  useEffect(() => {
    if (isPhotoVisible) {
      const carousel = document.querySelector('#carouselExampleControls');
      if (carousel && window.bootstrap) {
        const bsCarousel = window.bootstrap.Carousel.getInstance(carousel) || 
                          new window.bootstrap.Carousel(carousel);
        bsCarousel.to(0); // Go to first slide (index 0)
      }
    }
  }, [isPhotoVisible]);

  return (
    <section className="photo-collage">
      <div className="show-more">
        <button className="btn btn-primary show-more-btn" onClick={togglePics}>
          {"OUR RESULTS"}
          <i
            className={`bi ${
              isPhotoVisible ? "bi-chevron-up" : "bi-chevron-down"
            }`}
          ></i>
        </button>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className={`photo-container ${isPhotoVisible ? "show" : "hide"}`}
            >
              <div className="upper-photos">
                <figure className="food-pics">
                  <div className="image-label before">BEFORE</div>
                  <img src={afterImg} alt="food-pic" className="food-img" />
                </figure>
                <figure className="food-pics">
                  <div className="image-label before">BEFORE</div>
                  <img src={patientBeforeImg} alt="food-pic" className="food-img" />
                </figure>
                <figure className="food-pics">
                  <img src={jawBeforeImg} alt="food-pic" className="food-img" />
                </figure>
                <figure className="food-pics">
                  <div className="image-label before">BEFORE</div>
                  <img src={imgfour} alt="food-pic" className="food-img" />
                </figure>
              </div>

              <div className="lower-photos">
                <figure className="food-pics">
                  <div className="image-label after">AFTER</div>
                  <img src={beforeImg} alt="food-pic" className="food-img" />
                </figure>
                <figure className="food-pics">
                  <div className="image-label after">AFTER</div>
                  <img src={patientAfterImg} alt="food-pic" className="food-img" />
                </figure>
                <figure className="food-pics">
                  <img src={jawafterImg} alt="food-pic" className="food-img" />
                </figure>
                <figure className="food-pics">
                  <div className="image-label after">AFTER</div>
                  <img src={imgeight} alt="food-pic" className="food-img" />
                </figure>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div
              className={`photo-container ${isPhotoVisible ? "show" : "hide"}`}
            >
              <div className="upper-photos">
                <figure className="food-pics">
                  <div className="image-label before">BEFORE</div>
                  <img src={imgone} alt="food-pic" className="food-img" />
                </figure>
                <figure className="food-pics">
                  <div className="image-label before">BEFORE</div>
                  <img src={imgtwo} alt="food-pic" className="food-img" />
                </figure>
                <figure className="food-pics">
                  <div className="image-label before">BEFORE</div>
                  <img src={imgthree} alt="food-pic" className="food-img" />
                </figure>
                <figure className="food-pics">
                  <div className="image-label before">BEFORE</div>
                  <img src={imgfour} alt="food-pic" className="food-img" />
                </figure>
              </div>
              <div className="lower-photos">
                <figure className="food-pics">
                  <div className="image-label after">AFTER</div>
                  <img src={imgfive} alt="food-pic" className="food-img" />
                </figure>
                <figure className="food-pics">
                  <div className="image-label after">AFTER</div>
                  <img src={imgsix} alt="food-pic" className="food-img" />
                </figure>
                <figure className="food-pics">
                  <div className="image-label after">AFTER</div>
                  <img src={imgseven} alt="food-pic" className="food-img" />
                </figure>
                <figure className="food-pics">
                  <div className="image-label after">AFTER</div>
                  <img src={imgeight} alt="food-pic" className="food-img" />
                </figure>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div
              className={`photo-container ${isPhotoVisible ? "show" : "hide"}`}
            >
              <div className="upper-photos">
                <figure className="food-pics">
                  <div className="image-label before">BEFORE</div>
                  <img src={imgone} alt="food-pic" className="food-img" />
                </figure>
                <figure className="food-pics">
                  <div className="image-label before">BEFORE</div>
                  <img src={imgtwo} alt="food-pic" className="food-img" />
                </figure>
                <figure className="food-pics">
                  <div className="image-label before">BEFORE</div>
                  <img src={imgthree} alt="food-pic" className="food-img" />
                </figure>
                <figure className="food-pics">
                  <div className="image-label before">BEFORE</div>
                  <img src={imgfour} alt="food-pic" className="food-img" />
                </figure>
              </div>
              <div className="lower-photos">
                <figure className="food-pics">
                  <div className="image-label after">AFTER</div>
                  <img src={imgfive} alt="food-pic" className="food-img" />
                </figure>
                <figure className="food-pics">
                  <div className="image-label after">AFTER</div>
                  <img src={imgsix} alt="food-pic" className="food-img" />
                </figure>
                <figure className="food-pics">
                  <div className="image-label after">AFTER</div>
                  <img src={imgseven} alt="food-pic" className="food-img" />
                </figure>
                <figure className="food-pics">
                  <div className="image-label after">AFTER</div>
                  <img src={imgeight} alt="food-pic" className="food-img" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default PhotoGallery;