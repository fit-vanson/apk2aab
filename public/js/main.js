// var HomeURL='http://upfile.vn/';
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
window.storageInfo = window.storageInfo || window.webkitStorageInfo;

function closeDialog() {
    $('#windowTitleDialog').modal('hide');
};


function confirmBeforeClosing(type) {
    if (type) {
        window.onbeforeunload = function (e) {
            e = e || window.event;
            if (e) {
                e.returnValue = languageText['L_EXITMESSAGE'];
            }
            return languageText['L_EXITMESSAGE'];
        };
    } else {
        window.onbeforeunload = null;
    }
}

function SHA256(e) {
    function r(e, t) {
        var n = (e & 65535) + (t & 65535);
        var r = (e >> 16) + (t >> 16) + (n >> 16);
        return r << 16 | n & 65535
    }

    function i(e, t) {
        return e >>> t | e << 32 - t
    }

    function s(e, t) {
        return e >>> t
    }

    function o(e, t, n) {
        return e & t ^ ~e & n
    }

    function u(e, t, n) {
        return e & t ^ e & n ^ t & n
    }

    function a(e) {
        return i(e, 2) ^ i(e, 13) ^ i(e, 22)
    }

    function f(e) {
        return i(e, 6) ^ i(e, 11) ^ i(e, 25)
    }

    function l(e) {
        return i(e, 7) ^ i(e, 18) ^ s(e, 3)
    }

    function c(e) {
        return i(e, 17) ^ i(e, 19) ^ s(e, 10)
    }

    function h(e, t) {
        var n = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
        var i = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
        var s = new Array(64);
        var h, p, d, v, m, g, y, b, w, E;
        var S, x;
        e[t >> 5] |= 128 << 24 - t % 32;
        e[(t + 64 >> 9 << 4) + 15] = t;
        for (var w = 0; w < e.length; w += 16) {
            h = i[0];
            p = i[1];
            d = i[2];
            v = i[3];
            m = i[4];
            g = i[5];
            y = i[6];
            b = i[7];
            for (var E = 0; E < 64; E++) {
                if (E < 16) s[E] = e[E + w]; else s[E] = r(r(r(c(s[E - 2]), s[E - 7]), l(s[E - 15])), s[E - 16]);
                S = r(r(r(r(b, f(m)), o(m, g, y)), n[E]), s[E]);
                x = r(a(h), u(h, p, d));
                b = y;
                y = g;
                g = m;
                m = r(v, S);
                v = d;
                d = p;
                p = h;
                h = r(S, x)
            }
            i[0] = r(h, i[0]);
            i[1] = r(p, i[1]);
            i[2] = r(d, i[2]);
            i[3] = r(v, i[3]);
            i[4] = r(m, i[4]);
            i[5] = r(g, i[5]);
            i[6] = r(y, i[6]);
            i[7] = r(b, i[7])
        }
        return i
    }

    function p(e) {
        var n = Array();
        var r = (1 << t) - 1;
        for (var i = 0; i < e.length * t; i += t) {
            n[i >> 5] |= (e.charCodeAt(i / t) & r) << 24 - i % 32
        }
        return n
    }

    function d(e) {
        e = e.replace(/\r\n/g, "\n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r)
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128)
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128)
            }
        }
        return t
    }

    function v(e) {
        var t = n ? "0123456789ABCDEF" : "0123456789abcdef";
        var r = "";
        for (var i = 0; i < e.length * 4; i++) {
            r += t.charAt(e[i >> 2] >> (3 - i % 4) * 8 + 4 & 15) + t.charAt(e[i >> 2] >> (3 - i % 4) * 8 & 15)
        }
        return r
    }

    var t = 8;
    var n = 0;
    e = d(e);
    return v(h(p(e), e.length * t))
}

