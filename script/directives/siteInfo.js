app.directive('siteInfo', function() {
    return {
      restrict: 'E',
      scope: {
        selectedSite: '=',
        isSiteInfoOpen: '=',
      },
      templateUrl: 'template/siteInfo.html',
      link: function(scope) {
        scope.closeModal = function() {
          scope.isSiteInfoOpen = false;
        };
      }
    };
});
