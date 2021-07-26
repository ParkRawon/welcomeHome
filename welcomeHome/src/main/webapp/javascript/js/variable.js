// js/variable.js

let var1 = 'Hello'; //변수선언 let

var1 = 'World'; //string 
var1 = 100;
console.log(typeof var1);
var1 = true;

const con1 = 'Good'; //상수선언 const
//con1 = 'Moning'; //상수값은 여러번 바꿀수 없다. 한번만 설정가능

let num1 = 1;
let num2 = 1;
console.log(num1 * num2);

document.write('<h1>Hello</h1>');
document.write('<ul>');
document.write('    <li>Apple</li>');
document.write('    <li>Cherry</li>');
document.write('</ul>');

let str = '<ul>';
str += '    <li>Orange</li>';
str += '    <li>Banana</li>';
str += '   </ul>';
document.write(str);

let fruits = ['수박', '딸기', '복숭아'];
fruits = new Array();    //사용안함
fruits.push('수박');
fruits.push('딸기');
fruits[2] = '키위';
fruits[fruits.length] = '망고';
fruits[fruits.length] = '포도';
fruits.pop();  //마지막 위치 값 삭제
fruits.pop();  //마지막 위치 값 삭제
fruits.unshift('망고');   //첫번째 위치에 추가
fruits.shift(); //첫번째 위치 값 삭제

console.log(typeof fruits);

document.write('<ul>');
for(let i = 0; i<fruits.length; i++) {
    document.write('<li>' + fruits[i] +'</li>');
}
document.write('</ul>');

