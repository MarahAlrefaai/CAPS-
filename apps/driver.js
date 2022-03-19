'use strict'
const eventEmitter=require('../lib/events-pool');

 eventEmitter.on('pickup',(payload)=>{
   payload.event='pickup';
   console.log("EVENT ",payload);
   console.log(`DRIVER: delivered up ${payload.payload.orderId}`);
  })
//---------------------------------------------------
eventEmitter.on('in-transit',(payload)=>{
  payload.event='in-transit';
  const date = new Date();
  payload.time=date.toString();
  console.log(payload);
   
  })
//---------------------------------------------------
eventEmitter.on('delivered',(payload)=>{
  payload.event='delivered';
  const date = new Date();
  payload.time=date.toString();
  console.log(`DRIVER: delivered up ${payload.payload.orderId}`);
  console.log(`VENDOR: Thank you for delivering ${payload.payload.orderId}`);
  console.log(payload);
 
})