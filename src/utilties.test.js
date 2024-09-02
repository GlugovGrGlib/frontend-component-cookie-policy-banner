import {
  getCookieCreationData,
  getIETFTagFromLanguageCode,
} from './utilities';
import {
  ENGLISH_IETF_TAG,
  SPANISH_IETF_TAG,
  DEFAULT_IETF_TAG,
  LOCALHOST,
} from './constants';

describe('utilities', () => {
  describe('#getCookieCreationData', () => {
    it('cookie creation data', () => {
      jsdom.reconfigure({ url: `http://${LOCALHOST}:8080/` });
      const expected = {
        cookieName: 'cookieconsent_status',
        domain: 'localhost',
        path: '/',
        maxAge: 2147483647,
      };
      expect(getCookieCreationData()).toEqual(expected);
    });

    it('cookie creation data with overridden cookie name', () => {
      jsdom.reconfigure({ url: `http://${LOCALHOST}:8080/` });
      const expected = {
        cookieName: 'edx-updated-cookie-policy-viewed',
        domain: 'localhost',
        path: '/',
        maxAge: 2147483647,
      };
      expect(getCookieCreationData('edx-updated-cookie-policy-viewed')).toEqual(expected);
    });

    it('prod cookie creation data', () => {
      jsdom.reconfigure({ url: 'https://www.edx.org/' });
      const expected = {
        cookieName: 'cookieconsent_status',
        domain: '.domain.com',
        path: '/',
        maxAge: 2147483647,
      };
      expect(getCookieCreationData()).toEqual(expected);
    });

    it('prod cookie creation data with overridden cookie name', () => {
      jsdom.reconfigure({ url: 'https://www.edx.org/' });
      const expected = {
        cookieName: 'edx-updated-cookie-policy-viewed',
        domain: '.domain.com',
        path: '/',
        maxAge: 2147483647,
      };
      expect(getCookieCreationData('edx-updated-cookie-policy-viewed')).toEqual(expected);
    });
  });

  describe('#getIETFTagFromLanguageCode', () => {
    it('returns the Spanish ieftTag when passed "es"', () => {
      expect(getIETFTagFromLanguageCode('es')).toEqual(SPANISH_IETF_TAG);
    });

    it('returns the English ieftTag when passed "en"', () => {
      expect(getIETFTagFromLanguageCode('en')).toEqual(ENGLISH_IETF_TAG);
    });

    it('returns the Default ieftTag when passed an unsupported languageCode', () => {
      expect(getIETFTagFromLanguageCode('de')).toEqual(DEFAULT_IETF_TAG);
    });
  });
});
