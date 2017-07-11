'use strict';
import angular from 'angular';

/**
 * Includes basic panel layout inside of current element.
 */

/** @ngInject */
export default function baPanel(baPanel, baConfig) {
  return angular.extend({}, baPanel, {
    template: function(el, attrs) {
      var res = '<div  class="panel ' + (baConfig.theme.blur ? 'panel-blur' : '') + ' full-invisible ' + (attrs.baPanelClass || '');
      res += '" zoom-in ' + (baConfig.theme.blur ? 'ba-panel-blur' : '') + '>';
      res += baPanel.template(el, attrs);
      res += '</div>';
      return res;
    }
  });
}
