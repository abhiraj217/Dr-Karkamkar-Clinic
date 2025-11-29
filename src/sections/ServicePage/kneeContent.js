import normalKneeImage from "../../assets/ServicesPageImages/normalkneeImage.png";
import xrayimageknee from "../../assets/ServicesPageImages/xrayimageknee2.png";
import kneeJointImage1 from '../../assets/ServicesPageImages/kneeJointActual1.png';
import kneeJointImage2 from "../../assets/ServicesPageImages/kneeJointActual2.png";
import kneeCartilage from "../../assets/ServicesPageImages/articularCartilageImage.png";
import kneeligsment from "../../assets/ServicesPageImages/kneeligamentImage.png";
import kneeBurseImage from "../../assets/ServicesPageImages/kneeBurseImage.png";
import kneeTendonsImage from "../../assets/ServicesPageImages/kneetendonsImage.png";
import KneeMulscesImage from "../../assets/ServicesPageImages/KneeMulscesImage.png";
import kneepainImage from "../../assets/ServicesPageImages/kneepainImage.png";
import xrayKneePainImage from "../../assets/ServicesPageImages/kneepainexray.png";
import pathologicalViewImage from '../../assets/ServicesPageImages/pathologicalviewImage.png';
import arthoscoopyimageknee1 from "../../assets/ServicesPageImages/KneeArthoscopyImage.png";
import arthoscoopyimageknee2 from "../../assets/ServicesPageImages/kneArthoscopyImagemrthod.png";
import kneemeniscusImage from "../../assets/ServicesPageImages/kneetearmisclinoutypesImage.png";
import kneemeniscusImage2 from "../../assets/ServicesPageImages/kneeMicslineousimage2.png";
import kneemeniscusImage3 from "../../assets/ServicesPageImages/musilineausRepair.png";
import kneemeniscusImage4 from "../../assets/ServicesPageImages/kneetearmisclinoutypesImage.png";


