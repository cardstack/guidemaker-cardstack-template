/* eslint-env node */

module.exports = {
  description: 'The default blueprint for guidemaker-cardstack-template.',

  normalizeEntityName() {
    // no-op
  },

  afterInstall() {
    return this.addAddonsToProject({
      packages: [
        'ember-cli-google-fonts'
      ]
    });
  }
};
