Roganlist.controller('GuestController', function ($scope, guestService) {

    $scope.guests = guestService.All().then(data => console.log(data));

})