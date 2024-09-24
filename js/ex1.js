console.log("Piersol's Output from HW 5 Example 1");

class Square {
  constructor (side) {
    this.side = side
  }
  perimeter () {
    return this.side * 4
  }
  area () {
    return this.side ** 2
  }
  diagonal () {
    return Math.sqrt(2) * (this.side)
  }
  describe () {
    console.log(`Square with side ${this.side} has a perimter of ${this.perimeter()}, an area of ${this.area()}, and a diagonal of ${this.diagonal().toFixed(3)}`)
  }
}
let square1 = new Square (2)
let square2 = new Square (3)
let square3 = new Square (4)

square1.describe ()
square2.describe ()
square3.describe ()