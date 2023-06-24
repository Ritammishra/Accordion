const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");

function showFaq() {
  
}

function createFaq() {
  //FAQ-1
    const maindiv = document.createElement("div");
    const heading = document.createElement("div");
    const header = document.createElement("div");
    maindiv.className="faq";
    header.className="faq_header";
    const text = document.createElement("h3");
    text.textContent=faqData[0].question;
    const btn = document.createElement("div");
    btn.innerHTML="+";
    btn.className="show_btn";
    header.appendChild(text);
    header.appendChild(btn);
    maindiv.appendChild(header)
    const para = document.createElement("P");
    para.textContent=faqData[0].answer;
    para.className="hidden";
    heading.appendChild(para);
    maindiv.appendChild(para);
    maindiv.style.display="flex"
    maindiv.style.flexDirection="column"
    btn.addEventListener("click",()=>{
      if (para.style.display === "none") {
        para.style.display="block";
      }else{
        para.style.display="none"
      }
    });
    document.querySelector(".accordion_body").appendChild(maindiv)
    //FAQ-2
    const maindiv2 = document.createElement("div");
    const heading2 = document.createElement("div");
    const header2 = document.createElement("div");
    maindiv2.className="faq";
    header2.className="faq_header";
    const text2 = document.createElement("h3");
    text2.textContent=faqData[1].question;
    const btn2 = document.createElement("div");
    btn2.innerHTML="+";
    btn2.className="show_btn";
    header2.appendChild(text2);
    header2.appendChild(btn2);
    maindiv2.appendChild(header2)
    const para2 = document.createElement("P");
    para2.textContent=faqData[1].answer;
    para2.className="hidden";
    heading2.appendChild(para2);
    maindiv2.appendChild(para2);
    maindiv2.style.display="flex"
    maindiv2.style.flexDirection="column"
    btn2.addEventListener("click",()=>{
      if (para2.style.display === "none") {
        para2.style.display="block";
      }else{
        para2.style.display="none"
      }
    });
    document.querySelector(".accordion_body").appendChild(maindiv2)
    //FAQ-3
    const maindiv3 = document.createElement("div");
    const heading3 = document.createElement("div");
    const header3 = document.createElement("div");
    maindiv3.className="faq";
    header3.className="faq_header";
    const text3 = document.createElement("h3");
    text3.textContent=faqData[2].question;
    const btn3 = document.createElement("div");
    btn3.innerHTML="+";
    btn3.className="show_btn";
    header3.appendChild(text3);
    header3.appendChild(btn3);
    maindiv3.appendChild(header3)
    const para3 = document.createElement("P");
    para3.textContent=faqData[2].answer;
    para3.className="hidden";
    heading3.appendChild(para3);
    maindiv3.appendChild(para3);
    maindiv3.style.display="flex"
    maindiv3.style.flexDirection="column"
    btn3.addEventListener("click",()=>{
      if (para3.style.display === "none") {
        para3.style.display="block";
      }else{
        para3.style.display="none"
      }
    });
    document.querySelector(".accordion_body").appendChild(maindiv3)
}
createFaq();

function btnStatusUpdate() {
  
  
}
btnStatusUpdate();

