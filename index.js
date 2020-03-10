'use strict';

var Funnel = require('broccoli-funnel');
const { join } = require('path');

module.exports = {
  name: require('./package').name,

  options: {
    autoImport: {
      webpack: {
        node: {
          process: true,
        },
      },
    },
  },

  treeForPublic: function() {
    return new Funnel(join(this.root, 'public'));
  },

  included(app) {
    this._super.included.apply(this, arguments);

    if (!app.options['ember-prism']) {
      app.options['ember-prism'] = {
        theme: 'okaidia',

        components: [
          'apacheconf',
          'bash',
          'css',
          'handlebars',
          'http',
          'javascript',
          'json',
          'markup-templating',
          'ruby',
          'scss',
        ],

        plugins: ['line-numbers', 'normalize-whitespace'],
      };
    }
  },
};
