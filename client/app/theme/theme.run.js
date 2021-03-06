'use strict';

/** @ngInject */
export default function themeRun($timeout, $rootScope, layoutPaths, preloader, $q, baSidebarService, themeLayoutSettings) {
  'ngInject';
  var whatToWait = [
    $timeout(1000)
  ];

  var theme = themeLayoutSettings;
  if(theme.blur) {
    if(theme.mobile) {
      whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg-mobile.jpg'));
    } else {
      whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg.jpg'));
      whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg-blurred.jpg'));
    }
  }

  $q.all(whatToWait).then(function() {
    $rootScope.$pageFinishedLoading = true;
  });

  $timeout(function() {
    if(!$rootScope.$pageFinishedLoading) {
      $rootScope.$pageFinishedLoading = true;
    }
  }, 7000);

  $rootScope.$baSidebarService = baSidebarService;
}
