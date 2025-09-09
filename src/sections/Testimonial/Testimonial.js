import React from "react";
import "./Testimonial.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import TestimoniCard from "../../components/TestimoniCard/TestimoniCard";
import Slider from "react-slick";

const Testimonial = () => {
    const testimonails = [
        {
            title: "Ivory Multi-speciality Dental Clinic",
            url: "https://www.google.com/maps/search/?api=1&query=Ivory%20Multi-speciality%20Dental%20Clinic&query_place_id=ChIJ5TzFP-LBwjsRZPXPAReMS_U",
            stars: 5,
            name: "Op",
            reviewUrl:
                "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTURnODVpWFJ3EAE!2m1!1s0x0:0xf54b8c1701cff564!3m1!1s2@1:CIHM0ogKEICAgMDg85iXRw%7CCgwIy-KAvgYQiLySxQI%7C?hl=en",
            text: "I got two caps fitted at the clinic, and the doctors were amazing—friendly, professional, and honest with their recommendations. Highly recommend a visit!",
        },
        {
            title: "Ivory Multi-speciality Dental Clinic",
            url: "https://www.google.com/maps/search/?api=1&query=Ivory%20Multi-speciality%20Dental%20Clinic&query_place_id=ChIJ5TzFP-LBwjsRZPXPAReMS_U",
            stars: 5,
            name: "Ramlakhan Ramlakhan",
            reviewUrl:
                "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTUNnakxqQkdREAE!2m1!1s0x0:0xf54b8c1701cff564!3m1!1s2@1:CIHM0ogKEICAgMCgjLjBGQ%7CCgwI-Py9vQYQyLONlwI%7C?hl=en",
            text: "Exceptional care . Best doctors Dr rahul and simran . Spotless clinic . Highly recommended!!",
        },
        {
            title: "Ivory Multi-speciality Dental Clinic",
            url: "https://www.google.com/maps/search/?api=1&query=Ivory%20Multi-speciality%20Dental%20Clinic&query_place_id=ChIJ5TzFP-LBwjsRZPXPAReMS_U",
            stars: 5,
            name: "Ayushi Chougule",
            reviewUrl:
                "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTURBN1o3ZGhRRRAB!2m1!1s0x0:0xf54b8c1701cff564!3m1!1s2@1:CIHM0ogKEICAgMDA7Z7dhQE%7CCgwIu8CrvQYQ0J208gI%7C?hl=en",
            text: "Had an excellent experience at Ivory Dental Clinic.\nDr. Rahul and Dr. Simran are highly skilled and knowledgeable, taking the time to explain each procedure in detail.\nI highly recommend Ivory Dental Clinic to anyone looking for expert dental care.",
        },
        {
            title: "Ivory Multi-speciality Dental Clinic",
            url: "https://www.google.com/maps/search/?api=1&query=Ivory%20Multi-speciality%20Dental%20Clinic&query_place_id=ChIJ5TzFP-LBwjsRZPXPAReMS_U",
            stars: 5,
            name: "pratik jagtap",
            reviewUrl:
                "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTURBdW9QZm53RRAB!2m1!1s0x0:0xf54b8c1701cff564!3m1!1s2@1:CIHM0ogKEICAgMDAuoPfnwE%7CCgsItfWcvQYQ6JmJeA%7C?hl=en",
            text: null,
        },
        {
            title: "Ivory Multi-speciality Dental Clinic",
            url: "https://www.google.com/maps/search/?api=1&query=Ivory%20Multi-speciality%20Dental%20Clinic&query_place_id=ChIJ5TzFP-LBwjsRZPXPAReMS_U",
            stars: 4,
            name: "Kritika Agrawal",
            reviewUrl:
                "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTURBM0lxYkJnEAE!2m1!1s0x0:0xf54b8c1701cff564!3m1!1s2@1:CIHM0ogKEICAgMDA3IqbBg%7CCgwI8bOYvQYQkLKo0QI%7C?hl=en",
            text: "Pretty good ! The doctors are kind and did the treatment really well.",
        },
        {
            title: "Ivory Multi-speciality Dental Clinic",
            url: "https://www.google.com/maps/search/?api=1&query=Ivory%20Multi-speciality%20Dental%20Clinic&query_place_id=ChIJ5TzFP-LBwjsRZPXPAReMS_U",
            stars: 5,
            name: "Pradnya Godbole",
            reviewUrl:
                "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTUNBMjZlOGlnRRAB!2m1!1s0x0:0xf54b8c1701cff564!3m1!1s2@1:CIHM0ogKEICAgMCA26e8igE%7CCgwIkICJvQYQuM-PzQM%7C?hl=en",
            text: "Recently, my 10 yrs old son had dental treatment here. Thorough information was given about the treatment. It was the best dental experience I've ever had. Thank you Doctor!",
        },
        {
            title: "Ivory Multi-speciality Dental Clinic",
            url: "https://www.google.com/maps/search/?api=1&query=Ivory%20Multi-speciality%20Dental%20Clinic&query_place_id=ChIJ5TzFP-LBwjsRZPXPAReMS_U",
            stars: 5,
            name: "Varun Kumar",
            reviewUrl:
                "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTUNBMl9LeWd3RRAB!2m1!1s0x0:0xf54b8c1701cff564!3m1!1s2@1:CIHM0ogKEICAgMCA2_KygwE%7CCgwIjOSIvQYQyLfcmAI%7C?hl=en",
            text: "Overall, my experience with Dr. Simran Singh and Dr. Rahul was exceptional. They took the time to explain the procedures I needed and addressed any concerns I had. Their combination of excellent treatment and outstanding hospitality truly sets them apart. If you're looking for a dentist who prioritizes patient care and comfort, look no further than their practice. I will definitely be returning for my future dental needs!",
        },
        {
            title: "Ivory Multi-speciality Dental Clinic",
            url: "https://www.google.com/maps/search/?api=1&query=Ivory%20Multi-speciality%20Dental%20Clinic&query_place_id=ChIJ5TzFP-LBwjsRZPXPAReMS_U",
            stars: 5,
            name: "Piyush Nindane",
            reviewUrl:
                "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTUNBN2VqcU9BEAE!2m1!1s0x0:0xf54b8c1701cff564!3m1!1s2@1:CIHM0ogKEICAgMCA7ejqOA%7CCgwIhOmBvQYQ6Pvs0QM%7C?hl=en",
            text: "Best consultation and treatment, Dr Rahul and Dr Simran are very cooperative and flexible and always willing to listen and address the concerns.",
        },
        {
            title: "Ivory Multi-speciality Dental Clinic",
            url: "https://www.google.com/maps/search/?api=1&query=Ivory%20Multi-speciality%20Dental%20Clinic&query_place_id=ChIJ5TzFP-LBwjsRZPXPAReMS_U",
            stars: 5,
            name: "ARJUN VYAS AV",
            reviewUrl:
                "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTUNBcmU2SVpnEAE!2m1!1s0x0:0xf54b8c1701cff564!3m1!1s2@1:CIHM0ogKEICAgMCAre6IZg%7CCgwIxciBvQYQkNrVhgI%7C?hl=en",
            text: "I recently visited and I had an excellent experience. The staff was friendly, professional, and made me feel comfortable from the moment I walked in ,explaining each step of the procedure clearly and answering all my questions patiently. The clinic was clean, well-organized, and equipped with modern technology, which made the process smooth and efficient.",
        },
        {
            title: "Ivory Multi-speciality Dental Clinic",
            url: "https://www.google.com/maps/search/?api=1&query=Ivory%20Multi-speciality%20Dental%20Clinic&query_place_id=ChIJ5TzFP-LBwjsRZPXPAReMS_U",
            stars: 5,
            name: "Sneha Jadhav",
            reviewUrl:
                "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTUNBeGNQM2tRRRAB!2m1!1s0x0:0xf54b8c1701cff564!3m1!1s2@1:CIHM0ogKEICAgMCAxcP3kQE%7CCgwIiJL-vAYQgL3llwI%7C?hl=en",
            text: "The doctors were very helpful. They conducted my cap fitting procedure and it went quite well. The service at the clinic is really good.",
        },
        {
            title: "Ivory Multi-speciality Dental Clinic",
            url: "https://www.google.com/maps/search/?api=1&query=Ivory%20Multi-speciality%20Dental%20Clinic&query_place_id=ChIJ5TzFP-LBwjsRZPXPAReMS_U",
            stars: 5,
            name: "Abhiraj Deshpande",
            reviewUrl:
                "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNfLTctX0hBEAE!2m1!1s0x0:0xf54b8c1701cff564!3m1!1s2@1:CIHM0ogKEICAgIC_-7-_HA%7CCgwIjbizvAYQwO7uygM%7C?hl=en",
            text: 'I recently had a root canal done by Dr. Rahul and Dr. Simran I am extremely impressed with the entire experience. From start to finish, Dr. Rahul explained every step of the procedure in detail, making sure I fully understood everything. The process was completely painless, and I felt very comfortable throughout. Both the doctors are not only highly skilled but also kind and patient, making me feel at ease during the treatment. I highly recommend this clinic for anyone in need of dental care. Thank you, Dr. Rahul and Dr. Simran for your excellent work!"',
        },
        {
            title: "Ivory Multi-speciality Dental Clinic",
            url: "https://www.google.com/maps/search/?api=1&query=Ivory%20Multi-speciality%20Dental%20Clinic&query_place_id=ChIJ5TzFP-LBwjsRZPXPAReMS_U",
            stars: 5,
            name: "Shashwati Pawar",
            reviewUrl:
                "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNmczd6cTd3RRAB!2m1!1s0x0:0xf54b8c1701cff564!3m1!1s2@1:CIHM0ogKEICAgICfs7zq7wE%7CCgwIzb7UuwYQwOaMugE%7C?hl=en",
            text: "I had a good experience of visiting Ivory dental clinic. Dr. Simran & Rahul is very professional and knowledgeable. They are one of the rarest to have found out the cause of my dental issue. They also took the time to thoroughly explain the procedure and answer all of my questions, which made me well-informed. During the treatment, they was gentle and attentive, ensuring that I felt no discomfort.\nThe entire process was quick and efficient. What really stood out to me was the emphasis on patient comfort and the high level of expertise. I appreciate there following up on appointments and call overs. I highly recommend Ivory Dental Clinic.",
        },
        {
            title: "Ivory Multi-speciality Dental Clinic",
            url: "https://www.google.com/maps/search/?api=1&query=Ivory%20Multi-speciality%20Dental%20Clinic&query_place_id=ChIJ5TzFP-LBwjsRZPXPAReMS_U",
            stars: 5,
            name: "Priya Ledwani",
            reviewUrl:
                "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUN2ODRPYTV3RRAB!2m1!1s0x0:0xf54b8c1701cff564!3m1!1s2@1:CIHM0ogKEICAgICv84Oa5wE%7CCgwI-bH2ugYQwILr3QE%7C?hl=en",
            text: 'I’ve had an outstanding experience at ivory clinic.  Dr.simran and Dr.rahul not only highly skilled but also takes the time to explain procedures, ensuring I feel comfortable and informed. I always receive top-notch care. I highly recommend this clinic for anyone looking for professional, compassionate, and efficient dental care."',
        },
        {
            title: "Ivory Multi-speciality Dental Clinic",
            url: "https://www.google.com/maps/search/?api=1&query=Ivory%20Multi-speciality%20Dental%20Clinic&query_place_id=ChIJ5TzFP-LBwjsRZPXPAReMS_U",
            stars: 5,
            name: "akhilesh kelkar",
            reviewUrl:
                "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUQzcjRiNlhBEAE!2m1!1s0x0:0xf54b8c1701cff564!3m1!1s2@1:CIHM0ogKEICAgID3r4b6XA%7CCgwI6ZD2uQYQwLPQowM%7C?hl=en",
            text: "I highly recommend Dr.Simran Singh and Dr. Rahul for dental treatments! My experience with them was seamless. I am completely satisfied with the treatment. I will refer to others for dental treatment.",
        },
        {
            title: "Ivory Multi-speciality Dental Clinic",
            url: "https://www.google.com/maps/search/?api=1&query=Ivory%20Multi-speciality%20Dental%20Clinic&query_place_id=ChIJ5TzFP-LBwjsRZPXPAReMS_U",
            stars: 5,
            name: "Shreya Joshi",
            reviewUrl:
                "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNYbjVqbXhRRRAB!2m1!1s0x0:0xf54b8c1701cff564!3m1!1s2@1:CIHM0ogKEICAgICXn5jmxQE%7CCgwIyK7duAYQiKK5sAE%7C?hl=en",
            text: null,
        },
    ];

    // slider
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section
            id="testimonial-section"
            className="section-bg pt-100 pb-70"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle
                            subTitle="TESTIMONIAL"
                            title="What people have said about us"
                            googleReviews={true}
                        />
                    </div>
             
                </div>

                <Slider {...settings} className="testimoni-slider">
                    {testimonails
                        .filter((testimonail) => testimonail.text?.trim()) // Exclude null or empty text
                        .map((testimonail, index) => (
                              <TestimoniCard
                                    key={testimonail.reviewUrl || index}  // ✅ stable unique key
                                    testimonail={testimonail}
                                />
                        ))}
                </Slider>
                <div className="swipe-indicator text-center mt-4">
                    <p style={{ color: "white" }}>
                        <span style={{ fontSize: "24px" }}>•••</span> Swipe to see more reviews
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
