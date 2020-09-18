/*
 WEMIX Wallet Landing
 2020/09/17  Han, Ju-Nyeong INITIAL CODING
 author Han, Ju-Nyeong(eden615@wemade.com)
*/

(function () {

    "use strict";

    WEMIX.namespace("WEMIX.Svc.Main");

    /**
     * 언어 선택
     * 
     */
    WEMIX.Svc.Main = Class.extend({
        init: function (obj) {
            var me = this;

            me.$local = WEMIX._globalMyLanguage();
            me.setCurrentLanguage();
            me.setChangeText()
            me.clickChangeLocale();
            me.clickAppDownload();
            me.clickBrowserDismiss();
        },
        // -------------------------------------------
        // 선택된 언어
        // -------------------------------------------
        setCurrentLanguage: function () {
            $("html").attr("lang", localStorage.getItem('APP.locale'));
            $("body").attr("class", localStorage.getItem('APP.locale'));
            $('a[data-locale="' + localStorage.getItem('APP.locale') + '"]').addClass('selected');
        },
        // -------------------------------------------
        // 문구 변경
        // -------------------------------------------
        setChangeText() {
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
                }, 0)
            };

            setInterval(function() {
                me.$textChangeValue++;
                changeText()
            }, 5000);
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
        // 앱 다운로드
        // -------------------------------------------
        clickAppDownload: function () {

            var me = this;

            $('body').on("click", ".new__link.apple", function (e) {
                var $self = $(this);
                goDownLink('apple')
            });

            $('body').on("click", ".new__link.google", function (e) {
                var $self = $(this);
                goDownLink('google')
            });

            function goDownLink(storeName) {
                if(storeName === 'google'){
                    alert('구글 플레이 다운로드 주소를 넣어야 합니다.');
                } else {
                    alert('앱스토어 다운로드 주소를 넣어야 합니다.');
                }
            }
        },
        // -------------------------------------------
        // PC 버전 브라우저 크롬 사용 안내 닫기
        // -------------------------------------------
        clickBrowserDismiss: function () {
            alert(WEMIX.Utils.browser.isExplorer())

            if(WEMIX.Utils.browser.isExplorer() && WEMIX.Utils.browser.deviceType == 'pc') {
                setTimeout(function () {
                    $('#chr-download-button').addClass('show');
                    $('#chr-download-button').on('click', function () {
                        WEMIX.Utils.newOpenUrl('https://www.google.com/intl/ko_ALL/chrome/', '_blank');
                    });
                }, 2000)
                $('.browser-banner').css('display', 'block');
                $('.main_header .ani_fixed').addClass('browser-help');
                $('.store-container').addClass('browser-help');
            }

            $('.browser-banner-dismiss').on('click', function () {
                $('.browser-banner').css('display', 'none');
                $('.main_header .ani_fixed').removeClass('browser-help');
                $('.store-container').removeClass('browser-help');
            });
        },
    })

})(jQuery);