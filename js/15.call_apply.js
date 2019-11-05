// call and apply
// how do they function
// what arguments do they take
// how are they different?

// CALL()
const car1 = {
  brand: 'Toyota',
  carDescription: function(cost, year, color) {
    console.log(
      `The car is ${this.brand}, it's ${cost} USD, built in ${year}, and the color is ${color}. \n`
    );
  }
};

car1.carDescription(8000, 2020, 'gray');

const car2 = {
  brand: 'Benz'
};
// car1.carDescription(car2, cost, year, color);
car1.carDescription.call(car2, 5000, 2008, 'red');

// APLLY()

const car3 = {
  brand: 'Ford',
  description: [7000, 2018, 'salmon shinning']
};

// car1.carDescription(car2, an array);
car1.carDescription.apply(car3, car3.description);
// same as :
// car1.carDescription.apply(car3, [7000, 2018, 'salmon shinning ']);
