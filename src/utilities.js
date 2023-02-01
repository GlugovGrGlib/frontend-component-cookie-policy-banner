import Cookie from 'universal-cookie';

import {
  DEFAULT_IETF_TAG,
  IETF_TAGS,
  LANGUAGE_CODE_TO_IETF_TAGS,
  LOCALHOST,
  COOKIE_POLICY_VIEWED_NAME,
  LANGUAGE_PREFERENCE_COOKIE_NAME,
  COOKIE_DOMAIN,
  COOKIE_NAME_PREFIX,
  IETF_TAGS_TO_BANNER_TEXT,
} from './constants';

// Setting path to '/' to be apply to all subdomains
// Setting maxAge to 2^31 -1
// because Number.SAFE_MAX_INTEGER does not get processed properly by the browser
// nor does the max Date defined in http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.1
const getCookieCreationData = (cookieName = null) => {
  let domain;
  let prefix;
  const name = cookieName || COOKIE_POLICY_VIEWED_NAME;
  if (window.location.hostname.indexOf(LOCALHOST) >= 0) {
    domain = LOCALHOST;
    prefix = LOCALHOST;
  } else {
    domain = COOKIE_DOMAIN;
    prefix = COOKIE_NAME_PREFIX;
  }
  return {
    cookieName: prefix ? `${prefix}-${name}` : name,
    domain,
    path: '/',
    maxAge: 2147483647,
  };
};

const getIETFTag = () => {
  const cookie = new Cookie(COOKIE_DOMAIN);
  const ietfTag = cookie.get(LANGUAGE_PREFERENCE_COOKIE_NAME);

  if (!ietfTag || IETF_TAGS.indexOf(ietfTag) <= -1) {
    return DEFAULT_IETF_TAG;
  }

  return ietfTag;
};

const getIETFTagFromLanguageCode = (languageCode) => {
  const ietfTag = LANGUAGE_CODE_TO_IETF_TAGS[languageCode];

  if (!ietfTag || IETF_TAGS.indexOf(ietfTag) <= -1) {
    return DEFAULT_IETF_TAG;
  }

  return ietfTag;
};

const createHasViewedCookieBanner = (cookieName = null) => {
  const cookieCreationData = getCookieCreationData(cookieName);

  if (!!cookieCreationData
      && !!cookieCreationData.cookieName
      && !!cookieCreationData.domain
      && !!cookieCreationData.path
      && !!cookieCreationData.maxAge) {
    return new Cookie().set(
      cookieCreationData.cookieName,
      true,
      {
        domain: cookieCreationData.domain,
        path: cookieCreationData.path,
        maxAge: cookieCreationData.maxAge,
      },
    );
  }

  return false;
};

const hasViewedCookieBanner = (cookieName = null) => {
  const cookieCreationData = getCookieCreationData(cookieName);
  return !!cookieCreationData && !!new Cookie().get(cookieCreationData.cookieName);
};

const getPolicyHTML = (tag, overrideText = {}) => {
  if (overrideText[tag]) {
    return overrideText[tag];
  }
  return IETF_TAGS_TO_BANNER_TEXT[tag];
};

export {
  getIETFTag,
  createHasViewedCookieBanner,
  hasViewedCookieBanner,
  getCookieCreationData,
  getIETFTagFromLanguageCode,
  getPolicyHTML,
};
