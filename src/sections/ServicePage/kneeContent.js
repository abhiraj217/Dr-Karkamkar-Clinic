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
import kneeReplacementImage from "../../assets/ServicesPageImages/kneeReplacementImage.png";
import kneeReplacementXrayImage from "../../assets/ServicesPageImages/kneeReplacementXray.png";
import kneeReplacementArthhiticsImage from "../../assets/ServicesPageImages/kneeReplacementXrayArthitics.png";
import kneeIndicationsImage1 from "../../assets/ServicesPageImages/kneeIndicationsImage1.png";
import kneeIndicationsImage2 from "../../assets/ServicesPageImages/kneeIndicationsImage2.png";

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

                <h4 class="kneePartsTitle">Preparing for surgery</h4>

                <p>1. Evaluation and tests</p>

                <p>2. Anaesthesia</p>

                <p>
                Arthroscopy of the knee is usually carried out under a spinal anaesthsia.
                A full anaesthetia of the lower limb is necessary for an effective operation.
                </p>
                        <div class="arthroscopy-img-2">
                            <img src=${arthoscoopyimageknee1} alt="arthoscopyImage" />
                    </div>

                <h4 class="kneePartsTitle">3. Surgical Procedure</h4>

                <p>
                Knee is cleaned with antiseptic solution for couple of minutes to reduce risk of infection .
                Knee is stabilized on specific supports and made more ergonomic in position.
                Small incision is made over and arthroscope is inserted. Arthroscope has a camera on the other end.
                </p>

                <p>
                The camera displays pictures on a video monitor, and your surgeon uses these images to guide miniature surgical instruments.
                +This surgical technique is conducted in the operating block in a room reserved for orthopaedic surgery,
                where the most rigorous aseptic condition is maintained.
                </p>

                <p>
                Two to three points of entry are necessary, one on each side of the patellar tendon.
                These are closed with the aid of a thread or a steristrip at the end of the operation.
                </p>
                    <div class="arthroscopy-img-2">
                            <img src=${arthoscoopyimageknee2} alt="arthoscopyImage" />
                    </div>
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
            tabTitle: "Preparing for Surgery",
            type: "text",
            content: `
                <h4 class="kneePartsTitle">Planning for Surgery</h4>

                <h4 class="kneePartsTitle">Orthopaedic Evaluation</h4>

                <ul>
                <li>A medical history</li>
                <li>A physical examination<br>
                <span style="margin-left:10px;">This will assess knee motion, stability, strength, and overall leg alignment.</span>
                </li>
                <li>X-rays<br>
                <span style="margin-left:10px;">These images help to determine the extent of damage and deformity in your bones.</span>
                </li>
                <li>Other tests<br>
                <span style="margin-left:10px;">Advanced imaging such as a magnetic resonance imaging (MRI) scan, and occasionally CT ,may be needed to determine the condition of the bone and soft tissues of your knee.</span>
                </li>
                </ul>

                <h4 class="kneePartsTitle">Tests For operative fitness:</h4>

                <p>
                Several tests, such as blood and urine samples, and an electrocardiogram, may be needed to help your orthopaedic surgeon and Anaesthtist to plan ,so that your surgery happen well planned and relatively more safer.
                </p>

                <h4 class="kneePartsTitle">Medications:</h4>

                <p>
                Tell your orthopedic surgeon about the medications you are consuming.
                Certain medication like blood thinners and immunosuppressive need to stopped before surgery.
                </p>
            `
            },

            {
            id: "recovery",
            tabTitle: "Recovery",
            type: "text",
            content: `
                <h4 class="kneePartsTitle">Recovery</h4>

                <p>
                Recovery from knee arthroscopy is much faster than recovery from traditional open knee surgery. 
                Still, it is important to follow your orthopaedic surgeon's instructions carefully after you return home.
                </p>

                <h4 class="kneePartsTitle">Swelling:</h4>
                <p>
                Keep your leg elevated as possible for the first few days after surgery. 
                Apply ice as recommended by your doctor to relieve swelling and pain.
                </p>

                <h4 class="kneePartsTitle">Dressing Care :</h4>
                <p>
                You will leave the hospital with a dressing covering your knee. 
                Keep your incisions clean and dry. Do not make it wet during shower or bath.
                Surgeon will guide you about change of dressing. Your surgeon will see you in the office a few days after surgery to check your progress, review the surgical findings, and begin your postoperative treatment program.
                </p>

                <h4 class="kneePartsTitle">Bearing Weight :</h4>
                <p>
                Most patients need walker or crutches or other assistance after arthroscopic surgery. 
                Your surgeon will tell you when it is safe to put weight on your foot and leg. 
                If you have any questions about bearing weight, talk to your surgeon.
                </p>

                <h4 class="kneePartsTitle">Driving :</h4>
                <p>
                Can be started usually after 3mths.But this may vary based on your pathology  
                </p>

                <h4 class="kneePartsTitle">Medications</h4>
                <p>
                Your doctor will prescribe pain medication and antibiotics to help relieve discomfort following your surgery. 
                </p>

                <h4 class="kneePartsTitle">Result</h4>
                <p>
                You should be able to return to most physical activities after few weeks, or sometimes much sooner. 
                Ligament reconstruction and meniscus Rrepair takes around 3 months for basic recovery .Higher impact activities may need to be avoided for a longer time. 
                You will need to talk with your doctor before returning to intense physical activities.
                </p>

                <p>
                If your job involves heavy work, it may be longer before you can return to your job. 
                Discuss when you can safely return to work with your doctor.
                </p>

                <p>
                The final outcome of your surgery will likely be determined by the degree of damage to your knee. 
                For example, if the articular cartilage in your knee has worn away completely, then recovery happen to be partial or near complete . .
                You may need to change your lifestyle. This might mean limiting your activities and finding low-impact exercise alternative.
                </p>
            `
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

            // {
            //   id: "images",
            //   tabTitle: "Images",
            //   type: "images",
            //   images: [
            //     { img: kneepainImage, caption: "Arthroscopic view of knee" },
            //     { img: kneepainImage, caption: "Arthroscopic instruments" }
            //   ]
            // }
        ]
    },

    "knee-replacement-id":{
        title: "Knee Replacement",
        sections: [
            { 
                id: "what-is", 
                tabTitle: "What is Knee Replacement", 
                type: "text", 
                content: `
                <div class="knee-wrapper">

                <h4 class="kneePartsTitle">What is Knee Replacement?</h4>
                <p>
                    A knee replacement (also called knee arthroplasty) might be more accurately termed a knee 
                    "resurfacing" because only the surface of the bones are actually replaced.
                </p>

                <h4 class="kneePartsTitle">Arthritic Knee and Replaced Knee</h4>

                <div class="arthroscopy-img-2">
                    <!-- Add your image URLs -->
                    <img src=${kneeReplacementImage} alt="Arthritic Knee and Replaced Knee" />
                                        
                </div>
                <p class="kneeReplacementLabelText"><strong>Fig:</strong> Arthritic knee [Left] and knee with implants [Right]</p>
                <p>
                    (Left) Severe osteoarthritis. (Right) The arthritic cartilage and underlying bone has been removed 
                    and resurfaced with metal implants on the femur and tibia. A plastic spacer has been placed in 
                    between the implants. The patellar component is not shown for clarity.
                </p>

                <div class="arthroscopy-img-2">

                    <img src=${kneeReplacementXrayImage} alt="Replaced Knee X-ray" />
                </div>
                    <p class="kneeReplacementLabelText"><strong>Fig:</strong> Replaced Knee X-ray</p>
                <h4 class="kneePartsTitle" >Realistic Expectations</h4>

                <p>
                    More than 90% of people who have total knee replacement surgery experience a dramatic reduction 
                    of knee pain and a significant improvement in the ability to perform common activities of 
                    daily living.
                </p>

                <p>
                    Still, recovery depends on age, fitness level and nature of procedure. There is a gradual return 
                    to normal activities.
                </p>

                <p>
                    Most surgeons advise against high-impact activities such as running, jogging, jumping, or 
                    other high-impact sports for the rest of your life after surgery.
                </p>

                <p>
                    Realistic activities following total knee replacement include unlimited walking, swimming, 
                    driving, light hiking, biking, ballroom and other low-impact sports.
                </p>

                <h4 class="kneePartsTitle">Recent Advances in Knee Replacement Surgery</h4>

                <ul>
                    <li>Minimally invasive</li>
                    <li>Robotic surgery</li>
                </ul>

                <p>You will most likely be admitted to the hospital evening before the day of your surgery.</p>

                <h4 class="kneePartsTitle">Anesthesia</h4>
                <p>
                    After admission, you will be evaluated by a member of the anesthesia team. The most common are 
                    spinal, epidural, or regional nerve block anesthesia (you are awake but your body is numb from 
                    the waist down). The anesthesia team, with your input, will determine which type of anesthesia 
                    will be best for you.
                </p>

                <h4 class="kneePartsTitle">Procedure</h4>
                <p>
                    The procedure itself takes approximately 1 to 2 hours. Your orthopaedic surgeon will remove the 
                    damaged cartilage and bone, and then position the new metal and plastic implants to restore the 
                    alignment and function of your knee.
                </p>

                <p>Different types of knee implants are used to meet each patient's individual needs.</p>

                <div class="arthroscopy-img-2">
                  
                    <img src=${kneeReplacementArthhiticsImage} alt="Arthritic and Replaced Knee X-ray" />
                </div>
                <p class="kneeReplacementLabelText"><strong>Fig:</strong> Arthritic knee [Left] and knee with implants [Right]</p>
                <p>
                    (Left) An x-ray of a severely arthritic knee. (Right) The x-ray appearance of a total knee 
                    replacement. Note that the plastic spacer between the bones does not show up in an x-ray.
                </p>

                <p>
                    After surgery, you will be moved to the recovery room, where you will remain for 1 to 2 hours 
                    for recovery from anesthesia. After you wake up, you will be taken to your hospital room.
                </p>

                <h4 class="kneePartsTitle">Robotic Knee Replacement</h4>

                <p>
                    The term “robotic surgery” refers to the use of programmable devices to perform a wide variety 
                    of surgical tasks. These are not intended to replace the surgeon but rather to provide assistance.
                </p>



                <ul>
                    <li>Reduces duration of hospital stay</li>
                    <li>Lowers complication rates</li>
                    <li>Improves perioperative outcomes</li>
                    <li>Reduces blood loss</li>
                    <li>Reduced pain</li>
                    <li>Faster recovery</li>
                </ul>
                <p><strong>Dr Sachin Karkamkar </strong> can provide detailed guidance.</p>
                </div>
                `},
            { 
                id: "indications", 
                tabTitle: "Is knee replacement for you", 
                type: "text", 
                content: `
                <div class="knee-wrapper">

                    <h4 class="kneePartsTitle">Is Knee Replacement for You?</h4>

                    <p>
                        Knee replacement surgery is generally recommended when knee pain, stiffness, or deformity 
                        starts limiting daily activities and does not improve with conservative treatments such as 
                        rest, physiotherapy, medications, or injections.
                    </p>

                    <h4 class="kneePartsTitle">Indications of Surgery</h4>

                    <ul>
                        <li>Severe knee pain or stiffness that limits everyday activities like walking, climbing stairs, or sitting/standing</li>
                        <li>Chronic knee inflammation and swelling that does not improve with rest or medication</li>
                        <li>Knee deformity such as bow-leg or knock-knee appearance</li>
                        <li>Failure of other non-surgical treatments such as physiotherapy, injections, braces, or medications</li>
                        <li>Increased dependence on pain killers for daily functioning</li>
                        <li>Difficulty sleeping due to persistent knee pain</li>
                        <li>Pain even at rest or during night</li>
                    </ul>

                    <!-- IMAGE SLOT 01 -->
                    <div class="arthroscopy-img-2">
                        <img src=${kneeIndicationsImage1} alt="Indications of knee replacement" />
                    </div>
                    <p class="kneeReplacementLabelText"><strong>Fig:</strong> Common symptoms indicating need for knee replacement</p>

                    <h4 class="kneePartsTitle">Treatment Goals</h4>

                    <ul>
                        <li>Control knee pain</li>
                        <li>Maintain joint function and mobility</li>
                        <li>Prevent further deformity</li>
                        <li>Prevent long-term disability</li>
                        <li>Improve ability to perform daily activities comfortably</li>
                        <li>Enhance overall quality of life</li>
                    </ul>

                    <!-- IMAGE SLOT 02 -->
                    <div class="arthroscopy-img-2">
                        <img src=${kneeIndicationsImage2} alt="Knee treatment goals" />
                    </div>

                    <p>
                        If non-operative measures fail to provide long-term relief and symptoms continue to worsen, 
                        your orthopedic surgeon may recommend total knee replacement as the most effective option 
                        to restore mobility and reduce pain.
                    </p>

                </div>
                `},
            { 
                id: "Recovery", 
                tabTitle: "Recovery", 
                type: "text", 
                content: `
                    <div class="knee-wrapper">

                        <h4 class="kneePartsTitle">Post-operative Recovery</h4>

                        <ul>
                            <li>You will most likely stay in the hospital for 4 days.</li>
                            <li>Physiotherapy is started immediately as advised</li>
                            <li>Range of movement should improve progressively over first 4 weeks</li>
                            <li>Strengthening improves progressively in next 8 weeks</li>
                            <li>Walking with walker first 2 weeks</li>
                            <li>Followed by walking with stick for next 2 weeks</li>
                            <li>Followed by walking without walking aids</li>
                        </ul>

                        <p>
                            *All above mentioned time spans are in general and may varies with each patient. Post surgery 
                            evaluation is needed for each patient @Dr Sachin Karkamkar *
                        </p>

                        <h4 class="kneePartsTitle">Pain Management</h4>

                        <p>
                            After surgery, you will feel some pain, but your surgeon and nurses will provide medication to make 
                            you feel as comfortable as possible. Different routes are utilized for this. Intravenous, skin 
                            patches, local infiltration and regional blocks help to ease out pain of patient. Pain management is 
                            an important part of your recovery.
                        </p>

                        <p>
                            Walking and knee movement will begin soon after surgery, and when you feel less pain, you can 
                            start moving sooner and get your strength back more quickly. Talk with your surgeon if 
                            postoperative pain becomes a problem.
                        </p>

                        <h4 class="kneePartsTitle">Blood Clot Prevention</h4>

                        <p>
                            Your orthopaedic surgeon may prescribe one or more measures to prevent blood clots and decrease 
                            leg swelling. These may include special support hose, inflatable leg coverings (compression boots), 
                            and blood thinners.
                        </p>

                        <p>
                            Foot and ankle movement also is encouraged immediately following surgery to increase blood flow in 
                            your leg muscles to help prevent leg swelling and blood clots.
                        </p>

                        <h4 class="kneePartsTitle">Physical Therapy</h4>

                        <p>
                            A continuous passive motion machine can help prevent postoperative knee stiffness in the early 
                            postoperative period. Most patients begin exercising their knee the day after surgery. 
                        </p>

                        <p>
                            A physical therapist will teach you specific exercises to strengthen your leg and restore knee 
                            movement to allow walking and other normal daily activities soon after your surgery.
                        </p>

                        <h4 class="kneePartsTitle">Your Recovery at Home</h4>

                        <h4 class="kneePartsTitle">Wound Care</h4>

                        <p>
                            You will have stitches or staples running along your wound or a suture beneath your skin on the 
                            front of your knee. The stitches or staples over skin will be removed two weeks after surgery. 
                            Sutures in deeper muscles dissolve on their own and don’t need removal.
                        </p>

                        <p>
                            Avoid soaking the wound in water until it has thoroughly sealed and dried. You may continue to 
                            bandage the wound to prevent irritation from clothing or support stockings.
                        </p>

                        <h4 class="kneePartsTitle">Diet</h4>

                        <p>
                            Some loss of appetite is common for several weeks after surgery. Take light, small, and frequent 
                            meals. High protein diet helps in faster wound and muscle strength recovery.
                        </p>

                        <h4 class="kneePartsTitle">Activity</h4>

                        <p>
                            Exercise is a critical component of home care, particularly during the first few weeks after 
                            surgery. You should be able to resume most normal activities of daily living within 3 to 6 weeks 
                            following surgery.
                        </p>

                        <p>
                            Some pain with activity and at night is common for several weeks after surgery.
                        </p>

                        <p>Your activity program should include:</p>

                        <ul>
                            <li>A graduated walking program to slowly increase your mobility, initially in your home and later outside</li>
                            <li>Resuming other normal household activities, such as sitting, standing, and climbing stairs</li>
                            <li>
                                Specific exercises several times a day to restore movement and strengthen your knee. You 
                                probably will be able to perform the exercises without help, but you may have a physical 
                                therapist help you at home or in a therapy center the first few weeks after surgery. 
                                Involving a physiotherapist fastens your progress.
                            </li>
                        </ul>

                        <h4 class="kneePartsTitle">Outcomes</h4>

                        <h4 class="kneePartsTitle">How Your New Knee Is Different</h4>

                        <p>
                            Improvement of knee motion is a goal of total knee replacement, but restoration of full motion 
                            depends on preoperative stage. The motion of your knee replacement after surgery can be predicted 
                            by the range of motion you have before surgery.
                        </p>

                        <p>
                            Most patients can expect to be able to almost fully straighten the replaced knee and to bend to 
                            near normal range. Movements of knee are more than sufficient to climb stairs and get in and out 
                            of a car, and sit comfortably on a chair or stool.
                        </p>

                        <p>This is normal:</p>

                        <ul>
                            <li>Most people feel some numbness in the skin around your incision.</li>
                            <li>You also may feel some stiffness, particularly with excessive bending activities.</li>
                            <li>Most people also feel or hear some clicking of the metal and plastic with knee bending or walking.</li>
                        </ul>

                        <p>
                            These differences often diminish with time and most patients find them to be tolerable when compared 
                            with the pain and limited function they experienced prior to surgery.
                        </p>

                        <p>
                            Your new knee may activate metal detectors required for security in airports and some buildings. Tell 
                            the security agent about your knee replacement if the alarm is activated.
                        </p>

                        <h4 class="kneePartsTitle">Protecting Your Knee Replacement</h4>

                        <ul>
                            <li>Participate in regular light exercise programs to maintain proper strength and mobility of your new knee</li>
                            <li>Take special precautions to avoid falls and injuries; a fracture may require more surgery</li>
                            <li>Make sure your dentist knows that you have a knee replacement; antibiotics are required before dental surgery</li>
                            <li>See your orthopedic surgeon periodically for routine follow-up examination and x-rays, usually once a year</li>
                        </ul>

                        <h4 class="kneePartsTitle">Extending the Life of Your Knee Implant</h4>

                        <p>
                            Currently, more than 90% of modern total knee replacements are still functioning well 20 years after 
                            the surgery. Following your orthopedic surgeon's instructions after surgery and taking care to protect 
                            your knee replacement and general health are important ways you can contribute to the final success 
                            of your surgery.
                        </p>

                    </div>


                `},
                { 
                id: "Preparing-for-knee-Replacement" ,
                tabTitle: "knee Replacement Surgery", 
                type: "text", 
                content: `
                <div class="knee-wrapper">

                    <h4 class="kneePartsTitle">Preparing for Knee Replacement Surgery</h4>

                    <h4 class="kneePartsTitle">Orthopaedic Evaluation</h4>

                    <ul>
                        <li>A medical history</li>
                        <li>A physical examination — This will assess knee motion, stability, strength, and overall leg alignment.</li>
                        <li>X-rays — These images help to determine the extent of damage and deformity in your knee.</li>
                        <li>Other tests — Occasionally advanced imaging such as a magnetic resonance imaging (MRI) scan may be needed to determine the condition of the bone and soft tissues of your knee.</li>
                    </ul>

                    <h4 class="kneePartsTitle">Tests For Operative Fitness</h4>

                    <p>
                        Several tests, such as blood and urine samples, and an electrocardiogram, may be needed to help 
                        your orthopaedic surgeon and Anaesthetist to plan, so that your surgery happens well planned 
                        and relatively more safer.
                    </p>

                    <h4 class="kneePartsTitle">Medications</h4>

                    <p>
                        Tell your orthopedic surgeon about the medications you are consuming. Certain medications like 
                        blood thinners and immunosuppressives need to be stopped before surgery.
                    </p>

                    <h4 class="kneePartsTitle">Dental Evaluation</h4>

                    <p>
                        Although the incidence of infection after knee replacement is very low, an infection can occur 
                        if bacteria enter your bloodstream. To reduce the risk of infection, major dental procedures 
                        (such as tooth extractions and periodontal work) should be completed before your total knee 
                        replacement surgery.
                    </p>

                    <h4 class="kneePartsTitle">Urinary Evaluations</h4>

                    <p>
                        People with a history of recent or frequent urinary infections should have a urological 
                        evaluation before surgery. Older men with prostate disease should consider completing 
                        required treatment before undertaking knee replacement surgery.
                    </p>

                    <h4 class="kneePartsTitle">Social Planning</h4>

                    <p>
                        Although you will be able to walk on crutches or a walker soon after surgery, you will need help 
                        for several weeks with such tasks as cooking, shopping, bathing, and doing laundry.
                    </p>

                    <h4 class="kneePartsTitle">Home Planning</h4>

                    <p>Several modifications can make your home easier to navigate during your recovery. The following items may help with daily activities:</p>

                    <ul>
                        <li>Safety bars or a secure handrail in your shower or bath</li>
                        <li>Secure handrails along your stairways</li>
                        <li>
                            A stable chair for your early recovery with a firm seat cushion, a firm back, two arms, and 
                            a footstool for intermittent leg elevation
                        </li>
                        <li>A toilet seat riser with arms, if you have a low toilet</li>
                        <li>A stable shower bench or chair for bathing</li>
                        <li>Removing all loose carpets and cords</li>
                        <li>
                            A temporary living space on the same floor because walking up or down stairs will be more 
                            difficult during your early recovery
                        </li>
                    </ul>

                    <p>
                        The instructions for tests and other care are basic, please discuss with 
                        <strong>Dr. Sachin Karkamkar</strong> for detailed evaluation.
                    </p>

                </div>

                `},
                {
                    id:"possible-complication",
                tabTitle: "Possible Complications", 
                type: "text", 
                content: `<div class="knee-wrapper">

                <h4 class="kneePartsTitle">Possible Complications of Surgery</h4>

                <p>
                    The complication rate following total knee replacement is low. Serious complications, such as a 
                    knee joint infection, occur in fewer than 2% of patients. Major medical complications such as 
                    heart attack or stroke occur even less frequently.
                </p>

                <h4 class="kneePartsTitle">Infection</h4>

                <p>
                    Infection may occur in the wound or deep around the prosthesis. It may happen while in the hospital 
                    or after you go home. Any infection in your body can spread to your joint replacement. It may even 
                    occur years later. Minor infections in the wound area are generally treated with antibiotics. 
                    Major or deep infections may require more surgery and removal of the prosthesis.
                </p>

                <h4 class="kneePartsTitle">Blood Clots</h4>

                <p>
                    Blood clots in the leg veins are the uncommon complication of knee replacement surgery. These clots 
                    can be life-threatening if they break free and travel to your lungs. Your orthopedic surgeon will 
                    outline a prevention program, which may include periodic elevation of your legs, lower leg exercises 
                    to increase circulation, support stockings, and medication to thin your blood.
                </p>

                <h4 class="kneePartsTitle">Implant Problems</h4>

                <p>
                    Although implant designs and materials, as well as surgical techniques, continue to advance, implant 
                    surfaces may wear down and the components may loosen. Additionally, although an average of 115° of 
                    motion is generally anticipated after surgery, scarring of the knee can occasionally occur, and motion 
                    may be more limited, particularly in patients with limited motion before surgery.
                </p>

                <h4 class="kneePartsTitle">Continued Pain</h4>

                <p>
                    A small number of patients continue to have pain after a knee replacement. This complication is rare, 
                    however, and the vast majority of patients experience excellent pain relief following knee replacement.
                </p>

                <h4 class="kneePartsTitle">Neurovascular Injury</h4>

                <p>
                    While very rare, injury to the nerves or blood vessels around the knee can occur during surgery.
                </p>

                <p>
                    <em>
                    All above mentioned complications are in general and may varies with each patient. 
                    Post surgery evaluation is needed for each patient @Dr Sachin Karkamkar 
                    </em>
                </p>

            </div>
            `
                }
        ]
    }

};

export default kneeContent;