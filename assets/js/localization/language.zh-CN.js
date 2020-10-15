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
	setction_01_title: m("畅玩游戏, 赚取Token和NFT"),
	setction_01_title_02: m("管理Token和NFT"),
	setction_01_title_03: m("区块链游戏钱包"),
	setction_01_title_04: m("游戏资产？加密货币？一站式管理！"),
	setction_01_emphasize: m("支持高品质区块链游戏"),
	setction_01_desc: m("从玩游戏到交易游戏资产, 在WEMIX 钱包轻松管理。"),
	setction_02_title: m("想要轻松管理 日益增多的数码资产吗？"),
	setction_02_emphasize: m("数码资产保管和交易"),
	setction_02_desc: m("WEMIX钱包提供安全的资产传送和交易服务。玩WEMIX游戏、赚取数码资产，在WEMIX钱包轻松管理！"),
	setction_03_title: m("为什么选择WEMIX钱包？"),
	setction_03_emphasize: m("安全、迅速 "),
	setction_03_desc: m("WEMIX钱包快速安全的处理大规模交易。请简单注册WEMIX钱包，体验与众不同的WEMIX服务吧！"),
	coming_soon_title: m("网页版WEMIX钱包正在改装中..."),
	coming_soon_desc: m("敬请期待！"),
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