let factsAboutMe = angular.module('factsAboutMe', [])

factsAboutMe.controller('FactsController', ['$scope','$http','$filter',($scope, $http, $filter) => {
$scope.firstName = "Jajuan"
$scope.lastName = "X"
$scope.savedFacts = []

  let getFact = () => {
    $http.get('https://api.chucknorris.io/jokes/random')
      .then((data)=> {
        $scope.fact = data.data.value.replace(/Chuck/gi, $scope.firstName).replace(/Norris/gi, $scope.lastName)
      })
      .catch((err) => {
        console.log(err)
      }
    )
  }

  let savedFact = () => {
    $scope.savedFacts = $filter('filter')($scope.fact)

    console.log($scope.savedFacts);
  }

  getFact()

  $scope.newFact = () => {
    getFact()
  }

  $scope.saveFact = () => {
    savedFact()
  }


}])
