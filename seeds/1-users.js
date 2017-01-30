const bcrypt = require('bcrypt-nodejs');

const pass = bcrypt.hashSync("test");

exports.seed = function(knex, Promise) {
  return Promise.all([
    // Inserts seed entries
    knex('users').insert([{
      "firstname": "Michael",
      "lastname": "Henderson",
      "username": "mhenderson0",
      "email": "mhenderson0@netscape.com",
      "password": bcrypt.hashSync("9i9WjJPPHF6Q"),
      "timezone": "Africa/Dar_es_Salaam",
      "created_at": "7:19 PM",
      "updated_at": "10:25 AM"
    }, {
      "firstname": "Bobby",
      "lastname": "Thomas",
      "username": "bthomas1",
      "email": "bthomas1@symantec.com",
      "password": bcrypt.hashSync("67OtDms"),
      "timezone": "Asia/Manila",
      "created_at": "1:57 AM",
      "updated_at": "9:12 PM"
    }, {
      "firstname": "Virginia",
      "lastname": "Carroll",
      "username": "vcarroll2",
      "email": "vcarroll2@cbc.ca",
      "password": bcrypt.hashSync('0H2c0Uu'),
      "timezone": "America/Tegucigalpa",
      "created_at": "8:38 PM",
      "updated_at": "9:51 AM"
    }, {
      "firstname": "Linda",
      "lastname": "Alexander",
      "username": "lalexander3",
      "email": "lalexander3@youtu.be",
      "password": bcrypt.hashSync('SOODFZpll'),
      "timezone": "Europe/Lisbon",
      "created_at": "11:32 AM",
      "updated_at": "10:31 AM"
    }, {
      "firstname": "David",
      "lastname": "Bailey",
      "username": "dbailey4",
      "email": "dbailey4@wunderground.com",
      "password": bcrypt.hashSync('IQ7SPDgA'),
      "timezone": "Europe/Volgograd",
      "created_at": "9:59 AM",
      "updated_at": "1:00 PM"
    }, {
      "firstname": "Clarence",
      "lastname": "Castillo",
      "username": "ccastillo5",
      "email": "ccastillo5@time.com",
      "password": bcrypt.hashSync('sZUeXm2dvgX'),
      "timezone": "Europe/Warsaw",
      "created_at": "8:10 AM",
      "updated_at": "10:04 AM"
    }, {
      "firstname": "Ashley",
      "lastname": "Hunt",
      "username": "ahunt6",
      "email": "ahunt6@princeton.edu",
      "password": bcrypt.hashSync('wbcwaE'),
      "timezone": "Europe/Prague",
      "created_at": "12:26 PM",
      "updated_at": "10:44 AM"
    }, {
      "firstname": "Ruth",
      "lastname": "Hall",
      "username": "rhall7",
      "email": "rhall7@flickr.com",
      "password": bcrypt.hashSync('l95TqJ8ThS'),
      "timezone": "America/Tegucigalpa",
      "created_at": "8:54 PM",
      "updated_at": "2:06 AM"
    }, {
      "firstname": "Julia",
      "lastname": "Palmer",
      "username": "jpalmer8",
      "email": "jpalmer8@whitehouse.gov",
      "password": bcrypt.hashSync('RBhW49Y'),
      "timezone": "Europe/Warsaw",
      "created_at": "9:13 PM",
      "updated_at": "11:07 AM"
    }, {
      "firstname": "Kenneth",
      "lastname": "Ferguson",
      "username": "kferguson9",
      "email": "kferguson9@statcounter.com",
      "password": bcrypt.hashSync('gcldNT'),
      "timezone": "Asia/Harbin",
      "created_at": "8:48 PM",
      "updated_at": "9:52 AM"
    }, {
      "firstname": "Cynthia",
      "lastname": "Franklin",
      "username": "cfranklina",
      "email": "cfranklina@howstuffworks.com",
      "password": bcrypt.hashSync('ijatNx5MmJl'),
      "timezone": "Indian/Maldives",
      "created_at": "6:30 AM",
      "updated_at": "11:36 AM"
    }, {
      "firstname": "Helen",
      "lastname": "Murray",
      "username": "hmurrayb",
      "email": "hmurrayb@zdnet.com",
      "password": bcrypt.hashSync('fuZiVe8IKBL'),
      "timezone": "Europe/Tirane",
      "created_at": "4:27 AM",
      "updated_at": "8:20 AM"
    }, {
      "firstname": "Jimmy",
      "lastname": "Green",
      "username": "jgreenc",
      "email": "jgreenc@toplist.cz",
      "password": bcrypt.hashSync('WexWqyPuy0'),
      "timezone": "America/Caracas",
      "created_at": "11:59 AM",
      "updated_at": "1:48 AM"
    }, {
      "firstname": "Diane",
      "lastname": "Hunt",
      "username": "dhuntd",
      "email": "dhuntd@amazonaws.com",
      "password": bcrypt.hashSync('yPxiqnNi1'),
      "timezone": "Asia/Karachi",
      "created_at": "6:22 PM",
      "updated_at": "5:13 PM"
    }, {
      "firstname": "Thomas",
      "lastname": "Murphy",
      "username": "tmurphye",
      "email": "tmurphye@slideshare.net",
      "password": bcrypt.hashSync('6MqA6wgGT'),
      "timezone": "Asia/Jakarta",
      "created_at": "12:21 PM",
      "updated_at": "2:24 PM"
    }, {
      "firstname": "Tammy",
      "lastname": "Carroll",
      "username": "tcarrollf",
      "email": "tcarrollf@ning.com",
      "password": bcrypt.hashSync('GbRIFIri'),
      "timezone": "America/New_York",
      "created_at": "2:46 AM",
      "updated_at": "11:09 PM"
    }, {
      "firstname": "Jacqueline",
      "lastname": "Kennedy",
      "username": "jkennedyg",
      "email": "jkennedyg@cbc.ca",
      "password": bcrypt.hashSync('UKMlZJUl'),
      "timezone": "America/Bogota",
      "created_at": "4:39 AM",
      "updated_at": "7:48 AM"
    }, {
      "firstname": "Adam",
      "lastname": "Austin",
      "username": "aaustinh",
      "email": "aaustinh@google.it",
      "password": bcrypt.hashSync('GiXkMEX'),
      "timezone": "Asia/Manila",
      "created_at": "2:12 PM",
      "updated_at": "3:29 AM"
    }, {
      "firstname": "Ashley",
      "lastname": "Gray",
      "username": "agrayi",
      "email": "agrayi@economist.com",
      "password": bcrypt.hashSync('OljTzTPc73gJ'),
      "timezone": "Asia/Singapore",
      "created_at": "1:52 PM",
      "updated_at": "9:18 PM"
    }, {
      "firstname": "Sarah",
      "lastname": "Franklin",
      "username": "sfranklinj",
      "email": "sfranklinj@bigcartel.com",
      "password": bcrypt.hashSync('oEORP2Brne'),
      "timezone": "Europe/Stockholm",
      "created_at": "10:41 PM",
      "updated_at": "5:54 AM"
    }])
  ]);
};
