var moment = require('moment');

var checkinTime  = moment('30/05/2019', 'DD/MM/YYYY').unix();
var checkoutTime = moment('30/04/2020', 'DD/MM/YYYY').unix();

console.log(' checkinTime: ' + checkinTime);
console.log('checkoutTime: ' + checkoutTime);
console.log('  diff dates: ' + (checkoutTime - checkinTime) / 86400);
