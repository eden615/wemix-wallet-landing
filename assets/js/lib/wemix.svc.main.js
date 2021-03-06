/*
 WEMIX Wallet Landing
 2020/09/17  Han, Ju-Nyeong INITIAL CODING
 author Han, Ju-Nyeong(eden615@wemade.com)
*/

(function () {

    "use strict";

    WEMIX.namespace("WEMIX.Svc.Main");

    WEMIX.Svc.Main = Class.extend({
        init: function (obj) {
            var me = this;

            me.setCurrentLanguage();
            me.setChangeMainText();
            me.clickChangeLocale();
            me.clickAppDownload();
        },
        // -------------------------------------------
        // 선택된 언어
        // -------------------------------------------
        setCurrentLanguage: function () {
            var locale = localStorage.getItem('APP.locale')
            if(locale.split('-')[0] == 'zh') {
                $("html").attr("lang", locale.toLowerCase());
                $("body").attr("class", locale.toLowerCase());
            } else {
                $("html").attr("lang", locale.split('-')[0]);
                $("body").attr("class", locale.split('-')[0]);
            }
            $('a[data-locale="' + locale + '"]').addClass('selected');
            try {
                $('.locale__language').html(LANGUAGE.Global['locale_' + locale.replace("-", "_")]());
            } catch(e) {
                localStorage.setItem('APP.locale', 'en-US');
            }
        },
        // -------------------------------------------
        // 문구 변경
        // -------------------------------------------
        setChangeMainText() {
            var me = this;
            me.$textChangeValue = 1;

            function changeText() {
                $('.new__content-set h1').removeClass('animation');
                setTimeout(function() {
                    if(me.$textChangeValue == 1){
                        $(".new__content-set h1").text(LANGUAGE.Home.setction_01_title())
                    } else if(me.$textChangeValue == 2) {
                        $(".new__content-set h1").text(LANGUAGE.Home.setction_01_title_02())
                    } else if(me.$textChangeValue == 3) {
                        $(".new__content-set h1").text(LANGUAGE.Home.setction_01_title_03())
                    } else {
                        $(".new__content-set h1").text(LANGUAGE.Home.setction_01_title_04())
                        me.$textChangeValue = 0;
                    }
                    $('.new__content-set h1').addClass('animation');
                }, 1000)
            };

            setInterval(function() {
                me.$textChangeValue++;
                changeText()
            }, 4000);
        },
        // -------------------------------------------
        // 언어 변경
        // -------------------------------------------
        clickChangeLocale: function () {

            var me = this;

            $('body').on("click", ".locale__group", function (e) {
                if($('.locale__group').hasClass('open') === true) {
                    $('.locale__group').removeClass('open');
                }
                else {
                    $('.locale__group').addClass('open');
                }
            });

            $('body').on("click", "#locale", function (e) {
                var $self = $(this);
                // var language = LANGUAGE.Global['locale_' + $self.data('locale').replace("-", "_")]();
                $('a[id^="locale"]').removeClass('selected');
                $self.addClass('selected');
                localStorage.setItem('APP.locale', $self.data('locale'));
                // localStorage.setItem('APP.language', language);
                reload();
            });

            function reload() {
                location.reload();
            }
        },
        // -------------------------------------------
        // 앱 다운로드
        // -------------------------------------------
        clickAppDownload: function () {

            var me = this;

            $('body').on("click", ".apple", function (e) {
                var $self = $(this);
                var storeLink = $self.data('store-url');
                goDownLink(storeLink)
            });

            $('body').on("click", ".google", function (e) {
                var $self = $(this);
                var storeLink = $self.data('store-web-url');
                goDownLink(storeLink)
            });

            function goDownLink(uri) {
                window.open(uri, '_blank');
                // window.location.href = storeLink;
            }
        }
    })

})(jQuery);