(function (e) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else if (typeof exports === "object") {
        e(require("jquery"))
    } else {
        e(jQuery)
    }
})(function (e) {
    function n(e) {
        return u.raw ? e : encodeURIComponent(e)
    }

    function r(e) {
        return u.raw ? e : decodeURIComponent(e)
    }

    function i(e) {
        return n(u.json ? JSON.stringify(e) : String(e))
    }

    function s(e) {
        if (e.indexOf('"') === 0) {
            e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        }
        try {
            e = decodeURIComponent(e.replace(t, " "));
            return u.json ? JSON.parse(e) : e
        } catch (n) {
        }
    }

    function o(t, n) {
        var r = u.raw ? t : s(t);
        return e.isFunction(n) ? n(r) : r
    }

    var t = /\+/g;
    var u = e.cookie = function (t, s, a) {
        if (s !== undefined && !e.isFunction(s)) {
            a = e.extend({}, u.defaults, a);
            if (typeof a.expires === "number") {
                var f = a.expires, l = a.expires = new Date;
                l.setTime(+l + f * 864e5)
            }
            return document.cookie = [n(t), "=", i(s), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
        }
        var c = t ? undefined : {};
        var h = document.cookie ? document.cookie.split("; ") : [];
        for (var p = 0, d = h.length; p < d; p++) {
            var v = h[p].split("=");
            var m = r(v.shift());
            var g = v.join("=");
            if (t && t === m) {
                c = o(g, s);
                break
            }
            if (!t && (g = o(g)) !== undefined) {
                c[m] = g
            }
        }
        return c
    };
    u.defaults = {};
    e.removeCookie = function (t, n) {
        if (e.cookie(t) === undefined) {
            return false
        }
        e.cookie(t, "", e.extend({}, n, {expires: -1}));
        return !e.cookie(t)
    }
});
(function (a) {
    a.fn.scrollIntoView = function (f, j, c) {
        var b = a.extend({}, a.fn.scrollIntoView.defaults);
        if (a.type(f) == "object") {
            a.extend(b, f)
        } else {
            if (a.type(f) == "number") {
                a.extend(b, {duration: f, easing: j, complete: c})
            } else {
                if (f == false) {
                    b.smooth = false
                }
            }
        }
        var h = Infinity, e = 0;
        if (this.size() == 1) {
            ((h = this.get(0).offsetTop) == null || (e = h + this.get(0).offsetHeight))
        } else {
            this.each(function (m, n) {
                (n.offsetTop < h ? h = n.offsetTop : n.offsetTop + n.offsetHeight > e ? e = n.offsetTop + n.offsetHeight : null)
            })
        }
        e -= h;
        var k = this.commonAncestor().get(0);
        var g = a(window).height();
        while (k) {
            var d = k.scrollTop, l = k.clientHeight;
            if (l > g) {
                l = g
            }
            if (l == 0 && k.tagName == "BODY") {
                l = g
            }
            if ((k.scrollTop != ((k.scrollTop += 1) == null || k.scrollTop) && (k.scrollTop -= 1) != null) || (k.scrollTop != ((k.scrollTop -= 1) == null || k.scrollTop) && (k.scrollTop += 1) != null)) {
                if (h <= d) {
                    i(k, h)
                } else {
                    if ((h + e) > (d + l)) {
                        i(k, h + e - l)
                    } else {
                        i(k, undefined)
                    }
                }
                return
            }
            k = k.parentNode
        }

        function i(n, m) {
            if (m === undefined) {
                if (a.isFunction(b.complete)) {
                    b.complete.call(n)
                }
            } else {
                if (b.smooth) {
                    a(n).stop().animate({scrollTop: m}, b)
                } else {
                    n.scrollTop = m;
                    if (a.isFunction(b.complete)) {
                        b.complete.call(n)
                    }
                }
            }
        }

        return this
    };
    a.fn.scrollIntoView.defaults = {
        smooth: true,
        duration: null,
        easing: a.easing && a.easing.easeOutExpo ? "easeOutExpo" : null,
        complete: a.noop(),
        step: null,
        specialEasing: {}
    };
    a.fn.isOutOfView = function (b) {
        var c = true;
        this.each(function () {
            var h = this.parentNode, d = h.scrollTop, g = h.clientHeight, f = this.offsetTop, e = this.offsetHeight;
            if (b ? (f) > (d + g) : (f + e) > (d + g)) {
            } else {
                if (b ? (f + e) < d : f < d) {
                } else {
                    c = false
                }
            }
        });
        return c
    };
    a.fn.commonAncestor = function () {
        var c = [];
        var f = Infinity;
        a(this).each(function () {
            var g = a(this).parents();
            c.push(g);
            f = Math.min(f, g.length)
        });
        for (var d = 0; d < c.length; d++) {
            c[d] = c[d].slice(c[d].length - f)
        }
        for (var d = 0; d < c[0].length; d++) {
            var e = true;
            for (var b in c) {
                if (c[b][d] != c[0][d]) {
                    e = false;
                    break
                }
            }
            if (e) {
                return a(c[0][d])
            }
        }
        return a([])
    }
})(jQuery);
Cufon.replace('#Banner h1,#Banner h2,#uploadPanel h1,#Download h2,#downloadBanner h1', {fontFamily: 'UTM Alter Gothic'});

function showAlert(content, sec) {
    if (!$('body .showAlert').length) {
        $('body').append('<div class="showAlert"/><div class="showAlertContent"><div class="Wrapper"><h1>' + languageText['L_NOTIFY'] + ':</h1><div>' + content + '</div><a class="Close">' + languageText['L_CLOSE'] + '</a><div class="Clear"></div></div></div>');
    } else {
        return false;
    }
    topx = $('body .showAlertContent').height();
    topx = ($(window).height() - topx) / 2;
    topx -= 50;
    topx += 'px';
    $('body .showAlertContent').css('top', topx);
    $('body .showAlert,body .showAlertContent').fadeIn(400);
    if (sec != undefined && sec != null && sec != '' && sec > 0) {
        $('body .showAlertContent .Close').html(languageText['L_WAIT'] + ' ' + sec + ' ' + languageText['L_SECOND']);
        sec--;
        t = setInterval(function () {
            if (sec < 1) {
                $('body .showAlertContent .Close').html(languageText['L_CLOSE']);
                $('body .showAlertContent .Close').click();
                clearInterval(t);
            } else {
                $('body .showAlertContent .Close').html(languageText['L_WAIT'] + ' ' + sec + ' ' + languageText['L_SECOND']);
                sec--;
            }
        }, 1000);
    }
    $('body .showAlertContent .Close').click(function () {
        if ($(this).html() == languageText['L_CLOSE']) {
            $('body .showAlert,body .showAlertContent').fadeOut(200, function () {
                $(this).remove();
            });
        }
    });
    return false;
}

function numberFormat(val) {
    val += '';
    val = val.replace(/\,/g, '');
    while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }
    return val;
}

