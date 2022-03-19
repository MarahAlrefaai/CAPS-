'use strict'
const eventEmitter=require('../lib/events-pool');

 eventEmitter.on('pickup',(payload)=>{
   payload.event='pickup';
   console.log(payload);
   console.log(`DRIVER: delivered up ${payload.payload.orderId}`);
  })
//---------------------------------------------------
eventEmitter.on('in-transit',(payload)=>{
  payload.event='in-transit';
  console.log(payload);
  console.log(`DRIVER: delivered up ${payload.payload.orderId}`);
  })
//---------------------------------------------------
eventEmitter.on('delivered',(payload)=>{
  console.log(`VENDOR: Thank you for delivering ${payload.payload.orderId}`);
})