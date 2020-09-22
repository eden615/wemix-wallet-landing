/*
 WEMIX Wallet Landing
 2020/09/17  Han, Ju-Nyeong INITIAL CODING
 author Han, Ju-Nyeong(eden615@wemade.com)
*/

(function (m) {

	"use strict";

LANGUAGE.Global = {
	serviceName: m("WEMIX"),
	app_store: m("App Store Download"),
	google_play: m("Google Play Download"),
	locale_ko_KR: m("한국어"),
	locale_en_US: m("ENGLISH"),
	locale_gl_ES: m("SPANISH"),
	locale_ja_JP: m("日本語"),
	locale_zh_Hans: m("简体中文"),
	locale_zh_Hant: m("繁体中文"),
};

LANGUAGE.Home = {
	setction_01_title: m("資産を安全に管理し、ゲームをプレイし、トークンを獲得します"),
	setction_01_title_02: m("ゲームを楽しんで、トークンを入手してください"),
	setction_01_title_03: m("ゲームに拡張するブロックチェーンウォレット"),
	setction_01_title_04: m("ゲームアセット？電子マネーですか？一度に管理してください"),
	setction_01_emphasize: m("Various and proven high quality games."),
	setction_01_desc: m("It provides high-quality DApp games that are comparable to app-type games. You can play games and manage digital assets acquired as rewards in your wallet at once."),
	setction_02_title: m("Want to manage your growing digital assets?"),
	setction_02_emphasize: m("Blockchain asset storage and transaction."),
	setction_02_desc: m("WeMix provides a safe asset movement and exchange experience. You earn tokens just by playing the game. It means that your assets are increasing. Increase your assets by buying, exchanging, or selling content with increased assets."),
	setction_03_title: m("Reasons to use the WEMIX Wallet."),
	setction_03_emphasize: m("Transfer of asset movement exchanges in seconds."),
	setction_03_desc: m("Wemix provides a service environment that processes large-scale transactions quickly and smoothly at a tremendous speed. Create your wallet now to experience this incredible speed. Just enter your password once and your wallet will be created immediately."),
	coming_soon_title: m("WEMIX Wallet web service will be back soon."),
	coming_soon_desc: m("Currently being renovated. See you soon."),
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