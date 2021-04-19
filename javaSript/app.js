var acc = document.getElementsByClassName("sideBar_menuItems");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


const openSideBar = document.querySelector('.sideBar_open');
const closeSideBar = document.querySelector('.sideBar_close');

openSideBar.addEventListener('click', function() {
    let sideBar = document.querySelector('.sideBar');
    sideBar.style.width = "75%";
    sideBar.style.opacity = "1";
})

closeSideBar.addEventListener('click', function() {
    let sideBar = document.querySelector('.sideBar');
    sideBar.style.width = "0";
    sideBar.style.opacity = "0";
})