function showWaiting(type) {
    if (type !== false) {
        type = true;
    } else {
        type = false;
    }
    if (type == false) {
        $('body .showAlert,body .showAlertContent').stop().remove();
    } else {
        if (!$('body .showAlert').length) {
            $('body').append('<div class="showAlert"/><div class="showAlertContent"><div class="Wrapper"><div>' + languageText['L_PROCESSING'] + '</div><div class="Clear"></div></div></div>');
        } else {
            return false;
        }
        topx = $('body .showAlertContent').height();
        topx = ($(window).height() - topx) / 2;
        topx -= 50;
        topx += 'px';
        $('body .showAlertContent').css('top', topx);
        $('body .showAlert,body .showAlertContent').stop().fadeIn(400);
        return false;
    }
}

var Validator = function () {
    parentThis = this;
    this.Message = '';
    this.Check = function (obj) {
        obj.val(obj.val().trim());
        type = obj.attr('data-check');
        if (parentThis['is' + type] == '' || parentThis['is' + type] == undefined || parentThis['is' + type] == null) {
            obj.addClass('Valid');
            return true;
        } else if (parentThis['is' + type](obj)) {
            obj.addClass('Valid');
            return true;
        } else {
            obj.addClass('Invalid');
            return false;
        }
    };
    this.isEmail = function (obj) {
        parentThis.Message = '';
        obj.val(obj.val().toLowerCase());
        obj = obj.val();
        var pattern = /^[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        if (!pattern.test(obj)) {
            parentThis.Message = languageText['L_INVALIDEMAIL'];
            return false;
        }
        return true;
    };
    this.isSubject = function (obj) {
        parentThis.Message = '';
        obj = obj.val().trim();
        if (obj.length < 3) {
            return false;
        } else {
            return true;
        }
    };
    this.isPassword = function (obj) {
        parentThis.Message = '';
        obj = obj.val();
        if (obj.length < 6) {
            parentThis.Message = languageText['L_INVALIDPASSWORD'];
            return false;
        }
        return true;
    };
    this.isComparePassword = function (obj) {
        parentThis.Message = '';
        obj2 = obj.parents('form').find('input[type="password"]').eq(obj.parents('form').find('input[type="password"]').length - 2).val();
        obj = obj.val().trim();
        if (obj != obj2) {
            parentThis.Message = languageText['L_INVALIDPASSWORD2'];
            return false;
        }
        return true;
    };

    this.isPhone = function (obj) {
        parentThis.Message = '';
        if (obj.val() != '' && !/^\d{10,15}$/.test(obj.val())) {
            parentThis.Message = languageText['L_INVALIDPHONE'];
            return false;
        }
        return true;
    };
    this.isName = function (obj) {
        parentThis.Message = '';
        if (obj.val().length < 5 || obj.val().split(' ').length < 2) {
            parentThis.Message = languageText['L_INVALIDNAME'];
            return false;
        }
        return true;
    };
    // this.isFile = function (obj) {
    //     // var file = document.getElementById("fileapk").files[0];
    //     // console.log(file)
    //     // if (file.files && file.files[0]) {
    //     //     var reader = new FileReader();
    //     //     console.log(reader)
    //     //     reader.onload = function (e) {
    //     //         console.log(e)
    //     //
    //     //         // $('#avatar_thumbnail').attr('src', e.target.result);
    //     //     }
    //     //     // reader.readAsDataURL(input.files[0]);
    //     // }
    //
    //     // console.log(obj)
    //     // parentThis.Message = '';
    //     // if (obj.val().length < 1) {
    //     //     parentThis.Message = languageText['L_INVALIDFILE'];
    //     //     return false;
    //     // }
    //     return true;
    // };
};
isLoading = false;
isUploading = false;

onloadFunction = function () {
    webTitle = $('title').html();
    if (($Obj = $('#Header')).length) {
        var Color = '#292d31', hoverColor = '#4a5157';
        $Obj.wrapInner('<div class="Wrapper"/>');
        $Obj.find('ul li a').each(function () {
            $(this).hover(function () {
                if ($(this).hasClass('Hover')) {
                    return false;
                }
                $(this).stop().animate({'backgroundColor': hoverColor}, 500);
            }, function () {
                if ($(this).hasClass('Hover')) {
                    return false;
                }
                $(this).stop().animate({'backgroundColor': Color}, 500);
            }).click(function () {
                var $this = $(this);
                $(this).parents('ul').find('a').each(function () {
                    if (JSON.stringify($this) != JSON.stringify($(this))) {
                        $(this).stop().animate({'backgroundColor': Color}, 300, function () {
                            $(this).removeClass('Hover');
                        });
                    } else {
                        $(this).stop().css('backgroundColor', hoverColor).addClass('Hover');
                    }
                });
            });
        });
        $Obj.append('<div class="Clear"/>');
        showLoggedInItems();
    }

    $('.Field').each(function () {
        $(this).append('<div class="Clear"/>');
    });

    if (($Obj = $('#Body')).length) {
        $Obj.append('<div class="Clear"/>').wrapInner('<div class="Wrapper"/>');
        if (($frmRegister = $('#frmRegister')).length) {
            $Validator = new Validator();
            if ($frmRegister.find('.Field').length) {
                $frmRegister.find('.Field').each(function () {
                    $(this).append('<div class="Clear"/>');
                });

            }
            $frmRegister.find('a[href="#Convert"]').click(function () {
                if (isLoading) {
                    return false;
                }
                fieldCount = $frmRegister.find('input[type="text"]').length;

                for (i = 0; i < fieldCount; i++) {
                    if (!$Validator.Check($frmRegister.find('input[type="text"]').eq(i))) {
                        showAlert($Validator.Message);
                        return false;
                    }
                }
                isLoading = true;
                confirmBeforeClosing(true);
                showWaiting(true);
                var formData = new FormData($("#frmRegister")[0]);
                $.ajax({
                    url: '/upload',
                    type: 'POST',
                    dataType: 'JSON',
                    headers: {"X-CSRF-Token": $("meta[name='csrf-token']").attr("content")},
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (source) {
                        showWaiting(false);
                        if (source.success) {
                            $('#Body .Intro').hide(200, function () {
                                $('#Body .userMessage').show(200);
                            });
                        }
                        if (source.errors) {
                            grecaptcha.reset();
                            for (var count = 0; count < source.errors.length; count++) {
                                showAlert(source.errors[count]);
                                if (!isUploading) {
                                    confirmBeforeClosing(false);
                                }
                            }

                        }
                        isLoading = false;
                    },
                    error: function () {
                        showWaiting(false);
                        showAlert(languageText['L_REGISTERFAILED'], 5);
                        isLoading = false;
                        if (!isUploading) {
                            setTimeout(function () {
                                confirmBeforeClosing(false);
                            }, 5000);
                        }
                        return false;
                    }
                });
            });

            $frmRegister.on('submit', function () {
                $(this).find('a[href="#Convert"]').click();
                return false;
            });
        }
    }

    $('head').find('script').last().remove();
};
ua = window.navigator.userAgent;

if (ua.indexOf('MSIE') >= 0 || !!ua.match(/Trident.*rv\:11\./)) {
    $(document).ready(onloadFunction);
} else {
    window.onload = onloadFunction;
}
function onError(e) {
    console.log('Error', e);
}


function numRound(a, b) {
    b = Math.pow(10, b);
    return Math.round(a * b) / b;
}

function Register() {
    if (isLoading || isUploading) {
        showAlert(languageText['L_SERVER_BUSY']);
        return false;
    } else if ($.cookie('ID') != undefined && $.cookie('Salt') != undefined) {
        showAlert(languageText['L_ALREADY_LOGGED_IN']);
        return false;
    } else {
        $('#frmLogin').fadeOut(200, function () {
            $('#frmRegister').fadeIn(200);
        });
    }
}

function showLoggedInItems() {
    if (isLogged != undefined && isLogged == true) {
        $('#Header ul .User').css('display', 'inline');
    }
}
