/*jshint esversion: 6 */
const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;

const data = JSON.parse(jsonString);
const person = {
    list: [{
            age: data.list[0].age,
            name: data.list[0].name,
            prof: data.list[0].prof,
        },
        {
            age: data.list[1].age,
            name: data.list[1].name,
            prof: data.list[1].prof,
        },
    ]
};
console.log(person);