Roganlist.controller('GuestController', function ($scope, guestService) {

    console.log("reached")
    $scope.guests = guestService.All().then(data => console.log(data));

})