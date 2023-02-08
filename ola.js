window.onload = function () {
    document.querySelector(".menuMobile").addEventListener("click", function () {
        if (document.querySelector("nav").style.display == 'block') {
            document.querySelector("nav").style.display = 'none';
            document.querySelector("nav").style.height = '0px';
        }
        else {
            document.querySelector("nav").style.display = 'block';
            document.querySelector("nav").style.height = 'calc(100vh - 100px)';
        }
    });
};