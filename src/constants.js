import { ensureConfig, getConfig } from '@edx/frontend-platform';

ensureConfig(['LMS_BASE_URL', 'SITE_NAME'], 'Cookie Policy Banner component constants');

// Read the env variables
const { LMS_BASE_URL, SITE_NAME } = getConfig();
// end of env vars reading

// general constants
const LOCALHOST = 'localhost';
const COOKIE_POLICY_PAGE_URL = new URL('/cookies', LMS_BASE_URL);
// end general constants

// i18n related constants
// https://en.wikipedia.org/wiki/IETF_language_tag
const ENGLISH_IETF_TAG = 'en';
const SPANISH_IETF_TAG = 'es-419';
const DANISH_IETF_TAG = 'da';
const DEFAULT_IETF_TAG = ENGLISH_IETF_TAG;
const ENGLISH_LANGUAGE_CODE = 'en';
const SPANISH_LANGUAGE_CODE = 'es';
const DANISH_LANGUAGE_CODE = 'da';

const IETF_TAGS = Object.freeze([ENGLISH_IETF_TAG, SPANISH_IETF_TAG, DANISH_LANGUAGE_CODE]);

const IETF_TAGS_TO_CONTAINER_ROLE_LABEL = Object.freeze({
  [ENGLISH_IETF_TAG]: `Notice about use of cookies on ${SITE_NAME}.`,
  [SPANISH_IETF_TAG]: `Aviso sobre el uso de cookies en ${SITE_NAME}.`,
  [DANISH_IETF_TAG]: `Meddelelse om brug af cookies på ${SITE_NAME}.`,
});
const IETF_TAGS_TO_CLOSE_BUTTON_LABEL = Object.freeze({
  [ENGLISH_IETF_TAG]: `Close the notice about use of cookies on ${SITE_NAME}.`,
  [SPANISH_IETF_TAG]: `Cerrar aviso sobre el uso de cookies en ${SITE_NAME}.`,
  [DANISH_IETF_TAG]: `Luk meddelelsen om brug af cookies på ${SITE_NAME}.`,
});
const bannerLinkOpen = `<a href="${COOKIE_POLICY_PAGE_URL}" class="policy-link" target="_blank">`;
const bannerLinkClose = '</a>';
const IETF_TAGS_TO_BANNER_TEXT = Object.freeze({
  [ENGLISH_IETF_TAG]: `We use cookies on this site to enhance your user experience. By using this website, you accept this use. Learn more about it in ${bannerLinkOpen}Cookie Policy${bannerLinkClose}. For a complete overview of all cookies used, please see your personal settings.
  `,
  [SPANISH_IETF_TAG]: `Utilizamos cookies en este sitio para mejorar su experiencia de usuario. Al utilizar este sitio web, usted acepta este uso. Obtenga más información al respecto en ${bannerLinkOpen}Política de cookies${bannerLinkClose}. Para obtener una descripción completa de todas las cookies utilizadas, consulte su configuración personal.`,
  [DANISH_IETF_TAG]: `Vi bruger cookies på dette websted for at forbedre din brugeroplevelse. Ved at bruge dette websted accepterer du denne brug. Læs mere om det i ${bannerLinkOpen}Cookie-politikken${bannerLinkClose}. For en komplet oversigt over alle brugte cookies, se venligst dine personlige indstillinger.`,
});
const IETF_TAGS_TO_LANGUAGE_CODE = Object.freeze({
  [ENGLISH_IETF_TAG]: ENGLISH_LANGUAGE_CODE,
  [SPANISH_IETF_TAG]: SPANISH_LANGUAGE_CODE,
  [DANISH_IETF_TAG]: DANISH_LANGUAGE_CODE,
});
const LANGUAGE_CODE_TO_IETF_TAGS = Object.freeze({
  [ENGLISH_LANGUAGE_CODE]: ENGLISH_IETF_TAG,
  [SPANISH_LANGUAGE_CODE]: SPANISH_IETF_TAG,
  [DANISH_LANGUAGE_CODE]: DANISH_IETF_TAG,
});
// end of i18n constants

export {
  ENGLISH_IETF_TAG,
  SPANISH_IETF_TAG,
  DANISH_IETF_TAG,
  DEFAULT_IETF_TAG,
  IETF_TAGS,
  IETF_TAGS_TO_CONTAINER_ROLE_LABEL,
  IETF_TAGS_TO_CLOSE_BUTTON_LABEL,
  IETF_TAGS_TO_BANNER_TEXT,
  IETF_TAGS_TO_LANGUAGE_CODE,
  LANGUAGE_CODE_TO_IETF_TAGS,
  LOCALHOST,
  COOKIE_POLICY_PAGE_URL,
};
