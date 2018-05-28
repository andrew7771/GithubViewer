(function() {
    var app = angular.module("githubViewer");

    var mainController = function ($scope, $interval, $location) {
        var countDownInterval = null;
        $scope.username = "angular";
        $scope.countdown = 5;

        var decrementCountdown = function() {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        }        
        var startCountDown =  function() {
            countDownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        }

        $scope.search = function (username) {
            if (countDownInterval) {
                $interval.cancel(countDownInterval);
                $scope.countdown = null;
            }
            $location.path("/user/" + username);
        };

        
        startCountDown();
    };

    app.controller("mainController", mainController);
})();