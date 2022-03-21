'use strict'
const {faker}=require('@faker-js/faker');
function createStorename(){

const storename={
  store: "sweet store",
  orderId: 	faker.datatype.uuid(),
  customer:  faker.name.findName(),
  address: faker.address.city()
}
return storename;
}
module.exports=createStorename();

