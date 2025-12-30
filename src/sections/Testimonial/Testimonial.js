import React from "react";
import "./Testimonial.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import TestimoniCard from "../../components/TestimoniCard/TestimoniCard";
import Slider from "react-slick";

const Testimonial = () => {
    const testimonails = [
        {
            title: "Dr. Karkamkar's Orthopedic and Physiotherapy Clinic",
            url: "https://share.google/7BUnxXDoD5JqXI6km",
            stars: 5,
            name: "Vijay Mohite",
            reviewUrl:"https://share.google/7BUnxXDoD5JqXI6km",
            text: "I wanted to take a moment to share my positive experience during my recent visit to Dr. Sachin Karmarkar's clinic in Hadapsar for my wife's biceps muscle pain treatment. From the outset, we were impressed by the courteous greeting my wife received. Dr. Karmarkar is not only a highly skilled Orthopedic specialist but also a very polite and attentive listener. He took the time to understand our concerns and started by checking my wife's hand and neck movement. Fortunately, the functionality was good, and he prescribed some tablets for orthopedic pain relief.Additionally, we were advised to undertake a 4-day physiotherapy treatment with Dr. Kamal, who has been equally excellent. He provided us with valuable insights into exercises and massage techniques that have contributed to my wife's recovery.Dr. Karmarkar also patiently addressed several other queries we had regarding muscle pain without any signs of frustration, which we greatly appreciated. The entire staff was polite and very helpful, especially the receptionist, who was accommodating enough to facilitate our admission without prior booking.Overall, we had a very good experience at the clinic and are grateful for the outstanding care we received. Thank you for maintaining such high standards in patient care.",
        },
        {
            title: "Dr. Karkamkar's Orthopedic and Physiotherapy Clinic",
            url: "https://share.google/WdOJOW0nJKLrvYUEQ",
            stars: 5,
            name: "CA Mahananda N",
            reviewUrl:"https://share.google/WdOJOW0nJKLrvYUEQ",
            text: "My mother in July 2025 underwent surgery under Dr. Sachin sir for removal of rods and nails from her left shoulder, followed by bone grafting using bone from her pelvic area. After the operation, she has completely stopped experiencing the pricking pain and discomfort she had earlier.Dr. Sachin Sir explained the complexities of the condition in a very clear and reassuring manner and guided us on the best procedure to ensure good and speedy relief. His detailed and before hand communication helped us feel confident and well-informed throughout the process.We are very happy with the outcome and truly appreciate Dr. Sachin Sir's expertise, precision, and compassionate approach. His skill and dedication have made a real difference in my mother’s comfort and recovery. Highly recommended!",
        },
        {
            title: "Dr. Karkamkar's Orthopedic and Physiotherapy Clinic ",
            url: "https://share.google/Wgehc9aPOv3k6J1IM",
            stars: 5,
            name: "Nitin Rasal",
            reviewUrl:
                "https://share.google/Wgehc9aPOv3k6J1IM",
            text: "My mother underwent Total Knee Replacement (TKR) for both knees on 19th February 2025, performed by Dr. Karkamkar Sir. She is doing very well now, and we are extremely grateful.Before deciding on the surgery, I had met a few orthopedic surgeons in Pune but was not confident to proceed because of my mother’s age and her high BP. However, the moment I met Dr. Karkamkar Sir, the way he explained the procedure and the confidence he gave us was truly reassuring. What impressed us most was his personal and compassionate approach — he spoke to my mother with warmth, saying “Aai, kalji naka karu, bara hoiel,” which immediately gave her confidence and emotional strength.During the surgery, Dr. Karkamkar kept us updated and comfortable with his clear communication and calm assurance. He is not only an expert in TKR surgeries but also one of the most ethical and kind-hearted practitioners we have ever met.A special word of thanks to Physiotherapist Dr. Kamal Sir, who guided my mother before and after surgery. He is truly an expert in physiotherapy, and his positive encouragement during her recovery — including home visits for a month post-surgery — played a big role in her quick and smooth recovery.I would also like to appreciate the entire staff at Dr. Karkamkar Hospital. Everyone is polite, caring, and helpful, making the overall experience very comfortable and stress-free.Thank you once again to Dr. Karkamkar Sir and his entire team for their dedication, compassion, and professionalism. I highly recommend them to anyone considering knee replacement surgery.",
        },
        {
            title: "Dr. Karkamkar's Orthopedic and Physiotherapy Clinic",
            url: "https://share.google/u0Dz9d2W58RFezHNk",
            stars: 5,
            name: "Sandeep Wategave",
            reviewUrl:
                "https://share.google/u0Dz9d2W58RFezHNk",
            text: "I had an excellent experience with Dr. Sachin Karkamkar sir. From the very first consultation, sir impressed me with his deep knowledge, clear communication, and compassionate approach. What stood out the most was his genuine care. He listens patiently, answer every question and ensures you’re comfortable throughout the process. Thanks to his guidance and treatment, my recovery has been smooth and steady.I highly recommend Dr. Karkamkar to anyone seeking orthopaedic care",
        },
        {
            title: "Dr. Karkamkar's Orthopedic and Physiotherapy Clinic ",
            url: "https://share.google/GRfL6AvUpudmHvpAW",
            stars: 5,
            name: "Sudhir Mahajan",
            reviewUrl:
                "https://share.google/GRfL6AvUpudmHvpAW",
            text: "Dr. Sachin is not just a wonderful doctor, but also a great human being. Their calm nature and caring attitude, combined with their professional excellence, make you feel truly looked after. I highly recommend them for anyone seeking the best care.",
        },
        {
            title: "Dr. Karkamkar's Orthopedic and Physiotherapy Clinic ",
            url: "https://share.google/ITuhuZ6MdFoHq3Vxs",
            stars: 5,
            name: "Anna Rajpure",
            reviewUrl:
                "https://share.google/ITuhuZ6MdFoHq3Vxs",
            text: "My 92-year-old grandmother suffered a serious fall that resulted in a hip fracture. She was unable to stand or walk, and we were deeply concerned about her recovery at such an advanced age. We consulted Dr. Sachin Karkamkar, and from the very beginning, he handled the situation with exceptional care and professionalism.After thorough evaluation and ensuring she was fit for surgery, Dr. Sachin performed a hip replacement procedure. The surgery was a great success! Today, my grandmother is able to stand on her own and has started walking slowly but steadily — something we didn’t think would be possible so soon. Dr. Sachin is not only highly skilled but also incredibly kind and compassionate. He explained every step of the process clearly and treated my grandmother with the utmost respect and care. We are truly grateful for his support and dedication.Thank you so much, Sir. ",
        },
        {
            title: "Dr. Karkamkar's Orthopedic and Physiotherapy Clinic",
            url: "https://share.google/I5e1AvKzYf0ptyNPG",
            stars: 5,
            name: "Prasad Kale",
            reviewUrl:
                "https://share.google/I5e1AvKzYf0ptyNPG",
            text: "Best Orthopedic Surgeon in Hadapsar, Pune!!I recently underwent ACL reconstruction surgery under the expert care of Dr. Sachin Karkamkar, and I cannot praise him enough for his exceptional skills and patient-friendly approach.From the very first consultation, Dr. Karkamkar made me feel comfortable and confident about my treatment. He took the time to explain every detail regarding my condition—whether surgery was necessary, the right time for it, and the possible effects of delaying the procedure. His ability to simplify complex medical terms and provide clear guidance was truly reassuring.The surgery itself was performed with utmost precision, and thanks to Dr. Karkamkar’s expertise, my recovery has been smooth and progressive. His post-operative care and follow-ups reflect his dedication to his patients.If you are looking for a highly skilled and compassionate orthopedic surgeon for ACL reconstruction or any other orthopedic issues, Dr. Sachin Karkamkar is undoubtedly the best choice in Pune. I highly recommend him!",
        },
        {
            title: "Dr. Karkamkar's Orthopedic and Physiotherapy Clinic ",
            url: "https://share.google/lxVIlnt3A3VR8MkPa",
            stars: 5,
            name: "Prajwal Bharati",
            reviewUrl:
                "https://share.google/lxVIlnt3A3VR8MkPa",
            text: "Dear Dr. Sachin Karkamkar,I just wanted to thank you for the excellent care and professionalism during my tibia surgery. The procedure went smoothly, and your clear explanations before and after the operation helped ease my anxiety.I'm recovering well and truly appreciate your skill, support, and the attention given throughout the process.Thanks again for everything! .",
        },
        {
            title: "Dr. Karkamkar's Orthopedic and Physiotherapy Clinic ",
            url: "https://share.google/b8oqKBu5zpOC2qIKu",
            stars: 5,
            name: "Arvind Iyer",
            reviewUrl:
                "https://share.google/b8oqKBu5zpOC2qIKu",
            text: "Highly skilled surgeon and a cool, calm and collected person!I had a fall from my bicycle in a road accident and broke my collar bone. I was admitted to Sahyadri Hospital where Dr Karkamkar was my main consulting doctor. Looking at the nature of the fracture, he explained why he recommended ORIF surgery for treating my collar bone. The surgery was carried out promptly the next day. Thanks to his expert work, I was stable and discharged the day after. I have been following up with him for about 4 months now. He has guided me through the recovery process with precise advice on healing and strength building through physiotherapy.Although I would not wish anyone to get injured like I did, I would highly recommend Dr Karkamkar to anyone with any orthopaedic problem. Thank you doctor!",
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
            className="section-bg pt-100 pb-70 testimonial-section-bg"
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
