/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(number1, number2, mathOper) {
  this.number1 = number1;
  this.number2 = number2;
  this.mathOper = mathOper;
  this.getMathOperation = function () {
    if (this.mathOper === "sum") {
      return this.number1 + this.number2;
    } else if (this.mathOper === "subtraction") {
      return this.number1 - this.number2;
    } else if (this.mathOper === "multiplication") {
      return this.number1 * this.number2;
    } else if (this.mathOper === "subtraction") {
      return this.number1 / this.number2;
    }
  };
}

const calculator1 = new Calculator(25, 5, "multiplication");
console.log(calculator1.getMathOperation());
