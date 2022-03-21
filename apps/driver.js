'use strict'
const eventEmitter=require('../lib/events-pool');

 eventEmitter.on('pickup',(payload)=>{
   payload.event='pickup';
  //payload.payload=require('../apps/vendor.js');
   
   console.log("EVENT ",payload);
  console.log(`DRIVER: picked up ${payload.payload.orderId}`);
   //---------------------------------------------
   setTimeout(() => {
    eventEmitter.emit('in-transit',payload);
  }, 1000);

  })

//---------------------------------------------------
eventEmitter.on('in-transit',(payload)=>{
  payload.event='in-transit';
  const date = new Date();
  payload.time=date.toString();
  console.log(payload);
  setTimeout(() => {
    eventEmitter.emit('delivered',payload);
  }, 3000);
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
