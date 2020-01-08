use hotel_bookings;
db.dropDatabase();

db.guests.insertMany([
  {
    name: "Gregor Finkelbob",
    email: "wee_greggy_baby@gmail.co.uk",
    checked_in: false
  },
  {
    name: "Greg Bobbleboop",
    email: "xx_2k20_wow4eva@gmail.co.uk",
    checked_in: true
  },
  {
    name: "Brendan 'Coolguy' Huckledoo",
    email: "spambox1337@gmail.co.uk"
  }
]);
