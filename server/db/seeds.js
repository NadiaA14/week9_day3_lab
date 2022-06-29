use hotel_bookings;

db.dropDatabase();

db.bookings.insertMany([
    {
        "name": "Loba Andrade",
        "email": "loba.andrade@hotmail.com",
        "checked_in": false
    },
    {
        "name": "Natalie Paquette",
        "email": "natalie.paquette@yahoo.com",
        "checked_in": true
    },
    {
        "name": "Kairi Imahara",
        "email": "kairi.imahara@outlook.co.uk",
        "checked_in": true
    },
    {
        "name": "Renee Hope Blasey",
        "email": "reneehope@gmail.com",
        "checked_in": false
    }
]);