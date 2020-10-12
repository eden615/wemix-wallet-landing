/*
 WEMIX Wallet Landing
 2020/09/17  Han, Ju-Nyeong INITIAL CODING
 author Han, Ju-Nyeong(eden615@wemade.com)
*/

(function (m) {

	"use strict";

LANGUAGE.Global = {
	serviceName: m("WEMIX"),
	app_store: m("App Store 下载"),
	google_play: m("Google Play 下载"),
	locale_ko_KR: m("한국어"),
	locale_en_US: m("ENGLISH"),
	locale_gl_ES: m("SPANISH"),
	locale_ja_JP: m("日本語"),
	locale_zh_CN: m("简体中文"),
	locale_zh_TW: m("繁体中文"),
};

LANGUAGE.Home = {
	setction_01_title: m("暢玩遊戲，賺取Token和NFT"),
	setction_01_title_02: m("管理Token和NFT"),
	setction_01_title_03: m("區塊鏈遊戲錢包"),
	setction_01_title_04: m("遊戲資產？加密貨幣？ 一站式管理！"),
	setction_01_emphasize: m("支持高品質區塊鏈遊戲"),
	setction_01_desc: m("從玩遊戲到交易遊戲資產, 在WEMIX 錢包輕松管理。"),
	setction_02_title: m("想要輕松管理 日益增多的數碼資產嗎？"),
	setction_02_emphasize: m("數碼資產保管和交易"),
	setction_02_desc: m("WEMIX錢包提供安全的資產傳送和交易服務。玩WEMIX遊戲、賺取數碼資產，在WEMIX錢包輕松管理！"),
	setction_03_title: m("為什麽選擇WEMIX錢包？"),
	setction_03_emphasize: m("安全、迅速"),
	setction_03_desc: m("WEMIX錢包快速安全的處理大規模交易。請簡單加入WEMIX錢包會員，趕緊體驗與眾不同的WEMIX服務吧！"),
	coming_soon_title: m("網頁版WEMIX錢包正在改裝中..."),
	coming_soon_desc: m("敬請期待！"),
};

LANGUAGE.Footer = {
	company_name: m("ABOUT WEMADE TREE"),
	company_plt: m("Wemade Tree Pte, Ltd"),
	privacy_policy: m("PRIVACY POLICY"),
	terms_of_use: m("TERMS OF SERVICE"),
	contact_us: m("CONTACT US"),
	copyright: m("Copyright ⓒ 2018 Wemade Tree, All rights Reserved"),
};

$('[data-lang]').each(function() {
			var txt = $(this).data('lang').split('.');
			try {
		if(txt.length == 2){
			$(this).html(LANGUAGE[txt[0]][txt[1]]());
		} else {
			$(this).html(LANGUAGE[txt[0]][txt[1]][txt[2]]());
		}
			} catch(e) {
					console.log(txt);
			}
	});

}(WEMIX.Localization.language));