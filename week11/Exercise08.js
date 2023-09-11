const moment = require('moment');

const data = [
  '18 hours 17 mins',
  'Never',
  '17 hours 17 mins',
  '14 days 1 hour',
  '13 hours 6 mins',
  '15 days 6 hours',
  '15 days 7 hours',
  '14 days 15 hours',
  '57 days 6 hours',
  '1 hour 40 mins',
  '8 days 5 hours',
  '15 days 4 hours',
  '5 hours 5 mins',
  '4 hours 39 mins',
  '19 hours 56 mins',
  '17 hours 30 mins',
  '40 days 18 hours',
  '19 hours 34 mins',
  '8 days 5 hours',
  '6 hours 55 mins',
  '7 days 17 hours',
  '6 days 14 hours',
  '4 mins 40 secs',
  '20 hours 37 mins',
  '8 days 5 hours',
  '3 hours 52 mins',
  '5 days 18 hours',
  '6 hours 40 mins',
  '8 days 15 hours',
  '8 days 4 hours',
  '1 hour 36 mins',
  '2 hours 19 mins',
  '18 days 14 hours',
  '8 days 6 hours',
  '7 hours',
  '6 days 14 hours',
  '8 days 6 hours',
  '7 hours 14 mins',
  '6 days 16 hours',
  '17 hours 51 mins',
  '7 hours 5 mins',
  '6 days 14 hours',
  '7 days 5 hours',
  '6 days 13 hours',
  '1 hour 32 mins'
];

let lastAccess = moment('2023-05-04T00:00:00');

for (let i = 0; i < data.length; i++) {
  let value = data[i].match(/\d+/g);
  let timeType = data[i].match(/[a-z]+/gi)[0];

  if (timeType === 'days') {
    lastAccess = lastAccess.subtract(value, 'days');
  } else if (timeType === 'hours') {
    lastAccess = lastAccess.subtract(value, 'hours');
  } else if (timeType === 'mins') {
    lastAccess = lastAccess.subtract(value, 'minutes');
  } else if (timeType === 'secs') {
    lastAccess = lastAccess.subtract(value, 'seconds');
  }
}

console.log('Last access LMS ITK: ' + lastAccess.format('LLLL'));