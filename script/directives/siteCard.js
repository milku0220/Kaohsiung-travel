// siteDirective.js
angular.module('travelApp').directive('siteCard', function() {
    return {
      restrict: 'E',
      scope: {
        site: '='
      },
      templateUrl: 'template/siteCard.html'
    };
  });
