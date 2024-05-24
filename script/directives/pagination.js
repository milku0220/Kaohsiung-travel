app.directive('pagination', function() {
    return {
        restrict: 'E',
        templateUrl: 'template/pagination.html',
        scope: {
            currentPage: '=',
            itemsPerPage: '=',
            totalItems: '=',
        },
        link: function(scope) {
            scope.setPage = function(page) {
                scope.currentPage = page;
                window.scrollTo({
                    top: 400,
                    behavior: 'smooth'
                });
            };

            scope.pageCount = function() {
                return Math.ceil(scope.totalItems / scope.itemsPerPage);
            }
        }
    };
});
