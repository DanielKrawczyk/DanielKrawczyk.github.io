function getID(x) {
    return document.getElementById(x);
}
function getQuery(x) {
    return document.querySelector(x);
}
function getQueryAll(x) {
    return document.querySelectorAll(x);
}
var topEl = getID('top'), topText = getID('top-text'), aboutMe = getID('aboutMe'), nav = getQuery('.nav'), navSide = getQuery('.side-nav'), navSideBtn = getQuery('.side-nav_btn_abs'), footer = getQuery('.upper'), sideLinks = getQuery('.side-links'), navSideLinks = getQueryAll('.side-nav_item');
function onScroll() {
    var win = window.pageYOffset;
    if (aboutMe.offsetTop !== null && win > aboutMe.offsetTop) {
        navSide.classList.add('active');
        topText.classList.remove('show');
    }
    else if (win <= nav.offsetTop) {
        topText.classList.add('show');
    }
    else {
        navSide.classList.remove('active');
        navSide.classList.remove('show');
    }
    if (win >= footer.offsetTop) {
        sideLinks.classList.remove('show');
    }
    else if (win < footer.offsetTop) {
        sideLinks.classList.add('show');
    }
}
/* -------------------- EVENTS ---------------------------- */
document.addEventListener('scroll', function () {
    var value = -document.scrollingElement.scrollTop * 0.3;
    topEl.style.backgroundPositionY = value + "px";
});
navSideBtn.addEventListener('click', function () {
    if (navSide.classList.contains('show'))
        navSide.classList.remove('show');
    else
        navSide.classList.add('show');
});
navSideLinks.forEach(function (item) {
    item.addEventListener('click', function () {
        navSide.classList.remove('show');
    });
});
window.onscroll = function () { return onScroll(); };
