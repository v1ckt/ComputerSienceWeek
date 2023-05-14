function navigateTo(url, id) {
    window.location.href = url;
    document.getElementById(id).classList.add("active");
    var elements = document.getElementsByClassName("nav-link");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].id != id) {
            elements[i].classList.remove("active");
        }
    }
}

setTimeout(function () {var elements = document.getElementsByClassName("nav-link");
for (var i = 0; i < elements.length; i++) {
    if (elements[i].id == "a1") {
        elements[i].classList.add("active");
    }
}
}, 100);

window.onload = function () {window.location.href = "index.html#inicio"; }

window.onresize = function() {
    var url = window.location.href;
    window.location.href = url;
}