let factsAboutMe = angular.module('factsAboutMe', [])

factsAboutMe.controller('FactsController', ['$scope','$http','$filter',($scope, $http, $filter) => {
$scope.firstName = "Jajuan"
$scope.lastName = "X"
$scope.savedFacts = []
$scope.key = 0


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

  getFact()

  $scope.newFact = () => {
    getFact()
  }

  $scope.saveFact = () => {
    if (($scope.savedFacts.length === 0)) {
     return $scope.savedFacts.push({ fact: $scope.fact, key: 0})
    } else if ($scope.fact !== $scope.savedFacts[$scope.savedFacts.length - 1].fact) {
        $scope.savedFacts.push({ fact: $scope.fact, key: ++$scope.key })
     };
    console.log($scope.savedFacts);
  }


}])
