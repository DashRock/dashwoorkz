
/* Site Page Toggle */
document.getElementById('headerNavBtn-3').addEventListener('click', () => {
    document.getElementById('examplesInfo').style.display = "grid";
    document.getElementById('brandInfo').style.display = "none";
    document.getElementById('dnsInfo').style.display = "none";
    document.getElementById('linuxInfo').style.display = "none";
    document.getElementById('generalInfo').style.display = "none";
})

document.getElementById('headerNavBtn-1').addEventListener('click', () => {
   
    document.getElementById('examplesInfo').style.display = "none";
    document.getElementById('generalInfo').style.display = "none";
    document.getElementById('dnsInfo').style.display = "none";
    document.getElementById('linuxInfo').style.display = "none";
    document.getElementById('brandInfo').style.display = "grid";
   
})

document.getElementById('headerNavBtn-2').addEventListener('click', () => {
    document.getElementById('examplesInfo').style.display = "none";
    document.getElementById('brandInfo').style.display = "none";
    document.getElementById('dnsInfo').style.display = "none";
    document.getElementById('linuxInfo').style.display = "none";
    document.getElementById('generalInfo').style.display = "grid";
})

document.getElementById('headerNavBtn-4').addEventListener('click', () => {
    document.getElementById('examplesInfo').style.display = "none";
    document.getElementById('brandInfo').style.display = "none";
    document.getElementById('generalInfo').style.display = "none";
    document.getElementById('dnsInfo').style.display = "none";
    document.getElementById('linuxInfo').style.display = "grid";
})

document.getElementById('headerNavBtn-5').addEventListener('click', () => {
    document.getElementById('examplesInfo').style.display = "none";
    document.getElementById('brandInfo').style.display = "none";
    document.getElementById('generalInfo').style.display = "none";
    document.getElementById('dnsInfo').style.display = "grid";
    document.getElementById('linuxInfo').style.display = "none";
})

/* Side Navigation Toggle */
document.getElementById('sideNavBtn-1').addEventListener('click', () => {
    document.getElementById('buttonStyles').style.display = "grid";
    document.getElementById('animationStyles').style.display = "none";
    document.getElementById('formStyles').style.display = "none";
    document.getElementById('cardStyles').style.display = "none";
})
document.getElementById('sideNavBtn-2').addEventListener('click', () => {
    document.getElementById('buttonStyles').style.display = "none";
    document.getElementById('animationStyles').style.display = "grid";
    document.getElementById('formStyles').style.display = "none";
    document.getElementById('cardStyles').style.display = "none";
})
document.getElementById('sideNavBtn-3').addEventListener('click', () => {
    document.getElementById('buttonStyles').style.display = "none";
    document.getElementById('animationStyles').style.display = "none";
    document.getElementById('formStyles').style.display = "grid";
    document.getElementById('cardStyles').style.display = "none";
})
document.getElementById('sideNavBtn-4').addEventListener('click', () => {
    document.getElementById('buttonStyles').style.display = "none";
    document.getElementById('animationStyles').style.display = "none";
    document.getElementById('formStyles').style.display = "none";
    document.getElementById('cardStyles').style.display = "grid";
})

/* Hamburger Menu Toggle */

document.getElementById('hamB1').addEventListener('click', () => {
    
    document.getElementById('aboutBox').style.display = "grid";
    document.getElementById('hamB1').style.display = "none";
    document.getElementById('hamB2').style.display = "flex";
  
})
document.getElementById('hamB2').addEventListener('click', () => {
    
    document.getElementById('aboutBox').style.display = "none";
    document.getElementById('hamB1').style.display = "flex";
    document.getElementById('hamB2').style.display = "none";
  
})

