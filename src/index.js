//adding title to document
document.title = "State Common Entrance Test Cell | Government of Maharashtra";

const root = document.getElementById("root");
//creat a link tag to add css file

const indexCssLink = document.createElement("link");
indexCssLink.rel = "stylesheet";
indexCssLink.href = "../style/index.css";

//append child to the head
document.head.appendChild(indexCssLink);

//creat a link tag to add bootstrap file

const bootStrap = document.createElement("link");
bootStrap.rel = "stylesheet";
bootStrap.href =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";

document.head.appendChild(bootStrap);

//creat a link tag to add fontawasome icons

const fontAwasome = document.createElement("link");
fontAwasome.rel = "stylesheet";
fontAwasome.href =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

document.head.appendChild(fontAwasome);

//There is another easyist way to add above links by using function
//function always return something

// function addLink(path){
//     const name=document.createElement("link")
//     name.rel="stylesheet"
//     name.href=path
//     document.head.appendChild(name)
//     return "successfully linked..."
// }

// addLink("../style/index.css")
// addLink("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css")
// addLink("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")

//Header part start

const header = document.createElement("header");
//Append header to the body

root.appendChild(header);
const headerWrapper = document.createElement("div");
//creat a div to add container to header
const headerContainer = document.createElement("div");
headerContainer.style.width = "80%";
headerContainer.className = "mx-auto";

headerWrapper.style.borderBottom = "1px solid black";

headerWrapper.appendChild(headerContainer);
header.appendChild(headerWrapper);

//Adding nav bar to the headercontainer
const headerNav = document.createElement("nav");

headerNav.style.padding = "5px 0px";
headerContainer.appendChild(headerNav);

const headerNavUl = document.createElement("ul");
headerNavUl.className = "d-flex justify-content-between p-0 m-0";
headerNavUl.style.listStyle = "none";

headerNav.appendChild(headerNavUl);

const array = [
  {
    title: "Skip to main Content",
    icon: "fa-arrow-down",
    flex: 1,
  },
  {
    icon: "fa-volume-up",
    flex: 1,
  },
  {
    icon: "fa-chevron-down",
    title: "A",
    flex: 1,
  },
  {
    icon: "fa-sitemap",
    flex: 1,
  },
  {
    icon: "fa-search",
    flex: 1,
  },
  {
    icon: "fa-youtube-play",
    flex: 0.3,
  },
  {
    icon: "fa-facebook-official",
    flex: 0.3,
  },
  {
    icon: "fa-instagram",
    flex: 0.3,
  },
  {
    icon: "fa-twitter",
    title: "Twitter",
    flex: 1,
  },
];

for (let i = 0; i < array.length; i++) {
  const headerNavUlLi = document.createElement("li");
  headerNavUlLi.style.flex = array[i].flex;

  const headerAnchorTag = document.createElement("a");
  headerAnchorTag.className = "text-dark text-decoration-none";
  headerAnchorTag.href = "#";

  iTag = document.createElement("i");
  iTag.className = `fa ${array[i].icon}`;

  headerAnchorTag.append(iTag);
  headerAnchorTag.append(array[i].title || "");
  headerNavUlLi.appendChild(headerAnchorTag);
  headerNavUl.appendChild(headerNavUlLi);
}

//middle part of the header

const headerMiddle = document.createElement("div");
headerMiddle.className = "container";

const headerMiddleWrapper = document.createElement("div");
headerMiddleWrapper.className = "d-flex mt-2";
headerMiddleWrapper.style.width = "60%";
headerMiddleWrapper.style.height = "100px";

//create a first div for satyamevjayate logo

const satyamevJayate = document.createElement("div");
satyamevJayate.style.height = "100px";
satyamevJayate.style.width = "100px";
//creating a img tag
const satyamevJayateImg = document.createElement("img");
satyamevJayateImg.src = "../image/satyamev-jayte-removebg-preview.png";
satyamevJayateImg.alt = "";
satyamevJayateImg.height = "100";
satyamevJayateImg.width = "100";
satyamevJayateImg.style.objectFit = "contain";

//creat a second div for government content

const governmentContent = document.createElement("div");
governmentContent.className = "d-flex gap-4";
governmentContent.style.width = "80%";

//creating a cet cell logo

