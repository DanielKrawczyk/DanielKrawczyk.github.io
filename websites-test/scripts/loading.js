function imageCount() {
    var arr = [];
    for (var i = 1; i <= 5; i++) {
        arr.push("/websites-test/images/photo-" + i + ".jpg");
    }
    return arr;
}
function getID(x) {
    return document.getElementById(x);
}
var images;
function loading() {
    images = imageCount();
    var overlay = getID("overlay"), total = images.length;
    var c = 0;
    if (total === 0)
        return doneLoading();
    function imagesLoaded() {
        c += 1;
        if (c === total)
            return doneLoading();
    }
    function doneLoading() {
        setTimeout(function () {
            overlay.style.opacity = "0";
            setTimeout(function () {
                overlay.style.display = "none";
            }, 1000);
        }, 500);
    }
    for (var i = 0; i < total; i++) {
        var img = new Image();
        img.src = images[i];
        img.onload = imagesLoaded;
        img.onerror = imagesLoaded;
    }
}
document.addEventListener('DOMContentLoaded', loading, false);
