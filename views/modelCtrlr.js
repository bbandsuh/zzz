myApp.controller('MainController', ['$scope', '$state', function($scope, $state) {
  $scope.options = [
    { label: 'Cash', value: 'cash' },
    { label: 'Cheque', value: 'cheque' },
    { label: 'Debit', value: 'debit' },
    { label: 'Credit', value: 'credit' }
  ];
  $scope.$watch('tt', function(value) {
    if(value) {
      $state.go(value);
    }
  });
}]);
