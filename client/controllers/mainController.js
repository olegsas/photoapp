angular.module('myApp').controller('mainController', ['$scope', '$http', 'Upload', '$timeout',
  function ($scope, $http, Upload, $timeout) {

    $scope.test = 'Hello'

    $scope.pictures = [
      'https://s-media-cache-ak0.pinimg.com/736x/29/0a/ef/290aef1fcd6474e137760792a53c5d13.jpg',
      'http://tvoydosug.com/wp-content/uploads/2015/09/Funny-surprised-kitten.jpg',
      'https://s-media-cache-ak0.pinimg.com/564x/60/2d/16/602d16d140454313c2a0b1245c64a432.jpg',
      'https://i.ytimg.com/vi/WcvgjEjyHy4/maxresdefault.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/80/2f/55/802f55970cc02416c9d4c2ff9ef40f6d.jpg',
      'http://problemwildlifemanagement.com/wp-content/uploads/2011/07/racoon.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmmMYR90khubAHFF3TPFbm5Oah03FjW9eYn-z9OGt86ECMg3s'
    ]

    $scope.uploadPic = function(file) {
      console.log(file)
    file.upload = Upload.upload({
      url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
      data: {file: file},
    }).then(function(res){
      console.log(res)
      $scope.pictures.push('http://www.animalspot.net/wp-content/uploads/2012/01/Monkey-Photos.jpg')
    })

    // file.upload.then(function (response) {
    //   console.log(response)
    //   $timeout(function () {
    //     file.result = response.data;
    //   });
    // }, function (response) {
    //   if (response.status > 0)
    //     $scope.errorMsg = response.status + ': ' + response.data;
    // }, function (evt) {
    //   // Math.min is to fix IE which reports 200% sometimes
    //   file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
    // });
    }

  }
]);