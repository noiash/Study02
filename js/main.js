"use strict";

{
  const numbers = [1, 4, 7, 8, 10];

  // const evenNumbers = numbers.filter(number => {
  //   if (number % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  const evenNumbers = numbers.filter(number => number % 2 === 0);

  console.log(evenNumbers);

}
  // const prices = [100, 190, 200];
  // const updatedPrices = prices.map((price) => {
  //   return price + 20;
  // });

  // const updatedPrices = prices.map(price => price + 20);
  // console.log(updatedPrices);



  // const scores = [80, 90, 40, 70];

  // scores.forEach((score) => {
  // scores.forEach((score, index) => {
  //   console.log(`Score ${index}: ${score}`);
  // });

//   const [a, b, c, d] = scores;
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);

// const [a, b, ...others] = scores;
// console.log(a);
// console.log(b);
// console.log(others);

// let x = 30;
// let y = 70;
// [x, y] = [y, x];
// console.log(x);
// console.log(y);




  // const otherScores = [10, 20];
  // const scores = [80, 90, 40, 70, ...otherScores];
  // console.log(scores);

  // function sum(a, b) {
  //   console.log(a + b);
  // }

  // sum(...otherScores);
  // sum(10, 20);
  // scores.splice(1, 1, 40, 50);

  // for (let i = 0; i < scores.length; i++) {
  //   console.log(`Score: ${i}: ${scores[i]}`);
  // }
  // scores.push(60, 50);
  // scores.shift();
  //90, 40, 70, 60, 50

  // console.log(`Score: ${scores[0]}`);
  // console.log(`Score: ${scores[1]}`);
  // console.log(`Score: ${scores[2]}`);

  // for (let i = 0; i < 3; i++) {

  // console.log(scores[1]);

  // scores[2] = 44;
  // console.log(scores);

  // console.log(scores.length);

// {
//   const x = 100;
//   console.log(x);

// }


// const x = 2;

// function f() {
//   // const x = 1;
//   console.log(x);
// }

// f();
// console.log(x);

// function sum(a, b, c) {
  // console.log(a + b + c);
  // return a + b + c;
// }

// const sum = function(a, b, c) {
//   return a + b + c;
// };

// const double = function(a) {
//   return a * 2;
// }

// const double = a => a * 2;
// console.log(double(12));

// const sum = (a, b, c) => a + b + c;

// sum(1, 2, 3);
// sum(3, 4, 5);

// const total = sum(1, 2, 3) + sum(3, 4, 5); //18
// console.log(total);

// function showAd(message = 'Ad') { //仮引数
//   console.log('------------');
//   console.log(`-----${message}-----`);
//   console.log('------------');
// }

// showAd('Header Ad');　//実引数
// console.log('Tom is great!');
// console.log('Bob is great!');
// showAd();
// console.log('Steve is great!');
// console.log('Richard is great!');
// showAd('Footer Ad');

// for (let i = 1; i <= 10; i++) {
  // if (i === 4) {
    //  if (i % 3 === 0) {
    //    continue;
    //   }
//     if (i === 4) {
//       break;
//     }
//   console.log(i);
// }

// let hp = 100;

// while (hp > 0) {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// }

// let hp = -50;

// do {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// } while (hp > 0);

// for (let i = 1; i <= 10; i++) {
  // console.log('hello');
  // console.log('hello' + i);
  // console.log(`hello ${i}`);
// }

// const signal = 'pink';

// if(signal === 'red') {
//   console.log('Stop!');
// } else if (signal === 'yellow') {
//   console.log('Caution!');
// } else if (signal === 'blue') {
//   console.log('Go!');
// }

// switch (signal) {
//   case 'red':
//     console.log('Stop!');
//   break;
//   case 'yellow':
//     console.log('Caution!');
//   break;
//   case 'blue':
//   case 'green':
//     console.log('Go!');
//   break;
//   default:
//     console.log('Wrong signal!');
//     break;
// }

// const score = 60;
// const name = 'taguchi';

// if(score >= 50) {
//   if(name === 'taguchi') {
//     console.log('Good job!');
//   }
// }
 
// if (score >= 50 && name === 'taguchi') {
//   console.log('Good job!');
// }

//  && なおかつ (AND)
//  ||　もしくは (OR)
//  ! 　〜ではない (NOT)


// if(score >= 80) {
//   console.log('Great!');
// } else {
//   console.log('OK...');
// }

// score >= 80 ? console.log('Great!') : console.log('OK...');


// const price = 1200;

// console.log(price > 1000);  //true
// console.log(price < 1000);  //false
// console.log(price >= 1000);  //true
// console.log(price <= 1000);  //false
// console.log(price === 1000);  //false
// console.log(price !== 1000);  //true

// false <- 0, null, undefined, '', false
// true それ以外

// console.log(Boolean(0));
// console.log(Boolean('hello'));
// console.log('5' * 3);
// console.log('5' - 3);

// console.log('5' + 3);
// console.log(parseInt('5', 10) + 3);

// console.log(parseInt('hello', 10));

// console.log(typeof 'hello');
// console.log(typeof 5);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// let price = 500;

// price = price + 100;
// price += 100; //600

// price = price * 2;
// price *= 2; //1200

// price = price + 1;
// price += 1;
// price++; 1201//

// price = price - 1;
// price -= 1;
// price--; //1200

// console.log(price);


//定数 const
//変数 let var

// let price = 150;
// console.log(price * 140);
// console.log(price * 160);

// price = 170;
// console.log(price * 140);
// console.log(price * 160);

// console.log(10 + 3); //13
// console.log(10 - 3); //7
// console.log(10 * 3);  //30
// console.log(10 / 3);  //3.3333...
// console.log(10 % 3); //1
// console.log(10 ** 3); //1000
// console.log(2 + 10 * 3) //32
// console.log((2 + 10) * 3) //36





