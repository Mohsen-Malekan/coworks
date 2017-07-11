  'use strict';

  /**
   * Represents current element as panel, adding all necessary classes.
   */

  /** @ngInject */
export default  function baPanelSelf(baPanel) {
    return angular.extend({}, baPanel, {
      link: function(scope, el, attrs) {
        el.addClass('panel panel-white');
        if(attrs.baPanelClass) {
          el.addClass(attrs.baPanelClass);
        }
      }
    });
  }
