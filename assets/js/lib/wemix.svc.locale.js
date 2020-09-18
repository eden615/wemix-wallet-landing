/*
 WEMIX Wallet Landing
 2020/09/17  Han, Ju-Nyeong INITIAL CODING
 author Han, Ju-Nyeong(eden615@wemade.com)
*/

(function () {

    "use strict";

    WEMIX.namespace("WEMIX.Svc.Locale");

    /**
     * 언어 선택
     * 
     */
    WEMIX.Svc.Locale = Class.extend({
        init: function (obj) {
            var me = this;
            me.$textChangeValue = 1;

            me.$local = WEMIX._globalMyLanguage();
            me.selectedLocate();
            me.clickChangeLocale();
            
            setInterval(function() {
                me.changeText()
            }, 5000);
        },
        // -------------------------------------------
        // 선택된 언어
        // -------------------------------------------
        selectedLocate: function () {
            $("html").attr("lang", localStorage.getItem('APP.locale'));
            $("body").attr("class", localStorage.getItem('APP.locale'));
            $('a[data-locale="' + localStorage.getItem('APP.locale') + '"]').addClass('selected');
        },
        // -------------------------------------------
        // 언어 변경
        // -------------------------------------------
        clickChangeLocale: function () {

            var me = this;

            $('body').on("click", "#locale", function (e) {
                var $self = $(this);
                $('a[id^="locale"]').removeClass('selected');
                $self.addClass('selected');
                localStorage.setItem('APP.locale', $self.data('locale'));
                reload();
            });

            function reload() {
                location.reload();
            }
        },
        // -------------------------------------------
        // 문구 변경
        // -------------------------------------------
        changeText() {
            var me = this;
            me.$textChangeValue++;
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
            }, 0)
        },
    })

})(jQuery);