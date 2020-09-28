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
	setction_01_title: m("畅玩游戏，获得Token和NFT"),
	setction_01_title_02: m("管理Token和NFT"),
	setction_01_title_03: m("支持游戏的区块链钱包"),
	setction_01_title_04: m("游戏资产？加密货币？请一站式管理！"),
	setction_01_emphasize: m("高品质区块链游戏"),
	setction_01_desc: m("提供拒绝比较的高品质DApp游戏。一站式管理玩游戏获得的数码资产。"),
	setction_02_title: m("想轻松管理日渐增多地数码资产吗？"),
	setction_02_emphasize: m("区块链资产保管和交易"),
	setction_02_desc: m("WEMIX提供安全的资产传送和交易服务。玩WEMIX游戏，赚取资产，安全管理！"),
	setction_03_title: m("为什么选择WEMIX钱包？"),
	setction_03_emphasize: m("快速传送资产"),
	setction_03_desc: m("WEMIX钱包提供快速处理大规模交易。轻松注册WEMIX钱包，体验舒服的WEMIX服务吧！"),
	coming_soon_title: m("网页版WEMIX钱包正在改装中"),
	coming_soon_desc: m("敬请期待！"),
};

LANGUAGE.Footer = {
	company_name: m("关于 WEMADE TREE"),
	company_plt: m("Wemade Tree Pte, Ltd"),
	privacy_policy: m("隐私政策"),
	terms_of_use: m("服务条款"),
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