const cetCellLogo = document.createElement("div");
cetCellLogo.style.height = "100px";
cetCellLogo.style.width = "100px";
cetCellLogo.style.borderLeft = "1px solid black";
cetCellLogo.style.paddingLeft = "10px";

// creat a img tag for cetcell logo
const cetCellLogoImg = document.createElement("img");
cetCellLogoImg.src = "../image/cet_cell-removebg-preview.png";
cetCellLogoImg.alt = "";
cetCellLogoImg.height = "100";
cetCellLogoImg.width = "100";
cetCellLogoImg.style.objectFit = "contain";

//creat a div for government sectiontext

const governmentText = document.createElement("div");
governmentText.style.flex = 1;
governmentText.style.color = "#163281";
governmentText.className = "d-flex flex-column justify-content-center";

//creat a first heading

const governmentTexth1 = document.createElement("h1");
governmentTexth1.innerText = "GOVERNMENT OF MAHARASHTRA";
governmentTexth1.style.fontSize = "22px";
governmentTexth1.className = "fw-bold";

//creat a second heading

const governmentTexth5 = document.createElement("h5");
governmentTexth5.innerText = "State Common Entrance Test Cell";
governmentTexth5.style.fontSize = "18px";

//creat a third div for government logo

const governmentLogo = document.createElement("div");
governmentLogo.style.width = "100px";
governmentLogo.style.height = "100px";

//creating a img tag for the logo

const governmentLogoImg = document.createElement("img");
governmentLogoImg.src = "../image/Seal_of_Maharashtra.svg.png";
governmentLogoImg.alt = "";
governmentLogoImg.height = "100";
governmentLogoImg.width = "100";
governmentLogoImg.style.objectFit = "contain";

//appending the elements

satyamevJayate.append(satyamevJayateImg);
cetCellLogo.appendChild(cetCellLogoImg);
governmentContent.appendChild(cetCellLogo);
governmentText.appendChild(governmentTexth1);
governmentText.appendChild(governmentTexth5);
governmentContent.appendChild(governmentText);
governmentLogo.appendChild(governmentLogoImg);
headerMiddleWrapper.appendChild(satyamevJayate);
headerMiddleWrapper.appendChild(governmentContent);
headerMiddleWrapper.appendChild(governmentLogo);
headerMiddle.appendChild(headerMiddleWrapper);
header.appendChild(headerMiddle);

//Creat a bottom part of the header

const headerBottom = document.createElement("div");
headerBottom.style.background = "#163269";
headerBottom.style.width = "100%";
headerBottom.className = "mt-3 py-2";

const headerBottomNav = document.createElement("nav");
headerBottomNav.className =
  "d-flex justify-content-between align-items-center w-75 mx-auto a_nav_list";
headerBottomNav.style.background = "#163269";
headerBottomNav.style.paddingLeft = "50px";

const headerBottomNavUl = document.createElement("ul");
headerBottomNavUl.style.listStyle = "none";
headerBottomNavUl.className = "d-flex gap-4 mt-3";

const headerBottomNavUlLiList = [
  "Home",
  "About Us",
  "CETs",
  "CAP",
  "Downloads",
  "Statistics",
  "Online Systems",
  "Events",
  "Contacts",
];

headerBottomNavUlLiList.forEach(function (ele) {
  const headerBottomNavUlLi = document.createElement("li");
  headerBottomNavUlLi.style.listStyle = "none";
  headerBottomNavUlLi.className = "";
  const headerBottomNavUlLiAtag = document.createElement("a");
  headerBottomNavUlLiAtag.href = "#";
  headerBottomNavUlLiAtag.innerText = ele;
  headerBottomNavUlLiAtag.className = "text-decoration-none text-white";

  headerBottomNavUlLi.appendChild(headerBottomNavUlLiAtag);
  headerBottomNavUl.appendChild(headerBottomNavUlLi);
});

//create a pragati btn

const headerBottomNavbtn = document.createElement("button");
headerBottomNavbtn.type = "button";
headerBottomNavbtn.style.color = "white";
headerBottomNavbtn.innerText = "Ask Pragati";
headerBottomNavbtn.style.background = "#01205D";
headerBottomNavbtn.style.border = "1px solid #808080";

//create img in button

const headerBottomNavbtnImg = document.createElement("img");
headerBottomNavbtnImg.src = "../image/Ask-Pragati-9.png";
headerBottomNavbtnImg.alt = "";
headerBottomNavbtnImg.width = "40";

