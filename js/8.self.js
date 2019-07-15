this.color = 'yellow';

var myCar = {
  color: "Blue",
  logColor: function () {
    var self = this;
    console.log("In logColor - this.color: " + this.color);
    console.log("In logColor - self.color: " + self.color);
    (function () {
      console.log("In IIFE - this.color: " + this.color); // 'this' in IIFE lost its reference, so it refers to the global object, no longer the myCar; that't why it's yellow
      console.log("In IIFE - self.color: " + self.color);
    })();
  }
};

myCar.logColor();