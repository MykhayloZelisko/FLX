const data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];

function findTypes() {
    let arr=[];
    for (let i = 0; i < arguments.length; i++) {
        arr.push(typeof arguments[i]);
    }
    return arr;
}

function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function mapArray(arr, func) {
    let newArr = [];
    executeforEach(arr, function(el) {
        newArr.push( func(el) )
    });
    return newArr;
}

function filterArray(arr, func) {
    let newArr = [];
    executeforEach(arr, function(el) {
        if(func(el)) {
            newArr.push(el)
        }
    });
    return newArr;
}

function getAmountOfAdultPeople(arr) {
    let amount = filterArray(arr, function(el) {
        return (el.age > 18)
    }).length;
    return amount;
}

function getGreenAdultBananaLovers(arr) {
    let newArr = filterArray(arr, function(el) {
        return (el.age > 18 && el.eyeColor === "green" && el.favoriteFruit === "banana")
    });
    newArr = mapArray(newArr, function(el) {
        return el.name
    });
    return newArr;
}

function keys(obj) {
    let arrKey = [];
    for (let key in obj) {
        arrKey.push(key)
    }
    return arrKey;
}

function values(obj) {
    let arrValue = [];
    for (let key in obj) {
        arrValue.push(obj[key])
    }
    return arrValue;
}

function showFormattedDate(date) {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `Date: ${date.getDate()} of ${month[date.getMonth()]}, ${date.getFullYear()}`
}

function isEvenYear(date) {
    return (date.getFullYear() % 2 === 0);
} 

function isEvenMonth(date) {
    return (date.getMonth() % 2 === 1);
} 

findTypes(null, 23, "23", [1,2,3], {1:1}, undefined, NaN);
getAmountOfAdultPeople(data);
getGreenAdultBananaLovers(data);
keys(data[0]);
values(data[1]);
showFormattedDate(new Date("2018-03-15T01:10:00"));
isEvenYear(new Date("2017-05-20T01:10:00"));
isEvenMonth(new Date("2019-07-14T01:10:00"));