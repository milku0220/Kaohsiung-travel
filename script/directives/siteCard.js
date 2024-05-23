app.directive('siteCard', function() {
    return {
      restrict: 'E',
      scope: {
        site: '=',
        onShowSiteInfo: '&'
      },
      templateUrl: 'template/siteCard.html',
      link: function(scope) {
        scope.showInfo = function() {
          scope.onShowSiteInfo({ site: scope.site });
        };
      }
    };
});
