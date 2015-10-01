angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ListsCtrl', function($scope, $ionicModal, $ionicScrollDelegate, $ionicSlideBoxDelegate) {
  $scope.firstItems =[
    { titre: '1er projet', description: 'Description du premier projet', id: 1 },


    ];

    $scope.secondItems = [
    { titre: '2eme projet', description: 'Description du deuxieme projet', id: 2 },


    ];

    $scope.thirdItems = [
    { titre: '3eme projet', description: 'Description du troisième projet', id: 3 },


    ];

    $scope.fourthItems = [
    { titre: '4eme projet', description: 'Description du quatrième projet', id: 4 },
    { titre: '5eme projet', description: 'Description du cinquième projet', id: 5 }
    ];

    $scope.showModal = function(templateUrl) {
 $ionicModal.fromTemplateUrl(templateUrl, {
 scope: $scope,
 animation: 'slide-in-up'
 }).then(function(modal) {
 $scope.modal = modal;
 $scope.modal.show();
 });
 }

 // Close the modal
 $scope.closeModal = function() {
 $scope.modal.hide();
 $scope.modal.remove();
 };

 $scope.clipSrc = 'img/Wildlife.wmv';


$scope.playVideo = function() {
 $scope.showModal('templates/video-popover.html');
}

 $scope.allImages = [{
 'src' : 'img/plan.jpg'
 }, {
 'src' : 'img/plan.jpg'
 }, {
 'src' : 'img/plan.jpg'
 }, {
 'src' : 'img/plan.jpg'
 }];

 $scope.showImages = function(index) {
 $scope.activeSlide = index;
 $scope.showModal('templates/image-popover.html');
 }



$scope.playImpress = function() {
$scope.showModal('templates/impress_demo.html');
};

$scope.playVisJs = function() {
$scope.showModal('visjs/lesMiserables.html');
};



})



.controller('DetailCtrl', function($scope, $stateParams) {
});
