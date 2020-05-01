Roganlist.service('GuestService', function () {

    async function All() {
        let response = await fetch('http://localhost:8080/guests/');
        let data = await response.json()
        return data
    }

})