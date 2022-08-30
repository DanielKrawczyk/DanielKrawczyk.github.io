function imageCount(): Array<string> {
    let arr = [];
    for(let i = 1; i <= 5; i++) {
        arr.push(`/websites-test/images/photo-${i}.jpg`);
    }
    return arr;
}
function getID(x: string): HTMLElement {
    return document.getElementById(x);
}
let images: Array<string>;
function loading(): void {
    images = imageCount();
    const overlay: HTMLElement = getID("overlay"), 
        total = images.length;
    let c = 0;
    if (total === 0)
        return doneLoading();

    function imagesLoaded(): void {
        c += 1;
        if (c === total)
            return doneLoading();
    }
    function doneLoading(): void {
        setTimeout(() => {
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