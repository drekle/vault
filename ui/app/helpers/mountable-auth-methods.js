import Ember from 'ember';

const MOUNTABLE_AUTH_METHODS = [
  {
    displayName: 'AppRole',
    value: 'approle',
    type: 'approle',
    category: 'generic',
  },
  {
    displayName: 'AWS',
    value: 'aws',
    type: 'aws',
    category: 'cloud',
  },
  {
    displayName: 'Azure',
    value: 'azure',
    type: 'azure',
    category: 'cloud',
  },
  {
    displayName: 'Google Cloud',
    value: 'gcp',
    type: 'gcp',
    category: 'cloud',
  },
  {
    displayName: 'GitHub',
    value: 'github',
    type: 'github',
    category: 'cloud',
  },
  {
    displayName: 'JWT/OIDC',
    value: 'jwt',
    type: 'jwt',
    glyph: 'auth',
    category: 'generic',
  },
  {
    displayName: 'Kubernetes',
    value: 'kubernetes',
    type: 'kubernetes',
    category: 'infra',
  },
  {
    displayName: 'LDAP',
    value: 'ldap',
    type: 'ldap',
    glyph: 'auth',
    category: 'infra',
  },
  {
    displayName: 'Okta',
    value: 'okta',
    type: 'okta',
    category: 'infra',
  },
  {
    displayName: 'RADIUS',
    value: 'radius',
    type: 'radius',
    glyph: 'auth',
    category: 'infra',
  },
  {
    displayName: 'TLS Certificates',
    value: 'cert',
    type: 'cert',
    category: 'generic',
  },
  {
    displayName: 'Username & Password',
    value: 'userpass',
    type: 'userpass',
    category: 'generic',
  },
];

export function methods() {
  return MOUNTABLE_AUTH_METHODS;
}

export default Ember.Helper.helper(methods);
