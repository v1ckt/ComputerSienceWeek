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

// add active class to the first nav-link element when the site starts at milliseconds
    setTimeout(function () {var elements = document.getElementsByClassName("nav-link");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].id == "a1") {
            elements[i].classList.add("active");
        }
    }
    }, 100);

    window.onload = function () { window.location.href = "index.html#inicio"; }