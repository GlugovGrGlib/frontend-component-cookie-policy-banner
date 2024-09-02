import { getCookieCreationData, getIETFTagFromLanguageCode } from './utilities';
import { ENGLISH_IETF_TAG, SPANISH_IETF_TAG, DEFAULT_IETF_TAG, LOCALHOST } from './constants';
describe('utilities', function () {
  describe('#getCookieCreationData', function () {
    it('cookie creation data', function () {
      jsdom.reconfigure({
        url: "http://".concat(LOCALHOST, ":8080/")
      });
      var expected = {
        cookieName: 'cookieconsent_status',
        domain: 'localhost',
        path: '/',
        maxAge: 2147483647
      };
      expect(getCookieCreationData()).toEqual(expected);
    });
    it('cookie creation data with overridden cookie name', function () {
      jsdom.reconfigure({
        url: "http://".concat(LOCALHOST, ":8080/")
      });
      var expected = {
        cookieName: 'edx-updated-cookie-policy-viewed',
        domain: 'localhost',
        path: '/',
        maxAge: 2147483647
      };
      expect(getCookieCreationData('edx-updated-cookie-policy-viewed')).toEqual(expected);
    });
    it('prod cookie creation data', function () {
      jsdom.reconfigure({
        url: 'https://www.edx.org/'
      });
      var expected = {
        cookieName: 'cookieconsent_status',
        domain: '.domain.com',
        path: '/',
        maxAge: 2147483647
      };
      expect(getCookieCreationData()).toEqual(expected);
    });
    it('prod cookie creation data with overridden cookie name', function () {
      jsdom.reconfigure({
        url: 'https://www.edx.org/'
      });
      var expected = {
        cookieName: 'edx-updated-cookie-policy-viewed',
        domain: '.domain.com',
        path: '/',
        maxAge: 2147483647
      };
      expect(getCookieCreationData('edx-updated-cookie-policy-viewed')).toEqual(expected);
    });
  });
  describe('#getIETFTagFromLanguageCode', function () {
    it('returns the Spanish ieftTag when passed "es"', function () {
      expect(getIETFTagFromLanguageCode('es')).toEqual(SPANISH_IETF_TAG);
    });
    it('returns the English ieftTag when passed "en"', function () {
      expect(getIETFTagFromLanguageCode('en')).toEqual(ENGLISH_IETF_TAG);
    });
    it('returns the Default ieftTag when passed an unsupported languageCode', function () {
      expect(getIETFTagFromLanguageCode('de')).toEqual(DEFAULT_IETF_TAG);
    });
  });
});