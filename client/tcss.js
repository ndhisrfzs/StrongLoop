(function(c) {
    var d = 0;
    function e(o) {
        var n = new Image(),
        p = [];
        window[n.id = "__ping" + d++] = n;
        n.onload = n.onerror = function() {
            window[n.id] = null;
            n.onload = n.onerror = null
        };
        n.src = o
    }
    var l = /\/qqdownloader\/[\d\.]+/.test(navigator.userAgent),
    a = f(navigator.userAgent);
    function f(n) {
        var o = {},
        p = {},
        q = "",
        r = "",
        t = n.match(/([a|A]ndroid)[\s\/]*([\d.]+)/),
        s = n.match(/(iPad).*OS\s([\d_]+)/),
        u = !s && n.match(/(iPhone\sOS)\s([\d_]+)/),
        v = n.match(/MicroMessenger\/([\d\.]+)/),
        w = n.match(/MQQBrowser\/([\d\.]+)/),
        x = n.match(/(?:V1_AND_SQ_|QQ\/)([\d\.]+)/); (/android/i.test(n) || /UCBrowser/i.test(n) && /Adr[\s\/]*([\d.]+)/.test(n)) && (o.android = true, t && (o.version = t[2]), r = "android" + o.version);
        /(iPhone|iPad|iPod|iOS)/g.test(n) && (o.ios = true, u && (o.iphone = true, o.version = u[2].replace(/_/g, ".")), s && (o.ipad = true, o.version = s[2].replace(/_/g, ".")), r = "ios" + o.version);
        v ? (p.wechat = true, p.version = v[1], q = "wechat" + p.version) : x ? (p.mqq = true, p.version = x[1], q = "mqq" + p.version) : w ? (p.qqbrowser = true, p.version = w[1], q = "qqbrowser" + p.version) : q = "others";
        return {
            os: o,
            browser: p,
            browserdesc: q,
            osdesc: r
        }
    }
    function b(o, p) {
        o = String(o).split(".");
        p = String(p).split(".");
        try {
            for (var n = 0,
            t = Math.max(o.length, p.length); n < t; n++) {
                var q = isFinite(o[n]) && Number(o[n]) || 0,
                s = isFinite(p[n]) && Number(p[n]) || 0;
                if (q < s) {
                    return - 1
                } else if (q > s) {
                    return 1
                }
            }
        } catch(u) {
            return - 1
        }
        return 0
    }
    var g = "sng.qq.com",
    m = false,
    h = /(?:^|;+|\s+)pgv_pvid=([^;]*)/i,
    i = /(?:^|;+|\s+)pgv_info=([^;]*)/i,
    j = /[\?\#]/,
    k = {
        mobileInfo: null,
        _send: function(p, q, n) {
            var x = function() {
                try {
                    var r, z, A, B;
                    r = document.cookie.match(h);
                    r && r.length && r.length > 1 ? z = r[1] : (z = Math.round(Math.random() * 2147483647) * (new Date().getUTCMilliseconds()) % 10000000000, document.cookie = "pgv_pvid=" + z + "; path=/; domain=qq.com; expires=Sun, 18 Jan 2038 00:00:00 GMT;");
                    A = document.cookie.match(i); ! A && (B = Math.round(Math.random() * 2147483647) * (new Date().getUTCMilliseconds()) % 10000000000, document.cookie = "pgv_info=ssid=s" + B + "; path=/; domain=qq.com;")
                } catch(C) {}
                return z
            } ();
            p = p || g;
            q = q || location.pathname;
            n = n || {};
            n.referURL = n.referURL || document.referrer;
            var o, v, w;
            o = n.referURL.split(j);
            o = o[0];
            o = o.split("/");
            v = o[2] || "-";
            w = "/" + o.slice(3).join("/");
            n.referDomain = n.referDomain || v;
            n.referPath = n.referPath || w;
            var s = /QQ\/([\d.]+)/.exec(navigator.userAgent);
            s && (s = s[1]);
            var u = this.mobileInfo || {},
            y = "http://pingfore.qq.com/pingd?scl=-&tt=-&tz=-8&vs=3.3&dm=" + p + "&url=" + q + "&rdm=" + n.referDomain + "&rurl=" + n.referPath + "&pgv_pvid=" + x + "&scr=" + (u.resolution || "-") + "&pf=" + (a.browserdesc || "-") + "&ct=" + (u.network || "-") + "&lang=" + (u.model_name || "-") + "&java=" + (a.osdesc || "-") + "&flash=-&sds=" + Math.random();
            setTimeout(function() {
                e(y)
            },
            200)
        },
        send: function(n, o, p) {
            var r = [].slice.call(arguments, 0),
            q = this; ! this.mobileInfo ? this.getMobileInfo(function(s) {
                q.mobileInfo = s;
                q._send(n, o, p)
            }) : this._send(n, o, p)
        },
        getMobileInfo: function(n) {
            var p = this,
            o = {
                resolution: "-",
                platform: "-",
                network: "-",
                model_name: "-"
            };
            try {
                o.resolution = "" + window.screen.width + "x" + window.screen.height
            } catch(q) {}
            a.os.android ? a.browser.mqq && a.browser.version && b(a.browser.version, "4.6") >= 0 ? JsBridge && JsBridge.onReady && JsBridge.onReady(function() {
                JsBridge._call("qqZoneAppList/getMobileInfo",
                function(r) {
                    var s = JSON.parse(r);
                    n && n(s)
                })
            }) : a.browser.wechat && a.browser.version && b(a.browser.version, "5.1") >= 0 ? JsBridge && JsBridge.onReady && JsBridge.onReady(function() {
                WeixinJSBridge.invoke("getNetworkType", {},
                function(s) {
                    var r = /network_type:(\w+)/.exec(s.err_msg || "network_type:-");
                    r && (o.network = r[1]);
                    n && n(o)
                })
            }) : a.browser.qqbrowser && a.browser.version && b(a.browser.version, "5.0") >= 0 ? n && n(o) : n && n(o) : n && n(o)
        }
    };
    c.tcssPV = k
})(window);