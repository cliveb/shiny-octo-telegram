(function () { function a(a, b, c) { return "#" + ((256 + a << 8 | b) << 8 | c).toString(16).slice(1); } function b(a, b, c) { return [a[0] * (1 - c) + b[0] * c, a[1] * (1 - c) + b[1] * c, a[2] * (1 - c) + b[2] * c]; } !~navigator.platform.indexOf("Linux") || $("body").addClass("etc"); var c = 120, d = 200, e, f, g = [[189, 232, 255], [210, 238, 252], [2, 152, 219], [11, 94, 145]]; for (var h = 0, i = 0; i < screen.height; h++, i += e + 2) {
    e = c, h == 1 ? e = 230 : h > 1 && (e = Math.floor(e * .7 + Math.random() * e * .4));
    for (var j = 0, k = 0; k < screen.width; j++, k += f + 2) {
        f = d + Math.random() * 20 - Math.random() * 20, f = Math.floor(f * .8 + Math.random() * f * .5);
        var l = Math.min(1, (j + 1) / (screen.width / f)), m = Math.min(1, (h + 1) / (screen.height / e)), n = b(g[0], g[2], m), o = b(g[1], g[3], m), p = b(n, o, l);
        p[0] = Math.round(p[0]), p[1] = Math.round(p[1]), p[2] = Math.round(p[2]);
        if (h != 1) {
            var q = a(p[0], p[1], p[2]), r = b(p, [0, 0, 0], .2), s = a(r[0], r[1], r[2]), t = $("<img src=images/apple-icon-180x180.png>").css({ top: i + "px", left: k + "px" });
            $("#background").append(t);
        }
    }
} })();