//appending childs

headerBottomNavbtn.appendChild(headerBottomNavbtnImg);
headerBottomNav.appendChild(headerBottomNavUl);
headerBottomNav.appendChild(headerBottomNavbtn);
headerBottom.appendChild(headerBottomNav);
header.appendChild(headerBottom);

//main part start from here

const main = document.createElement("main");

//notice

const mainNotice = document.createElement("section");
mainNotice.className = "container d-flex my-2 gap-2";
const mainNoticebtn = document.createElement("button");
mainNoticebtn.innerText = "Announcement";
mainNoticebtn.style.background = "#EEC641";
mainNoticebtn.className = "btn text-white";

//create marque tag

const mainNoticeMarquee = document.createElement("marquee");
mainNoticeMarquee.innerHTML =
  "Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2023-24 (English/Marathi)";
mainNoticeMarquee.style.background = "#F1F1F1";
mainNoticeMarquee.setAttribute("scrollamount", 15, 0);
mainNoticeMarquee.behavior = "";
mainNoticeMarquee.direction = "";
mainNoticeMarquee.style.lineHeight = "2.3";
mainNoticeMarquee.className = "m-0 p-0";

// Create a new keyword to pop infinite

const newInfinite = document.createElement("img");
newInfinite.src = "../image/blinknew.gif";
newInfinite.style.marginLeft = "5px";

mainNoticeMarquee.appendChild(newInfinite);
mainNotice.appendChild(mainNoticebtn);
mainNotice.appendChild(mainNoticeMarquee);
main.appendChild(mainNotice);
root.appendChild(main);

//Banner Start

const banner = document.createElement("div");
banner.style.width = "100%";
banner.style.height = "400px";
banner.style.display = "flex";

//banner left

const bannerLeft = document.createElement("div");
bannerLeft.style.height = "100%";
bannerLeft.style.width = "75%";
bannerLeft.style.background = "url(../image/GOVERNMENT-OF-MAHARASHTRA-22-1.png)"
bannerLeft.className = "position-relative";
bannerLeft.style.backgroundRepeat = "no-repeat";
bannerLeft.style.backgroundSize = "cover";
bannerLeft.className = "position-relative";

//create number of department and courses

const bannerLeftCourseNumbers = document.createElement("div");
bannerLeftCourseNumbers.className = "row position-absolute m-0";
bannerLeftCourseNumbers.style.width = "100%";
bannerLeftCourseNumbers.style.background = "#EEC641";
bannerLeftCourseNumbers.style.bottom = "-84px";

function CardNumber(title, descriptionText, background, columns) {
  const card = document.createElement("div");
  card.className = `col-12 col-lg-${columns || 4} text-center text-white py-2`;

  if (background) {
    card.style.background = background;
  }
  //create number

  const titleH5 = document.createElement("h5");
  titleH5.innerText = "0";
  titleH5.className = "count";
  titleH5.setAttribute("data-count", title);
  titleH5.style.fontSize = "30px";

  //create description

  const description = document.createElement("p");
  description.className = "m-0";
  description.innerText = descriptionText;

  //appending childs

  card.appendChild(titleH5);
  card.appendChild(description);

  return card;
}

bannerLeftCourseNumbers.appendChild(CardNumber(6, "Number of Department"));
bannerLeftCourseNumbers.appendChild( CardNumber(19, "Number of CETs", "#163269"));
bannerLeftCourseNumbers.appendChild(CardNumber(61, "Number of Courses"));

//create Right banner

const bannerRight = document.createElement("div");
bannerRight.style.width = "25%";
bannerRight.style.height = "100%";
bannerRight.className = "p-3";
bannerRight.style.position = "relative";
bannerRight.style.background =
  "linear-gradient(180deg, rgba(22,50,105,0.8) 10%, rgba(238,198,65,1) 100%)";

//create a function to right card

