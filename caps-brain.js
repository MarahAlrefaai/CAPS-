'use strict'

const eventEmitter =require('./lib/events-pool');
const driver =require('./apps/driver.js');
const {faker}=require('@faker-js/faker');
const date = new Date();
//let payload=require('./apps/add_obj.js');
//-----------------------------------------
setInterval(() => {
 
  eventEmitter.emit('pickup',{ event:"" ,
  time: date.toString(),
  payload : 
 {
    store: "sweet store",
    orderId: 	faker.datatype.uuid(),
    customer:  faker.name.findName(),
    address: faker.address.city()
  }});
 
}, 5000);
//-----------------------------------------
