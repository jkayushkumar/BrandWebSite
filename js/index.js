function goToHome() {
    $('html, body').animate({ scrollTop: $("#container1").offset().top }, 1000);
}
window.onload = function () {

}
var menuExpanded = false;
function toggleHeaderMenu() {
    var elements = document.getElementsByClassName("hamBurgerDiv");
    var i;
    for (i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("hamActive");
    }

    if (!menuExpanded) {
        menuExpanded = true;
        document.getElementById("mobileHeaderMenu").classList.remove("noDisplay");
        document.getElementById("mobileHeaderMenu2").classList.remove("noDisplay");
        $("#mobileHeaderMenu").animate({ left: "-1px" });
        $("#mobileHeaderMenu2").animate({ left: "0" });
    }
    else {
        menuExpanded = false;
        $("#mobileHeaderMenu").animate({ left: "-100vw" });
        $("#mobileHeaderMenu2").animate({ left: "-100vw" });
        setTimeout(function () {
            document.getElementById("mobileHeaderMenu").classList.add("noDisplay");
            document.getElementById("mobileHeaderMenu2").classList.add("noDisplay");
        }, 1000);

    }
}
function toggleNavMenu(num) {

    switch (num) {
        case 1:
            document.getElementById("c1").classList.toggle("noDisplay");
            document.getElementById("c2").classList.add("noDisplay");
            document.getElementById("c3").classList.add("noDisplay");
            document.getElementById("c4").classList.add("noDisplay");
            break;
        case 2:
            document.getElementById("c2").classList.toggle("noDisplay");
            document.getElementById("c1").classList.add("noDisplay");
            document.getElementById("c3").classList.add("noDisplay");
            document.getElementById("c4").classList.add("noDisplay");
            break;
        case 3:
            document.getElementById("c3").classList.toggle("noDisplay");
            document.getElementById("c1").classList.add("noDisplay");
            document.getElementById("c2").classList.add("noDisplay");
            document.getElementById("c4").classList.add("noDisplay");
            break;
        case 4:
            document.getElementById("c4").classList.toggle("noDisplay");
            document.getElementById("c2").classList.add("noDisplay");
            document.getElementById("c3").classList.add("noDisplay");
            document.getElementById("c1").classList.add("noDisplay");
            break;
    }
}
// window.onclick = function (event) {
//     if (!((event.target == document.getElementById("c1")) ||
//         (event.target == document.getElementById("c2")) ||
//         (event.target == document.getElementById("c3")) ||
//         (event.target == document.getElementById("c4")))) {
//         document.getElementById("c1").classList.add("noDisplay");
//         document.getElementById("c2").classList.add("noDisplay");
//         document.getElementById("c3").classList.add("noDisplay");
//         document.getElementById("c4").classList.add("noDisplay");
//     }
// }