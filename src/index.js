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

  const headerAnchorTag=document.createElement("a")
  headerAnchorTag.className="text-dark text-decoration-none"
  headerAnchorTag.href="#"

  iTag=document.createElement("i")
  iTag.className=`fa ${array[i].icon}`

  headerAnchorTag.append(iTag)
  headerAnchorTag.append(array[i].title || "")
  headerNavUlLi.appendChild(headerAnchorTag)
  headerNavUl.appendChild(headerNavUlLi)

}

//middle part of the header

const headerMiddle=document.createElement("div")
headerMiddle.className="container"

const headerMiddleWrapper=document.createElement("div")
headerMiddleWrapper.className="d-flex mt-2"
headerMiddleWrapper.style.width="60%"
headerMiddleWrapper.style.height="100px"

//create a first div for satyamevjayate logo

const satyamevJayate=document.createElement("div")
satyamevJayate.style.height="100px"
satyamevJayate.style.width="100px"
//creating a img tag
const satyamevJayateImg=document.createElement("img")
satyamevJayateImg.src="../image/satyamev-jayte-removebg-preview.png"
satyamevJayateImg.alt=""
satyamevJayateImg.height="100"
satyamevJayateImg.width="100"
satyamevJayateImg.style.objectFit="contain"

//creat a second div for government content

const governmentContent=document.createElement("div")
governmentContent.className="d-flex gap-4"
governmentContent.style.width="80%"

//creating a cet cell logo 

const cetCellLogo=document.createElement("div")
cetCellLogo.style.height="100px"
cetCellLogo.style.width="100px"
cetCellLogo.style.borderLeft="1px solid black"
cetCellLogo.style.paddingLeft="10px"

// creat a img tag for cetcell logo
const cetCellLogoImg=document.createElement("img")
cetCellLogoImg.src="../image/cet_cell-removebg-preview.png"
cetCellLogoImg.alt=""
cetCellLogoImg.height="100"
cetCellLogoImg.width="100"
cetCellLogoImg.style.objectFit="contain"

//creat a div for government sectiontext

const governmentText=document.createElement("div")
governmentText.style.flex=1
governmentText.style.color="#163281"
governmentText.className="d-flex flex-column justify-content-center"

//creat a first heading

const governmentTexth1=document.createElement("h1")
governmentTexth1.innerText="GOVERNMENT OF MAHARASHTRA"
governmentTexth1.style.fontSize="22px"
governmentTexth1.className="fw-bold"

//creat a second heading

const governmentTexth5=document.createElement("h5")
governmentTexth5.innerText="State Common Entrance Test Cell"
governmentTexth5.style.fontSize="18px"

//creat a third div for government logo 

const governmentLogo=document.createElement("div")
governmentLogo.style.width="100px"
governmentLogo.style.height="100px"

//creating a img tag for the logo

const governmentLogoImg=document.createElement("img")
governmentLogoImg.src="../image/Seal_of_Maharashtra.svg.png"
governmentLogoImg.alt=""
governmentLogoImg.height="100"
governmentLogoImg.width="100"
governmentLogoImg.style.objectFit="contain"

//appending the elements

satyamevJayate.append(satyamevJayateImg)
cetCellLogo.appendChild(cetCellLogoImg)
governmentContent.appendChild(cetCellLogo)
governmentText.appendChild(governmentTexth1)
governmentText.appendChild(governmentTexth5)
governmentContent.appendChild(governmentText)
governmentLogo.appendChild(governmentLogoImg)
headerMiddleWrapper.appendChild(satyamevJayate)
headerMiddleWrapper.appendChild(governmentContent)
headerMiddleWrapper.appendChild(governmentLogo)
headerMiddle.appendChild(headerMiddleWrapper)
header.appendChild(headerMiddle)

//Creat a bottom part of the header

const headerBottom=document.createElement("div")
headerBottom.style.background="#163269"
headerBottom.style.width="100%"
headerBottom.className="mt-3 py-2"

const headerBottomNav=document.createElement("nav")
headerBottomNav.className="d-flex justify-content-between align-items-center w-75 mx-auto"
headerBottomNav.style.background="#163269"
headerBottomNav.style.paddingLeft="50px"

const headerBottomNavUl=document.createElement("ul")
headerBottomNavUl.style.listStyle="none"
headerBottomNavUl.className="d-flex gap-4 mt-3"

const headerBottomNavUlLiList=["Home","About Us","CETs","CAP","Downloads","Statistics","Online Systems","Events","Contacts"]

headerBottomNavUlLiList.forEach(function(ele){
    const headerBottomNavUlLi=document.createElement("li")
    headerBottomNavUlLi.style.listStyle="none"
    headerBottomNavUlLi.className=""
    const headerBottomNavUlLiAtag=document.createElement("a")
    headerBottomNavUlLiAtag.href="#"
    headerBottomNavUlLiAtag.innerText=ele
    headerBottomNavUlLiAtag.className="text-decoration-none text-white"

    headerBottomNavUlLi.appendChild(headerBottomNavUlLiAtag)
    headerBottomNavUl.appendChild(headerBottomNavUlLi)

})

    //create a pragati btn

    const headerBottomNavbtn=document.createElement("button")
    headerBottomNavbtn.type="button"
    headerBottomNavbtn.style.color="white"
    headerBottomNavbtn.innerText="Ask Pragati"
    headerBottomNavbtn.style.background="#01205D"
    headerBottomNavbtn.style.border="1px solid #808080"

    //create img in button

    const headerBottomNavbtnImg=document.createElement("img")
    headerBottomNavbtnImg.src="../image/Ask-Pragati-9.png"
    headerBottomNavbtnImg.alt=""
    headerBottomNavbtnImg.width="40"

    
    //appending childs

    headerBottomNavbtn.appendChild(headerBottomNavbtnImg)
    headerBottomNav.appendChild(headerBottomNavUl)
    headerBottomNav.appendChild(headerBottomNavbtn)
    headerBottom.appendChild(headerBottomNav)
    header.appendChild(headerBottom)

    //main part start from here

    const main=document.createElement("main")
    