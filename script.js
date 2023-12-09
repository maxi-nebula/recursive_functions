/** @format */

//using iterative method
fibs = (ip) => {
  let num = 0;
  let a = [];

  for (i = 0; i < ip; i++) {
    if (i <= 1) {
      num = i;

      a.push(i);
    } else {
      num = a[i - 1] + a[i - 2];
      a.push(num);
    }
  }

  console.log(a);
};

fibs(8);

//using recursive method

fibsRec = () => (
  



)