function IconTitleCard(icon, titlestring, background) {
  let card = document.createElement("div");
  card.className = "d-flex align-items-center gap-3 p-2 text-white mt-2";
  let LeftBox = document.createElement("div");
  LeftBox.style.height = "70px";
  LeftBox.style.width = "70px";
  LeftBox.className ="bg-white rounded-pill d-flex  align-items-center justify-content-center";
  //create one more div to icon backgrond
  const Leftsubdiv = document.createElement("div");
  Leftsubdiv.style.background = background
  Leftsubdiv.style.height = "50px";
  Leftsubdiv.style.width = "50px";

  Leftsubdiv.className =
    "rounded-pill d-flex  align-items-center justify-content-center";
  Leftsubdiv.innerHTML = `<i class="fa ${icon}" style="font-size:30px;" aria-hidden="true"></i>`;

  LeftBox.appendChild(Leftsubdiv);

  let rightBox = document.createElement("div");
  rightBox.style.flex = 1;
  //create h6
  const title = document.createElement("h6");
  title.innerText = titlestring;
  title.style.lineHeight = "22px";

  rightBox.appendChild(title);
  card.appendChild(LeftBox);
  card.appendChild(rightBox);
  return card;
}
bannerRight.appendChild(
  IconTitleCard(
    "fa-user-circle-o",
    "Candidate Registration A.Y 2024-25",
    "#098D4F"
  )
);
bannerRight.appendChild(
  IconTitleCard("fa-users", "Candidate Help Module", "#FFB859")
);
bannerRight.appendChild(
  IconTitleCard(
    "fa-graduation-cap",
    "Foreign Candidate Registration Portal",
    "#163269"
  )
);
bannerRight.appendChild(
  IconTitleCard(
    "fa-id-card",
    "Admissions Regulating Authority (ARA) Website",
    "#EE6A41"
  )
);

//creat fix background img

const fixedBackgroundBannerRightImg = document.createElement("div");
fixedBackgroundBannerRightImg.style.background =
  "url(../image/MicrosoftTeams-image-scaled.jpg)";
fixedBackgroundBannerRightImg.style.width = "100%";
fixedBackgroundBannerRightImg.style.height = "100%";
fixedBackgroundBannerRightImg.style.height = "50%";
fixedBackgroundBannerRightImg.style.backgroundSize = "cover";
fixedBackgroundBannerRightImg.style.backgroundPositionX = "-1000px";
fixedBackgroundBannerRightImg.style.zIndex = "-1";
fixedBackgroundBannerRightImg.style.position = "fixed";

//create banner right cource number

const bannerRightCourseNumbers = document.createElement("div");
bannerRightCourseNumbers.className = "row mt-2 position-absolute w-100";
bannerRightCourseNumbers.style.bottom = "-84px";
bannerRightCourseNumbers.style.left = "12px";

bannerRightCourseNumbers.appendChild(
  CardNumber(4000, "Number of Departments", "#163269", 12)
);

bannerLeft.appendChild(bannerLeftCourseNumbers);
banner.appendChild(bannerLeft);
banner.appendChild(bannerRight);
bannerRight.appendChild(bannerRightCourseNumbers);
main.appendChild(banner);

const counts=document.querySelectorAll(".count")
counts.forEach(function(counter){

  function updatecounter () {
    const finalValue=Number(counter.getAttribute("data-count"))
    const oldValue=Number(counter.innerText.replace(",",""))
    const incrementValue=finalValue/100

    if (oldValue<finalValue){
      counter.innerText=Math.ceil(incrementValue+oldValue).toLocaleString()
      setTimeout(updatecounter,1)
    } else{
      counter.innerText=`${finalValue>1000 ? `${finalvalue.toLocaleString()} +` :finalValue}`

    }
  }

  updatecounter()
})


// About section start

const aboutSection=document.createElement("div")
aboutSection.style.background="url(../image/aboutBg.jpg"
aboutSection.style.height="1500px"
aboutSection.style.width="100%"
aboutSection.style.backgroundPosition = "center 0px"
aboutSection.style.backgroundSize="cover"
aboutSection.style.backgroundAttachment="fixed"
// aboutSection.style.backgroundColor="white"
// aboutSection.style.opacity="0.1"

const aboutSectionOverlay=document.createElement("div")
aboutSectionOverlay.style.background="#ffffffbd"
aboutSectionOverlay.style.padding="70px 0"

const aboutSectionContainer=document.createElement("div")
aboutSectionContainer.className="row w-75 mx-auto"
aboutSectionContainer.style.marginTop="84px"

//create left image

