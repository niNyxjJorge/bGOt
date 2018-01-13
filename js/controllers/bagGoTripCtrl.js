myApp.controller("bagGoTripCtrl", function ($scope, $localStorage) {
   $scope.app = "Bag Go! Trip";
   $scope.item = [
      //   {Objeto: "", Qtd: "", id:"0" }
   ];

   $scope.$localStorage = $localStorage || {};
   $scope.$localStorage.itens = $scope.$localStorage.itens || [];
   $scope.item = $scope.$localStorage.itens;

   $scope.addItem = function (nItem) {
      nItem.id = generateId();

      $scope.item.push(angular.copy(nItem));

      delete $scope.nItem;
      return true;
   };


   $scope.removeItem = function () {
      $scope.item = $scope.item.filter(function (nItem) {
         if (!nItem.select)
            return nItem;
      });

      $scope.$localStorage.itens = $scope.item;

   };

   $scope.selectedItem = function (item) {
      return item.some(function (nItem) {
         return nItem.select;
      });
   };

   $scope.class = "strong";

   function generateId() {
      _id = $localStorage.id || 0;
      _id++;
      $localStorage.id = _id;

      return _id;

   }
});



