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
logo.setAttribute('src', siteContent["nav"]["img-src"])

const titleImg = document.getElementById('cta-img')
titleImg.setAttribute('src', siteContent['cta']['img-src'])

const midImg = document.getElementById('middle-img')
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

const navBar = document.querySelectorAll('a')
navBar[0].textContent = siteContent['nav']['nav-item-1']
navBar[1].textContent = siteContent['nav']['nav-item-2']
navBar[2].textContent = siteContent['nav']['nav-item-3']
navBar[3].textContent = siteContent['nav']['nav-item-4']
navBar[4].textContent = siteContent['nav']['nav-item-5']
navBar[5].textContent = siteContent['nav']['nav-item-6']
navBar.forEach(element => {
  element.style.color = 'green';
})

const header = document.querySelector('header')
header.style.background = 'lightblue'

const newLink = document.createElement('a')
newLink.textContent = 'New Link'
newLink.classList.add('a-link')
const nav = document.querySelector('nav')
nav.prepend(newLink)

const newLink2 = document.createElement('a')
newLink2.textContent = 'New Link 2'
newLink2.classList.add('a-link')
const nav2 = document.querySelector('nav') 
nav2.appendChild(newLink2)

const ctaText = document.querySelector('h1')
ctaText.textContent = siteContent['cta']['h1']

const ctaButton = document.querySelector('button')
ctaButton.textContent = siteContent['cta']['button']
ctaButton.style.borderRadius = '10px'

const h4Title = document.querySelectorAll('h4')
h4Title[0].textContent = siteContent['main-content']['features-h4']
h4Title[1].textContent = siteContent['main-content']['about-h4']
h4Title[2].textContent = siteContent['main-content']['services-h4']
h4Title[3].textContent = siteContent['main-content']['product-h4']
h4Title[4].textContent = siteContent['main-content']['vision-h4']
h4Title[5].textContent = siteContent['contact']['contact-h4']

const topPar = document.querySelectorAll('.top-content p')
topPar[0].textContent = siteContent['main-content']['features-content']
topPar[1].textContent = siteContent['main-content']['about-content']

const botPar = document.querySelectorAll('.bottom-content .text-content p')
botPar[0].textContent = siteContent['main-content']['services-content']
botPar[1].textContent = siteContent['main-content']['product-content']
botPar[2].textContent = siteContent['main-content']['vision-content']

const contactPar = document.querySelectorAll('.contact p')
contactPar[0].textContent = siteContent['contact']['address']
contactPar[1].textContent = siteContent['contact']['phone']
contactPar[2].textContent = siteContent['contact']['email']

const footer = document.querySelector('footer p')
footer.textContent = siteContent['footer']['copyright']