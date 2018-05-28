(function() {
    var app = angular.module("githubViewer");

    var userController = function ($scope, github, $routeParams) {
        $scope.repoSortOrder = "-stargazers_count";
        $scope.username = $routeParams.username;

        var onUserComplete = function (data) {
            $scope.user = data;
            github.getRepos($scope.user)
                .then(onRepos, onError);
        }
        var onRepos = function(data) {
           $scope.repos = data;           
        }
        var onError = function (reason) {
            $scope.error = "Could not fetch the data";
        };

        
        github.getUser($scope.username).then(onUserComplete, onError);
    };

    app.controller("userController", userController);

})();