/*
 WEMIX Wallet Landing
 2020/09/17  Han, Ju-Nyeong INITIAL CODING
 author Han, Ju-Nyeong(eden615@wemade.com)
*/

(function (m) {

	"use strict";

LANGUAGE.Global = {
	serviceName: m("WEMIX"),
	app_store: m("<em>Descargar en</em> <em>App Store</em>"),
	google_play: m("<em>Descargar en</em> <em>Google Play</em>"),
	locale_ko_KR: m("한국어"),
	locale_en_US: m("ENGLISH"),
	locale_gl_ES: m("SPANISH"),
	locale_ja_JP: m("日本語"),
	locale_zh_Hans: m("简体中文"),
	locale_zh_Hant: m("繁体中文"),
};

LANGUAGE.Home = {
	setction_01_title: m("Diviertete jugando los juegos y recibe Token y NFT"),
	setction_01_title_02: m("Administre el Token y NFT"),
	setction_01_title_03: m("Amplificación de los juegos hasta la billetera de blockchain"),
	setction_01_title_04: m("¿Los activos de juego?¿Las criptomonedas? Administre todo junto"),
	setction_01_emphasize: m("Variación de juegos comprobados de alta calidad."),
	setction_01_desc: m("Ofrecemos juegos DApp de alta calidad que son comparables a los de los juegos tipo aplicación. Puedes jugar y administrar los activos digitales obtenidos como recompensa todo junto en tu billetera."),
	setction_02_title: m("¿Quiere administrar sus activos digitales?"),
	setction_02_emphasize: m("Almacenamiento y transacción de activos de blockchain."),
	setction_02_desc: m("Wemix proporciona una experiencia de intercambio y movimiento de activos seguro. Usted gana Tokens con solo jugar. Significa que sus activos están aumentando. Aumente sus activos comprando, intercambiando o vendiendo."),
	setction_03_title: m("Porque hay que usar la billetera Wemix."),
	setction_03_emphasize: m("Transferencia de activos en segundos."),
	setction_03_desc: m("Wemix proporciona un entorno de servicio que procesa transacciones a gran escala de forma rápida y fluida a una gran velocidad. Simplemente cree su billetera para poder disfrutar de esta maravillosa experiencia."),
	coming_soon_title: m("El servicio de la página web de la billetera Wemix volverá pronto."),
	coming_soon_desc: m("Actualmente estamos en renovación. Nos vemos pronto."),
};

LANGUAGE.Footer = {
	company_name: m("Sobre WEMADE TREE"),
	company_plt: m("Wemade Tree Pte, Ltd"),
	privacy_policy: m("Politica de privacidad"),
	terms_of_use: m("Terminos de uso"),
	contact_us: m("Contáctanos"),
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