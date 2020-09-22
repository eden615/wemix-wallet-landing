/*
 WEMIX Wallet Landing
 2020/09/17  Han, Ju-Nyeong INITIAL CODING
 author Han, Ju-Nyeong(eden615@wemade.com)
*/

(function (m) {

	"use strict";

LANGUAGE.Global = {
	serviceName: m("WEMIX"),
	app_store: m("App Store 다운로드"),
	google_play: m("Google Play 다운로드"),
	locale_ko_KR: m("한국어"),
	locale_en_US: m("ENGLISH"),
	locale_gl_ES: m("SPANISH"),
	locale_ja_JP: m("日本語"),
	locale_zh_Hans: m("简体中文"),
	locale_zh_Hant: m("繁体中文"),
};

LANGUAGE.Home = {
	setction_01_title: m("Enjoy the game and Achieve the NFT & Tokens"),
	setction_01_title_02: m("Manage my obtained NFT & Tokens"),
	setction_01_title_03: m("Blockchain wallet that expands to the Game"),
	setction_01_title_04: m("Game property? Cryptocurrency? Handle it at once"),
	setction_01_emphasize: m("Various & High-quality games."),
	setction_01_desc: m("WEMIX provides well-made blockchain games as good as other apps games from the appstore. Play the game, Earn digital assest reward, and manage all at once in WEMIX Wallet."),
	setction_02_title: m("Willing to handle increasing digital assets?"),
	setction_02_emphasize: m("Store & Trade the blockchain aseets."),
	setction_02_desc: m("WEMIX offers user a safe property tranfer and trading experience through gameplay. User can obtain tokens from the gameplay, purchase the contents, trade or sell to increase the property."),
	setction_03_title: m("Reason why we should use WEMIX Wallet."),
	setction_03_emphasize: m("Instant assets transfer."),
	setction_03_desc: m("WEMIX provides a swift & stable service environment to handle a massive amount of transactions. To experience this amazing speed, make your own wallet now. Once you enter the passwords, the wallet will be created shortly."),
	coming_soon_title: m("WEMIX Wallet web service will return soon."),
	coming_soon_desc: m("Under construction now. Coming soon."),
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