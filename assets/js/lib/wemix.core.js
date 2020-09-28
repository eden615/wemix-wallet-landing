/*
 WEMIX Wallet Landing
 2020/09/17  Han, Ju-Nyeong INITIAL CODING
 author Han, Ju-Nyeong(eden615@wemade.com)
*/

(function () {
  "use strict";

  if (typeof window.WEMIX === "undefined") {
    window.WEMIX = {}; // WEMIX 객체 생성
  }

  // ----------------------------------------
  //	Name Space
  //	 - 전역 객체의 존재 확인 함수
  // ----------------------------------------
  WEMIX.namespace = function (ns) {
    // '.'으로 구분된 네임스페이스 표기 쪼개기
    var parts = ns.split("."),
      parent = WEMIX,
      i;

    // 처음에 중복되는 전역 객체명은 제거한다.
    if (parts[0] === "WEMIX") {
      parts = parts.slice(1);
    }

    for (i = 0; i < parts.length; i += 1) {
      // 프로퍼티가 존재하지 않는다면 생성한다.
      if (typeof parent[parts[i]] === "undefined") {
        parent[parts[i]] = {};
      }
      parent = parent[parts[i]];
    }
    return parent;
  };

  WEMIX.namespace("WEMIX");

  // ----------------------------------------
  //	지역화
  // ----------------------------------------
  // assets > js > localization 에서 참조
  WEMIX.Localization = {
    language: function (text) {
      return function () {
        var args = [text];
        args = args.concat(Array.prototype.slice.apply(arguments));
        return WEMIX.Localization.format.apply(null, args);
      };
    },
    format: function (text) {
      var tokenCount, token;

      if (arguments.length <= 1) {
        return text;
      }
      tokenCount = arguments.length - 2;

      for (token = 0; token <= tokenCount; token += 1) {
        // 정규식
        //	g : 발생할 모든 pattern에 대한 전역 검색
        //	i : 대/소문자 구분 안함
        //	m : 여러 줄 검색
        text = text.replace(
          new RegExp("\\{" + token + "\\}", "gi"),
          arguments[token + 1]
        );
      }
      return text;
    },
  };

  window.LANGUAGE = {};
  
  // ----------------------------------------
  // locale js import
  // ----------------------------------------
  document.addEventListener("DOMContentLoaded", function () {
    var locale = localStorage.getItem("APP.locale")
    var localeSrc = "./assets/js/localization/language." + locale + ".js";
    var s = document.createElement("script");
    s.setAttribute("type", "text/javascript");
    s.setAttribute("src", localeSrc);
    document.getElementsByTagName("head")[0].appendChild(s);
  });

  // ----------------------------------------
  // 언어
  // ----------------------------------------
  var _globalStorageLocaleName = "APP.locale";
  var _globalServiceLanguage = ["ko-KR", "en-US", "gl-ES", "ja-JP", "zh-CN", "zh-TW"];
  var _globalMyLanguage = localStorage.getItem(_globalStorageLocaleName);
  
  // 초기 언어 SET
  if (_globalMyLanguage == null) {
    _globalMyLanguage = navigator.language || navigator.userLanguage;
    if (_globalServiceLanguage.includes(_globalMyLanguage)) {
      localStorage.setItem(_globalStorageLocaleName, _globalMyLanguage);
    } else {
      localStorage.setItem(_globalStorageLocaleName, "en-US");
    }
  }
  
  WEMIX._globalMyLanguage = function () {
    return _globalMyLanguage;
  };
  
  WEMIX._globalServiceLanguage = function () {
    return _globalServiceLanguage;
  };

  // ----------------------------------------
  //	jQuery.ajax 호출 기본 설정
  // ----------------------------------------
  $.ajaxSetup({
    cache: false,
    type: "post",
    dataType: "json",
    timeout: 15000,
  });

})(jQuery);

// ----------------------------------------
//	Inspired by base2 and Prototype
// ----------------------------------------
(function () {
  var initializing = false,
    fnTest = /xyz/.test(function () {
      xyz;
    })
      ? /\b_super\b/
      : /.*/;

  // The base Class implementation (does nothing)
  window.Class = function () {};

  // Create a new Class that inherits from this class
  Class.extend = function (prop) {
    var _super = this.prototype;
    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;

    var name;

    // Copy the properties over onto the new prototype
    for (name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] =
        typeof prop[name] === "function" &&
        typeof _super[name] === "function" &&
        fnTest.test(prop[name])
          ? (function (name, fn) {
              return function () {
                var tmp = this._super;

                // Add a new ._super() method that is the same method
                // but on the super-class
                this._super = _super[name];

                // The method only need to be bound temporarily, so we
                // remove it when we're done executing
                var ret = fn.apply(this, arguments);
                this._super = tmp;

                return ret;
              };
            })(name, prop[name])
          : prop[name];
    }

    // The dummy class constructor
    function Class() {
      // All construction is actually done in the init method
      if (!initializing && this.init) this.init.apply(this, arguments);
    }

    // Populate our constructed prototype object
    Class.prototype = prototype;

    // Enforce the constructor to be what we expect
    Class.prototype.constructor = Class;

    // And make this class extendable
    Class.extend = window.Class.extend;

    return Class;
  };
})(jQuery);
