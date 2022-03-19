'use strict'

const eventEmitter =require('./lib/events-pool');
const driver =require('./apps/driver.js');
const payload=require('./apps/add_obj.js');

//-----------------------------------------
setInterval(() => {
  eventEmitter.emit('pickup',payload);
}, 5000);
//-----------------------------------------
setInterval(() => {
  eventEmitter.emit('in-transit',payload);
}, 1000);
//-----------------------------------------
setInterval(() => {
  eventEmitter.emit('delivered',payload);
}, 3000);