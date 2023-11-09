(function(){
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
        $scope.checkIfMuch = function(){
            if($scope.menu == "" || $scope.menu == null){
                $scope.message = "Please enter data first";    
            } else {
                const words = $scope.menu.split(',');            
                if(words.length <= 3){
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Too much!";
                }
            }
        };
    }

    })();