// inherit multiple objects

const vehicle={
  dors:2,
  engine: function(){
    return "wrroom - sound"
  }
}
console.log(vehicle.engine());
const car=Object.create(vehicle);
car.wheels=4;
car.engine = function(){
  return "sound horn";
}
console.log(car.engine());
console.log(car);
