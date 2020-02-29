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

