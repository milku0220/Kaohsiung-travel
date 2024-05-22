app.service('dataService', function($http) {
    this.getData = function() {
        return $http.get('https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json')
            .then(function(response) {
                return response;
            })
            .catch(function(error) {
                console.error("Error loading data:", error);
            });
    };
});
