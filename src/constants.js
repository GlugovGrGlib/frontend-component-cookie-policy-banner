import { getConfig } from '@edx/frontend-platform';
// Read the env variables
const LMS_BASE_URL = getConfig().LMS_BASE_URL || '';
const LANGUAGE_PREFERENCE_COOKIE_NAME = getConfig().LANGUAGE_PREFERENCE_COOKIE_NAME || 'openedx-language-preference';
const COOKIE_DOMAIN = getConfig().SESSION_COOKIE_DOMAIN || '.raccoongang.com';
const COOKIE_NAME_PREFIX = getConfig().COOKIE_POLICY_NAME_PREFIX || '';
const COOKIE_POLICY_VIEWED_NAME = getConfig().COOKIE_POLICY_VIEWED_NAME || 'openedx-cookie-policy-viewed';
const SITE_NAME = getConfig().SITE_NAME || 'Your Platform Name Here';
// end of env vars reading

// general constants
const LOCALHOST = 'localhost';
const COOKIE_POLICY_PAGE_URL = new URL('/cookies', LMS_BASE_URL);
// end general constants

// i18n related constants
// https://en.wikipedia.org/wiki/IETF_language_tag
const ENGLISH_IETF_TAG = 'en';
const SPANISH_IETF_TAG = 'es-419';
const DEFAULT_IETF_TAG = ENGLISH_IETF_TAG;
const ENGLISH_LANGUAGE_CODE = 'en';
const SPANISH_LANGUAGE_CODE = 'es';

const IETF_TAGS = Object.freeze([ENGLISH_IETF_TAG, SPANISH_IETF_TAG]);

const IETF_TAGS_TO_CONTAINER_ROLE_LABEL = Object.freeze({
  [ENGLISH_IETF_TAG]: `Notice about use of cookies on ${SITE_NAME}.`,
  [SPANISH_IETF_TAG]: `Aviso sobre el uso de cookies en ${SITE_NAME}.`,
});
const IETF_TAGS_TO_CLOSE_BUTTON_LABEL = Object.freeze({
  [ENGLISH_IETF_TAG]: `Close the notice about use of cookies on ${SITE_NAME}.`,
  [SPANISH_IETF_TAG]: `Cerrar aviso sobre el uso de cookies en ${SITE_NAME}.`,
});
const bannerLinkOpen = `<a href="${COOKIE_POLICY_PAGE_URL}" class="policy-link" target="_blank">`;
const bannerLinkClose = '</a>';
const IETF_TAGS_TO_BANNER_TEXT = Object.freeze({
  [ENGLISH_IETF_TAG]: `We use cookies on this site to enhance your user experience. By using this website, you accept this use. Learn more about it in ${bannerLinkOpen}Cookie Policy${bannerLinkClose}. For a complete overview of all cookies used, please see your personal settings.
  `,
  [SPANISH_IETF_TAG]: `Utilizamos cookies en este sitio para mejorar su experiencia de usuario. Al utilizar este sitio web, usted acepta este uso. Obtenga más información al respecto en ${bannerLinkOpen}Política de cookies${bannerLinkClose}. Para obtener una descripción completa de todas las cookies utilizadas, consulte su configuración personal.`,
});
const IETF_TAGS_TO_LANGUAGE_CODE = Object.freeze({
  [ENGLISH_IETF_TAG]: ENGLISH_LANGUAGE_CODE,
  [SPANISH_IETF_TAG]: SPANISH_LANGUAGE_CODE,
});
const LANGUAGE_CODE_TO_IETF_TAGS = Object.freeze({
  [ENGLISH_LANGUAGE_CODE]: ENGLISH_IETF_TAG,
  [SPANISH_LANGUAGE_CODE]: SPANISH_IETF_TAG,
});
// end of i18n constants

export {
  ENGLISH_IETF_TAG,
  SPANISH_IETF_TAG,
  DEFAULT_IETF_TAG,
  IETF_TAGS,
  IETF_TAGS_TO_CONTAINER_ROLE_LABEL,
  IETF_TAGS_TO_CLOSE_BUTTON_LABEL,
  IETF_TAGS_TO_BANNER_TEXT,
  IETF_TAGS_TO_LANGUAGE_CODE,
  LANGUAGE_CODE_TO_IETF_TAGS,
  LOCALHOST,
  COOKIE_POLICY_VIEWED_NAME,
  LANGUAGE_PREFERENCE_COOKIE_NAME,
  COOKIE_DOMAIN,
  COOKIE_NAME_PREFIX,
  COOKIE_POLICY_PAGE_URL,
};
