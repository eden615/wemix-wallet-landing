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
	locale_zh_Hans: m("简体中文"),
	locale_zh_Hant: m("繁体中文"),
};

LANGUAGE.Home = {
	setction_01_title: m("資産を安全に管理し、ゲームをプレイし、トークンを獲得します"),
	setction_01_title_02: m("ゲームを楽しんで、トークンを入手してください"),
	setction_01_title_03: m("ゲームに拡張するブロックチェーンウォレット"),
	setction_01_title_04: m("ゲームアセット？電子マネーですか？一度に管理してください"),
	setction_01_emphasize: m("多様で検証されたクオリティの高いゲーム。"),
	setction_01_desc: m("App形態のゲームと比べても全く遜色がない高クオリティのDAppゲームを提供しています。ゲームをプレイして報酬で獲得したデジタル資産を財布から一度に管理することができます。"),
	setction_02_title: m("ますます増えるデジタル資産を管理したい場合は？"),
	setction_02_emphasize: m("ブロックチェーンの資産保管と契約。"),
	setction_02_desc: m("上記ミックスでは、安全な資産の移動と交換の経験を提供していましょう。ゲームをプレイするだけで、トークンを取得します。ますます資産が増えるという話ですよ。増資産にコンテンツを購入したり、交換または販売して資産を増やしてみてください。"),
	setction_03_title: m("上記ミックス財布を使用すると、理由がある。"),
	setction_03_emphasize: m("資産移動交換を瞬時に転送します。"),
	setction_03_desc: m("上記ミックスでは、大規模なトランザクションを驚異的なスピードで迅速かつ円滑に処理するサービス環境を提供しています。この驚くべき速度を経験する今の財布を送ってください。パスワードを一度入力するだけで、すぐに財布が生成されます。"),
	coming_soon_title: m("上記ミックス財布Webサービスは、すぐに戻ってきました。"),
	coming_soon_desc: m("現在改装中。近いうちにお目にかかります。"),
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