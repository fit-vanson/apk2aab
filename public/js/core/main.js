var HomeURL='http://upfile.vn/';
window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
window.storageInfo = window.storageInfo || window.webkitStorageInfo;
function closeDialog () {
    $('#windowTitleDialog').modal('hide');
};


function confirmBeforeClosing(type){
    if(type){
        window.onbeforeunload=function(e){
            e=e||window.event;
            if(e){e.returnValue=languageText['L_EXITMESSAGE'];}
            return languageText['L_EXITMESSAGE'];
        };
    }else{
        window.onbeforeunload=null;
    }
}
function SHA256(e){function r(e,t){var n=(e&65535)+(t&65535);var r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function i(e,t){return e>>>t|e<<32-t}function s(e,t){return e>>>t}function o(e,t,n){return e&t^~e&n}function u(e,t,n){return e&t^e&n^t&n}function a(e){return i(e,2)^i(e,13)^i(e,22)}function f(e){return i(e,6)^i(e,11)^i(e,25)}function l(e){return i(e,7)^i(e,18)^s(e,3)}function c(e){return i(e,17)^i(e,19)^s(e,10)}function h(e,t){var n=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298);var i=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225);var s=new Array(64);var h,p,d,v,m,g,y,b,w,E;var S,x;e[t>>5]|=128<<24-t%32;e[(t+64>>9<<4)+15]=t;for(var w=0;w<e.length;w+=16){h=i[0];p=i[1];d=i[2];v=i[3];m=i[4];g=i[5];y=i[6];b=i[7];for(var E=0;E<64;E++){if(E<16)s[E]=e[E+w];else s[E]=r(r(r(c(s[E-2]),s[E-7]),l(s[E-15])),s[E-16]);S=r(r(r(r(b,f(m)),o(m,g,y)),n[E]),s[E]);x=r(a(h),u(h,p,d));b=y;y=g;g=m;m=r(v,S);v=d;d=p;p=h;h=r(S,x)}i[0]=r(h,i[0]);i[1]=r(p,i[1]);i[2]=r(d,i[2]);i[3]=r(v,i[3]);i[4]=r(m,i[4]);i[5]=r(g,i[5]);i[6]=r(y,i[6]);i[7]=r(b,i[7])}return i}function p(e){var n=Array();var r=(1<<t)-1;for(var i=0;i<e.length*t;i+=t){n[i>>5]|=(e.charCodeAt(i/t)&r)<<24-i%32}return n}function d(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t}function v(e){var t=n?"0123456789ABCDEF":"0123456789abcdef";var r="";for(var i=0;i<e.length*4;i++){r+=t.charAt(e[i>>2]>>(3-i%4)*8+4&15)+t.charAt(e[i>>2]>>(3-i%4)*8&15)}return r}var t=8;var n=0;e=d(e);return v(h(p(e),e.length*t))}
(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){e(require("jquery"))}else{e(jQuery)}})(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function r(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function s(e){if(e.indexOf('"')===0){e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{e=decodeURIComponent(e.replace(t," "));return u.json?JSON.parse(e):e}catch(n){}}function o(t,n){var r=u.raw?t:s(t);return e.isFunction(n)?n(r):r}var t=/\+/g;var u=e.cookie=function(t,s,a){if(s!==undefined&&!e.isFunction(s)){a=e.extend({},u.defaults,a);if(typeof a.expires==="number"){var f=a.expires,l=a.expires=new Date;l.setTime(+l+f*864e5)}return document.cookie=[n(t),"=",i(s),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}var c=t?undefined:{};var h=document.cookie?document.cookie.split("; "):[];for(var p=0,d=h.length;p<d;p++){var v=h[p].split("=");var m=r(v.shift());var g=v.join("=");if(t&&t===m){c=o(g,s);break}if(!t&&(g=o(g))!==undefined){c[m]=g}}return c};u.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)===undefined){return false}e.cookie(t,"",e.extend({},n,{expires:-1}));return!e.cookie(t)}});
(function(a){a.fn.scrollIntoView=function(f,j,c){var b=a.extend({},a.fn.scrollIntoView.defaults);if(a.type(f)=="object"){a.extend(b,f)}else{if(a.type(f)=="number"){a.extend(b,{duration:f,easing:j,complete:c})}else{if(f==false){b.smooth=false}}}var h=Infinity,e=0;if(this.size()==1){((h=this.get(0).offsetTop)==null||(e=h+this.get(0).offsetHeight))}else{this.each(function(m,n){(n.offsetTop<h?h=n.offsetTop:n.offsetTop+n.offsetHeight>e?e=n.offsetTop+n.offsetHeight:null)})}e-=h;var k=this.commonAncestor().get(0);var g=a(window).height();while(k){var d=k.scrollTop,l=k.clientHeight;if(l>g){l=g}if(l==0&&k.tagName=="BODY"){l=g}if((k.scrollTop!=((k.scrollTop+=1)==null||k.scrollTop)&&(k.scrollTop-=1)!=null)||(k.scrollTop!=((k.scrollTop-=1)==null||k.scrollTop)&&(k.scrollTop+=1)!=null)){if(h<=d){i(k,h)}else{if((h+e)>(d+l)){i(k,h+e-l)}else{i(k,undefined)}}return}k=k.parentNode}function i(n,m){if(m===undefined){if(a.isFunction(b.complete)){b.complete.call(n)}}else{if(b.smooth){a(n).stop().animate({scrollTop:m},b)}else{n.scrollTop=m;if(a.isFunction(b.complete)){b.complete.call(n)}}}}return this};a.fn.scrollIntoView.defaults={smooth:true,duration:null,easing:a.easing&&a.easing.easeOutExpo?"easeOutExpo":null,complete:a.noop(),step:null,specialEasing:{}};a.fn.isOutOfView=function(b){var c=true;this.each(function(){var h=this.parentNode,d=h.scrollTop,g=h.clientHeight,f=this.offsetTop,e=this.offsetHeight;if(b?(f)>(d+g):(f+e)>(d+g)){}else{if(b?(f+e)<d:f<d){}else{c=false}}});return c};a.fn.commonAncestor=function(){var c=[];var f=Infinity;a(this).each(function(){var g=a(this).parents();c.push(g);f=Math.min(f,g.length)});for(var d=0;d<c.length;d++){c[d]=c[d].slice(c[d].length-f)}for(var d=0;d<c[0].length;d++){var e=true;for(var b in c){if(c[b][d]!=c[0][d]){e=false;break}}if(e){return a(c[0][d])}}return a([])}})(jQuery);
Cufon.replace('#Banner h1,#Banner h2,#uploadPanel h1,#Download h2,#downloadBanner h1', { fontFamily: 'UTM Alter Gothic' });
function showAlert(content,sec){
    if(!$('body .showAlert').length){
        $('body').append('<div class="showAlert"/><div class="showAlertContent"><div class="Wrapper"><h1>'+languageText['L_NOTIFY']+':</h1><div>'+content+'</div><a class="Close">'+languageText['L_CLOSE']+'</a><div class="Clear"></div></div></div>');
    }else{return false;}
    topx=$('body .showAlertContent').height();
    topx=($(window).height()-topx)/2;topx-=50;topx+='px';
    $('body .showAlertContent').css('top',topx);
    $('body .showAlert,body .showAlertContent').fadeIn(400);
    if(sec!=undefined&&sec!=null&&sec!=''&&sec>0){
        $('body .showAlertContent .Close').html(languageText['L_WAIT']+' '+sec+' '+languageText['L_SECOND']);
        sec--;
        t=setInterval(function(){
            if(sec<1){
                $('body .showAlertContent .Close').html(languageText['L_CLOSE']);
                $('body .showAlertContent .Close').click();
                clearInterval(t);
            }else{
                $('body .showAlertContent .Close').html(languageText['L_WAIT']+' '+sec+' '+languageText['L_SECOND']);
                sec--;
            }
        },1000);
    }
    $('body .showAlertContent .Close').click(function(){
        if($(this).html()==languageText['L_CLOSE']){
            $('body .showAlert,body .showAlertContent').fadeOut(200,function(){
                $(this).remove();
            });
        }
    });
    return false;
}
function numberFormat(val)
{
    val+='';
    val = val.replace(/\,/g,'');
    while (/(\d+)(\d{3})/.test(val.toString())){
        val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}
function showWaiting(type){
    if(type!==false){
        type=true;
    }else{type=false;}
    if(type==false){
        $('body .showAlert,body .showAlertContent').stop().remove();
    }else{
        if(!$('body .showAlert').length){
            $('body').append('<div class="showAlert"/><div class="showAlertContent"><div class="Wrapper"><div>'+languageText['L_PROCESSING']+'</div><div class="Clear"></div></div></div>');
        }else{
            return false;
        }
        topx=$('body .showAlertContent').height();
        topx=($(window).height()-topx)/2;topx-=50;topx+='px';
        $('body .showAlertContent').css('top',topx);
        $('body .showAlert,body .showAlertContent').stop().fadeIn(400);
        return false;
    }
}
var Validator=function(){
    parentThis=this;
    this.Message='';
    this.Check=function(obj){
        obj.val(obj.val().trim());
        type=obj.attr('data-check');
        if(parentThis['is'+type]==''||parentThis['is'+type]==undefined||parentThis['is'+type]==null){
            obj.addClass('Valid');
            return true;
        }else if(parentThis['is'+type](obj)){
            obj.addClass('Valid');
            return true;
        }else{
            obj.addClass('Invalid');
            return false;
        }
    };
    this.isEmail=function(obj){
        parentThis.Message='';
        obj.val(obj.val().toLowerCase());
        obj=obj.val();
        var pattern=/^[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        if(!pattern.test(obj)){
            parentThis.Message=languageText['L_INVALIDEMAIL'];
            return false;
        }
        return true;
    };
    this.isSubject=function(obj){
        parentThis.Message='';
        obj=obj.val().trim();
        if(obj.length<3){
            return false;
        }else{
            return true;
        }
    };
    this.isPassword=function(obj){
        parentThis.Message='';
        obj=obj.val();
        if(obj.length<6){
            parentThis.Message=languageText['L_INVALIDPASSWORD'];
            return false;
        }
        return true;
    };
    this.isComparePassword=function(obj){
        parentThis.Message='';
        obj2=obj.parents('form').find('input[type="password"]').eq(obj.parents('form').find('input[type="password"]').length-2).val();
        obj=obj.val().trim();
        if(obj!=obj2){
            parentThis.Message=languageText['L_INVALIDPASSWORD2'];
            return false;
        }
        return true;
    };

    this.isPhone=function(obj){
        parentThis.Message='';
        if(obj.val()!=''&&!/^\d{10,15}$/.test(obj.val())){
            parentThis.Message=languageText['L_INVALIDPHONE'];
            return false;
        }
        return true;
    };
    this.isName=function(obj){
        parentThis.Message='';
        if(obj.val().length<5||obj.val().split(' ').length<2){
            parentThis.Message=languageText['L_INVALIDNAME'];
            return false;
        }
        return true;
    };
};
function disableRegisterForm(){
    frm=$('#frmRegister');
    ip=frm.find('input[type="text"],input[type="password"]');
    ipn=ip.length;
    for(i=0;i<ipn;i++){
        ip.eq(i).removeAttr('placeholder').addClass('Disabled').attr('disabled','disabled');
        if(ip.eq(i).attr('type')!='password'){
            ip.eq(i).val(languageText['L_ALREADYREGISTERED']);
        }
    }
    frm.find('a[href="#Convert"]').addClass('RegisterDisabled');
    // frm.find('.Agreement').addClass('AgreementDisabled').addClass('AgreementOK');
    frm.find('a[href="#Convert"]').click(function(){return false;});
}
isLoading=false;isUploading=false;
var listFile=new Array();
onloadFunction=function(){
    webTitle=$('title').html();
    if(($Obj=$('#Header')).length){
        var Color='#292d31',hoverColor='#4a5157';
        $Obj.wrapInner('<div class="Wrapper"/>');
        $Obj.find('ul li a').each(function(){
            $(this).hover(function(){
                if($(this).hasClass('Hover')){return false;}
                $(this).stop().animate({'backgroundColor':hoverColor},500);
            },function(){
                if($(this).hasClass('Hover')){return false;}
                $(this).stop().animate({'backgroundColor':Color},500);
            }).click(function(){
                var $this=$(this);
                $(this).parents('ul').find('a').each(function(){
                    if(JSON.stringify($this)!=JSON.stringify($(this))){
                        $(this).stop().animate({'backgroundColor':Color},300,function(){$(this).removeClass('Hover');});
                    }else{
                        $(this).stop().css('backgroundColor',hoverColor).addClass('Hover');
                    }
                });
            });
        });
        $Obj.append('<div class="Clear"/>');
        showLoggedInItems();
    }

    if(($Obj=$('#downloadBanner')).length){
        $Obj.append('<div class="UFO"/>').wrapInner('<div class="Wrapper"/>');
    }

    if(($Obj=$('#Banner')).length){
        $Obj.append('<div class="UFO"/>').wrapInner('<div class="Wrapper"/>');
        $Obj.find('.UFO').eq(0).click(function(){$('input[type="file"]').click();});
        $Obj.find('.progressPanel').eq(0).click(function(){$('input[type="file"]').click();});
        $Obj.append('<input type="file" id="fileUploader" multiple/>');
    }
    if(($Obj=$('#fileUploader')).length){
        $Obj.on('change',function(e){
            if(e.originalEvent.target.files.length==1&&(/.ufMaster$/.test(e.originalEvent.target.files[0].name)||/.ufKey$/.test(e.originalEvent.target.files[0].name))){
                receiveLoginKey(e.originalEvent.target.files[0]);
                return false;
            }
            for(i=0;i<e.originalEvent.target.files.length;i++){
                if(!e.originalEvent.target.files[i].type){
                    tx=e.originalEvent.target.files[i].slice(0,1);
                    txReader=new FileReader();
                    try{
                        txReader.readAsBinaryString(tx);
                        listFile.push(e.originalEvent.target.files[i]);
                        if($('#fileUploader').attr('path')!='')
                        {
                            listFile[i]['path']=$('#fileUploader').attr('path');
                        }
                        console.log(e.originalEvent.target.files[i]);
                    }catch(NS_ERROR_FILE_ACCESS_DENIED){continue;}
                }else{
                    listFile.push(e.originalEvent.target.files[i]);
                    if($('#fileUploader').attr('path')!='')
                    {
                        listFile[i]['path']=$('#fileUploader').attr('path');
                    }
                    console.log(e.originalEvent.target.files[i]);
                }
            }
        });
    }
    if(($Obj=$('#uploadPanel')).length){
        $('body').on('dragover',function(e){
            e.stopPropagation();
            e.preventDefault();
            e.originalEvent.dataTransfer.effectAllowed='copy';
            e.originalEvent.dataTransfer.dropEffect='copy';
        }).on('drop',function(e){
            e.stopPropagation();
            e.preventDefault();
            if(e.originalEvent.dataTransfer.files.length==1&&(/.ufMaster$/.test(e.originalEvent.dataTransfer.files[0].name)||/.ufKey$/.test(e.originalEvent.dataTransfer.files[0].name))){
                receiveLoginKey(e.originalEvent.dataTransfer.files[0]);
                return false;
            }
            for(i=0;i<e.originalEvent.dataTransfer.files.length;i++){
                if(!e.originalEvent.dataTransfer.files[i].type){
                    tx=e.originalEvent.dataTransfer.files[i].slice(0,1);
                    txReader=new FileReader();
                    try{
                        txReader.readAsBinaryString(tx);
                        listFile.push(e.originalEvent.dataTransfer.files[i]);
                    }catch(NS_ERROR_FILE_ACCESS_DENIED){continue;}
                }else{listFile.push(e.originalEvent.dataTransfer.files[i]);}
            }
            $('html,body').stop().animate({scrollTop:$('#uploadPanel').offset().top+'px'},500);
        });
    }else{
        $('body').on('dragover',function(e){
            e.stopPropagation();
            e.preventDefault();
            e.originalEvent.dataTransfer.effectAllowed='copy';
            e.originalEvent.dataTransfer.dropEffect='copy';
        }).on('drop',function(e){
            e.stopPropagation();
            e.preventDefault();
            alert(languageText['L_CANNOT_DRAGDROP_HERE']);
        });
    }

    if(($Obj=$('#uploadPanel')).length){
        $Obj.wrapInner('<div class="Wrapper"/>');
    }

    $('.Field').each(function(){
        $(this).append('<div class="Clear"/>');
    });

    if(($Obj=$('#Body')).length){
        $Obj.append('<div class="Clear"/>').wrapInner('<div class="Wrapper"/>');
        if(($frmLogin=$('#frmLogin')).length){
            $frmLogin.find('input[type="text"],input[type="password"]').each(function(){
                $(this).focus(function(){
                    $(this).removeClass('Valid').removeClass('Invalid');
                }).focusout(function(){
                    $Validator.Check($(this));
                });
            });
            $frmLogin.find('a[href="#Login"]').click(function(){
                if(isLoading){return false;}

                fieldCount=$frmLogin.find('input[type="text"],input[type="password"]').length;
                for(i=0;i<fieldCount;i++){
                    if(!$Validator.Check($frmLogin.find('input[type="text"],input[type="password"]').eq(i))){
                        showAlert($Validator.Message);
                        return false;
                    }
                }
                isLoading=true;
                confirmBeforeClosing(true);
                showWaiting(true);
                $.ajax({
                    url:'/',
                    type:'POST',
                    dataType:'JSON',
                    data:{
                        'Act':'Login',
                        'Email':$frmLogin.find('input[name="Email"]').eq(0).val(),
                        'Password':SHA256(SHA256('UpFile.VN')+$frmLogin.find('input[name="Password"]').eq(0).val()).toUpperCase()
                    },
                    success:function(source){
                        if(source.Status){
                            window.open(HomeURL+'filemanager/','_self');
                        }else if(!source.Reload){
                            showWaiting(false);
                            showAlert(source.Message);
                            isLoading=false;
                            if(!isUploading){confirmBeforeClosing(false);}
                        }else{
                            showWaiting(false);
                            showAlert(source.Message);
                            if(!isUploading){
                                confirmBeforeClosing(false);
                                window.open(HomeURL,'_self')
                            }
                        }
                    },
                    error:function(){
                        showWaiting(false);
                        showAlert(languageText['L_LOGINFAILED'],5);
                        isLoading=false;
                        if(!isUploading){setTimeout(function(){confirmBeforeClosing(false);},5000);}
                        return false;
                    }
                });
            });

            $frmLogin.find('a[href="#forgotPassword"]').click(function(){
                if(isLoading){return false;}

                fieldCount=$frmLogin.find('input[type="text"]').length;
                for(i=0;i<fieldCount;i++){
                    if(!$Validator.Check($frmLogin.find('input[type="text"]').eq(i))){
                        showAlert($Validator.Message);
                        return false;
                    }
                }

                isLoading=true;
                confirmBeforeClosing(true);
                showWaiting(true);
                $.ajax({
                    url:'/',
                    type:'POST',
                    dataType:'JSON',
                    data:{
                        'Act':'forgotPassword',
                        'Email':$frmLogin.find('input[name="Email"]').eq(0).val(),
                        'Hash':SHA256('Chung.UpFile.VN'+$frmLogin.find('input[name="Email"]').eq(0).val()).toUpperCase(),
                    },
                    success:function(source){
                        if(source.Status){
                            showWaiting(false);
                            showAlert(languageText['L_FORGOTPASSWORD_SUCCESSFULLY'],30);
                            setTimeout(function(){
                                confirmBeforeClosing(false);
                                isLoading=false;
                            },30000);
                        }else{
                            showWaiting(false);
                            showAlert(languageText['L_FORGOTPASSWORD_FAILED'],5);
                            setTimeout(function(){
                                isLoading=false;
                                confirmBeforeClosing(false);
                            },5000);
                            return false;
                        }
                    },
                    error:function(){
                        showWaiting(false);
                        showAlert(languageText['L_FORGOTPASSWORD_FAILED'],5);
                        setTimeout(function(){
                            isLoading=false;
                            confirmBeforeClosing(false);
                        },5000);
                        return false;
                    }
                });
            });

            $frmLogin.on('submit',function(){
                $(this).find('a[href="#Login"]').click();
                return false;
            });
        }
        if(($frmRegister=$('#frmRegister')).length){
            $Validator=new Validator();
            if($frmRegister.find('.Field').length){
                $frmRegister.find('.Field').each(function(){
                    $(this).append('<div class="Clear"/>');
                });

                // $frmRegister.find('.Agreement').click(function(){
                //     if($(this).hasClass('AgreementDisabled')){return false;}
                //     if($(this).hasClass('AgreementOK')){
                //         $(this).removeClass('AgreementOK');
                //     }else{
                //         $(this).addClass('AgreementOK');
                //     }
                // });


                $frmRegister.find('input[type="text"],input[type="password"]').each(function(){
                    $(this).focus(function(){
                        $(this).removeClass('Valid').removeClass('Invalid');
                    }).focusout(function(){
                        $Validator.Check($(this));
                    });
                });
            }
            $frmRegister.find('a[href="#Convert"]').click(function(){
                if($(this).hasClass('RegisterDisabled')){return false;}
                if(isLoading){return false;}
                // if(!$frmRegister.find('.Agreement').eq(0).hasClass('AgreementOK')){
                //     showAlert(languageText['L_INVALIDAGREEMENT']);
                //     return false;
                // }
                fieldCount=$frmRegister.find('input[type="text"],input[type="password"]').length;
                for(i=0;i<fieldCount;i++){
                    if(!$Validator.Check($frmRegister.find('input[type="text"],input[type="password"]').eq(i))){
                        showAlert($Validator.Message);
                        return false;
                    }
                }
                isLoading=true;
                confirmBeforeClosing(true);
                showWaiting(true);
                var formData = new FormData($("#frmRegister")[0]);
                $.ajax({
                    url:'/upload',
                    type:'POST',
                    dataType:'JSON',
                    headers: { "X-CSRF-Token": $("meta[name='csrf-token']").attr("content") },
                    data: formData,
                    contentType: false,
                    processData: false,
                    success:function(source){
                        showWaiting(false);
                        if(source.success){
                            // showAlert(languageText['L_REGISTERCOMPLETED'],5);
                            // disableRegisterForm();
                            $('#Body .Intro').hide(200,function(){
                                $('#Body .userMessage').show(200);
                            });
                            // if(!isUploading){setTimeout(function(){isLogged=true;showLoggedInItems();confirmBeforeClosing(false);},5000);}
                        }
                        if(source.errors)
                        {
                            for (var count = 0; count < source.errors.length; count++) {
                                showAlert(source.errors[count]);
                                if(!isUploading){confirmBeforeClosing(false);}
                            }

                        }
                        isLoading=false;
                    },
                    error:function(){
                        showWaiting(false);
                        showAlert(languageText['L_REGISTERFAILED'],5);
                        isLoading=false;
                        if(!isUploading){setTimeout(function(){confirmBeforeClosing(false);},5000);}
                        return false;
                    }
                });
            });

            $frmRegister.on('submit',function(){
                $(this).find('a[href="#Convert"]').click();
                return false;
            });

            if(isLogged!=undefined&&isLogged==true){
                disableRegisterForm();
                $('#Body .Intro').hide(200,function(){
                    $('#Body .userMessage').show(200);
                });

            }
        }
    }
    if(($Obj=$('#Footer')).length){
        $Obj.find('.Links').eq(0).append('<div class="Clear"/>');
    }

    if(($Obj=$('#Download')).length){
        $Obj.find('.Download .Button').html(languageText['L_DOWNLOAD']);


    }
    if(($Obj=$('#Contact')).length){
        $Obj.wrapInner('<div class="Wrapper"/>');
        if(($frmContact=$('#frmContact')).length){
            $Validator=new Validator();
            $frmContact.find('input[type="text"],input[type="password"]').each(function(){
                $(this).focus(function(){
                    $(this).removeClass('Valid').removeClass('Invalid');
                }).focusout(function(){
                    $Validator.Check($(this));
                    if($(this).attr('name')=='Password'&&$(this).val().trim()==''){
                        $(this).removeClass('Invalid').addClass('Valid');
                    }
                });
            });
            $frmContact.on('submit',function(){
                if(isLoading){return false;}
                if($(this).find('.Invalid').length){return false;}
                if($(this).find('textarea').eq(0).val().length<3){
                    showAlert(languageText['L_USER_CONTACT_CONTENT_ERROR']);
                    return false;
                }
                Name=$(this).find('[name="Name"]').eq(0).val().trim();
                Email=$(this).find('[name="Email"]').eq(0).val().trim();
                Subject=$(this).find('[name="Subject"]').eq(0).val().trim();
                Content=$(this).find('[name="Content"]').eq(0).val().trim();
                isLoading=true;
                confirmBeforeClosing(true);
                showWaiting(true);
                $.ajax({
                    type:'POST',
                    dataType:'JSON',
                    data:{'Name':Name,'Email':Email,'Subject':Subject,'Content':Content,'Hash':SHA256(Email+Content+Name+Subject+Email.length).toUpperCase()},
                    success:function(source){
                        showWaiting(false);
                        showAlert(languageText['L_USER_CONTACT_COMPLETE'],5);
                        setTimeout(function(){
                            window.open(HomeURL,'_self');
                        },5000);
                    },
                    error:function(){
                        showWaiting(false);
                        showAlert(languageText['L_USER_CONTACT_ERROR'],5);
                        setTimeout(function(){
                            isLoading=false;
                        },5000);
                    }
                });
                return false;
            });
        }

        if(($frmReport=$('#frmReport')).length){
            $Validator=new Validator();
            $frmReport.find('input[type="text"],input[type="password"]').each(function(){
                $(this).focus(function(){
                    $(this).removeClass('Valid').removeClass('Invalid');
                }).focusout(function(){
                    $Validator.Check($(this));
                    if($(this).attr('name')=='Password'&&$(this).val().trim()==''){
                        $(this).removeClass('Invalid').addClass('Valid');
                    }
                });
            });
            $frmReport.on('submit',function(){
                if(isLoading){return false;}
                if($(this).find('.Invalid').length){return false;}
                if($(this).find('textarea').eq(0).val().length<3){
                    showAlert(languageText['L_USER_CONTACT_CONTENT_ERROR']);
                    return false;
                }
                Name=$(this).find('[name="Name"]').eq(0).val().trim();
                Email=$(this).find('[name="Email"]').eq(0).val().trim();
                Subject=$(this).find('[name="Subject"]').eq(0).val().trim();
                Content=$(this).find('[name="Content"]').eq(0).val().trim();
                isLoading=true;
                confirmBeforeClosing(true);
                showWaiting(true);
                $.ajax({
                    type:'POST',
                    dataType:'JSON',
                    data:{'Name':Name,'Email':Email,'Subject':Subject,'Content':Content,'Hash':SHA256(Email+Content+Name+Subject+Email.length).toUpperCase()},
                    success:function(source){
                        showWaiting(false);
                        showAlert(languageText['L_USER_CONTACT_COMPLETE'],5);
                        setTimeout(function(){
                            window.open(HomeURL,'_self');
                        },5000);
                    },
                    error:function(){
                        showWaiting(false);
                        showAlert(languageText['L_USER_CONTACT_ERROR'],5);
                        setTimeout(function(){
                            isLoading=false;
                        },5000);
                    }
                });
                return false;
            });
        }
    }
    if(($Obj=$('#UserCP')).length){
        $Obj.wrapInner('<div class="Wrapper"/>');
        if(($frmProfileInfo=$('#frmProfileInfo')).length){
            $Validator=new Validator();
            if($frmProfileInfo.find('.Field').length){
                $frmProfileInfo.find('input[type="text"],input[type="password"]').each(function(){
                    $(this).focus(function(){
                        $(this).removeClass('Valid').removeClass('Invalid');
                    }).focusout(function(){
                        $Validator.Check($(this));
                        if($(this).attr('name')=='Password'&&$(this).val().trim()==''){
                            $(this).removeClass('Invalid').addClass('Valid');
                        }
                    });
                });
            }
            $frmProfileInfo.on('submit',function(){
                if(isLoading){return false;}
                if($(this).find('.Invalid').length){return false;}
                isLoading=true;
                confirmBeforeClosing(true);
                showWaiting(true);
                if($frmProfileInfo.find('input[name="Password"]').eq(0).val()!=''){
                    newPassword=SHA256(SHA256('UpFile.VN')+$frmProfileInfo.find('input[name="Password"]').eq(0).val()).toUpperCase()
                }else{
                    newPassword='';
                }
                $.ajax({
                    type:'POST',
                    dataType:'JSON',
                    data:{
                        'Act':'UpdateProfile',
                        'currentPassword':SHA256(SHA256('UpFile.VN')+$frmProfileInfo.find('input[name="currentPassword"]').eq(0).val()).toUpperCase(),
                        'Email':$frmProfileInfo.find('input[name="Email"]').eq(0).val(),
                        'Password':newPassword,
                        'Name':$frmProfileInfo.find('input[name="Name"]').eq(0).val(),
                        'Phone':$frmProfileInfo.find('input[name="Phone"]').eq(0).val()
                    },
                    success:function(source){
                        showWaiting(false);
                        if(source.Status){
                            if(source.Message!=1){
                                showAlert(languageText['L_USER_UPDATE_SUCCESSFULLY'],5);
                            }else{
                                showAlert(languageText['L_USER_UPDATE_SUCCESSFULLY_WITHOUT_EMAIL'],30);
                            }
                        }else{
                            showAlert(source.Message);
                            if(!isUploading){confirmBeforeClosing(false);}
                        }
                        isLoading=false;
                    },
                    error:function(){
                        showWaiting(false);
                        showAlert(languageText['L_USER_UPDATE_FAILED'],5);
                        isLoading=false;
                        if(!isUploading){setTimeout(function(){confirmBeforeClosing(false);},5000);}
                    }
                });
                return false;
            });

            $frmProfileInfo.find('[rel="AuthorizedKey"]').click(function(){
                a=$('#downloadAuthorizedKey');
                if(a.html()!=''){return false;}
                if($frmProfileInfo.find('input[name="currentPassword"]').eq(0).val().length<6){
                    showAlert(languageText['L_USER_ENTER_PASSWORD']);
                    return false;
                }else{
                    if(!confirm(languageText['L_USER_CONFIRM_CREATE_AUTHORIZEDKEY'])){return false;}
                    $Password=SHA256(SHA256('UpFile.VN')+$frmProfileInfo.find('input[name="currentPassword"]').eq(0).val()).toUpperCase();
                    isLoading=true;
                    showWaiting(true);
                    $.ajax({
                        type:'POST',
                        dataType:'JSON',
                        data:{'Act':'genAuthorizedKey','Password':$Password,'Hash':SHA256($Password+'LyQuiChung').toUpperCase()},
                        success:function(source){
                            showWaiting(false);
                            isLoading=false;
                            if(source.Status){
                                data=new Blob([source['Content']],{type:'UpFile-AuthorizedKey/force-download'});
                                a.attr('download',source['FileName']);
                                if(window.webkitURL!=null){
                                    a.attr('href',window.webkitURL.createObjectURL(data));
                                }else{
                                    a.attr('href',window.URL.createObjectURL(data));
                                }
                                $frmProfileInfo.find('input[name="currentPassword"]').eq(0).val('');
                                showAlert(languageText['L_USER_CREATEKEY_SUCCESSFULLY']);
                                setInterval(function(){
                                    txt='Download                    ';
                                    $a=$('#downloadAuthorizedKey');
                                    if(txt.indexOf($a.html())>-1){
                                        tmp=(txt.replace($a.html(),''))[0];
                                        if(tmp!=undefined){
                                            $a.html($a.html()+tmp);
                                        }else{
                                            $a.html('');
                                        }
                                    }else{
                                        $a.html('');
                                    }
                                },50);
                            }else{
                                isLoading=false;
                                showWaiting(false);
                                showAlert(source['Message']);
                            }
                        },
                        error:function(){
                            showWaiting(false);
                            isLoading=false;
                            showAlert(languageText['L_USER_DOWNLOADKEY_ERROR']);
                        }
                    });
                }
            });


            $frmProfileInfo.find('[rel="MasterKey"]').click(function(){
                a=$('#downloadMasterKey');
                if(a.html()!=''){return false;}
                if(!confirm(languageText['L_USER_CONFIRM_CREATE_MASTERKEY'])){return false;}
                if($frmProfileInfo.find('input[name="currentPassword"]').eq(0).val().length<6){
                    showAlert(languageText['L_USER_ENTER_PASSWORD']);
                    return false;
                }else{
                    $Password=SHA256(SHA256('UpFile.VN')+$frmProfileInfo.find('input[name="currentPassword"]').eq(0).val()).toUpperCase();
                    isLoading=true;
                    showWaiting(true);
                    $.ajax({
                        type:'POST',
                        dataType:'JSON',
                        data:{'Act':'genMasterKey','Password':$Password,'Hash':SHA256($Password+'PhanThiTuMi').toUpperCase()},
                        success:function(source){
                            showWaiting(false);
                            isLoading=false;
                            if(source.Status){
                                data=new Blob([source['Content']],{type:'UpFile-MasterKey/force-download'});
                                a.attr('download',source['FileName']);
                                if(window.webkitURL!=null){
                                    a.attr('href',window.webkitURL.createObjectURL(data));
                                }else{
                                    a.attr('href',window.URL.createObjectURL(data));
                                }
                                $frmProfileInfo.find('input[name="currentPassword"]').eq(0).val('');
                                showAlert(languageText['L_USER_CREATEKEY_SUCCESSFULLY']);
                                setInterval(function(){
                                    txt='Download                    ';
                                    $a=$('#downloadMasterKey');
                                    if(txt.indexOf($a.html())>-1){
                                        tmp=(txt.replace($a.html(),''))[0];
                                        if(tmp!=undefined){
                                            $a.html($a.html()+tmp);
                                        }else{
                                            $a.html('');
                                        }
                                    }else{
                                        alert('SOI');
                                        $a.html('');
                                    }
                                },50);
                            }else{
                                isLoading=false;
                                showWaiting(false);
                                showAlert(source['Message']);
                            }
                        },
                        error:function(){
                            showWaiting(false);
                            isLoading=false;
                            showAlert(languageText['L_USER_DOWNLOADKEY_ERROR'],5);
                        }
                    });
                }
            });

            if($.cookie('ID')!=undefined&&$.cookie('Salt')!=undefined){
                disableRegisterForm();
                $('#Body .Intro').hide(200,function(){
                    $('#Body .userMessage').show(200);
                });

            }
        }
    }

    if(($frm=$('#frmUpgradeCard')).length){
        $frm.on('submit',function(){
            series=$frm.find('[name="seriesNumber"]').val().trim().replace('/ /g','').replace('/\-/g','');
            cardCode=$frm.find('[name="cardCode"]').val().trim().replace('/ /g','').replace('/\-/g','');
            captcha=$frm.find('[name="Captcha"]').val().trim().replace('/ /g','').replace('/\-/g','');

            if(series.length<8||series.length>15){
                showAlert(languageText['L_USER_UPGRADE_WRONG_SERIES']);
                return false;
            }
            if(cardCode.length<12||cardCode.length>15){
                showAlert(languageText['L_USER_UPGRADE_WRONG_CODE']);
                return false;
            }
            if(captcha.length!=5){
                showAlert(languageText['L_USER_UPGRADE_WRONG_CAPTCHA']);
                return false;
            }
            cardType=$frm.find('input[type="radio"]:checked').val().trim().toUpperCase();
            isLoading=true;
            showWaiting(true);
            hash=SHA256('Leorius'+series+cardCode+cardType+captcha).toUpperCase();
            $frm.find('[name="seriesNumber"]').val('');
            $frm.find('[name="cardCode"]').val('');
            $frm.find('[name="Captcha"]').val('');
            $.ajax({
                type:'POST',
                dataType:'JSON',
                data:{'Act':'useCard','Series':series,'cardCode':cardCode,'cardType':cardType,'Captcha':captcha,'Hash':hash},
                success:function(source){
                    reloadCaptcha();
                    if(source.Status){
                        isLoading=false;
                        showWaiting(false);
                        showAlert(source['Message']);
                    }else{
                        isLoading=false;
                        showWaiting(false);
                        showAlert(source['Message']);
                    }
                },
                error:function(){
                    reloadCaptcha();
                    showWaiting(false);
                    isLoading=false;
                    showAlert(languageText['L_USER_UPGRADE_CARD_ERROR'],5);
                }
            });
            return false;
        });
    }
    /*alert($('head').find('script').last().attr('src'));
    $s=$('head').find('script').last().attr('src');
    $time=new Date().getTime();
    $s=$s[0]+'?'+$time;
    */
    $('head').find('script').last().remove();
};
ua=window.navigator.userAgent;
if(ua.indexOf('MSIE')>=0||!!ua.match(/Trident.*rv\:11\./)){
    $(document).ready(onloadFunction);
}
else{
    window.onload=onloadFunction;
}
if((currentPath=window.location.href.split('#path=')).length==2){
    currentPath=currentPath[1];
}else{
    currentPath=0;
}
holdingTime=0;
selectedItem=['Folder','File'];
selectedItem['Folder']=[];
selectedItem['File']=[];
clipboardAction='Move';
clipboardItem=['Folder','File'];
clipboardItem['Folder']=[];
clipboardItem['File']=[];
$(document).ready(function(){
    if(($Obj=$('#Download')).length){

        setTimeout(function(){
            IDHash=SHA256(window.location.href.split('://')[1].split('/')[1]+'7891').toUpperCase();
            $.ajax({
                type:'POST',dataType:'JSON',data:{'Token':IDHash},
                success:function(source){
                    if(source.Status){
                        $('#Download .Download .Button').eq(0).attr('data-download',source['Link']).attr('check-download',source['check']);
                    }
                },
                error:function(){
                    $('#Download .Download .Button').eq(0).html(languageText['L_REDOWNLOAD']);
                }
            });
        },1000);
        $Obj.wrapInner('<div class="Wrapper"/>');
        $Obj.find('.DownloadHeader').append('<div class="Clear"/>');
        $Obj.find('.Header').append('<div class="Clear"/>');
        $Obj.find('.Download').append('<div class="Clear"/>');
        $Obj.find('.Download .Button').click(function(){
            if($(this).html()!=languageText['L_DOWNLOAD']||$(this).attr('href')!=undefined){return false;}
            var $this=$(this);
            dataCount=$this.attr('data-count');
            $this.html(dataCount);
            $this.html(languageText['L_DOWNLOAD_PLEASEWAIT'].replace('[Number]',($this.attr('data-count')-1)));
            $this.attr('data-count',$this.attr('data-count')-1);
            downloadT=setInterval(function(){
                if($this.attr('data-count')<1){
                    $this.html(languageText['L_START_DOWNLOAD']).attr('href',$this.attr('data-download'));
                    $this.click(function(){window.open($(this).attr('href'),'_blank');});
                    clearInterval(downloadT);
                    return false;
                }
                $this.html(languageText['L_DOWNLOAD_PLEASEWAIT'].replace('[Number]',($this.attr('data-count')-1)));
                $this.attr('data-count',$this.attr('data-count')-1);
            },1000);
        });
    }


    if(($Obj=$('#fileManager')).length){
        $Obj.wrapInner('<div class="Wrapper"/>');
        $Obj.find('.listFile').eq(0).append('<div class="Clear"/>');
        $Obj.find('.listFile .leftSide ul li').each(function(){
            $(this).click(function(){
                $(this).parents('ul').eq(0).find('li').removeClass('Hover');
                if(!$(this).hasClass('Hover')){
                    $(this).addClass('Hover');
                }
            });
        });

        if(($frm=$('#frmUploadFile')).length){
            $frm.on('submit',function(){
                $('input[type="file"]').click();
                return false;
            });
        }
        if(($frm=$('#frmCreateFolder')).length){
            $frm.on('submit',function(){
                if(isLoading){return false;}
                folderName=prompt(languageText['L_ENTER_FOLDER_NAME'],'New Folder');
                if(/[\\\/\:\*\?\"\<\>\|]+/.test(folderName)||folderName==''||folderName=='NULL'){
                    showAlert(languageText['L_USER_FOLDERNAME_INVALID']);
                }else{
                    console.log(currentPath);
                    isLoading=true;
                    showWaiting(true);
                    showWaiting(true);
                    $.ajax({
                        type:'POST',
                        dataType:'JSON',
                        data:{'Act':'createFolder','Name':folderName,'currentPath':currentPath,'Hash':SHA256(currentPath+folderName+'UpFile.VN').toUpperCase()},
                        success:function(source){
                            showWaiting(false);
                            isLoading=false;
                            if(source.Status){
                                getListUserItem(currentPath);
                            }else{
                                showAlert(source.Message);
                            }
                            $frm.find('input[type="text"]').val('');
                        },
                        error:function(){
                            showWaiting(false);
                            showAlert(languageText['L_USER_CREATEFOLDER_FAILED'],5);
                            isLoading=false;
                            $frm.find('input[type="text"]').val('');
                        },
                    });
                }
                return false;
            });
            getListUserItem(currentPath);
        }

        if(($frm=$('#frmSearchFile')).length){

            $frm.on('submit',function(){

                if(isLoading){return false;}

                isLoading=true;
                showWaiting(true);
                showWaiting(true);

                $.ajax({
                    type:'POST',
                    dataType:'JSON',
                    data:{'Act':'searchItem','fileName':$('#SearchFile').val()
                        ,'Hash':SHA256($('#SearchFile').val()+'UpFile.VN').substr(7,8).toUpperCase()},
                    success:function(source){
                        $('#fileManager .rightSide .listItem').children().remove();

                        for(i=0;i<source.File.length;i++){
                            if(source.File[i]['Password']){passwordClass='Password';}else{passwordClass='';}
                            html='';
                            html+="<li itemorder='"+n+"' data-itemtype='File' data-itemrewrite='"+source.File[i]['RewriteName']+"'  data-itemid='"+source.File[i]['ID']+"'><a class='File "+passwordClass+"'>";
                            html+="<div class='Name'>"+source.File[i]['Name']+"</div>";
                            html+="<div class='Size'>"+beautifySize(source.File[i]['Size'])+"</div>";
                            visit = parseInt(source.File[i]['Visit']);

                            if(visit>1000000000){visit=(visit/1000000000);visit=(Math.round(visit*100)/100)+'B+';}else{visit=numberFormat(visit);}
                            Download = parseInt(source.File[i]['DownloadCount']);

                            html+="<div class='Visit'>"+visit+"</div>";
                            html+="<div class='Download'>"+Download+"</div>";
                            html+="<div class='Date'>"+source.File[i]['Date']+"</div>";
                            html+="<div class='Clear'></div>";
                            html+="</a></li>";

                            $('#fileManager .rightSide .listItem').append(html);
                            n++;
                        }

                        n=$('#fileManager .rightSide .listItem li').length;
                        for(i=0;i<n;i++){
                            li=$('#fileManager .rightSide .listItem li').eq(i);
                            li.on('mousedown',function(e){
                                var $this=$(this);
                                holdingTimeout=setTimeout(function(){
                                    if($this.hasClass('Hover')){
                                        if(!e.button){
                                            if(!$('body').find('.draggableItem').length){
                                                $('body').append('<div class="draggableItem"></div>');
                                            }
                                            $('.draggableItem').html(languageText['L_USER_MOVE']+selectedItem['File'].length+' file(s) + '+selectedItem['Folder'].length+' folder(s)').css({
                                                'top':(e.pageY+20)+'px',
                                                'left':(e.pageX-($('.draggableItem').width()/2))+'px'
                                            });
                                        }
                                    }else{
                                        $('.draggableItem').remove();
                                    }
                                },500);
                            }).on('mouseup',function(e){
                                clearTimeout(holdingTimeout);
                                if(!e.button){
                                    if($('.draggableItem').length){
                                        $('.draggableItem').remove();
                                        l=$('#fileManager .rightSide .listItem li');
                                        nn=l.length;
                                        for(ii=0;ii<nn;ii++){
                                            topY1=l.eq(ii).offset().top;
                                            topY2=topY1+l.eq(ii).height();
                                            if(e.pageY>=topY1&&e.pageY<=topY2){
                                                if(l.eq(ii).attr('data-itemtype')=='Folder'){
                                                    $('#frmMoveItem').find('[name="Path"]').eq(0).val(l.eq(ii).attr('data-itemid'));
                                                    $('#frmMoveItem').submit();
                                                }
                                                break;
                                            }
                                        }
                                    }
                                }
                            });
                        }

                        $('#fileManager .rightSide .listItem').on('mousemove',function(e){
                            if($('.draggableItem').length){
                                $draggableItem=$('.draggableItem');
                                $('.draggableItem').css({'left':(e.pageX-($draggableItem.width()/2))+'px','top':+(e.pageY+20)+'px'});
                            }
                        });
                        setupListUserItemAction();
                        clearActiveItem();
                        showWaiting(false);
                        isLoading=false;
                        name=$('#fileManager .rightSide .listItem li').first().find('.Name').eq(0).html();
                        if(/^\.\.\//.test(name)){
                            $('#fileManager .rightSide .listItem li').eq(1).click();
                        }else{
                            $('#fileManager .rightSide .listItem li').first().click();
                        }
                    }
                });

                return false;
            });

        }

        if(($frm=$('#frmDeleteItem')).length){
            $frm.on('submit',function(){
                if(selectedItem['Folder'].length==0&&selectedItem['File'].length==0){
                    return false;
                }
                if(!confirm(languageText['L_USER_DELETEITEM_CONFIRM_MESSAGE'].replace('[NumberOfFolders]',selectedItem['Folder'].length).replace('[NumberOfFiles]',selectedItem['File'].length))){return false;}
                showWaiting(true);
                isLoading=true;
                $.ajax({
                    type:'POST',
                    dataType:'JSON',
                    data:{'Act':'deleteItem','Folder':selectedItem['Folder'],'File':selectedItem['File'],'Hash':SHA256(selectedItem['File'].length+selectedItem['File'].join('-')+selectedItem['Folder'].length+selectedItem['Folder'].join('-')).toUpperCase()},
                    success:function(source){
                        showWaiting(false);
                        isLoading=false;
                        if(source.Status){
                            selectedItem['Folder']=[];
                            selectedItem['File']=[];
                            getListUserItem(currentPath);
                        }else{
                            showAlert(source.Message);
                        }
                    },
                    error:function(){
                        showWaiting(false);
                        showAlert(languageText['L_USER_DELETEITEM_FAILED'],5);
                        isLoading=false;
                    }
                });
                return false;
            });
        }

        if(($frm=$('#frmRenameItem')).length){
            $frm.on('submit',function(){
                if(!$(this).find('input[type="submit"]').eq(0).hasClass('cmdRename')){
                    if(isLoading){return false;}
                    oldname=$('#fileManager .rightSide .listItem .Hover').eq(0).find('.Name').eq(0).html();
                    if(oldname==undefined||oldname==''){return false;}
                    type=$('#fileManager .rightSide .listItem .Hover').eq(0).attr('data-itemtype');
                    id=$('#fileManager .rightSide .listItem .Hover').eq(0).attr('data-itemid');
                    if(type=='Folder'){
                        name=prompt(languageText['L_ENTER_THE_NEW_FOLDERNAME'].replace('[name]',oldname),oldname);
                    }else{
                        name=prompt(languageText['L_ENTER_THE_NEW_FILENAME'].replace('[name]',oldname),oldname);
                    }
                    if(oldname==name){return false;}
                    if(name==null||name==''||name=='null'){return false;}
                    if(/[\\\/\:\*\?\"\<\>\|]+/.test(name)&&name!=''){
                        showAlert(languageText['L_USER_FOLDERNAME_INVALID']);
                        return false;
                    }
                    isLoading=true;
                    showWaiting(true);
                    $.ajax({
                        type:'POST',
                        dataType:'JSON',
                        data:{'Act':'Rename','Type':type,'ID':id,'Name':name,'Hash':SHA256(type+name+id+'UpFile.VN').toUpperCase()},
                        success:function(source){
                            showWaiting(false);
                            isLoading=false;
                            if(source.Status){
                                getListUserItem(currentPath);
                            }else{
                                showAlert(source.Message);
                            }
                        },
                        error:function(){
                            showWaiting(false);
                            showAlert(languageText['L_USER_RENAMEITEM_FAILED'],5);
                            isLoading=false;
                        }
                    });
                }
                return false;
            });
        }
        if(($Obj=$('#frmCopyItem')).length){
            $Obj.on('submit',function(){
                l=$('#fileManager').find('.listFile .rightSide .listItem .Hover');
                if(!l.length){return false;}
                ll=$('#fileManager').find('.listFile .rightSide .listItem li');
                nn=ll.length;
                for(ii=0;ii<nn;ii++){
                    ll.eq(ii).css('opacity',1);
                }

                clipboardAction='Copy';
                clipboardItem['Folder']=[];
                clipboardItem['File']=[];
                for(i=0;i<l.length;i++){
                    dataId=l.eq(i).attr('data-itemid');
                    dataType=l.eq(i).attr('data-itemtype');
                    if(dataType=='File'){
                        clipboardItem['File'].push(dataId);
                    }
                }
                $('.clipboardItems').html(clipboardItem['File'].length);
                $('#frmPasteItem').find('input[type="submit"]').eq(0).val(languageText['L_USER_PASTEBUTTON']+ ' ('+(clipboardItem['File'].length)+')');
                showWaiting(true);
                setTimeout(function(){showWaiting(false);},500);
                return false;
            });
        }
        if(($Obj=$('#frmCutItem')).length){
            $Obj.on('submit',function(){
                l=$('#fileManager').find('.listFile .rightSide .listItem .Hover');
                if(!l.length){return false;}

                ll=$('#fileManager').find('.listFile .rightSide .listItem li');
                nn=ll.length;
                for(ii=0;ii<nn;ii++){
                    ll.eq(ii).css('opacity',1);
                }

                clipboardAction='Move';
                clipboardItem['Folder']=[];
                clipboardItem['File']=[];
                for(i=0;i<l.length;i++){
                    dataId=l.eq(i).attr('data-itemid');
                    dataType=l.eq(i).attr('data-itemtype');
                    l.eq(i).css('opacity',0.5);
                    clipboardItem[dataType].push(dataId);
                }
                $('.clipboardItems').html(clipboardItem['Folder'].length+clipboardItem['File'].length);
                $('#frmPasteItem').find('input[type="submit"]').eq(0).val(languageText['L_USER_PASTEBUTTON']+ ' ('+(clipboardItem['Folder'].length+clipboardItem['File'].length)+')');
                showWaiting(true);
                setTimeout(function(){showWaiting(false);},500);
                return false;
            });
        }
        if(($Obj=$('#frmPasteItem')).length){
            $Obj.on('submit',function(){
                if(clipboardItem['Folder'].length+clipboardItem['File'].length<1){
                    return false;
                }else{
                    showWaiting(true);
                    isLoading=true;
                    $.ajax({
                        type:'POST',
                        dataType:'JSON',
                        data:{'Act':'Paste','Type':clipboardAction,'toPath':currentPath,'Folder':clipboardItem['Folder'],'File':clipboardItem['File'],'Hash':SHA256(currentPath+clipboardAction+clipboardItem['Folder'].join('?')+clipboardItem['File'].join('#')).toUpperCase()},
                        success:function(source){
                            isLoading=false;
                            showWaiting(false);
                            if(source.Status){
                                getListUserItem(currentPath);
                                clearClipboard();
                            }else{
                                showAlert(source.Message);
                            }
                        },
                        error:function(){
                            showWaiting(false);
                            isLoading=false;
                            showAlert(languageText['L_USER_PASTE_ERROR'],5);
                        }
                    });
                }
                return false;
            });
        }
        if(($Obj=$('#frmMoveItem')).length){
            $Obj.on('submit',function(){
                l=$('#fileManager').find('.listFile .rightSide .listItem .Hover');
                path=$(this).find('[name="Path"]').eq(0).val().trim();
                if(!l.length){return false;}
                MovingItem=[];
                MovingItem['File']=[];
                MovingItem['Folder']=[];
                for(i=0;i<l.length;i++){
                    dataId=l.eq(i).attr('data-itemid');
                    dataType=l.eq(i).attr('data-itemtype');
                    MovingItem[dataType].push(dataId);
                }
                showWaiting(true);
                isLoading=true;
                $.ajax({
                    type:'POST',
                    dataType:'JSON',
                    data:{'Act':'Paste','Type':'Move','toPath':path,'Folder':MovingItem['Folder'],'File':MovingItem['File'],'Hash':SHA256(path+'Move'+MovingItem['Folder'].join('?')+MovingItem['File'].join('#')).toUpperCase()},
                    success:function(source){
                        isLoading=false;
                        showWaiting(false);
                        if(source.Status){
                            getListUserItem(currentPath);
                            clearClipboard();
                        }else{
                            showAlert(source.Message);
                        }
                    },
                    error:function(){
                        showWaiting(false);
                        isLoading=false;
                        showAlert(languageText['L_USER_PASTE_ERROR'],5);
                    }
                });
                return false;
            });
        }
        if(($Obj=$('#frmLockItem')).length){
            $Obj.on('submit',function(){
                if(isLoading){return false;}
                if(selectedItem['File'].length+selectedItem['Folder'].length<1){return false;}
                pass=prompt(languageText['L_USER_LOCKMESSAGER']);
                if(pass=='null'||pass==null||pass==''||pass=='NULL'){
                    return false;
                }
                pass=SHA256(pass+'UpFile.VN').toUpperCase();
                isLoading=false;
                showWaiting(true);
                $.ajax({
                    type:'POST',
                    dataType:'JSON',
                    data:{'Act':'Lock','Folder':selectedItem['Folder'],'Password':pass,'File':selectedItem['File'],'Hash':SHA256(selectedItem['Folder'].join('Chung')+pass+selectedItem['File'].join('Mi')).toUpperCase()},
                    success:function(source){
                        showWaiting(false);
                        isLoading=false;
                        if(source.Status){
                            getListUserItem(currentPath);
                        }else{
                            showAlert(source.Message);
                        }
                    },
                    error:function(){
                        showAlert(languageText['L_USER_LOCK_ERROR'],5);
                    }
                });
                return false;
            });
        }

        if(($Obj=$('#frmUnlockItem')).length){
            $Obj.on('submit',function(){
                if(isLoading){return false;}
                if(selectedItem['File'].length+selectedItem['Folder'].length<1){return false;}
                showWaiting(true);
                $.ajax({
                    type:'POST',
                    dataType:'JSON',
                    data:{'Act':'Unlock','Folder':selectedItem['Folder'],'File':selectedItem['File'],'Hash':SHA256(selectedItem['Folder'].join('Mi')+selectedItem['File'].join('Chung')).toUpperCase()},
                    success:function(source){
                        showWaiting(false);
                        isLoading=false;
                        if(source.Status){
                            getListUserItem(currentPath);
                        }else{
                            showAlert(source.Message);
                        }
                    },
                    error:function(){
                        showWaiting(false);
                        isLoading=false;
                        showAlert(languageText['L_USER_UNLOCK_ERROR'],5);
                    }
                });
                return false;
            });
        }

        if(($Obj=$('#frmLinkItem')).length){
            $Obj.on('submit',function(){
                if(selectedItem['File'].length!=0||selectedItem['Folder'].length!=0){
                    $list=$('#fileManager .listFile .rightSide .listItem .Hover');

                    for(i=0;i<$list.length;i++){
                        id=$list.eq(i).attr('data-itemid');
                        type=$list.eq(i).attr('data-itemtype');
                        rewrite=$list.eq(i).attr('data-itemrewrite');
                        name=$list.eq(i).find('.Name').eq(0).html();
                        str="";
                        if(/^\.\.\//.test(name)){continue;}
                        if(type=='Folder'){
                            url=HomeURL+'folder/'+id+'/'+rewrite+'.html';
                            name='[Folder] '+name;
                        }else{
                            url=HomeURL+id+'/'+rewrite+'.html';
                        }
                        str+='<a href="'+url+'" target="_blank">'+url+'</a>';
                    }
                    $('.copyAllLink').attr('data-clipboard-text',url);

                    $(".divDialogElements").html(str);
                    setupCopyAllLink();
                    $('#windowTitleDialog').modal('show');

                    $('#listAlertLink').click(function(){
                        if(document.selection){
                            var range=document.body.createTextRange();
                            range.moveToElementText(document.getElementById('listAlertLink'));
                            range.select();
                        }else if(window.getSelection){
                            var range = document.createRange();
                            range.selectNode(document.getElementById('listAlertLink'));
                            window.getSelection().addRange(range);
                        }
                    });
                }
                return false;
            });
        }

        if(($Obj=$('#fileManager')).length){
            $('body').on('keydown',function(e){
                if(!$('.showAlert').length){
                    e=e||window.event;
                    if(e.shiftKey){

                        if(e.keyCode==35||e.keyCode==36){
                            if($('#fileManager').find('.listFile .rightSide ul .Hover').length){
                                startOrder=parseInt($('#fileManager').find('.listFile .rightSide ul .Hover').eq(0).attr('itemorder'));
                                if(e.keyCode==35){
                                    endOrder=parseInt($('#fileManager').find('.listFile .rightSide ul li').last().attr('itemorder'));
                                }else{
                                    endOrder=parseInt($('#fileManager').find('.listFile .rightSide ul li').first().attr('itemorder'));
                                }
                                if(startOrder>endOrder){tmp=startOrder;startOrder=endOrder;endOrder=tmp;}
                                for(i=startOrder;i<=endOrder;i++){
                                    $('#fileManager').find('.listFile .rightSide ul li').eq(i).addClass('Hover');
                                    name=$('#fileManager').find('.listFile .rightSide ul li').eq(i).find('.Name').html();
                                    if(/^\.\.\//.test(name)){continue;}
                                    id=$('#fileManager').find('.listFile .rightSide ul li').eq(i).attr('data-itemid');
                                    type=$('#fileManager').find('.listFile .rightSide ul li').eq(i).attr('data-itemtype');
                                    if(e.keyCode==36){
                                        $('#fileManager').scrollIntoView();
                                    }else{
                                        $('#Footer').scrollIntoView();
                                    }
                                    if(selectedItem[type].indexOf(id)<0){
                                        selectedItem[type].push(id);
                                    }
                                }
                                makeupSelectedItems();
                            }
                            return false;
                        }
                        if(e.keyCode==38){
                            if($('#fileManager').find('.listFile .rightSide ul .Hover').length){
                                itemorder=parseInt($('#fileManager').find('.listFile .rightSide ul .Hover').first().attr('itemorder'))-1;
                                id=$('#fileManager').find('.listFile .rightSide ul li[itemorder="'+itemorder+'"]');
                                if(!id.length){id=$('#fileManager').find('.listFile .rightSide ul li').first();}
                                id=id.eq(0);
                                name=id.find('.Name').html();
                                if(/^\.\.\//.test(name)){return false;}
                                posY=id.offset().top;
                                if(posY<$(window).scrollTop()){
                                    id.scrollIntoView();
                                }
                                type=id.attr('data-itemtype');
                                id=id.attr('data-itemid');
                                if(selectedItem[type].indexOf(id)<0){
                                    selectedItem[type].push(id);
                                }
                                makeupSelectedItems();
                            }
                            return false;
                        }
                        if(e.keyCode==40){
                            if($('#fileManager').find('.listFile .rightSide ul .Hover').length){
                                itemorder=parseInt($('#fileManager').find('.listFile .rightSide ul .Hover').last().attr('itemorder'))+1;
                                id=$('#fileManager').find('.listFile .rightSide ul li[itemorder="'+itemorder+'"]');
                                if(!id.length){id=$('#fileManager').find('.listFile .rightSide ul li').last();}
                                id=id.eq(0);
                                posY=id.offset().top;
                                if(posY>$(window).scrollTop()+$(window).height()){
                                    id.scrollIntoView();
                                }
                                type=id.attr('data-itemtype');
                                id=id.attr('data-itemid');
                                if(selectedItem[type].indexOf(id)<0){
                                    selectedItem[type].push(id);
                                }
                                makeupSelectedItems();
                            }
                            return false;
                        }
                    }else if(e.ctrlKey){
                        if(e.keyCode==67){$('#frmCopyItem').submit();return false;}
                        if(e.keyCode==88){$('#frmCutItem').submit();return false;}
                        if(e.keyCode==86){$('#frmPasteItem').submit();return false;}
                        if(e.keyCode==65){
                            li=$('#fileManager').find('.listFile .rightSide ul li');
                            for(i=0;i<li.length;i++){
                                li.eq(i).addClass('Hover');
                                id=li.eq(i).attr('data-itemid');
                                type=li.eq(i).attr('data-itemtype');
                                name=li.eq(i).find('.Name').eq(0).html();
                                if(/^\.\.\//.test(name)){continue;}
                                if(selectedItem[type].indexOf(id)<0){
                                    selectedItem[type].push(id);
                                }
                            }
                            makeupSelectedItems();
                            return false;
                        }
                    }else{

                        if(e.keyCode==38){
                            if($('#fileManager').find('.listFile .rightSide ul .Hover').length){
                                itemorder=parseInt($('#fileManager').find('.listFile .rightSide ul .Hover').first().attr('itemorder'))-1;
                                id=$('#fileManager').find('.listFile .rightSide ul li[itemorder="'+itemorder+'"]');
                                if(!id.length){id=$('#fileManager').find('.listFile .rightSide ul li').first();}
                                id=id.eq(0);
                                name=id.find('.Name').eq(0).html();
                                if(/^\.\.\//.test(name)){return false;}
                                posY=id.offset().top;
                                if(posY<$(window).scrollTop()){
                                    id.scrollIntoView();
                                }
                                type=id.attr('data-itemtype');
                                id=id.attr('data-itemid');
                                selectedItem['Folder']=[];
                                selectedItem['File']=[];
                                selectedItem[type].push(id);
                                makeupSelectedItems();
                            }
                            return false;
                        }
                        if(e.keyCode==40){
                            if($('#fileManager').find('.listFile .rightSide ul .Hover').length){
                                itemorder=parseInt($('#fileManager').find('.listFile .rightSide ul .Hover').last().attr('itemorder'))+1;
                                id=$('#fileManager').find('.listFile .rightSide ul li[itemorder="'+itemorder+'"]');
                                if(!id.length){id=$('#fileManager').find('.listFile .rightSide ul li').last();}
                                id=id.eq(0);
                                name=id.find('.Name').eq(0).html();
                                if(/^\.\.\//.test(name)){return false;}
                                posY=id.offset().top;
                                if(posY>$(window).scrollTop()+$(window).height()){
                                    id.scrollIntoView();
                                }
                                type=id.attr('data-itemtype');
                                id=id.attr('data-itemid');
                                selectedItem['Folder']=[];
                                selectedItem['File']=[];
                                selectedItem[type].push(id);
                                makeupSelectedItems();
                            }
                            return false;
                        }
                        if(e.keyCode==36){
                            selectedItem['Folder']=[];
                            selectedItem['File']=[];
                            name=$('#fileManager').find('.listFile .rightSide ul li').first().find('.Name').html();
                            if(/^\.\.\//.test(name)){
                                id=$('#fileManager').find('.listFile .rightSide ul li').eq(1);
                            }else{
                                id=$('#fileManager').find('.listFile .rightSide ul li').eq(0);
                            }
                            id.scrollIntoView();
                            id.click();
                            return false;
                        }
                        if(e.keyCode==35){
                            selectedItem['Folder']=[];
                            selectedItem['File']=[];
                            id=$('#fileManager').find('.listFile .rightSide ul li').last().attr('data-itemid');
                            type=$('#fileManager').find('.listFile .rightSide ul li').last().attr('data-itemtype');
                            $('#fileManager').find('.listFile .rightSide ul li').last().click().scrollIntoView();
                            return false;
                        }
                        if(e.keyCode==13){
                            if(selectedItem['Folder'].length>1||selectedItem['File'].length){
                                $('#frmLinkItem').submit();
                            }else if(selectedItem['Folder'].length==1){
                                $('#fileManager .listFile .rightSide .listItem .Hover').eq(0).dblclick();
                            }
                            return false;
                        }
                        if(e.keyCode==8){
                            b=$('#fileManager .rightSide .listItem li').eq(0);
                            if(b.find('a[data-name^="../"]').length){
                                b=b.attr('data-itemid');
                                currentPath=b;
                                getListUserItem(b);
                            }
                            return false;
                        }
                        if(e.keyCode==46){
                            $('#frmDeleteItem').submit();return false;
                            return false;
                        }
                        if(e.keyCode==113){
                            $('#frmRenameItem').submit();return false;
                            return false;
                        }
                    }
                }else{
                    if($('.showAlertContent .Wrapper .Close').length){
                        if(e.keyCode==27||e.keyCode==13){
                            $('.showAlertContent .Wrapper .Close').click();
                        }
                    }
                }
            });
        }

    }

    if(($Obj=$('#contextMenu')).length){
        $Obj.hide(0);
        $Obj.on('contextmenu',function(){return false;}).find('li a').each(function(){
            $(this).click(function(){
                $(this).parents('ul').eq(0).hide(0);
                switch($(this).attr('class')){
                    case 'Link':{$('#frmLinkItem').submit();break;}
                    case 'Rename':{$('#frmRenameItem').submit();break;}
                    case 'Copy':{$('#frmCopyItem').submit();break;}
                    case 'Cut':{$('#frmCutItem').submit();break;}
                    case 'Paste':{$('#frmPasteItem').submit();break;}
                    case 'Delete':{$('#frmDeleteItem').submit();break;}
                    case 'Lock':{$('#frmLockItem').submit();break;}
                    case 'Unlock':{$('#frmUnlockItem').submit();break;}

                }
            });
        });
    }
});

function onError(e) {
    console.log('Error', e);
}
function clearActiveItem(){
    selectedItem['Folder']=[];
    selectedItem['File']=[];
    $('#frmCopyItem').find('input[type="submit"]').val(languageText['L_USER_COPYBUTTON']);
    $('#frmCutItem').find('input[type="submit"]').val(languageText['L_USER_CUTBUTTON']);
    $('#frmPasteItem').find('input[type="submit"]').val(languageText['L_USER_PASTEBUTTON']);
    $('#frmLockItem').find('input[type="submit"]').val(languageText['L_USER_LOCKBUTTON']);
    $('#frmUnlockItem').find('input[type="submit"]').val(languageText['L_USER_UNLOCKBUTTON']);
    $('#frmDeleteItem').find('input[type="submit"]').val(languageText['L_USER_DELETEBUTTON']);
    $('.activeItems').html('0').removeAttr('data-folder').removeAttr('data-file');
}
function clearClipboard(){
    clipboardItem['Folder']=[];
    clipboardItem['File']=[];
    $('.clipboardItems').html(0);
    $('#frmPasteItem').find('input[type="submit"]').val(languageText['L_USER_PASTEBUTTON']);
}
function setupListUserItemAction(){
    $Obj=$('#fileManager');
    $Obj.on('contextmenu',function(){return false;}).find('.listFile .rightSide ul li').each(function(){
        $(this).on('contextmenu',function(){
            return false;
        }).mousedown(function(e){
            if(e.button==2){
                $posY=$(window).scrollTop()+$(window).height();
                $posX=$(window).width();
                if(!$(this).hasClass('Hover')){
                    clearActiveItem();
                    type=$(this).attr('data-itemtype');
                    id=$(this).attr('data-itemid');
                    selectedItem[type].push(id);
                    makeupSelectedItems();
                }
                $contextMenu=$('#contextMenu');
                if(e.pageY+$contextMenu.height()>=$posY){
                    $posY=$posY-$contextMenu.height();
                }else{
                    $posY=e.pageY;
                }
                if(e.pageX+$contextMenu.width()>=$posX){
                    $posX=$posX-$contextMenu.width();
                }else{
                    $posX=e.pageX;
                }
                $contextMenu.css({'left':$posX+'px','top':$posY+'px'});
                $contextMenu.find('.Copy').eq(0).html($('#frmCopyItem').find('input[type="submit"]').val());
                $contextMenu.find('.Cut').eq(0).html($('#frmCutItem').find('input[type="submit"]').val());
                $contextMenu.find('.Paste').eq(0).html($('#frmPasteItem').find('input[type="submit"]').val());
                $contextMenu.find('.Delete').eq(0).html($('#frmDeleteItem').find('input[type="submit"]').val());
                $contextMenu.find('.Lock').eq(0).html($('#frmLockItem').find('input[type="submit"]').val());
                $contextMenu.find('.Unlock').eq(0).html($('#frmUnlockItem').find('input[type="submit"]').val());
                $contextMenu.show();
                return false;
            }
        }).dblclick(function(e){
            type=$(this).attr('data-itemtype');
            id=$(this).attr('data-itemid');
            if(type=='Folder'){
                currentPath=id;
                getListUserItem(id);
            }else{
                $('#frmLinkItem').submit();
            }
        }).click(function(e){
            e=e||window.event;
            $('#contextMenu').hide();
            type=$(this).attr('data-itemtype');
            id=$(this).attr('data-itemid');
            name=$(this).find('.Name').eq(0).html();
            if(/^\.\.\/\[/.test(name)){return false;}
            if(type!='Folder'){type='File';}
            if(selectedItem[type].indexOf(id)<0){
                if(e.shiftKey){
                    if($(this).parents('ul').find('.Hover').length){
                        startOrder=parseInt($(this).parents('ul').find('.Hover').last().attr('itemorder'));
                        endOrder=parseInt($(this).attr('itemorder'));
                        if(startOrder>endOrder){tmp=startOrder;startOrder=endOrder;endOrder=tmp;}
                        for(i=startOrder;i<=endOrder;i++){
                            id=$(this).parents('ul').find('li[itemorder="'+i+'"]').attr('data-itemid');
                            type=$(this).parents('ul').find('li[itemorder="'+i+'"]').attr('data-itemtype');
                            if(selectedItem[type].indexOf(id)<0){
                                selectedItem[type].push(id);
                            }
                        }
                    }else{
                        selectedItem[type].push(id);
                    }
                }else if(e.ctrlKey){
                    selectedItem[type].push(id);
                }else{
                    selectedItem['Folder']=[];
                    selectedItem['File']=[];
                    selectedItem[type].push(id);
                }
            }else{

                if(e.shiftKey){
                    if($(this).parents('ul').find('.Hover').length){
                        startOrder=parseInt($(this).parents('ul').find('.Hover').last().attr('itemorder'));
                        endOrder=parseInt($(this).attr('itemorder'));
                        if(startOrder>endOrder){tmp=startOrder;startOrder=endOrder;endOrder=tmp;}
                        for(i=startOrder;i<=endOrder;i++){
                            id=$(this).parents('ul').find('li[itemorder="'+i+'"]').attr('data-itemid');
                            type=$(this).parents('ul').find('li[itemorder="'+i+'"]').attr('data-itemtype');
                            if(selectedItem[type].indexOf(id)<0){
                                selectedItem[type].push(id);
                            }
                        }
                    }else{
                        selectedItem[type].splice(selectedItem[type].indexOf(id),1);
                    }
                }else if(e.ctrlKey){
                    selectedItem[type].splice(selectedItem[type].indexOf(id),1);
                }else{
                    selectedItem['Folder']=[];
                    selectedItem['File']=[];
                    selectedItem[type].push(id);
                }
            }
            makeupSelectedItems();
        });
    });
}

function makeupSelectedItems(){
    $ul=$('#fileManager .listFile .rightSide .listItem').eq(0);
    n=$ul.find('li').length;
    for(i=0;i<n;i++){
        $ul.find('li').eq(i).removeClass('Hover');
    }

    for(i=0;i<selectedItem['Folder'].length;i++){
        $ul.find('li[data-itemtype="Folder"][data-itemid="'+selectedItem['Folder'][i]+'"]').addClass('Hover');
    }
    for(i=0;i<selectedItem['File'].length;i++){
        $ul.find('li[data-itemtype="File"][data-itemid="'+selectedItem['File'][i]+'"]').addClass('Hover');
    }

    if((selectedItem['Folder'].length+selectedItem['File'].length)>0){
        $('#frmDeleteItem').find('input[type="submit"]').val(languageText['L_USER_DELETEBUTTON']+' ('+(selectedItem['Folder'].length+selectedItem['File'].length)+')');
        $('#frmLockItem').find('input[type="submit"]').val(languageText['L_USER_LOCKBUTTON']+' ('+(selectedItem['Folder'].length+selectedItem['File'].length)+')');
        $('#frmUnlockItem').find('input[type="submit"]').val(languageText['L_USER_UNLOCKBUTTON']+' ('+(selectedItem['Folder'].length+selectedItem['File'].length)+')');
        $('#frmCopyItem').find('input[type="submit"]').val(languageText['L_USER_COPYBUTTON']+' ('+(selectedItem['File'].length)+')');
        $('#frmCutItem').find('input[type="submit"]').val(languageText['L_USER_CUTBUTTON']+' ('+(selectedItem['Folder'].length+selectedItem['File'].length)+')');
    }else{
        $('#frmLockItem').find('input[type="submit"]').val(languageText['L_USER_LOCKBUTTON']);
        $('#frmUnlockItem').find('input[type="submit"]').val(languageText['L_USER_UNLOCKBUTTON']);
        $('#frmDeleteItem').find('input[type="submit"]').val(languageText['L_USER_DELETEBUTTON']);
        $('#frmCopyItem').find('input[type="submit"]').val(languageText['L_USER_COPYBUTTON']);
        $('#frmCutItem').find('input[type="submit"]').val(languageText['L_USER_CUTBUTTON']);
    }
    $('.activeItems').html(selectedItem['Folder'].length+selectedItem['File'].length).attr('data-folder',selectedItem['Folder'].join('|')).attr('data-file',selectedItem['File'].join('|'));

    if((selectedItem['Folder'].length+selectedItem['File'].length)==1){
        $('#frmRenameItem').find('input[type="submit"]').removeClass('cmdRename');
    }else{
        $('#frmRenameItem').find('input[type="submit"]').addClass('cmdRename');
    }
}
function getListUserItem(Sub){
    isLoading=true;
    showWaiting(true);
    Hash=SHA256(Sub+'UpFile.VN').substr(7,8).toUpperCase();
    url=window.location.href.split('#')[0]+'#path='+encodeURIComponent(Sub);
    window.open(url,'_self');
    $.ajax({
        type:'POST',
        dataType:'JSON',
        data:{'Act':'getListItem','Sub':Sub,'Hash':Hash},
        success:function(source){

            //added by thuypx
            $('#fileManager').find('#breadcrumb').remove();
            var breadcrumb='<div id="breadcrumb"><span>&nbsp;&nbsp;Thư mục hiện tại: </span>';
            for(i=0;i<source.parent.length;i++) {
                breadcrumb+='<a class="Folder" data-itemid="'+source.parent[i]['ID']+'">'+source.parent[i]['folderName']+'&nbsp;»</a>';
            }
            breadcrumb+='</div>';
            $('#frmSearchFile').after(breadcrumb);
            //!end by thuypx


            $('#fileManager .rightSide .listItem').children().remove();
            n=0;
            currentVisit=0;
            for(i=0;i<source.Folder.length;i++){
                if(source.Folder[i]['Password']){passwordClass='Password';}else{passwordClass='';}
                html='';
                html+="<li itemorder='"+n+"' data-itemtype='Folder' data-itemrewrite='"+source.Folder[i]['RewriteName']+"' data-itemid='"+source.Folder[i]['ID']+"'><a data-name='"+source.Folder[i]['folderName']+"' class='Folder "+passwordClass+"'>";
                html+="<div class='Name'>"+source.Folder[i]['folderName']+"</div>";
                html+="<div class='Size'>-</div>";

                visit = parseInt(source.Folder[i]['Visit']);

                if(visit>1000000000){visit=(visit/1000000000);visit=(Math.round(visit*100)/100)+'B+';}else{visit=numberFormat(visit);}
                html+="<div class='Visit'>"+visit+"</div>";
                html+="<div class='Download'>-</div>";
                html+="<div class='Date'>"+source.Folder[i]['Date']+"</div>";
                html+="<div class='Clear'></div>";
                html+="</a></li>";
                $('#fileManager .rightSide .listItem').append(html);
                n++;
            }
            for(i=0;i<source.File.length;i++){
                if(source.File[i]['Password']){passwordClass='Password';}else{passwordClass='';}
                html='';
                if(parseInt(source.File[i]['fault'])==1)
                {
                    html+="<li itemorder='"+n+"' data-itemtype='File' data-itemrewrite='"+source.File[i]['RewriteName']+"'  data-itemid='"+source.File[i]['ID']+"' class='fault '><a class='File "+passwordClass+"'>";
                }
                else
                {
                    html+="<li itemorder='"+n+"' data-itemtype='File' data-itemrewrite='"+source.File[i]['RewriteName']+"'  data-itemid='"+source.File[i]['ID']+"'><a class='File "+passwordClass+"'>";
                }
                html+="<div class='Name'>"+source.File[i]['Name']+"</div>";
                html+="<div class='Size'>"+beautifySize(source.File[i]['Size'])+"</div>";

                visit = parseInt(source.File[i]['Visit']);

                if(visit>1000000000){visit=(visit/1000000000);visit=(Math.round(visit*100)/100)+'B+';}else{visit=numberFormat(visit);}
                Download = parseInt(source.File[i]['DownloadCount']);

                html+="<div class='Visit'>"+visit+"</div>";
                html+="<div class='Download'>"+Download+"</div>";
                html+="<div class='Date'>"+source.File[i]['Date']+"</div>";
                html+="<div class='Clear'></div>";
                html+="</li>";
                html+="</a>";
                if(parseInt(source.File[i]['fault'])==1)
                {
                    html+="<a class='reupload' path='"+source.File[i]['FileSystem']+"' style='display:inline-block'>File lỗi</a>";
                }
                $('#fileManager .rightSide .listItem').append(html);
                n++;
            }
            html="<script>$('.listFile a.reupload').click(function(){$('#fileUploader').attr('path',($(this).attr('path')));$('#fileUploader').click();});</script>";
            $('#fileManager ').append(html);
            for(i=0;i<source.View.length;i++){
                if(source.View[i]['ID']=="0")
                    currentVisit = source.View[i]['View'];
            }
            $('#fileManager .leftSide .Totalview .totalviewItems').text(currentVisit);
            n=$('#fileManager .rightSide .listItem li').length;
            for(i=0;i<n;i++){
                li=$('#fileManager .rightSide .listItem li').eq(i);
                li.on('mousedown',function(e){
                    var $this=$(this);
                    holdingTimeout=setTimeout(function(){
                        if($this.hasClass('Hover')){
                            if(!e.button){
                                if(!$('body').find('.draggableItem').length){
                                    $('body').append('<div class="draggableItem"></div>');
                                }
                                $('.draggableItem').html(languageText['L_USER_MOVE']+selectedItem['File'].length+' file(s) + '+selectedItem['Folder'].length+' folder(s)').css({
                                    'top':(e.pageY+20)+'px',
                                    'left':(e.pageX-($('.draggableItem').width()/2))+'px'
                                });
                            }
                        }else{
                            $('.draggableItem').remove();
                        }
                    },500);
                }).on('mouseup',function(e){
                    clearTimeout(holdingTimeout);
                    if(!e.button){
                        if($('.draggableItem').length){
                            $('.draggableItem').remove();
                            l=$('#fileManager .rightSide .listItem li');
                            nn=l.length;
                            for(ii=0;ii<nn;ii++){
                                topY1=l.eq(ii).offset().top;
                                topY2=topY1+l.eq(ii).height();
                                if(e.pageY>=topY1&&e.pageY<=topY2){
                                    if(l.eq(ii).attr('data-itemtype')=='Folder'){
                                        $('#frmMoveItem').find('[name="Path"]').eq(0).val(l.eq(ii).attr('data-itemid'));
                                        $('#frmMoveItem').submit();
                                    }
                                    break;
                                }
                            }
                        }
                    }
                });
            }

            $('#fileManager .rightSide .listItem').on('mousemove',function(e){
                if($('.draggableItem').length){
                    $draggableItem=$('.draggableItem');
                    $('.draggableItem').css({'left':(e.pageX-($draggableItem.width()/2))+'px','top':+(e.pageY+20)+'px'});
                }
            });
            setupListUserItemAction();
            clearActiveItem();
            showWaiting(false);
            isLoading=false;
            name=$('#fileManager .rightSide .listItem li').first().find('.Name').eq(0).html();
            if(/^\.\.\//.test(name)){
                $('#fileManager .rightSide .listItem li').eq(1).click();
            }else{
                $('#fileManager .rightSide .listItem li').first().click();
            }
        },
        error:function(){}
    });
}

function numRound(a,b){
    b=Math.pow(10,b);
    return Math.round(a*b)/b;
}
function beautifySize(size){
    if(size<1024){size+=' B';}
    else if(size<(1024*1024)){size=numRound(size/1024,2)+' KB';}
    else if(size<(1024*1024*1024)){size=numRound(size/(1024*1024),2)+' MB';}
    else if(size<(1024*1024*1024*1024)){size=numRound(size/(1024*1024*1024),2)+' GB';}
    else {size=numRound(size/(1024*1024*1024*1024),2)+' GB';}
    return size;
}
function beautifyTime(seconds){
    if(seconds<60){
        return Math.round(seconds)+' '+languageText['L_SECOND'];
    }else if(seconds<3600){
        m=parseInt(seconds/60);
        seconds-=m*60;
        s=Math.round(seconds);
        return m+' '+languageText['L_MINUTE']+' '+s+' '+languageText['L_SECOND'];
    }else{
        h=parseInt(seconds/3600);
        seconds-=h*3600;
        m=parseInt(seconds/60);
        seconds-=m*60;
        s=Math.round(seconds);
        return h+' '+languageText['L_HOUR'] + ' '+m+' '+languageText['L_MINUTE']+' '+s+' '+languageText['L_SECOND'];
    }
}
setInterval(function(){
    if(listFile.length){
        if(listFile[0].size > (1024*1024*1024*4))
        {
            showAlert(languageText['L_FILE_LIMIT'],5);
            return false;
        }
        $uploadPanel=$('#uploadPanel');
        $uploadPanel.css('height','auto');
        for(i=0;i<listFile.length;i++){
            fileID='file'+SHA256(listFile[i].name+listFile[i].size);
            listFile[i].ID=fileID;
            if(!$uploadPanel.find('.'+fileID).length){
                size=beautifySize(listFile[i].size);
                $html='';
                $html+='<div class="File '+fileID+'">';
                $html+='<div class="Info">';
                $html+='<a class="Title">'+listFile[i].name+'</a><a class="Speed">'+languageText['L_UPLOAD_PENDING']+'</a>';
                $html+='<div class="Clear"></div>';
                $html+='</div>';
                $html+='<div class="progressBar">';
                $html+='<div class="Content">0% ('+size+')</div>';
                $html+='<div class="Percent"></div>';

                $html+='</div>';
                $html+='</div>';
                $uploadPanel.children('.Wrapper').eq(0).append($html);
            }
        }



    }
    if(isUploading){return false;}
    if(!listFile.length){confirmBeforeClosing(false);return false;}
    confirmBeforeClosing(true);
    isUploading=true;
    doUploadFile(listFile[0]);
},100);

function doUploadFile(file){
    // console.log(file)
    // var form_data = new FormData();
    // form_data.append("attachment", file);


    $('.'+file.ID).addClass('fileUploading');
    progressBarWidth=$('.'+file.ID+' .progressBar').eq(0).width();
    progressBarPercent=$('.'+file.ID+' .Percent').eq(0);
    progressBarContent=$('.'+file.ID+' .Content').eq(0);
    progressBarSpeed=$('.'+file.ID+' .Speed').eq(0);
    progressBarSpeed.html(languageText['L_CALCULATING_TIME']);
    $.ajax({
        url:'/upload',
        type:'POST',
        dataType:'JSON',
        headers: { "X-CSRF-Token": $("meta[name='csrf-token']").attr("content") },
        // data: form_data,
        data:
            {
                'Act':'Checksum',
                'Hash':SHA256(file.name),
                'Salt':SHA256(file.size+''),
                // 'file': file,
            },
        success:function(source){
            if(source.Status)
            {
                url=HomeURL+source.Data[0].toLowerCase().substr(7,8)+'/'+source.Data[1].toLowerCase().substr(7,8);
                dObj=new Date();
                startTime=dObj.getTime();
                totalLoaded=0;
                url+='/'+SHA256(source.Data[0].toLowerCase().substr(7,8)+source.Data[1].toLowerCase().substr(7,8)+'UpFile.VN')+'/';
                if(currentPath!=undefined&&currentPath!=0){
                    url+='?path='+encodeURIComponent(currentPath)+'&salt='+SHA256(currentPath+'UpFile.vn');
                    if(file.path)
                    {
                        url+='&file_system='+file.path;
                    }
                }
                else
                {
                    if(file.path)
                    {
                        url+='?file_system='+file.path;
                    }
                }
                console.log(url);
                /* Start: Send data { */
                xhr = new XMLHttpRequest();
                xhr.onload=function(e){
                    listFile.splice(0,1);
                    isUploading=false;
                    if(this.status==200){
                        if(this.response.split('|').length==2)
                        {
                            if(!file.path)
                            {
                                id=this.response.split('|');
                                link =HomeURL+id[0]+'/'+id[1]+'.html';
                                progressBarSpeed.html(languageText['L_UPLOADED']+' - <a href="/'+id[0]+'/'+id[1]+'.html" target="_blank">['+languageText['L_DOWNLOAD']+']</a> <a class="copyAllLink" data-clipboard-text="'+link+'" href="#">[Copy links]</a>');
                                progressBarContent.html('<a href="'+link+'" target="_blank">'+link+"</a>");
                                $('.'+file.ID).removeClass('fileUploading').removeClass(file.ID).addClass('delete'+file.ID);
                                if($('#fileManager').length)
                                {
                                    getListUserItem(currentPath);
                                    $('.delete'+file.ID).fadeOut(1000,function()
                                    {
                                        $(this).remove();
                                        if(!$('#uploadPanel .File').length)
                                        {
                                            $('#uploadPanel').stop().animate({'height':'0px'},500);
                                        }
                                    });
                                }
                                setupCopyAllLink();
                                $('.showAdditionalOptionsLink').css('display','block');
                            }
                            else
                            {
                                id=this.response.split('|');
                                link =HomeURL+id[0]+'/'+id[1]+'.html';
                                progressBarSpeed.html(languageText['L_UPLOADED']+' - <a href="/'+id[0]+'/'+id[1]+'.html" target="_blank">['+languageText['L_DOWNLOAD']+']</a> <a class="copyAllLink" data-clipboard-text="'+link+'" href="#">[Copy links]</a>');
                                isUploading=false;
                                confirmBeforeClosing(false);
                                window.location.reload();
                            }
                        }else{
                            console.log(this.response);
                            progressBarSpeed.html(languageText['L_UPLOADED_ERROR']);
                            progressBarContent.html(languageText['L_UPLOADED_ERROR']);
                            $('.'+file.ID).removeClass('fileUploading').removeClass(file.ID);
                        }
                    }else{
                        progressBarSpeed.html(languageText['L_UPLOADED_ERROR']);
                        progressBarContent.html(languageText['L_UPLOADED_ERROR']);
                        $('.'+file.ID).removeClass('fileUploading').removeClass(file.ID);
                    }
                    $('title').html(webTitle);
                };
                xhr.upload.onprogress=function(e){
                    console.log(e.loaded);
                    if(e.loaded>=e.total){
                        progressBarSpeed.html('0Kbps / '+languageText['L_VERIFYING_FILE']);
                        $('title').html('100% '+file.name+ ' - Verifying...');
                        progressBarPercent.css({'width':((100/100)*progressBarWidth)+'px'});

                    }
                    else{
                        dObj=new Date();
                        endTime=dObj.getTime();
                        if(endTime-startTime>3000){
                            speed=(e.loaded-totalLoaded)/((endTime-startTime)/1000);
                            totalLoaded=e.loaded;
                            startTime=endTime;
                            progressBarSpeed.html(beautifySize(speed)+'ps / '+languageText['L_REMAINING_TIME']+': '+beautifyTime((e.total-e.loaded)/speed));
                        }
                        percent=Math.round((e.loaded*100/e.total)*100)/100;
                        $('title').html(percent+'% '+file.name);
                        progressBarPercent.css({'width':((percent/100)*progressBarWidth)+'px'});
                        progressBarContent.html(percent+'% ('+beautifySize(e.total)+')');
                    }
                };
                console.log(url);
                xhr.open('post',url);
                formData=new FormData();
                startChunk=0;
                if(file.size >= (1024*1024*1024*2))
                {
                    perChunk=500*1024*1024;

                    endChunk=startChunk+perChunk;
                    while(startChunk<file.size){
                        formData.append('File[]',file.slice(startChunk,endChunk),file.name);
                        startChunk=endChunk;
                        endChunk=startChunk+perChunk;
                    }
                }
                else
                    formData.append('File[]',file.slice(startChunk,file.size),file.name);
                formData.append('Hash',SHA256(source.Data[0]+source.Data[1]).substr(7,13).toUpperCase());
                xhr.send(formData);
                console.log(formData);

                /* End: Send data } */
            }else{
                progressBarContent.addClass('Error').html(languageText['L_CANNOT_CONNECT_TO_SERVER']);
                listFile.splice(0,1);
                isUploading=false;
                progressBarSpeed.html(languageText['L_CANNOT_CONNECT_TO_SERVER']);
                $('.'+file.ID).removeClass('fileUploading').removeClass(file.ID);
            }
        },
        error:function(){
            progressBarContent.addClass('Error').html(languageText['L_CANNOT_CONNECT_TO_SERVER']);
            listFile.splice(0,1);
            isUploading=false;
            progressBarSpeed.html(languageText['L_CANNOT_CONNECT_TO_SERVER']);
            $('.'+file.ID).removeClass('fileUploading').removeClass(file.ID);
        }
    });
    $('#fileUploader').attr('path','');
}
function Logout(){
    if(isLoading||isUploading){
        showAlert(languageText['L_DONT_LOGOUT']);
        return false;
    }else{
        if(!confirm(languageText['L_CONFIRM_EXIT'])){return false;}
        isLoading=true;
        confirmBeforeClosing(true);
        showWaiting(true);
        $.ajax({url:'/',type:'post',data:{'Act':'Logout'},success:function(){
                setTimeout(function(){confirmBeforeClosing(false);window.open(HomeURL,'_self');},3000);
            },error:function(){
                setTimeout(function(){confirmBeforeClosing(false);window.open(HomeURL,'_self');},3000);
            }});
        return true;
    }
}
function Login(){
    if($.cookie('ID')!=undefined&&$.cookie('Salt')!=undefined){return false;}
    if(isLoading||isUploading){
        showAlert(languageText['L_SERVER_BUSY']);
        return false;
    }else if($.cookie('ID')!=undefined&&$.cookie('Salt')!=undefined){
        showAlert(languageText['L_ALREADY_LOGGED_IN']);
        return false;
    }else{
        $('#frmRegister').fadeOut(200,function(){
            $('#frmLogin').fadeIn(200);
        });
    }
}
function Register(){
    if(isLoading||isUploading){
        showAlert(languageText['L_SERVER_BUSY']);
        return false;
    }else if($.cookie('ID')!=undefined&&$.cookie('Salt')!=undefined){
        showAlert(languageText['L_ALREADY_LOGGED_IN']);
        return false;
    }else{
        $('#frmLogin').fadeOut(200,function(){
            $('#frmRegister').fadeIn(200);
        });
    }
}
function showLoggedInItems(){
    if(isLogged!=undefined&&isLogged==true){
        $('#Header ul .User').css('display','inline');
    }
}
function receiveLoginKey(file){
    if(isLoading||isUploading){
        showAlert('Sorry ! Please wait until all requests have been processed !');
        return false;
    }
    isLoading=true;
    showWaiting(true);
    keyType=file['name'].split('.');
    keyType=keyType[keyType.length-1];
    email=file['name'].split('.'+keyType);email=email[0];
    if(keyType=='ufMaster'){Act='requestLoginByMasterKey';}else{Act='requestLoginByAuthorizedKey';}
    reader = new FileReader();
    reader.onload=function(e){
        file=reader.result;
        $.ajax({
            type:'POST',
            dataType:'JSON',
            data:{'Act':Act,'Hash':SHA256('MiLaCucZangCuaChung'+Act+Math.random()).toUpperCase()},
            success:function(source){
                if(source.Status){
                    ID=source['Time'];
                    console.log(file);
                    loginByKey(keyType,ID,email,file);
                }else{
                    isLoading=false;
                    showWaiting(false);
                    showAlert(languageText['L_LOGIN_BY_AUTHORIZEDKEY_ERROR'],5);
                }
            },error:function(){
                isLoading=false;
                showWaiting(false);
                showAlert(languageText['L_LOGIN_BY_AUTHORIZEDKEY_ERROR'],5);
            }
        });
    };
    reader.readAsText(file);
    return false;
}
function reloadCaptcha(){
    img=document.getElementById('imgCaptcha');
    url=img.src.split('?');url=url[0]+'?'+(new Date().getTime());
    img.src=url;
}
function loginByKey(keyType,ID,Email,File){
    isLoading=true;
    showWaiting(true);
    File=SHA256(ID+'-'+File).toUpperCase();
    console.log(File);
    if(keyType=='ufMaster'){keyType='loginByMasterKey';}else{keyType='loginByAuthorizedKey';}
    $.ajax({
        dataType:'JSON',
        type:'POST',
        data:{'Act':keyType,'ID':ID,'Email':Email,'File':File,'Hash':SHA256(keyType+'MiIuDau'+ID+Email+'Chung'+File).toUpperCase()},
        success:function(source){
            if(source.Status){
                if(source.Status){
                    window.open(HomeURL+'filemanager/','_self');
                }else{
                    showWaiting(false);
                    isLoading=false;
                    showAlert(source.Message);
                }
            }else{
                isLoading=false;
                showWaiting(false);
                showAlert(source['Message'],5);
            }
        },error:function(){
            isLoading=false;
            showWaiting(false);
            showAlert(languageText['L_LOGIN_BY_AUTHORIZEDKEY_ERROR'],5);
        }
    });
}
jQuery(document).ready(function(e) {
    jQuery('.listFile a.reupload').click(function(){alert('dkusjgd');});

    //added by thuypx
    jQuery('.Root').click(function(){

        getListUserItem(0);
        currentPath=0;
    })
    jQuery('#fileManager').on('click','#breadcrumb a',function(){
        var sub=jQuery(this).attr('data-itemid');
        getListUserItem(sub);
        currentPath=sub;
    })
});
