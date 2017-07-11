/** @ngInject */
export default function baWizard() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'app/theme/components/baWizard/baWizard.html',
    controllerAs: '$baWizardController',
    controller: 'baWizardCtrl'
  }
}
