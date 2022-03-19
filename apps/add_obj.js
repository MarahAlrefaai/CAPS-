'use strict'

const vendor=require('./vendor');

function  createpayload (){
  const date = new Date();
  const obj={ event:"" ,
  time: date.toString(),
  payload : vendor
} 
return  obj; }

module.exports= createpayload ();