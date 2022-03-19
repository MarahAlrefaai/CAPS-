'use strict'
const eventEmitter=require("../lib/events-pool");
const driver =require('../apps/driver.js');
const payload=require('../apps/add_obj.js');

let consoleSpy;
beforeAll(()=>{
    consoleSpy = jest.spyOn(console,'log').mockImplementation();
})

it('pickup test',async()=>{
  eventEmitter.emit('pickup',payload);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
})
it('in-transiet test',async()=>{
  eventEmitter.emit('in-transit',payload);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
})
it('delivered test',async()=>{
  eventEmitter.emit('delivered',payload);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
})
