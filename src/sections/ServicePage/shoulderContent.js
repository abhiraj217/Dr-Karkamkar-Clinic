import shoulderNormalImg from "../../assets/ServicesPageImages/normalShoulderJointImg.png";
import shoulderXrayImg from "../../assets/ServicesPageImages/shoulderXrayImg.png";
import shoulderJointsImg from "../../assets/ServicesPageImages/shoulderJointImage.png";
import shoulderCartilageImg from "../../assets/ServicesPageImages/shoulderArticularCartilageImg.png";
import shoulderLigamentsImg from "../../assets/ServicesPageImages/shoulderLigamentImg.png";
import shoulderBursaImg from "../../assets/ServicesPageImages/shoulderBursaImg.png";
import shoulderMusclesImg from "../../assets/ServicesPageImages/shoulderMusclesImg.png";
import shoulderPainImg from "../../assets/ServicesPageImages/pathologyShoulderImage.png";
import shoulderXrayPainImg from "../../assets/ServicesPageImages/Shoulderpainxraywhy.png";
import shoulderArthoscopyImg from "../../assets/ServicesPageImages/shoulderArthoscopyImage.png";
import shoulderprocedureImg1 from"../../assets/ServicesPageImages/kneeprocedureImage.png";
import shoulderrocedureImg2 from"../../assets/ServicesPageImages/shoulderProcedureImage2.png";
import shoulderReplacementArthicsLeft from "../../assets/ServicesPageImages/shoulderReplacementLeft.png";
import shoulderReplacementImplants from "../../assets/ServicesPageImages/shoulderImplantsReplacement.png";
import shoulderReplacementImplants2 from "../../assets/ServicesPageImages/shoulderReplacementImplants.png";
import shoulderReplacementXray from "../../assets/ServicesPageImages/shoulderReplcementImgxray.png";


