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
	locale_zh_CN: m("简体中文"),
	locale_zh_TW: m("繁体中文"),
};

LANGUAGE.Home = {
	setction_01_title: m("Disfruta del juego, consigue NFT y Tokens"),
	setction_01_title_02: m("Gestiona tus Tokens y NFT en WEMIX"),
	setction_01_title_03: m("La billetera Blockchain, se expande a los servicios de juegos"),
	setction_01_title_04: m("¿Activos de los juegos?¿Criptomonedas? Manéjalo en WEMIX"),
	setction_01_emphasize: m("Variedad de juegos, aprobados y de alta calidad."),
	setction_01_desc: m("Ofrecemos juegos DApp de alta calidad que son comparables a los juegos de aplicación. Puedes jugar y administrar los activos digitales obtenidos como recompensa de una sola vez en su billetera"),
	setction_02_title: m("¿Quieres administrar sus activos digitales?"),
	setction_02_emphasize: m("Almacene e intercambie activos digitales."),
	setction_02_desc: m("WEMIX ofrece una transferencia y intercambio de activos que son seguros a través de los juegos. Puedse obtener Tokens en el juego, comprar los contenidos, intercambiar o vender para aumentar tus activos."),
	setction_03_title: m("Porque usar la billetera WEMIX."),
	setction_03_emphasize: m("Intercambio de activos al instante."),
	setction_03_desc: m("WEMIX ofrece un entorno de servicio de transacciones a gran escala de forma rápida y fluida a una gran velocidad. Sólo con crear la billetera podras disfrutar de esta maravillosa experiencia."),
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