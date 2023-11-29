var _Object$freeze, _Object$freeze2, _Object$freeze3, _Object$freeze4, _Object$freeze5;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { ensureConfig, getConfig } from '@edx/frontend-platform';
ensureConfig(['LMS_BASE_URL', 'SITE_NAME'], 'Cookie Policy Banner component constants');

// Read the env variables
var _getConfig = getConfig(),
  LMS_BASE_URL = _getConfig.LMS_BASE_URL,
  SITE_NAME = _getConfig.SITE_NAME;
// end of env vars reading

// general constants
var LOCALHOST = 'localhost';
var COOKIE_POLICY_PAGE_URL = new URL('/cookies', LMS_BASE_URL);
// end general constants

// i18n related constants
// https://en.wikipedia.org/wiki/IETF_language_tag
var ENGLISH_IETF_TAG = 'en';
var SPANISH_IETF_TAG = 'es-419';
var DANISH_IETF_TAG = 'da';
var DEFAULT_IETF_TAG = ENGLISH_IETF_TAG;
var ENGLISH_LANGUAGE_CODE = 'en';
var SPANISH_LANGUAGE_CODE = 'es';
var DANISH_LANGUAGE_CODE = 'da';
var IETF_TAGS = Object.freeze([ENGLISH_IETF_TAG, SPANISH_IETF_TAG, DANISH_LANGUAGE_CODE]);
var IETF_TAGS_TO_CONTAINER_ROLE_LABEL = Object.freeze((_Object$freeze = {}, _defineProperty(_Object$freeze, ENGLISH_IETF_TAG, "Notice about use of cookies on ".concat(SITE_NAME, ".")), _defineProperty(_Object$freeze, SPANISH_IETF_TAG, "Aviso sobre el uso de cookies en ".concat(SITE_NAME, ".")), _defineProperty(_Object$freeze, DANISH_IETF_TAG, "Meddelelse om brug af cookies p\xE5 ".concat(SITE_NAME, ".")), _Object$freeze));
var IETF_TAGS_TO_CLOSE_BUTTON_LABEL = Object.freeze((_Object$freeze2 = {}, _defineProperty(_Object$freeze2, ENGLISH_IETF_TAG, "Close the notice about use of cookies on ".concat(SITE_NAME, ".")), _defineProperty(_Object$freeze2, SPANISH_IETF_TAG, "Cerrar aviso sobre el uso de cookies en ".concat(SITE_NAME, ".")), _defineProperty(_Object$freeze2, DANISH_IETF_TAG, "Luk meddelelsen om brug af cookies p\xE5 ".concat(SITE_NAME, ".")), _Object$freeze2));
var bannerLinkOpen = "<a href=\"".concat(COOKIE_POLICY_PAGE_URL, "\" class=\"policy-link\" target=\"_blank\">");
var bannerLinkClose = '</a>';
var IETF_TAGS_TO_BANNER_TEXT = Object.freeze((_Object$freeze3 = {}, _defineProperty(_Object$freeze3, ENGLISH_IETF_TAG, "We use cookies on this site to enhance your user experience. By using this website, you accept this use. Learn more about it in ".concat(bannerLinkOpen, "Cookie Policy").concat(bannerLinkClose, ". For a complete overview of all cookies used, please see your personal settings.\n  ")), _defineProperty(_Object$freeze3, SPANISH_IETF_TAG, "Utilizamos cookies en este sitio para mejorar su experiencia de usuario. Al utilizar este sitio web, usted acepta este uso. Obtenga m\xE1s informaci\xF3n al respecto en ".concat(bannerLinkOpen, "Pol\xEDtica de cookies").concat(bannerLinkClose, ". Para obtener una descripci\xF3n completa de todas las cookies utilizadas, consulte su configuraci\xF3n personal.")), _defineProperty(_Object$freeze3, DANISH_IETF_TAG, "Vi bruger cookies p\xE5 dette websted for at forbedre din brugeroplevelse. Ved at bruge dette websted accepterer du denne brug. L\xE6s mere om det i ".concat(bannerLinkOpen, "Cookie-politikken").concat(bannerLinkClose, ". For en komplet oversigt over alle brugte cookies, se venligst dine personlige indstillinger.")), _Object$freeze3));
var IETF_TAGS_TO_LANGUAGE_CODE = Object.freeze((_Object$freeze4 = {}, _defineProperty(_Object$freeze4, ENGLISH_IETF_TAG, ENGLISH_LANGUAGE_CODE), _defineProperty(_Object$freeze4, SPANISH_IETF_TAG, SPANISH_LANGUAGE_CODE), _defineProperty(_Object$freeze4, DANISH_IETF_TAG, DANISH_LANGUAGE_CODE), _Object$freeze4));
var LANGUAGE_CODE_TO_IETF_TAGS = Object.freeze((_Object$freeze5 = {}, _defineProperty(_Object$freeze5, ENGLISH_LANGUAGE_CODE, ENGLISH_IETF_TAG), _defineProperty(_Object$freeze5, SPANISH_LANGUAGE_CODE, SPANISH_IETF_TAG), _defineProperty(_Object$freeze5, DANISH_LANGUAGE_CODE, DANISH_IETF_TAG), _Object$freeze5));
// end of i18n constants

export { ENGLISH_IETF_TAG, SPANISH_IETF_TAG, DANISH_IETF_TAG, DEFAULT_IETF_TAG, IETF_TAGS, IETF_TAGS_TO_CONTAINER_ROLE_LABEL, IETF_TAGS_TO_CLOSE_BUTTON_LABEL, IETF_TAGS_TO_BANNER_TEXT, IETF_TAGS_TO_LANGUAGE_CODE, LANGUAGE_CODE_TO_IETF_TAGS, LOCALHOST, COOKIE_POLICY_PAGE_URL };