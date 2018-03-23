window.onload = function () {
    init();
   
};

function init() {
    console.log('init fired');
    //alert("ALERT");
}
    
$(function(){
    $('#simple-menu').sidr();
    $(".navclass").fadeIn(5000).removeClass('hidden');
    $(".textlogo").fadeIn(5000).removeClass('hidden');
    console.log('animation')
})


function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    comsole.log("worked")
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}
