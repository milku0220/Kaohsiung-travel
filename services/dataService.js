app.service('dataService', function($http) {
    this.getData = function() {
        return $http.get('https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json')
            .then(function(response) {

                var data = response.data.result.records;
                var categorizededData = {};

                data.forEach(function(item) {
                    if (!categorizededData[item.Zone]) {
                        categorizededData[item.Zone] = [];
                    }
                    categorizededData[item.Zone].push(item);
                });

                return categorizededData;
            })
            .catch(function(error) {
                console.error("Error loading data:", error);
            });
    };
});