const aboutSectionContainerLeft=document.createElement("div")
aboutSectionContainerLeft.className="col-12 col-lg-5"
//img tag
const aboutSectionContainerLeftDiv=document.createElement("div")
aboutSectionContainerLeftDiv.style.borderLeft="12px solid #163269"
aboutSectionContainerLeftDiv.style.borderBottom="12px solid #163269"

const aboutSectionContainerLeftImg=document.createElement("img")
aboutSectionContainerLeftImg.src="../image/abountLeft.png"
aboutSectionContainerLeftImg.alt=""
aboutSectionContainerLeftImg.style.height="245px"
aboutSectionContainerLeftImg.style.width="100%"

//create Right part
const aboutSectionContainerRight=document.createElement("div")
aboutSectionContainerRight.className="col-12 col-lg-7"

//right headings

const aboutSectionContainerRightH2=document.createElement("h2")
aboutSectionContainerRightH2.innerText="About CET Cell"
aboutSectionContainerRightH2.style.color="#163269"
const aboutSectionContainerRightP1=document.createElement("p")
aboutSectionContainerRightP1.innerText="The Government of Maharashtra has established State Common Entrance Test Cell as per Section 10 of the Maharashtra Unaided Private Professional Educational Institutions (Regulation of Admissions and Fees) Act ,2015. The CET Cell conducts various entrance exams for Admission to Professional courses in the state of Maharashtra, India."
const aboutSectionContainerRightP2=document.createElement("p")
aboutSectionContainerRightP2.innerText="Its primary purpose is to facilitate the admission process for Professional courses such as Engineering, Management, Pharmacy, Agriculture, law, Medical, AYUSH & Fine Arts ."


aboutSectionContainerLeftDiv.appendChild(aboutSectionContainerLeftImg)
aboutSectionContainerLeft.appendChild(aboutSectionContainerLeftDiv)
aboutSectionContainerRight.appendChild(aboutSectionContainerRightH2)
aboutSectionContainerRight.appendChild(aboutSectionContainerRightP1)
aboutSectionContainerRight.appendChild(aboutSectionContainerRightP2)
aboutSectionContainer.appendChild(aboutSectionContainerLeft)
aboutSectionContainer.appendChild(aboutSectionContainerRight)
aboutSectionOverlay.appendChild(aboutSectionContainer)
aboutSection.appendChild(aboutSectionOverlay)
main.appendChild(aboutSection)

//Table Section satrt

const tableSection=document.createElement("div")
tableSection.style.background="#EAEAEA"
tableSection.style.height="400px"

//menu container

const menuContainer=document.createElement("div")
menuContainer.className="w-75 mx-auto py-3"
menuContainer.innerHTML=`<nav class="nav justify-content-between" style="font-size:16px">
<button type="button" class="px-4 py-2 bg-white border-0  a_about_btn" aria-current="page">All</button>
<button type="button" class="px-4 py-2 bg-white border-0  a_about_btn">Technical Education</button>
<button type="button" class="px-4 py-2 bg-white border-0  a_about_btn">Higher Education</button>
<button type="button" class="px-4 py-2 bg-white border-0  a_about_btn">Agriculture Education</button>
<button type="button" class="px-4 py-2 bg-white border-0  a_about_btn">Fine Art Education</button>
<button type="button" class="px-4 py-2 bg-white border-0  a_about_btn">Medical Education</button>
<button type="button" class="px-4 py-2 bg-white border-0  a_about_btn">AYUSH</button>
</nav>`

window.onload=function(){
  const aboutBtn=document.querySelector(".a_about_btn")
  aboutBtn.classList.remove("bg-white")
  aboutBtn.classList.add("bg-warning")
}

document.addEventListener("click",function(event){
  const isBtn=event.target.classList.contains("a_about_btn")
  if (isBtn){
    const existingBtn=document.querySelectorAll(".a_about_btn")
    existingBtn.forEach((ele)=>{
      ele.classList.add("bg-white")
      const isExist=ele.classList.contains("bg-warning")
      if (isExist) {
        event.target.classList.add("bg-white")
        ele.classList.remove("bg-warning")
      }
    })
    event.target.classList.remove("bg-white")
    event.target.classList.add("bg-warning")
  }
})

tableSection.appendChild(menuContainer)
aboutSection.appendChild(tableSection)

//last part

const bundleScript = document.createElement("script")
bundleScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
bundleScript.integrity = "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
bundleScript.crossOrigin = "anonymous"

document.body.appendChild(bundleScript)