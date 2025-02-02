const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["cta-img-src"])

 let middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])
console.log(middleImg)

let anchor = siteContent["nav"]
let navbar = document.querySelectorAll("a")

navbar.forEach(function(item, i){
   item.textContent = anchor[`nav-item-${i+1}`]
  });

  let topHeader = document.querySelector("h1");
 let button = document.querySelector("button");
 let headerImg = document.getElementById("cta-img");

 topHeader.textContent = siteContent["cta"]["h1"];
button.textContent = siteContent["cta"]["button"];
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);


let content= document.querySelectorAll("p");

let mainContent = Object.keys(siteContent["main-content"]).filter((key) => key.includes("content"));

content.forEach((index, i) => content[i].textContent = siteContent["main-content"][`${mainContent[i]}`]);


let contentHeader = document.querySelectorAll('h4');

let textHeader = Object.keys(siteContent['main-content']).filter((key) => key.includes('h4'));

contentHeader.forEach((index, i) => contentHeader[i].textContent = siteContent['main-content'][`${textHeader[i]}`]);

contentHeader.forEach(item => item.style.color = "green");

let newNav = document.createElement("a");
 nav.append(newNava);

let contentFooter = document.querySelector("footer p");
contentFooter.textContent = siteContent["footer"]["copyright"];
//
