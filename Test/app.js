    function toggleNav() {
        var navLinks = document.getElementById("navLinks");
        var burger = document.getElementsByClassName("burger");

        navLinks.classList.toggle("nav-active");

        for (var i = 0; i < burger.length; i++) {
            burger[i].classList.toggle("toggle");
        }
    }
