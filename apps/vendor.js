'use strict'

const {faker}=require('@faker-js/faker');
const storename={
  store: "sweet store",
  orderId: 	faker.datatype.uuid(),
  customer:  faker.name.findName(),
  address: faker.address.city()
}

module.exports=storename;