const shoulderContent = {
   "shoulder-normal-id": {
    title: "How is a Normal Shoulder Joint?",
    sections: [
        {
        type: "text",
        content: `
            <h4 class="kneePartsTitle">How is Normal Shoulder Joint</h4>
            <p>
            The shoulder joint is one of the most flexible and mobile joints in the human body. 
            It allows you to lift, rotate, push, pull, and perform a wide variety of daily activities 
            with ease. This mobility is possible because of the perfect coordination between bones, 
            muscles, tendons, and soft tissues.
            </p>
        `
        },

        {
        type: "image",
        img: shoulderNormalImg,
        className: "service-shoulder-image",
        caption: "Fig: Inside the shoulder joint"
        },

        {
        type: "text",
        content: `
            <h4 class="kneePartsTitle">Components of Shoulder Joint</h4>

            <h4 class="kneePartsTitle">Bones</h4>
            <p>Shoulder is made up of 4 joints:</p>
            <ul>
            <li>Sternoclavicular (SC)</li>
            <li>Acromioclavicular (AC)</li>
            <li>Scapulothoracic joint</li>
            <li>Glenohumeral joint</li>
            </ul>
            <p>
            Together, these joints allow the shoulder to function as a highly adaptive unit, 
            enabling movements in almost every direction.
            </p>
        `
        },

        {
        type: "image",
        img: shoulderJointsImg,
        className: "service-shoulder-image",
        caption: "Fig: Joints in Shoulder"
        },

        {
        type: "text",
        content: `
            <h4 class="kneePartsTitle">Cartilage</h4>
            <p>
            Articular cartilage is the smooth, white tissue that covers the ends of bones 
            where they come together to form joints.
            </p>
            <p>
            Healthy cartilage allows bones to glide over each other with very little friction.
            </p>
            <p>
            When the cartilage is intact, shoulder motion feels smooth, controlled, and pain-free.
            </p>
        `
        },

        {
        type: "image",
        img: shoulderCartilageImg,
        className: "service-shoulder-image",
        caption: "Fig: Shoulder Articular Cartilages"
        },

        {
        type: "text",
        content: `
            <h4 class="kneePartsTitle">Ligaments</h4>
            <p>Ligaments hold the bones together and provide stability.</p>
            <p>
            They act like strong bands that prevent excessive movements that could damage the joint.
            </p>
        `
        },

        {
        type: "image",
        img: shoulderLigamentsImg,
        className: "service-shoulder-image",
        caption: "Fig: Shoulder ligaments"
        },

        {
        type: "text",
        content: `
            <h4 class="kneePartsTitle">Synovium</h4>
            <p>
            The synovium is a thin cover that wraps around the bones in your joint. 
            It makes a fluid that provides lubrication so your bones can move easily 
            without resistance.
            </p>

            <h4 class="kneePartsTitle">Bursa</h4>
            <p>
            The bursa is a fluid-filled sac that provides cushioning and a smooth surface 
            for the bones, muscles and tendons in your joints.
            </p>
            <p>
            These bursae prevent friction and help ensure pain-free overhead and rotational movements.
            </p>
        `
        },

        {
        type: "image",
        img: shoulderBursaImg,
        className: "service-shoulder-image",
        caption: "Fig: Bursa in shoulder joint"
        },

        {
        type: "text",
        content: `
            <h4 class="kneePartsTitle">Tendons</h4>
            <p>
            Tendons are fibrous bands of tissue that connect your muscles to your bones.
            </p>
            <p>
            They play a critical role in controlling shoulder motion and providing power 
            for lifting, reaching, and throwing activities.
            </p>

            <h4 class="kneePartsTitle">Muscles</h4>
            <p>
            The rotator cuff is a group of muscles in the shoulder that allow a wide range 
            of movement while maintaining the stability of the glenohumeral joint:
            </p>

            <ul>
            <li>Subscapularis</li>
            <li>Infraspinatus</li>
            <li>Teres minor</li>
            <li>Supraspinatus</li>
            </ul>

            <p>
            These muscles work together to lift the arm, rotate it, and keep the shoulder stable 
            during all movements.
            </p>
        `
        },

        {
        type: "image",
        img: shoulderMusclesImg,
        className: "service-shoulder-image",
        caption: "Fig: Muscles around Shoulder"
        },

        {
        type: "text",
        content: `
            <p>
            Normally, all of these components work in harmony. But disease or injury can 
            disrupt this harmony, resulting in pain, muscle weakness, and reduced function.
            </p>
            <p>
            A healthy shoulder allows effortless movement, strength, and stability that are 
            essential for daily living as well as sports activities.
            </p>`},        
            
        {
            type: "image",
                img: shoulderXrayImg,
                className: "service-shoulder-image",
                caption: "Fig: Xray of normal Shoulder Joint"
        },


        {
        type: "text",
        content: `

            <p>
            To maintain the fitness of all components, get to know your joint by 
            <strong>Dr. Sachin Karkamkar</strong>.
            </p>
        `
        }
    ]
},

"shoulder-pain-id": {
  title: "Why Does Shoulder Pain Occur?",
  sections: [
    {
      type: "text",
      content: `
        <h4 class="kneePartsTitle">Causes of Shoulder Pain</h4>

        <p>
          Shoulder pain is one of the most common complaints and can arise from 
          irritation, inflammation, degeneration, or injury to any of the structures 
          inside or around the joint. Because the shoulder is extremely mobile, it is 
          more vulnerable to soft tissue injuries and age-related changes.
        </p>

        <ul>
          <li>Frozen Shoulder</li>
          <li>Rotator cuff tear</li>
          <li>Impingement</li>
          <li>Bursitis</li>
          <li>Tendinitis</li>
          <li>Injuries – Fractures, Dislocation, Ligament Tear, Cartilage (SLAP) tear</li>
          <li>Arthritis</li>
          <li>Nerve Injuries</li>
        </ul>
      `
    },

    {
      type: "image",
      img: shoulderPainImg,
      className: "service-shoulder-image",
      caption: "Fig: Shoulder Pain Illustration"
    },

    {
      type: "text",
      content: `
        <h4 class="kneePartsTitle">Arthritis</h4>
        <p>
          If your shoulder is severely damaged by arthritis, it may be hard for you 
          to perform simple activities such as lifting weights, wearing clothes, 
          making hair, or even taking a shower.
        </p>
        <p>
          If nonsurgical treatments like medications and supports are no longer helpful, 
          you may want to consider total shoulder replacement surgery. It is a safe and 
          effective procedure to relieve pain and help you resume normal activities.
        </p>
        <p>
          Get to know in detail by <strong>Dr. Sachin Karkamkar, Hadapsar, Pune.</strong>
        </p>

        <h4 class="kneePartsTitle">Osteoarthritis</h4>
        <ul>
          <li>Primary – Degenerative: Age related</li>
          <li>Secondary – Trauma, Infection</li>
        </ul>

        <h4 class="kneePartsTitle">Inflammatory Arthritis</h4>
        <p>Inflammation causes progressive cartilage damage.</p>
        <ul>
          <li>Rheumatoid Arthritis</li>
          <li>Gout</li>
        </ul>

        <h4 class="kneePartsTitle">Age Related Osteoarthritis</h4>
        <p>
          The most common cause of chronic shoulder pain and disability is osteoarthritis. 
          This is an age-related "wear and tear" disease. It usually occurs in people 
          50 years and older.
        </p>
        <p>
          Aging decreases the ability of chondrocytes to maintain and restore articular 
          cartilage, increasing the risk of degeneration. Once cartilage is lost, it 
          cannot regenerate — making early diagnosis crucial.
        </p>
      `
    },

    {
      type: "image",
      img: shoulderXrayPainImg,
      className: "service-shoulder-image",
      caption: "Fig: Xray view"
    },

    {
      type: "text",
      content: `
        <p>
          Progressive degeneration leads to pain, stiffness, reduced mobility, and loss 
          of shoulder function. With proper evaluation and timely treatment, symptoms 
          can be significantly reduced and normal activity can be restored.
        </p>
      `
    }
  ]
},


  /* SHOULDER ARTHROSCOPY → Will use TabsPill */
  "shoulder-arthroscopy-id": {
    title: "Shoulder Arthroscopy",
    sections: [
      {
        id: "shoulder-arthro-tab-1",
        tabTitle: "What is Arthroscopy?",
        type: "text",
        content: `
            <h4 class="kneePartsTitle">What is Shoulder Arthroscopy?</h4>

            <p>
            Arthroscopy is a procedure that orthopaedic surgeons use to inspect, diagnose, 
            and repair problems inside a joint.
            </p>

            <p>
            The word <strong>arthroscopy</strong> comes from two Greek words — 
            "arthro" (joint) and "skopein" (to look).  
            The term literally means <strong>"to look within the joint."</strong>
            </p>

            <p>
            During shoulder arthroscopy, your surgeon inserts a small camera called an 
            <strong>arthroscope</strong> into your shoulder joint. The camera displays 
            pictures on a monitor, and your surgeon uses these real-time images to guide 
            miniature surgical instruments with extreme precision.
            </p>

            <p>
            Because the arthroscope and tools are very thin, your surgeon can perform the 
            entire procedure through tiny incisions (keyholes) instead of a large cut 
            needed for traditional open surgery.
            </p>

            <p>
            This results in:
            </p>
            <ul>
            <li>Less postoperative pain</li>
            <li>Reduced soft-tissue damage</li>
            <li>Faster recovery</li>
            <li>Earlier return to daily activities and sports</li>
            </ul>

            <p>
            Shoulder arthroscopy is commonly used for conditions such as rotator cuff tears, 
            impingement, SLAP lesions, frozen shoulder release, and shoulder instability.
            </p> 

            <div class="shulderarthoscopyimageDiv">
                <img src= ${shoulderArthoscopyImg} alt class="shulderarthoscopyimage">
                </div>
            <h4 class="kneePartsTitle">Mini-Open Technique</h4>
            <p>
            On occasion, some parts of the surgery may be performed using the arthroscope, 
            while other parts may require a small <strong>mini-open incision</strong>.  
            This hybrid technique provides excellent visualization inside the joint while 
            still allowing strong repair of tissues like tendons.
            </p>

            <p>
            Your surgeon will recommend the best approach depending on the severity and type 
            of shoulder problem being treated.
            </p>

            <p>
            For personalized evaluation and treatment planning, consult  
            <strong>Dr. Sachin Karkamkar</strong>.
            </p>
        `
},

    {
        id: "shoulder-arthro-tab-2",
        tabTitle: "Indications",
        type: "text",
        content: `
            <h4 class="kneePartsTitle">When Shoulder Arthroscopy Is Recommended</h4>

            <p>
            Shoulder arthroscopy is recommended when pain or dysfunction does not respond 
            to medications, physiotherapy, injections, or rest. It is commonly advised when 
            structural problems inside the joint require repair, cleaning, or stabilization.
            </p>

            <p>Common arthroscopic procedures include:</p>

            <ul>
            <li>Rotator cuff repair</li>
            <li>Repair of tendon tear</li>
            <li>Bone spur removal</li>
            <li>Removal or repair of the labrum</li>
            <li>Repair of ligaments</li>
            <li>Removal of inflamed tissue or loose cartilage</li>
            <li>Repair for recurrent shoulder dislocation</li>
            </ul>

            <h4 class="kneePartsTitle">Other Indications</h4>
            <ul>
            <li>Frozen shoulder not responding to physiotherapy and medication</li>
            <li>Bursa / fat tissue excision</li>
            <li>Synovial biopsy</li>
            <li>Treatment of infection inside the joint</li>
            </ul>

            <p>
            Arthroscopy helps restore shoulder mobility, relieve pain, and prevent further 
            degeneration when conservative treatments fail.
            </p>

            <p>
            For accurate diagnosis and personalized surgical planning, consult  
            <strong>Dr. Sachin Karkamkar</strong>.
            </p>
        `
    },
    {
    id: "shoulder-arthro-tab-3",
    tabTitle: "Surgical Procedure",
    type: "text",
    content: `
        <h4 class="kneePartsTitle">Surgical Procedure</h4>

        <h4 class="kneePartsTitle">Anesthesia</h4>
        <p>
        Shoulder arthroscopy is most commonly performed using regional nerve blocks 
        to numb your shoulder and arm. This anesthesia is injected at the base of 
        your neck or high on your shoulder.
        </p>
        <p>
        In addition to providing anesthesia during surgery, the nerve block helps 
        control pain for several hours after the procedure is completed.
        </p>
        <p>
        Many surgeons combine nerve blocks with sedation or a light general anesthetic 
        because patients may become uncomfortable staying in one position for the 
        duration of the surgery.
        </p>
        <div class="shulderarthoscopyimageDiv">
                    <img src= ${shoulderprocedureImg1} alt class="shulderarthoscopyimage">
            </div>

        <h4 class="kneePartsTitle">Surgery</h4>
        <p>
        To begin the procedure, your surgeon injects fluid into the shoulder to inflate 
        the joint. This creates space inside the joint and allows clear visibility of 
        all structures through the arthroscope.
        </p>
        <p>
        A small puncture—about the size of a buttonhole—is made in the shoulder to insert 
        the arthroscope. Fluid continuously flows through the arthroscope to maintain 
        visibility and control bleeding.
        </p>
        <p>
        Images captured by the arthroscope are projected onto a video monitor, allowing 
        your surgeon to examine the inside of your shoulder and identify any damage.
        </p>

        <p>
        Once the problem is identified, your surgeon makes additional small incisions 
        to insert specialized instruments. These tools allow for:
        </p>

        <ul>
        <li>Shaving of bone or soft tissue</li>
        <li>Cutting or trimming damaged structures</li>
        <li>Grasping loose fragments</li>
        <li>Passing sutures through tendons</li>
        <li>Securing stitches with knot-tying devices</li>
        </ul>
        <div class="shulderarthoscopyimageDiv">
                    <img src= ${shoulderrocedureImg2} alt class="shulderarthoscopyimage">
            </div>
        <p>
        In many cases, anchors are used to secure sutures into bone, especially in 
        rotator cuff or labral repairs.
        </p>

        <p>
        At the end of the procedure, your surgeon may close the incisions with sutures 
        or steri-strips (small adhesive strips). A large, soft dressing is applied to 
        protect the surgical area.
        </p>

        <p>
        Shoulder arthroscopy is minimally invasive, allowing faster healing, reduced pain, 
        and quicker return to normal activities compared to open surgery.
        </p>
    `
    },
    {
        id: "shoulder-arthro-tab-4",
        tabTitle: "Planning for Surgery",
        type: "text",
        content: `
            <h4 class="kneePartsTitle">Planning for Surgery</h4>

            <p>
            Proper planning before shoulder arthroscopy ensures a smooth procedure and 
            supports a faster, safer recovery. Your surgeon will evaluate your overall 
            health, shoulder condition, and medical risks before finalizing the surgical plan.
            </p>

            <h4 class="kneePartsTitle">Orthopaedic Evaluation</h4>

            <ul>
            <li>
                <strong>A medical history:</strong>  
                To assess general fitness and understand any existing health conditions.
            </li>

            <li>
                <strong>A physical examination:</strong>  
                This will assess shoulder motion, stability, strength, and overall alignment.
            </li>

            <li>
                <strong>X-rays:</strong>  
                These images help determine the extent of damage and deformity in your joint.
            </li>

            <li>
                <strong>Other tests:</strong>  
                Occasionally advanced imaging such as an MRI scan may be needed to evaluate 
                the condition of the bone and soft tissues of your shoulder.
            </li>
            </ul>

            <h4 class="kneePartsTitle">Tests for Operative Fitness</h4>

            <p>Before surgery, certain routine tests are required to ensure you are medically fit:</p>

            <ul>
            <li>Blood tests</li>
            <li>Urine tests</li>
            <li>Electrocardiogram (ECG)</li>
            </ul>

            <p>
            These tests help your orthopaedic surgeon and anesthetist plan the safest 
            approach for your surgery.
            </p>

            <h4 class="kneePartsTitle">Medications</h4>

            <p>
            Tell your orthopedic surgeon about all medications you are taking.  
            He or she will inform you which medicines must be stopped temporarily  
            (such as blood thinners) and which ones should be continued before surgery.
            </p>

            <p>
            Stopping the wrong medication without guidance can be risky, so always follow 
            the surgeon’s instructions carefully.
            </p>

            <h4 class="kneePartsTitle">Additional Preparation</h4>

            <p>
            Patients are often advised to avoid eating or drinking for a few hours before 
            surgery, depending on the anesthesia plan. Your surgeon’s team will provide 
            clear instructions.
            </p>

            <p>
            A well-planned preoperative evaluation improves surgical accuracy, decreases 
            complications, and ensures a smoother recovery process.
            </p>
        `
    },
    {
        id: "shoulder-arthro-tab-5",
        tabTitle: "Recovery",
        type: "text",
        content: `
            <h4 class="kneePartsTitle">Recovery</h4>

            <p>
            Although recovery from arthroscopy is often faster than recovery from open surgery, 
            it may still take several weeks for the shoulder joint to completely recover. The 
            extent of recovery depends on the type of repair performed and overall shoulder condition.
            </p>

            <ul>
            <li>
                Patient can expect some pain and discomfort for at least a week after surgery.  
                If more extensive surgery has been done, it may take several weeks before pain subsides.
            </li>

            <li>
                Ice will help relieve pain and swelling. Sleeping on the same side should be avoided 
                for a few weeks.
            </li>

            <li>
                Some patients are more comfortable sleeping in a reclining chair or propped up in bed 
                and sleeping on the opposite side.
            </li>

            <li>
                A few days after surgery, large bandages are replaced with simple Band-Aids.  
                A sling or shoulder immobilizer may be needed to protect the shoulder.  
                Your surgeon will guide you on how long the sling should be used.
            </li>

            <li>
                Work from home is usually permitted after 2 weeks.  
                Most patients can return to sedentary office work within 4 to 6 weeks.
            </li>
            </ul>

            <h4 class="kneePartsTitle">Your Recovery at Home</h4>

            <h4 class="kneePartsTitle">Wound Care</h4>
            <p>
            You will have stitches or staples along your wound, or a suture beneath the skin 
            on the front of your shoulder. Stitches or staples on the skin are removed 2 weeks 
            after surgery. Deep muscle sutures dissolve on their own.
            </p>
            <p>
            Avoid soaking the wound in water until it has fully sealed and dried.  
            You may continue dressing the wound to prevent irritation from clothing.
            </p>

            <h4 class="kneePartsTitle">Diet</h4>
            <p>
            Some loss of appetite is common for several days after surgery.  
            Take light, small, and frequent meals. A high-protein diet helps with faster 
            wound healing and muscle recovery.
            </p>

            <h4 class="kneePartsTitle">Activity</h4>
            <p>
            Exercise is a critical component of home care, especially during the first few weeks.  
            You should be able to resume most normal daily activities within 3 to 4 weeks after surgery.
            </p>
            <p>
            Some pain with activity and at night is common for several weeks.
            </p>

            <p>Your activity program should include:</p>
            <ul>
            <li>A graduated program to slowly increase mobility—initially at home, then outdoors</li>
            <li>
                Resuming normal household activities such as mild cleaning, basic kitchen work, 
                and light sedentary tasks like typing or writing
            </li>
            <li>
                Specific exercises several times a day to restore shoulder movement and strength  
                (self-performed or guided by a physical therapist)
            </li>
            </ul>

            <h4 class="kneePartsTitle">Rehabilitation</h4>
            <ul>
            <li>Rehabilitation plays an important role in returning to daily activities.</li>
            <li>An exercise program helps regain shoulder strength and motion.</li>
            <li>
                Your surgeon will design a personalized rehabilitation plan based on the surgical procedure.  
                A physical therapist may be recommended for supervised therapy.
            </li>
            <li>
                Consistent effort in rehabilitation is essential for the success of surgery.
            </li>
            </ul>
        `
    },

    {
        id: "shoulder-arthro-tab-6",
        tabTitle: "Complications",
        type: "text",
        content: `
            <h4 class="kneePartsTitle">Complications</h4>

            <p>
            Most patients do not experience complications from shoulder arthroscopy. 
            It is considered a safe and minimally invasive procedure with a high success rate.
            However, like any surgery, certain risks do exist.
            </p>

            <ul>
            <li>
                Most patients do not experience complications from shoulder arthroscopy.
            </li>

            <li>
                Some risks are present with any surgery, including those associated with 
                anesthesia, and some risks are more specific to the procedure being performed.
            </li>

            <li>
                Risks of arthroscopic rotator cuff repair include, but may not be limited to:  
                infection, damage to blood vessels or nerves (causing numbness, tingling, burning, 
                or weakness), blood clots (deep vein thrombosis or pulmonary embolus), stiffness 
                of the shoulder (which can require additional surgery in some cases), iatrogenic 
                injury (injury to structures caused by surgery), scarring, and residual pain or discomfort.
            </li>

            <li>
                There is also the possibility that the repaired rotator cuff can re-tear.  
                This risk varies depending on multiple factors such as age, tissue quality, 
                and postoperative activity levels.  
                Additional surgery may be recommended if the rotator cuff does not heal properly 
                or re-tears.
            </li>

            <li>
                Complications after surgery are uncommon and cannot be predicted in advance.
            </li>
            </ul>

            <p>
            Your surgeon will take all necessary precautions to minimize risks, and following 
            postoperative instructions carefully can significantly reduce the chances of complications.
            </p>

            <p>
            If you experience unusual pain, increased swelling, fever, difficulty moving the arm, 
            or any concerning symptoms, consult your surgeon promptly.
            </p>
        `
        }




    ]
  },

  /* SHOULDER REPLACEMENT → Will use TabsPill */
  "shoulder-replacement-id": {
    title: "Shoulder Replacement",
    sections: [
      {
        id: "shoulder-replace-tab-1",
        tabTitle: "Is Shoulder Replacement for You?",
        type: "text",
        content: `
            <h4 class="kneePartsTitle">Is Shoulder Replacement for You?</h4>

            <p>
            Shoulder replacement is considered when shoulder pain and stiffness interfere with 
            daily life, and non-surgical treatments no longer provide relief. It is an effective 
            procedure that helps restore movement, reduce pain, and improve overall quality of life.
            </p>

            <h4 class="kneePartsTitle">Treatment Goals</h4>
            <ul>
            <li>Control pain</li>
            <li>Maintain function</li>
            <li>Prevent disability</li>
            </ul>

            <h4 class="kneePartsTitle">Role of Surgery</h4>
            <ul>
            <li>Severe shoulder pain/stiffness that limits everyday activities</li>
            <li>Chronic inflammation and swelling that does not improve with rest or medication</li>
            <li>Failure of other non-surgical treatments</li>
            <li>Increased need of pain killers</li>
            </ul>

            <p>
            If your shoulder condition prevents you from lifting your arm, performing personal care, 
            doing household activities, or sleeping comfortably, shoulder replacement may be a strong 
            option to restore quality of life.
            </p>

            <p>
            Many patients choose surgery after months or years of conservative treatment when pain 
            becomes persistent and function continues to decline.
            </p>

            <p>
            A detailed evaluation with <strong>Dr. Sachin Karkamkar</strong> will help determine whether 
            shoulder replacement is the best treatment for your condition.
            </p>
        `
        },

     {
        id: "shoulder-replace-tab-2",
        tabTitle: "What is Shoulder Replacement?",
        type: "text",
        content: `
            <h4 class="kneePartsTitle">What is Shoulder Replacement?</h4>

            <p>
            Shoulder replacement (also called <strong>shoulder arthroplasty</strong>) is a highly successful 
            surgical procedure designed to relieve pain and restore movement in patients with advanced 
            shoulder arthritis or severe joint damage.  
            </p>

            <p>
            A shoulder replacement might be more accurately termed a shoulder "resurfacing" because  
            only the damaged surfaces of the bones are replaced—not the entire joint.
            </p>

            <h4 class="kneePartsTitle">Arthritic Shoulder and Replaced Shoulder</h4>

            <p>
            A comparison of arthritic and replaced shoulders helps illustrate how the procedure restores 
            smooth, pain-free motion.
            </p>

            <div class="service-image-block fade-in shuldeReplacementimage">
            <img src="${shoulderReplacementArthicsLeft}" alt="Arthritic vs Replaced Shoulder" />
            <p class="img-caption">Fig: Arthritic shoulder [Left]</p>
            </div>

            <p>
            (Left) Severe osteoarthritis.  
            (Right) The arthritic cartilage and underlying bone has been removed and resurfaced with 
            metal implants. A plastic spacer has been placed between the implants to allow smooth motion.
            </p>

            <div class="service-image-block fade-in shuldeReplacementimage">
            <img src="${shoulderReplacementXray}" alt="Replaced Shoulder X-ray" />
            <p class="img-caption">Fig: Replaced Shoulder x-ray</p>
            </div>

            <h4 class="kneePartsTitle">Realistic Expectations</h4>

            <ul>
            <li>
                More than 90% of people who undergo shoulder replacement experience a dramatic reduction 
                in pain and significant improvement in performing daily activities.
            </li>
            <li>
                Recovery depends on age, fitness level, tissue quality, and type of procedure performed.
            </li>
            <li>
                Gradual return to activities is expected over weeks to months.
            </li>
            <li>
                Realistic activities following shoulder replacement include low-impact tasks such as 
                wearing clothes, showering, home cleaning, dusting, and basic kitchen work.
            </li>
            <li>
                High-impact activities like heavy gym workouts or lifting heavy weights are restricted 
                and allowed only after specialist clearance.
            </li>
            </ul>
            <div class="service-image-block fade-in shuldeReplacementimage">
                <img src="${shoulderReplacementImplants2}" alt="Shoulder Implants" />
                <p class="img-caption">Fig: Implants</p>
            </div>
            <h4 class="kneePartsTitle">Recent Advances in Shoulder Replacement Surgery</h4>

            <ul>
            <li>Total Shoulder Replacement</li>
            <li>Hemi Shoulder Replacement</li>
            <li>Reverse Shoulder Replacement</li>
            </ul>

            <p>
            Dr. Sachin Karkamkar can provide detailed guidance regarding which procedure is best suited 
            for your condition based on joint condition, muscle strength, and imaging results.
            </p>

            <h4 class="kneePartsTitle">Surgery</h4>

            <ul>
            <li>
                You will most likely be admitted to the hospital on the day or evening prior to surgery.
            </li>

            <li>
                <strong>Anesthesia:</strong> After admission, you will be evaluated by the anesthesia team.  
                Regional nerve block anesthesia or general anesthesia may be used.  
                The anesthesia team will determine the safest and most comfortable approach.
            </li>

            <li>
                <strong>Procedure:</strong> The surgery typically takes 1 to 2 hours.  
                Damaged cartilage and bone are removed, and new metal and plastic implants are carefully 
                positioned to restore shoulder alignment and function.
            </li>
            </ul>

            <div class="shuldeReplacementimage service-image-block fade-in ">
            <img src="${shoulderReplacementImplants}" alt="Shoulder Implants" class="shoulderReplacementimg"/>
            <p class="img-caption">Fig: Implants</p>
            </div>

            <p>
            Different types of shoulder implants are used to meet each patient's individual needs, 
            depending on bone quality, joint stability, and degree of arthritis.
            </p>

            <p>
            With proper rehabilitation and guidance, most patients regain excellent shoulder function 
            and enjoy long-term relief from pain.
            </p>
        `
    },
    {
        id: "shoulder-replace-tab-3",
        tabTitle: "Preparing for Surgery",
        type: "text",
        content: `
            <h4 class="kneePartsTitle">Preparing for Shoulder Replacement Surgery</h4>

            <p>
            Proper preparation before shoulder replacement surgery ensures a smoother surgical
            experience and a more predictable recovery. Your orthopaedic surgeon will evaluate 
            your overall health, shoulder condition, and lifestyle demands to create the safest 
            and most effective surgical plan.
            </p>

            <h4 class="kneePartsTitle">Orthopaedic Evaluation</h4>

            <ul>
            <li>
                <strong>A medical history:</strong>  
                To assess general fitness.
            </li>

            <li>
                <strong>A physical examination:</strong>  
                This will assess shoulder motion, stability, strength, and overall limb alignment.
            </li>

            <li>
                <strong>X-rays:</strong>  
                These images help determine the extent of damage and deformity in your shoulder.
            </li>

            <li>
                <strong>Other tests:</strong>  
                Occasionally, advanced imaging such as a magnetic resonance imaging (MRI) scan 
                may be needed to determine the condition of the bone and soft tissues of your shoulder.
            </li>
            </ul>

            <h4 class="kneePartsTitle">Tests for Operative Fitness</h4>

            <p>
            Several tests may be needed to help your orthopaedic surgeon plan your surgery:
            </p>

            <ul>
            <li>Blood tests</li>
            <li>Urine tests</li>
            <li>Electrocardiogram (ECG)</li>
            </ul>

            <p>
            These tests help assess your general health and identify any risk factors that may 
            affect anesthesia or surgery.
            </p>

            <h4 class="kneePartsTitle">Medications</h4>

            <p>
            Tell your orthopedic surgeon about the medications you are taking.  
            He or she will inform you which medications should be stopped (such as blood thinners)  
            and which medications should be continued before surgery.
            </p>

            <h4 class="kneePartsTitle">Dental Evaluation</h4>

            <p>
            Although the incidence of infection after shoulder replacement is low, infections can occur 
            if bacteria enter the bloodstream. To reduce this risk, major dental procedures such as 
            tooth extractions or periodontal work should be completed before surgery.
            </p>

            <h4 class="kneePartsTitle">Urinary Evaluations</h4>

            <p>
            People with a history of recent or frequent urinary infections should undergo a urological 
            evaluation before surgery.  
            Older men with prostate issues may need to complete treatment before undergoing shoulder replacement.
            </p>

            <h4 class="kneePartsTitle">Home and Social Planning</h4>

            <ul>
            <li>
                Movement will be restricted, and a sling will be required for 2–3 weeks.  
                You may need to plan daily tasks to be done with one hand.
            </li>

            <li>
                Keep loose clothes ready with front buttons to allow easy dressing.
            </li>

            <li>
                Driving will not be allowed for a specific period depending on your recovery progress.
            </li>
            </ul>

            <p>
            Preparing your home before surgery ensures safety and independence during recovery.  
            Consider setting up a resting area with essential items nearby and ensure support for 
            daily activities in the first few weeks.
            </p>

            <p>
            These instructions provide basic guidance.  
            For a detailed and personalized evaluation, please consult  
            <strong>Dr. Sachin Karkamkar</strong>.
            </p>
        `
},
{
  id: "shoulder-replace-tab-4",
  tabTitle: "Recovery",
  type: "text",
  content: `
    <h4 class="kneePartsTitle">Postoperative Recovery</h4>

    <p>
      Recovery after shoulder replacement is a gradual process. Most patients experience steady 
      improvement in pain, strength, and motion over several weeks. Following your surgeon's 
      recommendations closely will ensure the best outcome.
    </p>

    <ul>
      <li>You will most likely stay in the hospital for 3 to 4 days.</li>
      <li>Physiotherapy begins immediately as advised.</li>
      <li>Sling for 3 weeks.</li>

      <li>
        Patient can expect some pain and discomfort for at least a week after surgery.  
        If more extensive surgery has been done, however, it may take several weeks 
        before pain subsides.
      </li>

      <li>
        Ice will help relieve pain and swelling. Sleeping on the same side must be avoided 
        for a few weeks.
      </li>

      <li>
        Some patients are more comfortable sleeping in a reclining chair or propped up in bed 
        and lying on the opposite side.
      </li>

      <li>
        A few days after surgery, large bandages are replaced with simple Band-Aids.  
        You may need a sling or special immobilizer to protect the shoulder.  
        Your surgeon will discuss how long the sling will be needed.
      </li>

      <li>
        Work from home is permitted 2 weeks after surgery.  
        Most patients are able to return to sedentary office work between 4 to 6 weeks.
      </li>

      <li>Range of movement: 3–6 weeks</li>
      <li>Active assisted movement with sling: 6–9 weeks</li>
      <li>
        Active movements without sling: 9–12 weeks  
        (Thera/resistance bands may be used to improve motion and strength)
      </li>
    </ul>

    <p class="note">
      *All mentioned time spans are general estimates and may vary for each patient.  
      Post-surgery evaluation is needed for every patient by  
      <strong>Dr. Sachin Karkamkar</strong>.*
    </p>

    <h4 class="kneePartsTitle">Pain Management</h4>
    <p>
      After surgery, you will feel some pain, but your surgeon and nurses will prescribe 
      medications to keep you comfortable. Effective pain management is essential for a 
      smooth recovery.
    </p>
    <p>
      Shoulder movement begins soon after surgery. As pain decreases, you will be able to 
      move your shoulder through larger angles and regain strength steadily.
    </p>
    <p>Talk with your surgeon if postoperative pain becomes a problem.</p>

    <h4 class="kneePartsTitle">Physical Therapy</h4>
    <p>
      Most patients start shoulder exercises the day after surgery.  
      A physical therapist will teach exercises that strengthen the upper limb and restore 
      shoulder motion so you can resume daily activities.
    </p>

    <h4 class="kneePartsTitle">Your Recovery at Home</h4>

    <h4 class="kneePartsTitle">Wound Care</h4>
    <p>
      You will have stitches or staples along your wound, or a suture beneath the skin.  
      Stitches or staples on the skin are typically removed 2 weeks after surgery.  
      Deep muscle sutures dissolve on their own.
    </p>
    <p>
      Avoid soaking the wound until it has completely sealed and dried.  
      You may continue dressing the wound to prevent irritation from clothing.
    </p>

    <h4 class="kneePartsTitle">Diet</h4>
    <p>
      Some loss of appetite is common for several days after surgery.  
      Eat light, small, and frequent meals. High-protein foods aid wound healing and muscle 
      recovery.
    </p>

    <h4 class="kneePartsTitle">Activity</h4>
    <p>
      Exercise is an essential part of home care, particularly during the first few weeks.  
      Most patients can resume normal daily activities within 3 to 4 weeks.
    </p>
    <p>
      Some pain with activity and at night is common during the early recovery phase.
    </p>

    <p>Your activity program should include:</p>
    <ul>
      <li>A gradual walking/mobility program inside the home, then outdoors</li>
      <li>
        Resuming household activities such as light cleaning, basic kitchen work, and 
        sedentary tasks like typing or writing
      </li>
      <li>
        Specific exercises several times a day to restore movement and strengthen the shoulder  
        (with or without a physiotherapist)
      </li>
    </ul>

    <h4 class="kneePartsTitle">Outcomes</h4>

    <h4 class="kneePartsTitle">How Your New Shoulder Is Different</h4>
    <p>
      Improvement of shoulder motion is a primary goal of total shoulder replacement,  
      though complete restoration of range may not always be possible.  
      Post-surgery shoulder movement often reflects the motion you had before surgery.
    </p>

    <p>
      Most patients regain sufficient range for comfortable daily activity and functional tasks.
    </p>

    <p><strong>This is normal:</strong></p>
    <ul>
      <li>Some numbness around the incision</li>
      <li>Soreness with excessive activities</li>
      <li>Clicking sounds with shoulder movement (not harmful)</li>
    </ul>

    <p>
      These sensations often decrease with time and are generally far easier to tolerate 
      than pre-surgery pain.
    </p>

    <p>
      Your new shoulder may activate metal detectors at airports or buildings.  
      Inform security personnel if needed.
    </p>

    <h4 class="kneePartsTitle">Protecting Your Shoulder Replacement</h4>

    <ul>
      <li>Participate in regular light exercises to maintain strength and mobility.</li>
      <li>Take precautions to avoid falls or injuries.</li>
      <li>
        Inform your dentist about your shoulder replacement.  
        You may require antibiotics before dental procedures for life.
      </li>
      <li>
        Visit your orthopedic surgeon yearly for an examination and X-ray.
      </li>
    </ul>

    <h4 class="kneePartsTitle">Extending the Life of Your Shoulder Implant</h4>

    <p>
      More than 90% of modern total shoulder replacements function well for 15 years or longer.  
      Following your surgeon's guidelines and protecting your shoulder are essential for long-term success.
    </p>
  `
},
{
  id: "shoulder-replace-tab-5",
  tabTitle: "Possible Complications",
  type: "text",
  content: `
    <h4 class="kneePartsTitle">Possible Complications of Surgery</h4>

    <p>
      Shoulder replacement surgery is generally very safe, and serious complications are rare.  
      However, as with any major surgical procedure, certain risks do exist. Understanding these 
      risks helps patients prepare better and recognize early warning signs.
    </p>

    <p>
      The complication rate following shoulder surgery is low. Serious complications, such as 
      joint infection, occur in fewer than 2% of patients. Major medical complications such as 
      heart attack or stroke occur even less frequently/rarely.
    </p>

    <h4 class="kneePartsTitle">Infection</h4>
    <p>
      Infection may occur in the wound or deep around the prosthesis/implants.  
      It may happen while in the hospital or after you go home. Any infection in your body can 
      spread to your joint replacement. It may even occur years later.
    </p>
    <p>
      Minor infections in the wound area are generally treated with antibiotics.  
      Major or deep infections, if they occur, may require surgery and removal of the prosthesis.
    </p>

    <h4 class="kneePartsTitle">Implant Loosening</h4>
    <p>
      Shoulder replacement components are durable, but they may loosen or wear over time.  
      This typically happens if bone quality is compromised or if the patient experiences trauma.
    </p>

    <h4 class="kneePartsTitle">Dislocation</h4>
    <p>
      It is possible for the ball of the new joint to come out of the socket.  
      This may occur due to poor ligament balance or reinjury.
    </p>

    <h4 class="kneePartsTitle">Rotator Cuff Tear</h4>
    <p>
      The group of muscles and tendons surrounding the shoulder joint (rotator cuff) may 
      occasionally wear out after replacement surgery.
    </p>

    <h4 class="kneePartsTitle">Periprosthetic Fractures of the Humerus</h4>
    <p>
      Though uncommon, fractures may occur around the implants, particularly in those with 
      weaker bone quality or after a fall.
    </p>

    <h4 class="kneePartsTitle">Neurologic Injuries</h4>
    <p>
      Rarely, nerves may get stretched during surgery and can become weak afterward.  
      Most nerve-related symptoms improve gradually with time.
    </p>

    <h4 class="kneePartsTitle">Continued Pain</h4>
    <p>
      A small number of patients continue to have pain after a shoulder replacement.  
      This complication is rare, and the vast majority of patients experience excellent pain 
      relief following surgery.
    </p>

    <p class="note">
      All above mentioned complications are general and may vary with each patient.  
      Post-surgery evaluation is essential for every patient by  
      <strong>Dr. Sachin Karkamkar</strong>.
    </p>

    <p>
      Although complications cannot be predicted in advance, choosing an experienced surgeon and 
      following all postoperative instructions greatly reduces risk. Early reporting of unusual 
      symptoms—such as increasing pain, swelling, fever, or shoulder instability—helps ensure 
      timely management.
    </p>
  `
}

    ]
  }
};

export default shoulderContent;
