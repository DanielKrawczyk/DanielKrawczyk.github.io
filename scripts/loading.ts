function getID(x: string): HTMLElement {
    return document.getElementById(x)
}

function siteIsLoaded(): void {
    setTimeout((): void => {
        getID('top-text').classList.add('show');
        setTimeout(() => {
            document.querySelector('.side-links').classList.add('show');
        }, 1500);
    }, 500)
}

function loadbar(): void {
    const overlay: HTMLElement = getID("overlay"),
        progress: HTMLElement = getID("progress"),
        status: HTMLElement = getID("progress-status"),
        images: HTMLCollectionOf<HTMLImageElement> = document.images,
        total: number = images.length;
        let c: number = 0;
        if (total === 0) return doneLoading();

        
        function imagesLoaded(): void {
            c += 1;
            const percent: string = ((100/total * c) << 0) + "%";
            progress.style.width = percent;
            status.innerHTML = `Loading: ${percent}`;
            if (c === total) return doneLoading();
        }

        function doneLoading(): void {
            overlay.style.opacity = "0";
            setTimeout(() => {
                overlay.style.display = "none";
            }, 1000);
            siteIsLoaded();
        }

        for (let i: number = 0; i < total; i++) {
            const img: HTMLImageElement = new Image();
            img.onload = imagesLoaded;
            img.onerror = imagesLoaded;
            img.src = images[i].src;
        }
}
document.addEventListener('DOMContentLoaded', loadbar, false);