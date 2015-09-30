// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

    
.controller('MediaCtrl', function($scope, $ionicModal) {

 
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
 $scope.modal.remove()
 };
 
 $scope.clipSrc = 'img/Wildlife.wmv';

 
$scope.playVideo = function() {
 $scope.showModal('templates/video-popover.html');
}

$scope.allImages = [{
 'src' : 'img/pdf-1.jpg'
 }, {
 'src' : 'img/pdf-2.jpg'
 }];

 $scope.showImages = function(index) {
 $scope.activeSlide = index;
 $scope.showModal('templates/image-popover.html');
 }


})
