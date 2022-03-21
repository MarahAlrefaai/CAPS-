'use strict'

function  createpayload (){
  //const vendor=require('./vendor');
  const date = new Date();
  const obj={ event:"" ,
  time: date.toString(),
  payload : require('./vendor')
} 
return  obj; }

module.exports= createpayload ();