const kneeContent = {
  "knee-normal-id": {
  title: "How is a Normal Knee Joint?",
  sections: [
    {
      type: "text",
      content: `
      <p>
      A normal knee joint is a strong, flexible hinge joint that allows you to walk, run, sit, and stand.  
      All its components work in harmony to ensure smooth, pain-free movement.  
      Below is a detailed explanation of each structure of the knee.
      </p>`
    },

    {
      type: "image",
      img: normalKneeImage,
      caption: "Inside the Knee Joint"
    },

    {
      type: "text",
      content: `
      <h4 class="kneePartsTitle">Bones</h4>
      <p>The knee is formed by three major bones:</p>
      <ul>
        <li>Femur (Thighbone)</li>
        <li>Tibia (Shinbone)</li>
        <li>Patella (Kneecap)</li>
      </ul>
      <p>These bones create the main structure of the knee joint.</p>`
    },

    {
      type: "image",
      img: xrayimageknee,
      caption: "Xray of normal Knee Joint [Anteroposterior and Lateral view]"
    },
    // {
    //   type: "image-row",
    //   images: [
    //     { img: kneeJointImage1, caption: "Knee joint at actual" },
    //     { img: kneeJointImage2, caption: "Knee joint at actual" }
    //   ]
    // },

    {
      type: "text",
      content: `
      <h4 class="kneePartsTitle">Cartilage</h4>
      <ul>
        <li>Articular cartilage is a smooth white tissue covering bone ends.It covers the ends of bones where they come together to form joints. </li>
        <li>It reduces friction and allows pain-free movement.</li>
        <li>Healthy cartilage in our joints makes it easier to move. 
          It allows the bones to glide over each other with very little friction.
          </li>
      </ul>`
    },



    {
      type: "image",
      img: kneeCartilage,
      caption: "Knee Articular Cartilages"
    },

    {
      type: "text",
      content: `
      <h4 class="kneePartsTitle">Meniscus</h4>
      <ul>
        <li>The menisci are located between the femur and tibia. These C-shaped wedges act as "shock absorbers" that cushion the joint. </li>
        <li>Two C-shaped menisci act as natural shock absorbers.</li>
        <li>They cushion the joint and help distribute body weight evenly.</li>
      </ul>`
    },

    {
      type: "text",
      content: `
      <h4 class="kneePartsTitle">Ligaments</h4>
      <p>Ligaments connect the femur and tibia, providing stability. The four major ligaments are:</p>
      <ul>
        <li>ACL (Anterior Cruciate Ligament)</li>
        <li>PCL (Posterior Cruciate Ligament)</li>
        <li>MCL (Medial Collateral Ligament)</li>
        <li>LCL (Lateral Collateral Ligament)</li>
      </ul>
      <p>They help control forward, backward, and side-to-side movement.</p>`
    },

    {
      type: "image",
      img: kneeligsment,
      caption: "Knee ligaments and Menisci together"
    },

    {
      type: "text",
      content: `
      <h4 class="kneePartsTitle">Synovium</h4>
      <ul>
        <li>The synovium is a thin cover that wraps around the bones in your joint. It makes a fluid that provides lubrication so your bones can move easily without resistance.</li>
        <li>A thin lining inside the knee joint.</li>
        <li>Produces synovial fluid for lubrication.</li>
        <li>Reduces friction during movement.</li>
      </ul>`
    },

    {
      type: "text",
      content: `
      <h4 class="kneePartsTitle">Bursa</h4>
      <ul>
        <li>Small fluid-filled sacs around the joint.</li>
        <li>Prevent friction between bones, tendons, and muscles.</li>
        <li>Act as cushioning pads.</li>
      </ul>`
    },

    {
      type: "image",
      img: kneeBurseImage,
      caption: "Knee Bursae"
    },

    {
      type: "text",
      content: `
      <h4 class="kneePartsTitle">Tendons</h4>
      <ul>
        <li>Fibrous tissues connecting muscles to bones.</li>
        <li>Help control movement of the joint.</li>
      </ul>`
    },

    {
      type: "image",
      img: kneeTendonsImage,
      caption: "Knee Tendons"
    },

    {
      type: "text",
      content: `
      <h4 class="kneePartsTitle">Muscles</h4>
      <ul>
        <li>Provide stability and control.</li>
        <li>Help in bending, straightening, and supporting the knee.</li>
      </ul>`
    },

    {
      type: "image",
      img: KneeMulscesImage,
      caption: "Knee Tendons"
    },
    {
      type: "text",
      content: `
      <h4 class="kneePartsTitle">When Everything Works Together</h4>
      <p>A healthy knee has:</p>
      <ul>
        <li>Smooth movement</li>
        <li>No pain</li>
        <li>Strong muscles</li>
        <li>Stable ligaments</li>
        <li>Well-lubricated cartilage</li>
      </ul>
      <p>
      Normally, all of these components work in harmony. But disease or injury can disrupt this harmony, resulting in pain, muscle weakness, and reduced function.
      </p>

  
      <p>
      To maintain knee fitness, get to know your joint — by <strong>Dr. Sachin Karkamkar</strong>.
      </p>`
    }
  ]
},
"knee-pain-id": {
  title: "Why Does Knee Pain?",
  sections: [
    {
      type: "text",
      content: `
        <p>
        Knee pain is a very common complaint and can happen due to age, injury, inflammation, or underlying medical conditions. 
        Understanding the causes of knee pain helps in early diagnosis and better treatment outcomes.
        </p>
        <h4 class="kneePartsTitle">Causes of Knee Pain</h4>
        <ul>
          <li>Arthritis</li>
          <li>Injuries – Fractures, Ligament Tear, Torn Meniscus, Patellar Dislocation</li>
          <li>Infections</li>
          <li>Bursitis</li>
          <li>Tendonitis</li>
          <li>Sprained/Strained Muscles or Ligaments</li>
          <li>Referred Hip/Foot Pain</li>
        </ul>
      `
    },
    {
      type:"image",
      img:kneepainImage,
      title:"Knee Pain Image"
    },

    {
      type: "text",
      content: `
        <h4 class="kneePartsTitle">Arthritis</h4>
        <p>
        If your knee is severely damaged by arthritis, it may be hard for you to perform simple activities, 
        such as walking or climbing stairs. You may even begin to feel pain while sitting or lying down.
        </p>
        <p>
        If nonsurgical treatments like medications and walking supports are no longer effective, total knee replacement surgery 
        may be required. 
        </p>
        <p>Joint replacement is a safe and effective procedure to relieve pain, correct deformity, 
        and restore normal function.</p>       
      `
    },

    {
      type: "text",
      content: `
        <h4 class="kneePartsTitle">Types of Arthritis Causing Knee Pain</h4>
        <ul>
          <li>
            <strong>Osteoarthritis</strong>
            <ul>
              <li>Primary – Degenerative (Age-related wear and tear)</li>
              <li>Secondary – Trauma, Infection</li>
            </ul>
          </li>

          <li>
            <strong>Inflammatory Arthritis</strong>
            <ul>
              <li>Inflammation causes progressive cartilage damage</li>
              <li>Rheumatoid Arthritis</li>
              <li>Gout</li>
            </ul>
          </li>
        </ul>
      `
    },
    {
      type: "image",
      img: pathologicalViewImage,  // replace with your actual import
      caption: "Pathological View"
    },

    {
      type: "text",
      content: `
        <h4 class="kneePartsTitle">Age-Related Osteoarthritis</h4>
        <p>
        The most common cause of chronic knee pain and disability is Osteoarthritis. 
        It is an age-related <strong>“wear and tear”</strong> arthritis typically seen in people above 50 years.
        </p>

        <ul>
          <li>
            Aging decreases the ability of chondrocytes to maintain and repair articular cartilage.
          </li>
          <li>
            This increases the risk of degeneration of the cartilage surface.
          </li>
          <li>
            Progressive cartilage loss leads to knee pain, stiffness, swelling, and reduced joint function.
          </li>
        </ul>

        <p><strong>Important:</strong> Articular cartilage cannot regenerate. Once lost, it is a permanent loss.</p>
      `
    },

    {
      type: "image",
      img: xrayKneePainImage, // replace with your actual import
      caption: "X-ray View"
    },
    {
      type:"text",
      content:` <p>Get to know in detail by <strong>Dr. Sachin Karkamkar @ Hadapsar, Pune</strong>.</p>`
    }
  ]
},
"knee-arthoscopy-id": {
  title: "Knee Arthroscopy",
  sections: [
     {
      id: "what-is",
      tabTitle: "What is Knee Arthroscopy",
      type: "text",
      content: `
        <h4 class="kneePartsTitle">Knee Arthroscopy</h4>

        <p>
        Knee arthroscopy is an effective tool in diagnosing your joint condition and for confirming treatment for knee 
        problems such as meniscus tears and cartilage wear. An arthroscopy can ultimately provide relief from knee pain 
        and improve mobility. Maintaining a normal and active lifestyle with greater comfort is a key benefit of this procedure.
        </p>

        <!-- IMAGE 1 PLACE -->
        <div class="arthroscopy-img-2">
        <img src=${arthoscoopyimageknee1} alt="arthoscopyImage" />
        </div>

        <p>
        A minimally invasive surgical procedure used by orthopaedic surgeons to visualize, diagnose, and treat 
        problems within a joint.
        </p>

        <h4 class="kneePartsTitle">Method</h4>
        <ul>
          <li>Arthroscope is used to see inside a joint using an arthroscope, which is a thin tube with a camera and light source.</li>
          <li>It is minimally invasive — it involves smaller incisions compared to traditional open surgery.</li>
          <li>Therefore there is less pain, less scarring, and faster recovery.</li>
        </ul>

        <!-- IMAGE 2 PLACE -->
        <div class="arthroscopy-img-2">
        <img src=${arthoscoopyimageknee2} alt="arthoscopyImage" />
        </div>

        <h4 class="kneePartsTitle">What is an arthroscopy of the knee?</h4>

        <p>
        Two points of entry are necessary, one on each side of the patellar tendon. These are closed with the aid of a 
        thread or a steristrip at the end of the operation.
        </p>

        <p>
        The inside of the knee is filmed and checked on a video screen. Photographs are taken of the key moments 
        of the arthroscopy. Under the control of the video, the instruments enable the palpation, examination, repairing 
        or removal of certain intra-articular elements of the knee.
        </p>

        <ul>
          <li>The menisci are repaired or partially removed.</li>
          <li>The cartilage can be filed down to look smoother.</li>
          <li>The cruciate ligaments are inspected, palpated, and whenever indicated reconstructed.</li>
          <li>Certain foreign bodies can be easily removed.</li>
          <li>The synovial tissue can be removed for cleaning or histological analysis.</li>
        </ul>
      `
    },

{
  id: "indications",
  tabTitle: "Indications",
  type: "text",
  content: `
    <h4 class="kneePartsTitle">Indications</h4>
    <p>
      Arthroscopy of the knee is a technique combining two advantages:
    </p>

    <ul>
      <li><strong>Diagnostic:</strong> by visualising the menisci, the cruciate ligaments, the cartilage and the synovial.</li>
      <li><strong>Therapeutic:</strong> since most of the intra-articular lesions are accessible for treatment under arthroscopy.</li>
    </ul>

    <p>
      Knee arthroscopy is an effective tool in diagnosing your joint condition and for confirming treatment of knee problems. 
      An arthroscopy can ultimately provide relief from knee pain and improve mobility.
    </p>

    <h4 class="kneePartsTitle">Arthroscopy for the knee is commonly used for:</h4>

    <ul>
      <li>Removal or repair of torn meniscal cartilage</li>
      <li>Reconstruction of a torn ligaments</li>
      <li>Trimming of torn pieces of articular cartilage</li>
      <li>Removal of loose fragments of bone or cartilage</li>
      <li>Removal of inflamed synovial tissue</li>
      <li>Examination of movements of knee cap bone (patella)</li>
    </ul>

    <p>
      More complex operations can be undertaken under arthroscopy, such as ligament reconstruction of the anterior and posterior cruciate, 
      meniscal sutures, cartilage grafts and the osteosynthesis of certain articular fractures of the tibia.
    </p>

    <p>
      Sometimes, still rarely, arthroscopy has to be transformed into mini-open surgery. 
      This happens in specific scenarios where visualization of pathology and execution of surgical procedure become difficult by arthroscopy.
    </p>
  `
},


{
  id: "procedure",
  tabTitle: "Procedure",
  type: "text",
  content: `
    <h4 class="kneePartsTitle">Knee Arthroscopy Procedure</h4>
        <div class="arthroscopy-img-2">
                <img src=${arthoscoopyimageknee1} alt="arthoscopyImage" />
        </div>
    <h4 class="kneePartsTitle">Preparing for surgery</h4>

    <p>1. Evaluation and tests</p>

    <p>2. Anaesthesia</p>

    <p>
      Arthroscopy of the knee is usually carried out under a spinal anaesthsia.
      A full anaesthetia of the lower limb is necessary for an effective operation.
    </p>

    <h4 class="kneePartsTitle">3. Surgical Procedure</h4>

    <p>
      Knee is cleaned with antiseptic solution for couple of minutes to reduce risk of infection .
      Knee is stabilized on specific supports and made more ergonomic in position.
      Small incision is made over and arthroscope is inserted. Arthroscope has a camera on the other end.
    </p>
        <div class="arthroscopy-img-2">
                <img src=${arthoscoopyimageknee2} alt="arthoscopyImage" />
        </div>
    <p>
      The camera displays pictures on a video monitor, and your surgeon uses these images to guide miniature surgical instruments.
      +This surgical technique is conducted in the operating block in a room reserved for orthopaedic surgery,
      where the most rigorous aseptic condition is maintained.
    </p>

    <p>
      Two to three points of entry are necessary, one on each side of the patellar tendon.
      These are closed with the aid of a thread or a steristrip at the end of the operation.
    </p>

    <p>
      The inside of the knee is filmed and checked on a colour video screen.
      Under the control of the video, the instruments enable the palpation, examination,
      repairing or removal of certain intra-articular elements of the knee.
    </p>

    <ul>
      <li>The menisci are repaired or partially removed, this depends on tissue quality</li>
      <li>The cartilage can be filed down to look smoother,</li>
      <li>The cruciate ligaments are inspected, palpated and reconstructed</li>
      <li>Certain foreign bodies can be easily removed,</li>
      <li>Finally, the synovial can be taken out for cleaning or histological analysis if needed..</li>
    </ul>
        <div class="arthroscopy-img-2">
                <img src=${kneemeniscusImage} alt="arthoscopyImage" />
        </div>
    <p>
      The orthopaedic surgeon through the small incisions made in your knee, pass a sterile solution to fill the knee joint and rinse away any cloudy fluid. This helps your orthopaedic surgeon to see your knee clearly and in great detail.
    </p>

    <p>
      Your surgeon's first task is to properly diagnose your problem. He or she will insert the arthroscope and use the image projected on the screen to guide it. If surgical treatment is needed, your surgeon will insert tiny instruments through another small incision. These instruments might be scissors, motorized shavers, or lasers. This part of the procedure usually lasts 30 minutes to over an hour. How long it takes depends upon the findings and the treatment necessary
    </p>

    <div class ="repairImageDiv">
        <div class="arthroscopy-img-2 repairImageInnerDiv">
                <img src=${kneemeniscusImage2} alt="arthoscopyImage" />
                 <p class="kneePartsTitle centerAlignedknee ">Meniscus repair</p>
        </div>
        <div class="arthroscopy-img-2 repairImageInnerDiv">
                <img src=${kneemeniscusImage3} alt="arthoscopyImage" />
                 <p class="kneePartsTitle centerAlignedknee">ACL Reconstruction</p>
        </div>
    </div>
  `
},

    {
      id: "preparing",
      tabTitle: "Preparing for Arthroscopy",
      type: "text",
      content: `
        <h4 class="kneePartsTitle">Preparing for Knee Arthroscopy</h4>
        <ul>
          <li>Pre-op evaluation including blood tests and an anesthetic assessment.</li>
          <li>Stop certain medications (e.g., blood thinners) as advised by the surgeon.</li>
          <li>Arrange transport home; do not drive the same day.</li>
          <li>Follow fasting instructions if general anaesthesia is planned.</li>
          <li>Wear comfortable loose clothing and remove jewelry before surgery.</li>
        </ul>
        <p>Dr. Sachin Karkamkar will provide a personalized checklist before your operation.</p>`
    },

    {
      id: "recovery",
      tabTitle: "Recovery",
      type: "text",
      content: `
        <h4 class="kneePartsTitle">Recovery After Arthroscopy</h4>
        <ul>
          <li>Most patients walk with crutches for a few days depending on procedure.</li>
          <li>Pain is usually moderate and controlled with oral analgesics.</li>
          <li>Physiotherapy starts early to regain motion and strength.</li>
          <li>Return to light daily activities: days to 2 weeks (varies).</li>
          <li>Return to sports/work depending on the procedure (6 weeks to several months).</li>
        </ul>
        <p>
          Wound care, follow-up, and a rehabilitation plan will be provided at discharge.
        </p>`
    },

    {
      id: "complications",
      tabTitle: "Complications",
      type: "text",
      content: `
        <h4 class="kneePartsTitle">Complications</h4>
        <ul>
          <li>Infection (rare)</li>
          <li>Bleeding or haemarthrosis</li>
          <li>Deep vein thrombosis (DVT) — prevention measures are used</li>
          <li>Nerve or blood vessel injury (very rare)</li>
          <li>Persistent pain or stiffness requiring further management</li>
        </ul>
        <p>
          Overall complication rates are low, and most problems are treatable. Discuss risks and preventive measures with your surgeon.
        </p>`
    },

    {
      id: "images",
      tabTitle: "Images",
      type: "images",
      images: [
        { img: kneepainImage, caption: "Arthroscopic view of knee" },
        { img: kneepainImage, caption: "Arthroscopic instruments" }
      ]
    }
  ]
}

};

export default kneeContent;