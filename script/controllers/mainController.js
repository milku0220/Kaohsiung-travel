app.controller('MainController', function($scope, dataService) {
    $scope.zones = []; // 行政區域
    $scope.selectedZone = '甲仙區'; // 預設行政區域
    $scope.selectedSite = null; // 選擇的景點
    $scope.isModalOpen = false; // 是否開啟景點資訊視窗
    $scope.data = []; // 景點資料
    $scope.popularZones = ['苓雅區', '三民區', '甲仙區', '大樹區']; // 熱門行政區域
    $scope.currentZoneSites = []; // 當前行政區域的景點
    $scope.currentPage = 1; // 當前頁數
    $scope.itemsPerPage = 6; // 每頁顯示的景點數量

    dataService.getData().then(function(response) { // 取得景點資料
        $scope.data = response.data.result.records;
        $scope.zones = [...new Set($scope.data.map(item => item.Zone))];

        $scope.updateZone();
    });

    $scope.updateZone = function() { // 更新當前行政區域的景點
        $scope.currentZoneSites = $scope.data.filter(site => site.Zone === $scope.selectedZone);
        $scope.setPage(1);
        $scope.isModalOpen = false;
    };

    $scope.selectZone = function(zone) { // 選擇行政區域
        $scope.selectedZone = zone;
        $scope.updateZone();
    };

    $scope.setPage = function(page) { // 設定當前頁數
        $scope.currentPage = page;
        window.scrollTo({
            top: 400,
            behavior: 'smooth'
        });
    };

    $scope.pageCount = function() { // 回傳總頁數
        return Math.ceil($scope.currentZoneSites.length / $scope.itemsPerPage);
    };

    $scope.zoneClass = function(zone) {
        const classes = {
            '苓雅區': 'zone-a',
            '三民區': 'zone-b',
            '甲仙區': 'zone-c',
            '大樹區': 'zone-d'
        };
        return classes[zone];
    };

    $scope.showSiteInfo = function(site) {
        $scope.isModalOpen = true;
        $scope.selectedSite = site;
    };

    $scope.closeModal = function() {
        $scope.isModalOpen = false;
    };
});
