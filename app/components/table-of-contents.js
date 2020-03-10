import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  level: '0',
  tagName: 'ol',
  tocLevel: computed('level', function() {
    return `toc-level-${this.level}`;
  }),
  classNameBindings: ['tocLevel'],
});
