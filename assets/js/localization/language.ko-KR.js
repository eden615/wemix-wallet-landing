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
	locale_ko_KR: m("KOR"),
	locale_en_US: m("ENG"),
	locale_gl_ES: m("ESP"),
	locale_ja_JP: m("日本"),
	locale_zh_Hans: m("中文"),
	locale_zh_Hant: m("中文(繁體)"),
};

LANGUAGE.Home = {
	setction_01_title: m("게임을 즐기고 토큰과 NFT를 획득하자"),
	setction_01_title_02: m("획득한 토큰과 NFT를 관리하자"),
	setction_01_title_03: m("게임까지 확장하는 블록체인 지갑"),
	setction_01_title_04: m("게임 자산? 암호화폐? 한번에 관리하세요"),
	setction_01_emphasize: m("다양하고 검증된 높은 퀄리티의 게임."),
	setction_01_desc: m("App 형태의 게임들과 비교해도 전혀 손색이 없는 높은 퀄리티의 DApp 게임을 제공합니다. 게임을 플레이하고 보상으로 획득한 디지털 자산을 지갑에서 한꺼번에 관리할 수 있습니다."),
	setction_02_title: m("점점 늘어나는 디지털 자산을 관리하고 싶다면?"),
	setction_02_emphasize: m("블록체인 자산 보관과 거래."),
	setction_02_desc: m("위믹스에서는 안전한 자산 이동과 교환 경험을 제공하죠. 게임을 플레이만으로 토큰을 획득합니다. 점점 자산이 늘어난다는 얘기죠. 늘어난 자산으로 콘텐츠 구매하거나 교환 또는 판매하여 자산을 늘려보세요."),
	setction_03_title: m("위믹스 지갑을 사용하면 좋은 이유."),
	setction_03_emphasize: m("자산 이동 교환을 순식간에 전송."),
	setction_03_desc: m("위믹스에서는 대규모 트랜잭션을 엄청난 속도로 신속하고 원활하게 처리하는 서비스 환경을 제공합니다. 이 놀라운 속도를 경험하려면 지금 지갑을 만드세요. 패스워드를 한번 만 입력하면 그 즉시 지갑이 생성됩니다."),
	coming_soon_title: m("위믹스 지갑 웹 서비스는 곧 돌아오겠습니다."),
	coming_soon_desc: m("현재 새단장 중. 조만간 뵙겠습니다."),
};

LANGUAGE.Footer = {
	company_name: m("ABOUT WEMADE TREE"),
	company_plt: m("Wemade Tree Pte, Ltd"),
	privacy_policy: m("RIVACY POLICY"),
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