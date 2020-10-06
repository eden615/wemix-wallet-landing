/*
 WEMIX Wallet Landing
 2020/09/17  Han, Ju-Nyeong INITIAL CODING
 author Han, Ju-Nyeong(eden615@wemade.com)
*/

(function (m) {

	"use strict";

LANGUAGE.Global = {
	serviceName: m("WEMIX"),
	app_store: m("<em>App Store</em> <em>で手に入れよう</em>"),
	google_play: m("<em>Google Play</em> <em>で手に入れよう</em>"),
	locale_ko_KR: m("한국어"),
	locale_en_US: m("ENGLISH"),
	locale_gl_ES: m("SPANISH"),
	locale_ja_JP: m("日本語"),
	locale_zh_CN: m("简体中文"),
	locale_zh_TW: m("繁体中文"),
};

LANGUAGE.Home = {
	setction_01_title: m("ゲームを楽しんでトークンとNFTを獲得しよう"),
	setction_01_title_02: m("獲得したトークンとNFTを管理しよう"),
	setction_01_title_03: m("ゲーム世界で繰り広げられるブロックチェーンウォレット"),
	setction_01_title_04: m("ゲーム資産？暗号通貨？まとめて管理しよう"),
	setction_01_emphasize: m("信頼性の高い様々なハイクオリティゲーム"),
	setction_01_desc: m("既存のゲームアプリと比べてもまったく遜色ないハイクオリティなDAppゲームを提供します。ゲームをプレイして報酬として獲得したデジタル資産をウォレットでまとめて管理できます。"),
	setction_02_title: m("増え続けるデジタル資産を管理したいなら？"),
	setction_02_emphasize: m("ブロックチェーンのデジタル資産の保管と取引。"),
	setction_02_desc: m("WEMIXは安全な資産移動や交換機能を提供しています。ゲームをプレイするだけでトークンを獲得できます。つまり、デジタル資産がますます増えるということです。増やしたデジタル資産でコンテンツを購入したり、交換・販売することでさらに資産増やしていきましょう。"),
	setction_03_title: m("WEMIXウォレットのメリット。"),
	setction_03_emphasize: m("デジタル資産をスピーディーに送金＆交換。"),
	setction_03_desc: m("WEMIXウォレットは大規模・超高速のトランザクション処理サービスを提供します。この驚くべき速度を経験するために、今すぐウォレットを生成してください。パスワードを1回入力するだけで、直ちにウォレットが生成されます。"),
	coming_soon_title: m("WEMIXウォレットのWebサービスはまもなく開始する予定です。"),
	coming_soon_desc: m("現在サイトリニューアル進行中です。完成まで今しばらくお待ちください。"),
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