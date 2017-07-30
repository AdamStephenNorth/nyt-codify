
var app = angular.module("myApp", []);

app.controller('firstCtrl', function($scope, $http){

  $scope.searchTerm = "Search";

  var submitKey =

  //nyt api
  $scope.apiCall = function(searchTerm) {
    $http.get(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
      + $scope.searchTerm
      + "&api-key=b3119a8275864ddb88b2939962ce8e11").then(function(success) {
      $scope.successArr = success.data.response.docs;
    });
  }
});
