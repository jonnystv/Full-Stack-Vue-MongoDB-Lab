use hotel;
db.dropDatabase();


db.bookings.insertMany([
    {
        name: "Evelyn",
        email: "Evelyn@gmail.com",
        checkedIn: true
    },
    {
        name: "Mack",
        email: "Mack@gmail.com",
        checkedIn: false
    },
    {
        name: "Jonny",
        email: "Jonny@gmail.com",
        checkedIn: true
    }
])