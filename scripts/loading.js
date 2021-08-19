function getID(x) {
    return document.getElementById(x);
}
function siteIsLoaded() {
    setTimeout(function () {
        getID('top-text').classList.add('show');
        setTimeout(function () {
            document.querySelector('.side-links').classList.add('show');
        }, 1500);
    }, 500);
}
function loadbar() {
    var overlay = getID("overlay"), progress = getID("progress"), status = getID("progress-status"), images = document.images, total = images.length;
    var c = 0;
    if (total === 0)
        return doneLoading();
    function imagesLoaded() {
        c += 1;
        var percent = ((100 / total * c) << 0) + "%";
        progress.style.width = percent;
        status.innerHTML = "Loading: " + percent;
        if (c === total)
            return doneLoading();
    }
    function doneLoading() {
        overlay.style.opacity = "0";
        setTimeout(function () {
            overlay.style.display = "none";
        }, 1000);
        siteIsLoaded();
    }
    for (var i = 0; i < total; i++) {
        var img = new Image();
        img.onload = imagesLoaded;
        img.onerror = imagesLoaded;
        img.src = images[i].src;
    }
}
document.addEventListener('DOMContentLoaded', loadbar, false);
