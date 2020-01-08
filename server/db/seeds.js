use hotel_bookings;
db.dropDatabase();

db.guests.insertMany([
  {
    name: "",
    email: "",
    checked_in: false
  }
]);
