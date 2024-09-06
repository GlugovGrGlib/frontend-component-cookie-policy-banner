/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mergeConfig } from '@edx/frontend-platform';
Enzyme.configure({
  adapter: new Adapter()
});

// Ensure app-specific configs are loaded during tests since
// initialize() is not called.
mergeConfig({
  LANGUAGE_PREFERENCE_COOKIE_NAME: process.env.LANGUAGE_PREFERENCE_COOKIE_NAME || 'openedx-language-preference',
  COOKIE_POLICY_COOKIE_DOMAIN: process.env.COOKIE_POLICY_COOKIE_DOMAIN || '.domain.com',
  COOKIE_POLICY_VIEWED_COOKIE_NAME: process.env.COOKIE_POLICY_VIEWED_COOKIE_NAME || 'cookieconsent_status'
}, 'Cookie Policy Banner additional config');