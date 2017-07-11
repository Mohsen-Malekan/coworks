'use strict';

/** @ngInject */
export default function themeLayoutSettings(baConfig) {
  'ngInject';
  var isMobile = (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase());
  var mobileClass = isMobile ? 'mobile' : '';
  var blurClass = baConfig.theme.blur ? 'blur-theme' : '';
  angular.element(document.body).addClass(mobileClass).addClass(blurClass);

  return {
    blur: baConfig.theme.blur,
    mobile: isMobile,
  }
}
