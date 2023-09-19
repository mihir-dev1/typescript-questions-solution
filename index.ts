// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
// Import stylesheets
import './style.css';

// Write Javascript code!
function reversNum(num) {
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}

console.log(reversNum(1234));
// console.log(reversNum(854562));

function stringPalChecker(str: string) {
  let isStr = str.split('').reverse().join('');
  return isStr === str ? true : false;
}
console.log(stringPalChecker('poop'));
console.log(stringPalChecker('loop'));

function strShort(str: string) {
  return str.split('').sort().join('');
}

console.log(strShort('trivedi'));

function capStr(str: string) {
  let name = str.split(' ').map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  console.log(name.join(' '));
}
capStr('hello bor how are you!');

function occ(str) {
  let occObj = {};
  str.split('').map((item: string) => {
    if (occObj.hasOwnProperty(item) === false) {
      occObj[item.toLocaleLowerCase()] = 1;
    } else {
      occObj[item.toLocaleLowerCase()]++;
    }
  });
  return occObj;
}

console.log(occ('Mihir'));

let arrNum = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
arrNum.map((item) => {
  sum = sum + item;
});
console.log(sum);

let arrNum2 = ['sadsffdgd', 'efwefeg', 430, '45345xv', 'df', 56, 3];
let sum2 = 0;
arrNum2.map((item) => {
  if (typeof item === 'number') {
    sum2 = sum2 + item;
  }
});
console.log(sum2);

let userList = [
  {
    name: 'nidhi',
    gender: 'female',
  },
  {
    name: 'mihir',
    gender: 'male',
  },
  {
    name: 'riddhi',
    gender: 'female',
  },
  {
    name: 'jeel',
    gender: 'female',
  },
];

userList = userList.filter((item) => item.gender === 'male');

console.log(userList, 'sdf');

// let arr = [1, 2, 3, 4, 5];
// let cloneArr = [...arr];
// cloneArr.pop();
// console.log(arr, 'eewr');
// console.log(cloneArr, 'cloneArr');

function cloneArr(arr) {
  return arr.map((word) => word);
}
let newArr = cloneArr([1, 2, 4, 5]);
console.log(newArr, 'dfsdf');

console.log('============================');
function retrunArrData(arr, n = 1) {
  console.log(arr.length);
  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      console.log(arr[i]);
    }
  } else {
    console.log(n + ' pls enter validte num');
  }
}

retrunArrData([1, 2, 3, 4, 5], 3);

// function freq(arr) {
//   var freq = {};
//   arr.forEach = (elem) => {
//     if (freq.hasOwnProperty(elem)) freq[elem]++;
//     else freq[elem] = 1;
//   };
//   var ans = Object.keys(freq).reduce(function (acc, next) {
//     return freq[acc] > freq[next] ? acc : next;
//   });
//   console.log(ans, 'ad');
// }

// freq([1, 2, 3, 4, 4, 6, 6, 456, 3, 24, 32, 453453, 345]);

function freq(arr) {
  var freq = {};
  arr.forEach(function (elem) {
    if (freq.hasOwnProperty(elem)) freq[elem]++;
    else freq[elem] = 1;
  });
  var ans = Object.keys(freq).reduce(function (acc, next) {
    return freq[acc] > freq[next] ? acc : next;
  });
  console.log(ans);
}
freq([1, 2, 3, 12, 2, 3, 12, 1, 2, 3, 2121]);

function union(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))];
}

console.log(union([1, 34, 4, 56, 62], [1, 3, 4, 5, 6, 4, 3]));

function shuffleKaro(arr) {
  // sabse pahle kitna area shuffle area hai
  let totalShuffleArea = arr.length;
  while (totalShuffleArea > 0) {
    totalShuffleArea--;
    let indexOfExachnge = Math.floor(Math.random() * totalShuffleArea);
    let temp = arr[totalShuffleArea];
    arr[totalShuffleArea] = arr[indexOfExachnge];
    arr[indexOfExachnge] = temp;
    // console.log(arr, 'sdf');
  }
  return console.log(arr);
  // ek random number nikaalo
}
shuffleKaro([1, 2, 3, 4, 5, 6, 7]);
// console.log();
