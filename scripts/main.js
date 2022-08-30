var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Main = /** @class */ (function () {
    function Main() {
        this.TopEl = new Doc("#top");
        this.NavSide = new Doc(".side-nav");
        this.AboutMe = new Doc("#aboutMe");
        this.SideLinks = new Doc(".side-links");
        this.Footer = new Doc(".upper");
        this.Nav = new Doc(".nav");
        this.NavSideBtn = new Doc(".side-nav_btn_abs");
        this.NavSideLinks = new Docs(".side-nav_item");
        this.TopTexts = new Docs(".--separated");
    }
    Main.prototype.StartWebsiteScript = function () {
        new Events().CreateAllEvents();
    };
    return Main;
}());
var Doc = /** @class */ (function () {
    function Doc(ElementName) {
        this.Element = document.querySelector(ElementName);
    }
    Doc.prototype.SetAsActive = function () {
        this.Element.classList.add("active");
    };
    Doc.prototype.SetAsInactive = function () {
        this.Element.classList.remove("active");
    };
    Doc.prototype.ShowElement = function () {
        this.Element.classList.add("show");
    };
    Doc.prototype.HideElement = function () {
        this.Element.classList.remove("show");
    };
    Doc.prototype.OffsetTop = function () {
        return this.Element.offsetTop;
    };
    Doc.prototype.Contains = function (ClassName) {
        return this.Element.classList.contains(ClassName);
    };
    Doc.prototype.AddEvent = function (Type, Callback) {
        this.Element.addEventListener(Type, Callback);
    };
    return Doc;
}());
var Docs = /** @class */ (function () {
    function Docs(ElementsName) {
        this.Elements = document.querySelectorAll(ElementsName);
    }
    Docs.prototype.AddEvent = function (Type, Callback) {
        this.Elements.forEach(function (item) {
            item.addEventListener(Type, Callback);
        });
    };
    Docs.prototype.ShowElementsWithDelay = function () {
        var timeout = 0;
        this.Elements.forEach(function (item) {
            setTimeout(function () {
                item.classList.add("show");
            }, timeout);
            timeout += 500;
        });
    };
    Docs.prototype.HideElements = function () {
        this.Elements.forEach(function (item) {
            item.classList.remove("show");
        });
    };
    return Docs;
}());
var Scroll = /** @class */ (function (_super) {
    __extends(Scroll, _super);
    function Scroll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Scroll.prototype.OnScroll = function (Window) {
        if (Window === void 0) { Window = window.pageYOffset; }
        if (this.AboutMe.OffsetTop() !== null && this.AboutMe.OffsetTop() < Window) {
            this.NavSide.SetAsActive();
            this.TopTexts.HideElements();
        }
        else if (Window <= this.Nav.OffsetTop()) {
            this.TopTexts.ShowElementsWithDelay();
        }
        else {
            this.NavSide.SetAsInactive();
            this.NavSide.HideElement();
        }
        if (Window >= this.Footer.OffsetTop()) {
            this.SideLinks.HideElement();
        }
        else if (Window < this.Footer.OffsetTop()) {
            this.SideLinks.ShowElement();
        }
    };
    return Scroll;
}(Main));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ScrollClass = new Scroll();
        return _this;
    }
    Events.prototype.CreateAllEvents = function () {
        var _this = this;
        window.onscroll = function () { return _this.ScrollClass.OnScroll(window.pageYOffset); };
        document.addEventListener('scroll', function () {
            var value = -document.scrollingElement.scrollTop * 0.3;
            _this.TopEl.Element.style.backgroundPositionY = value + "px";
        });
        this.NavSideBtn.AddEvent("click", function () {
            if (_this.NavSide.Contains("show"))
                _this.NavSide.HideElement();
            else
                _this.NavSide.ShowElement();
        });
        this.NavSideLinks.AddEvent("click", function () {
            _this.NavSide.HideElement();
        });
    };
    return Events;
}(Main));
// ================================= SCRIPT START =============================== //
var main = new Main();
main.StartWebsiteScript();
