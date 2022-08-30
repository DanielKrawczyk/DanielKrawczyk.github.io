var Loading = /** @class */ (function () {
    function Loading() {
    }
    Loading.prototype.Loadbar = function () {
        function GetQuery(name) {
            return document.querySelector(name);
        }
        function SiteIsLoaded() {
            var timeout = 0;
            document.querySelectorAll(".--separated").forEach(function (item) {
                setTimeout(function () {
                    item.classList.add("show");
                }, timeout);
                timeout += 500;
            });
            setTimeout(function () {
                GetQuery(".side-links").classList.add("show");
            }, 1500);
        }
        var overlay = GetQuery("#overlay"), progress = GetQuery("#progress"), status = GetQuery("#progress-status"), images = document.images, total = images.length;
        var c = 0;
        if (total === 0)
            return DoneLoading();
        function ImagesLoaded() {
            c++;
            var percent = ((100 / total * c) << 0) + "%";
            progress.style.width = percent;
            status.innerHTML = "Loading: " + percent;
            if (c === total)
                return DoneLoading();
        }
        function DoneLoading() {
            overlay.style.opacity = "0";
            setTimeout(function () {
                overlay.style.display = "none";
            }, 1000);
            SiteIsLoaded();
        }
        for (var i = 0; i < total; i++) {
            var img = new Image();
            img.onload = ImagesLoaded;
            img.onerror = ImagesLoaded;
            img.src = images[i].src;
        }
    };
    return Loading;
}());
document.addEventListener("DOMContentLoaded", new Loading().Loadbar, false);
