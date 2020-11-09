/*jshint esversion: 6 */
const xmlString = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;

const parser = new DOMParser ();
const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

const listNode = xmlDOM.querySelector('list');
const studentNode = listNode.querySelectorAll('student');
let nameList = [];
let ageList = [];
let profList = [];
let langList = [];


studentNode.forEach(function(student) {
    const nameNode = student.querySelector('name');
    const firstNameNode = nameNode.querySelector('first');
    const lastNameNode = nameNode.querySelector('second');
    const ageNode = student.querySelector('age');
    const profNode = student.querySelector('prof');
    const langAttr = nameNode.getAttribute('lang');
    nameList.push(`${firstNameNode.textContent} ${lastNameNode.textContent}`);
    ageList.push(ageNode.textContent);
    profList.push(profNode.textContent);
    langList.push(langAttr);
});

const result = {
    list: [
        {
            name: nameList[0],
            age: Number(ageList[0]),
            prof: profList[0],
            lang: langList[0]
        },
        {
            name: nameList[1],
            age: Number(ageList[1]),
            prof: profList[1],
            lang: langList[1]
        }
    ]
};

console.log(result);