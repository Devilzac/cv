setTimeout(function () {
    document.querySelector("#speech-bubble").classList.remove("active");
}, 2000);

setTimeout(function () {
    let icons = document.querySelectorAll(".foto");
    icons.forEach(function (e) {
        e.classList.remove("active");
    });

}, 1800);
var nav = document.querySelectorAll(".it li");
console.log(nav);

function toggleActive(e) {
    nav.forEach(function (e) {
        e.classList.remove("active");

    });
    e.classList.add("active");
    selectText(e.id);
}
nav.forEach(function (e) {
    e.addEventListener("click", function () {
        toggleActive(e);
    });
});


function selectText(id) {

    let text = document.querySelectorAll(".container-skills .descripcion");
    text.forEach(function (e) {
        e.classList.remove("active");

    });
    document.querySelector("#" + id + "1").classList.add("active");

    // text.classList.add("active");
    console.log(id);
}