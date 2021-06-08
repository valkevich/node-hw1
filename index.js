const _ = require('lodash');
const data1 = [
    {
    "age": 3,
    "name": "Curtis Greene",
    "email": "curtis.greene@zaj.ca",
    },
    {
    "age": 23,
    "name": "Nikki Lowe",
    "email": "nikki.lowe@darwinium.tv",
    },
    {
    "age": 39,
    "name": "Barr Copeland",
    "email": "barr.copeland@nipaz.me",
    },
    ];

    const data2 = [
    {
    "age": 29,
    "name": "Calhoun Woodward",
    "email": "calhoun.woodward@medmex.info",
    },
    {
    "age": 21,
    "name": "Leta Lee",
    "email": "leta.lee@qnekt.com",
    },
    {
    "age": 40,
    "name": "James Dinh",
    "email": "j.dink@erw.com",
    }
    ];

//1
    const findAge = (arr, age) => {
        const result = _.findIndex(arr, age);
        return result;
    }
    findAge(data1, {age: 23});

//2 
    const concatData = (firstData, secondData) => {
        const data3 = _.concat(firstData, secondData);
        return data3;
    }
    concatData(data1, data2);

//3
    const createUser = (obj) => {
        const newUser = _.omit(obj, ['age']);
        return newUser;
    }
    createUser(data1[1]);
   
//4
    const createUser2 = (obj) => {
        let newObj = {};
        for (key in obj){
            if(key != 'age'){
                newObj[key] = obj[key];
            }
        }
        console.log(newObj);
    } 
    createUser2(data1[1]);
   

