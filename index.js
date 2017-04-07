const Drag = function (id) {
    this.obj = document.getElementById(id);
    this.disX = 0;
    this.disY = 0;
};
Drag.prototype = {
    init: function () {
        var This = this;
        this.obj.onmousedown = function (e) {
            var e = e || window.e;
            This.fnDown(e);
            document.onmousemove = function (e) {
                var e = e || window.e;
                This.fnMove(e);
            };

            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
            };
            return false;
        }
    },
    fnDown: function (e) {
        this.disX = e.clientX - this.obj.offsetLeft;
        this.disY = e.clientY - this.obj.offsetTop;
    },
    fnMove: function (e) {
        var L = e.clientX - this.disX;
        var T = e.clientY - this.disY;

        if (L < 0) {
            L = 0;
        }
        if (L > document.documentElement.clientWidth - this.obj.offsetWidth) {
            L = document.documentElement.clientWidth - this.obj.offsetWidth;
        }
        if (T < 0) {
            T = 0;
        }
        if (T > document.documentElement.clientHeight - this.obj.offsetHeight) {
            T = document.documentElement.clientHeight - this.obj.offsetHeight;
        }
        this.obj.style.left = L + "px";
        this.obj.style.top = T + "px";
    },
    fnUp: function () {
        document.onmousemove = null;
        document.onmouseup = null;
    }
};
new Drag("div").init();
