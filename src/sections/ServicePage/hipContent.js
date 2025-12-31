import hipNormalImg from "../../assets/ServicesPageImages/normalhipImage.png";
import hipXrayImg from "../../assets/ServicesPageImages/hipXrayImage.png";
import hipCartilageImg from "../../assets/ServicesPageImages/cartilagehipImage.png";
import hipBursaImg from "../../assets/ServicesPageImages/buraseHipImage.png";
import pathologicalHipImg from "../../assets/ServicesPageImages/pathologicalviewHipImage.png";
import hipPainXrayImg from "../../assets/ServicesPageImages/hipPainXrayImage.png";
import whyHipPainImg from "../../assets/ServicesPageImages/WhyHipPainImge.png";
import arthriticVsImplantHipImg from "../../assets/ServicesPageImages/hipArthiticImage.png";
import replacedHipXrayImg from "../../assets/ServicesPageImages/hipXrayImage.png";
import hipImplantsImg from "../../assets/ServicesPageImages/hipProcedureImage.png";
import arthriticVsReplacedHipXrayImg from "../../assets/ServicesPageImages/HipimplantImage.png";


const hipContent = {
  "hip-normal-id": {
    title: "How is a Normal Hip Joint?",
    sections: [
      {
        type: "text",
        content: `
            <p>The hip joint is a ball-and-socket joint...</p>

            <h4 class="kneePartsTitle">How is Normal Hip Joint</h4>
            <p></p>
        `,
      },

      {
        type: "image",
        img: hipNormalImg,
        caption: "Fig: Inside the Hip joint",
      },

      {
        type: "text",
        content: `
            <h4 class="kneePartsTitle">Components of Hip Joint</h4>

            <h4 class="kneePartsTitle">Bones</h4>
            <p>Hip joint is a connection point between thigh bone (femur) and hip bone (pelvis).</p>

            <h4 class="kneePartsTitle">Cartilage</h4>
            <p>
            Cartilage is a smooth substance that covers the top of thigh bone (femoral head) and the acetabulum socket.
            This substance is a cushion that absorbs impact when you walk and move.
            </p>
        `,
      },

      {
        type: "image",
        img: hipXrayImg,
        caption: "Fig: Xray of normal Hip Joint",
      },

      {
        type: "text",
        content: `
            <h4 class="kneePartsTitle">Synovium</h4>
            <p>
            The synovium is a thin cover that wraps around the bones in your joint. 
            It makes a fluid that provides lubrication so your bones can move easily without resistance.
            </p>

            <h4 class="kneePartsTitle">Bursa</h4>
            <p>
            The bursa is a fluid-filled sac that provides cushioning and a smooth surface for the bones, 
            muscles and tendons in your joints to move on.
            </p>
        `,
      },
      {
        type: "image",
        img: hipCartilageImg,
        caption: "Fig: Cartilage Hip joint",
      },

      {
        type: "text",
        content: `
            <h4 class="kneePartsTitle">Ligaments</h4>
            <p>
            Ligaments are fibrous bands of tissue that connect bones to bones, 
            specifically the femoral head to the acetabulum.
            </p>

            <h4 class="kneePartsTitle">Tendons</h4>
            <p>
            Tendons are fibrous bands of tissue that connect your muscles to your bones.
            </p>`,
      },

      {
        type: "image",
        img: hipBursaImg,
        caption: "Fig: Bursae of Hip Joint",
      },

      {
        type: "text",
        content: `

            <h4 class="kneePartsTitle">Muscles</h4>
            <p>
            Your hips have large muscles that support your joint and help you move. 
            Muscles in your hips include your gluteal, adductor muscles, iliopsoas muscle, quadriceps and hamstrings.
            </p>

            <p>
            Normally, all of these components work in harmony. 
            But disease or injury can disrupt this harmony, resulting in pain, muscle weakness, and reduced function.
            </p>

            <p>
            To maintain the fitness of all components, get to know your joint — by Dr. Sachin Karkamkar.
            </p>
        `,
      },
    ],
  },

  "hip-pain-id": {
    title: "Why Does Hip Pain Occur?",
    sections: [
      {
        type: "text",
        content: `
        <h4 class="kneePartsTitle">Causes of Hip Pain</h4>
        <ul>
          <li>Arthritis</li>
          <li>Injuries – Fractures, Ligament Tear, Torn Meniscus</li>
          <li>Avascular necrosis of Femoral head</li>
          <li>Sciatica</li>
          <li>Infections</li>
          <li>Bursitis</li>
          <li>Tendonitis</li>
          <li>Sprained/Strained Muscles/Ligaments</li>
          <li>Referred back/groin pain</li>
        </ul>
    `,
      },

      {
        type: "image",
        img: whyHipPainImg,
      },

      {
        type: "text",
        content: `
        <h4 class="kneePartsTitle">Arthritis</h4>
        <p>
          If your hip is severely damaged by arthritis, it may be hard for you to perform 
          simple activities such as walking or climbing stairs. You may even begin to feel 
          pain while sitting or lying down.
        </p>
        <p>
          If nonsurgical treatments like medications and walking supports are no longer helpful, 
          you may want to consider total hip replacement surgery. Joint replacement surgery is a 
          safe and effective procedure to relieve pain, correct leg deformity, and help resume 
          normal activities.
        </p>`,
      },

      {
        type: "image",
        img: pathologicalHipImg,
        caption: "Fig: Pathological view",
      },
      {
        type: "text",
        content: `
        <p>
          Get to know in detail by <strong>Dr Sachin Karkamkar, Hadapsar, Pune.</strong>
        </p>

        <h4 class="kneePartsTitle">Types of Arthritis Affecting the Hip</h4>
        <h5>Osteoarthritis</h5>
        <ul>
          <li>Primary – Degenerative (Age-related)</li>
          <li>Secondary – Trauma, Infection</li>
        </ul>

        <h5>Inflammatory Arthritis</h5>
        <p>Inflammation causes progressive cartilage damage.</p>
        <ul>
          <li>Rheumatoid Arthritis</li>
          <li>Gout</li>
        </ul>

        <h4 class="kneePartsTitle">Age-Related Osteoarthritis</h4>
        <p>
          The most common cause of chronic hip pain and disability is osteoarthritis. 
          This is an age-related "wear and tear" type of arthritis. It usually occurs in 
          people 50 years and older.
        </p>`,
      },

      {
        type: "image",
        img: hipPainXrayImg,
        caption: "Fig: Xray view",
      },

      {
        type: "text",
        content: `
        <p>
          Aging reduces the ability of chondrocytes to maintain and restore articular cartilage,
          increasing the risk of its degeneration. Progressive degeneration leads to joint pain 
          and dysfunction, clinically known as osteoarthritis.
        </p>

        <p><strong>Articular cartilage can never regenerate. Once lost, it is a permanent loss.</strong></p>
      `,
      },
    ],
  },

  "hip-replacement-id": {
  title: "Hip Replacement",
  sections: [
    /* ---------------------------------------------------
       TAB 1 — Is Hip Replacement for You?
    --------------------------------------------------- */
    {
      id: "hip-replacement-tab-1",
      type: "text",
      tabTitle: "Is Hip Replacement for You?",
      content: `
        <h4 class="kneePartsTitle">Indications of Surgery</h4>
        <p>You may be a candidate for total hip replacement if you experience any of the following:</p>

        <ul>
          <li>Severe hip pain or stiffness that limits day-to-day activities</li>
          <li>Chronic hip inflammation and swelling not relieved by rest or medications</li>
          <li>Structural hip deformity</li>
          <li>Failure of non-surgical treatments such as physiotherapy, medication, or injections</li>
          <li>Increasing dependence on painkillers</li>
        </ul>

        <h4 class="kneePartsTitle">Treatment Goals</h4>
        <ul>
          <li>Control and reduce pain</li>
          <li>Maintain and improve hip function</li>
          <li>Prevent deformity progression</li>
          <li>Prevent long-term disability</li>
        </ul>

        <h4 class="kneePartsTitle">Facts About Hip Replacement</h4>
        <p>
          Modern hip replacement is a highly successful procedure with long-term outcomes.
          Most patients experience major improvement in mobility and quality of life.
        </p>

        <p>
          <a href="#" class="hipFaqLink">Click here to know more FAQs</a>
          
        </p>
      `
    },

    /* ---------------------------------------------------
       TAB 2 — What is Hip Replacement?
       ALL images + content belong INSIDE THIS TAB
    --------------------------------------------------- */
    {
      id: "hip-replacement-tab-2",
      type: "text",
      tabTitle: "What is Hip Replacement?",
      content: `
        <h4 class="kneePartsTitle">What is Hip Replacement?</h4>
        <p>
          A hip replacement (hip arthroplasty) is a hip “resurfacing” surgery where damaged bone surfaces
          are replaced with metal and plastic implants.
        </p>

        <h4 class="kneePartsTitle">Arthritic Hip and Replaced Hip</h4>

        <div class="service-image-block">
          <img src="${arthriticVsImplantHipImg}" alt="Arthritic vs Implant">
          <p class="img-caption">Fig: Arthritic hip [Left] and hip with implants [Right]</p>
        </div>

        <p>
          (Left) Severe osteoarthritis.  
          (Right) Arthritic cartilage and bone removed, replaced with metal implants + plastic spacer.
        </p>

        <div class="service-image-block">
          <img src="${replacedHipXrayImg}" alt="Replaced Hip X-ray">
          <p class="img-caption">Fig: Replaced Hip x-ray</p>
        </div>

        <h4 class="kneePartsTitle">Realistic Expectations</h4>
        <p>
          90% of patients experience dramatic pain relief and improved function after hip replacement.
        </p>
        <p>Recovery depends on age, fitness, and procedure type.</p>
        <p>
          High-impact activities such as running or jumping are discouraged for life.
        </p>
        <p>
          Recommended activities: walking, swimming, cycling, driving, light hiking.
        </p>

        <h4 class="kneePartsTitle">Procedure Overview</h4>
        <p>You may be admitted the day before surgery.</p>
        <p>
          <strong>Anesthesia:</strong> Usually spinal/epidural anesthesia (awake but numb waist-down).
        </p>
        <p>
          <strong>Surgery Duration:</strong> 1 to 2 hours. Surgeon removes damaged cartilage/bone and inserts implants.
        </p>

        <div class="service-image-block">
          <img src="${hipImplantsImg}" alt="Implants">
          <p class="img-caption">Fig: Implants</p>
        </div>

        <p>Different implant types are used based on patient needs.</p>

        <div class="service-image-block">
          <img src="${arthriticVsReplacedHipXrayImg}" alt="Arthritic vs Replaced Xray">
          <p class="img-caption">Fig: Arthritic hip [Rt] and hip with implants [Lt]</p>
        </div>

        <h4 class="kneePartsTitle">Robotic Hip Replacement (rTHR)</h4>
        <p>Robotic surgery uses precision tools to assist the surgeon.</p>

        <ul>
          <li>Reduced hospital stay</li>
          <li>Lower complication rates</li>
          <li>Better surgical accuracy</li>
          <li>Less pain and blood loss</li>
          <li>Only drawback: slightly higher cost</li>
        </ul>

        <p>Dr Sachin Karkamkar can guide you in detail regarding robotic hip replacement.</p>
      `
    },
    {
        id: "hip-replacement-tab-3",
        type: "text",
        tabTitle: "Preparing for Surgery",
        content: `
            <h4 class="kneePartsTitle">Preparing for Hip Replacement Surgery</h4>

            <h4 class="kneePartsTitle">Orthopaedic Evaluation</h4>
            <ul>
            <li><strong>A medical history</strong> – To assess general fitness</li>
            <li><strong>A physical examination</strong> – This will assess hip motion, stability, strength, and overall leg alignment.</li>
            <li><strong>X-rays</strong> – These images help to determine the extent of damage and deformity in your hip.</li>
            <li><strong>Other tests</strong> – Occasionally advanced imaging such as a magnetic resonance imaging (MRI) scan and CT scan may be needed to determine the condition of the bone and soft tissues of your hip.</li>
            </ul>

            <h4 class="kneePartsTitle">Tests For Operative Fitness</h4>
            <p>
            Several tests, such as blood and urine samples, and an electrocardiogram, may be needed to help your orthopedic surgeon and anesthetist to plan your surgery.
            </p>

            <h4 class="kneePartsTitle">Medications</h4>
            <p>
            Tell your orthopedic surgeon about the medications you are consuming. Certain medications like blood thinners and immunosuppressive need to be stopped before surgery.
            </p>

            <h4 class="kneePartsTitle">Dental Evaluation</h4>
            <p>
            Although the incidence of infection after hip replacement is very low, an infection can occur if bacteria enter your bloodstream. To reduce the risk of infection, major dental procedures (such as tooth extractions and periodontal work) should be completed before your total hip replacement surgery.
            </p>

            <h4 class="kneePartsTitle">Urinary Evaluations</h4>
            <p>
            People with a history of recent or frequent urinary infections should have a urological evaluation before surgery. Older men with prostate disease should consider completing required treatment before undertaking hip replacement surgery.
            </p>

            <h4 class="kneePartsTitle">Social Planning</h4>
            <p>
            Although you will be able to walk on crutches or a walker soon after surgery, you will need help for several weeks with such tasks as cooking, shopping, bathing, and doing laundry.
            </p>

            <h4 class="kneePartsTitle">Home Planning</h4>
            <p>Several modifications can make your home easier to navigate during your recovery. The following items may help with daily activities:</p>
            <ul>
            <li>Safety bars or a secure handrail in your shower or bath</li>
            <li>Secure handrails along your stairways</li>
            <li>A stable chair for your early recovery with a firm seat cushion, a firm back, two arms, and a footstool for intermittent leg elevation</li>
            <li>A toilet seat riser with arms, if you have a low toilet</li>
            <li>A stable shower bench or chair for bathing</li>
            <li>Removing all loose carpets and cords</li>
            <li>A temporary living space on the same floor because walking up or down stairs will be more difficult during your early recovery</li>
            </ul>

            <p>
            These instructions for tests and other care are basic, discuss with 
            <strong>Dr. Sachin Karkamkar</strong> for detailed evaluation.
            </p>
        `
    },
    {
        id: "hip-replacement-tab-4",
        type: "text",
        tabTitle: "Post-operative Recovery",
        content: `
            <h4 class="kneePartsTitle">Post-operative Recovery</h4>

            <p>You will most likely stay in the hospital for 4 days.</p>

            <h4 class="kneePartsTitle">Physiotherapy Progression</h4>
            <ul>
            <li>Physiotherapy immediately as advised</li>
            <li>Range of movement in first 4 weeks</li>
            <li>Strengthening next 8 weeks</li>
            <li>Walking with walker first 2 weeks</li>
            <li>Followed by walking with stick for next 2 weeks</li>
            <li>Followed by walking without walking aids</li>
            </ul>

            <p>
            <em>
            *All above mentioned time spans are in general and may vary with each patient. 
            Post-surgery evaluation is needed for each patient @Dr Sachin Karkamkar*
            </em>
            </p>

            <h4 class="kneePartsTitle">Pain Management</h4>
            <p>
            After surgery, you will feel some pain, but your surgeon and nurses will provide 
            medication to make you feel as comfortable as possible. Intravenous medications, 
            skin patches, local infiltration, and regional blocks help to ease the pain.  
            </p>
            <p>
            Pain management is an important part of recovery. Walking and hip movement will begin 
            soon after surgery, and when you feel less pain, you can start moving sooner and regain 
            strength quicker.
            </p>
            <p>Talk with your surgeon if postoperative pain becomes a problem.</p>

            <h4 class="kneePartsTitle">Blood Clot Prevention</h4>
            <p>Your orthopedic surgeon may prescribe measures to prevent blood clots:</p>
            <ul>
            <li>Special support stockings</li>
            <li>Inflatable leg coverings (compression boots)</li>
            <li>Blood thinners</li>
            <li>Foot and ankle movement encouraged immediately after surgery</li>
            </ul>

            <h4 class="kneePartsTitle">Physical Therapy</h4>
            <p>
            A continuous passive motion machine can help prevent postoperative hip stiffness.  
            Most patients begin exercising the hip the day after surgery.
            </p>
            <p>
            A physical therapist will teach you exercises to strengthen your leg and restore 
            hip movement, helping you resume walking and daily activities.
            </p>

            <h4 class="kneePartsTitle">Your Recovery at Home</h4>

            <h5>Wound Care</h5>
            <p>
            You will have stitches or staples along your wound, or a dissolving suture beneath the skin.  
            Stitches/staples are removed about 2 weeks after surgery.  
            </p>
            <p>
            Avoid soaking the wound until fully healed.  
            You may continue bandaging the wound to prevent irritation.
            </p>

            <h5>Diet</h5>
            <p>
            Loss of appetite is common for several weeks.  
            Take light, small, frequent meals.  
            A high-protein diet helps in faster wound and muscle recovery.  
            </p>

            <h5>Activity</h5>
            <p>
            Exercise is a critical component in the first few weeks after surgery.  
            Most normal daily activities can be resumed within 3–6 weeks.
            </p>
            <p>Some pain with activity and at night is normal during early recovery.</p>

            <p>Your activity program should include:</p>
            <ul>
            <li>A graduated walking program (first indoors, then outdoors)</li>
            <li>Resuming basic household movements: sitting, standing, climbing stairs</li>
            <li>Specific hip exercises multiple times a day</li>
            </ul>

            <p>
            You may perform exercises independently, but a physical therapist is recommended 
            at home or a therapy center during the first few weeks.
            </p>

            <h4 class="kneePartsTitle">Outcomes</h4>

            <h5>How Your New Hip Is Different</h5>
            <p>
            Improvement of hip motion is a goal of total hip replacement; most patients regain 
            near-full motion.  
            The range of motion after surgery depends on the mobility you had before surgery.
            </p>

            <p>Normal expectations include:</p>
            <ul>
            <li>Mild numbness around the incision</li>
            <li>Some stiffness, especially with bending</li>
            <li>Occasional clicking sounds from metal and plastic components</li>
            </ul>

            <p>
            These are common and usually diminish with time.  
            Your new hip may set off airport metal detectors — inform security when needed.
            </p>

            <h4 class="kneePartsTitle">Protecting Your Hip Replacement</h4>
            <ul>
            <li>Participate in regular light exercise</li>
            <li>Take precautions to avoid falls</li>
            <li>Inform your dentist you have a hip replacement — antibiotics recommended before dental surgery</li>
            <li>See your orthopedic surgeon yearly for follow-up and X-rays</li>
            </ul>

            <h4 class="kneePartsTitle">Extending the Life of Your Hip Implant</h4>
            <p>
            More than 90% of modern hip replacements function well for 18–20+ years.  
            Following your surgeon’s instructions and maintaining your overall health 
            greatly improves long-term success.
            </p>
        `
        },
        {
            id: "hip-replacement-tab-5",
            type: "text",
            tabTitle: "Possible Complications",
            content: `
                <h4 class="kneePartsTitle">Possible Complications of Surgery</h4>

                <p>
                The complication rate following total knee replacement is low. Serious complications, 
                such as a knee joint infection, occur in fewer than 2% of patients. Major medical 
                complications such as heart attack or stroke occur even less frequently.
                </p>

                <h4 class="kneePartsTitle">Infection</h4>
                <p>
                Infection may occur in the wound or deep around the prosthesis. It may happen while 
                in the hospital or after you go home. Any infection in your body can spread to your 
                joint replacement. It may even occur years later.
                </p>
                <p>
                Minor infections in the wound area are generally treated with antibiotics.  
                Major or deep infections may require more surgery and removal of the prosthesis.
                </p>

                <h4 class="kneePartsTitle">Blood Clots</h4>
                <p>
                Blood clots in the leg veins are the most common complication of knee replacement surgery.  
                These clots can be life-threatening if they break free and travel to your lungs.
                </p>
                <p>Your orthopedic surgeon may advise:</p>
                <ul>
                <li>Periodic elevation of your legs</li>
                <li>Lower leg exercises to improve circulation</li>
                <li>Support stockings</li>
                <li>Blood-thinning medications</li>
                </ul>

                <h4 class="kneePartsTitle">Implant Problems</h4>
                <p>
                Although implant designs and materials continue to advance, implant surfaces may wear 
                down and components may loosen over time. These implants are of good quality, cause 
                no allergy, and are MRI compatible.
                </p>

                <h4 class="kneePartsTitle">Continued Pain</h4>
                <p>
                A small number of patients may continue to have minimal but tolerable pain after hip 
                replacement. This may happen due to muscle weakness. This complication is rare, and 
                the vast majority of patients experience excellent pain relief.
                </p>

                <h4 class="kneePartsTitle">Neurovascular Injury</h4>
                <p>
                While very rare, injury to the nerves or blood vessels around the knee can occur during surgery.
                </p>

                <p>
                <em>
                *All above mentioned time spans are in general and may vary with each patient.  
                Post-surgery evaluation is needed for each patient @Dr Sachin Karkamkar*
                </em>
                </p>
            `
            }



  ]
},


};

export default hipContent;
