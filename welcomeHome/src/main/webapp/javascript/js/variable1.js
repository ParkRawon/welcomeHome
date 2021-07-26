// js/variable1.js
const num = [23, 44, 18, 35, 50];
numbers.push(42); //배열변수 추가는 가능 변경 불가능
let sum = 0;
document.write('<ul>');
for(let i = 0; i<num.length; i++) {
    sum += num[i];
    if(i==0) {
         document.write(num[i] + '<br>');
    } else {
        document.write('+' + num[i] + '<br>');
    }  
}
document.write('</ul>');
document.write('합계: ' + sum);