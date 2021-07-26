// js/variable3.js

     // 학생 이름(name), 국어점수(kor), 수학점수(mat), 영어점수(eng) => student1~3 오브젝트.
     const students = [];
     const student1 = {
         name: '박주현',
         kor: '90',
         mat: '95',
         eng: '94'
     }
     const student2 = {
         name: '홍미림',
         kor: '90',
         mat: '97',
         eng: '96'
     }
     const student3 = {
         name: '김지연',
         kor: '90',
         mat: '93',
         eng: '92'
     }
     const fields = {
         name: '학생이름',
         kor: '국어점수',
         mat: '수학점수',
         eng: '영어점수'
     }
     students.push(student1);
     students.push(student2);
     students.push(student3);

     document.write('<table border ="1">');
     document.write('<thead><tr>');
     for (field in fields) {
         document.write('<th>' + fields[field] + '</th>');
     }
     document.write('</tr></thead>');
     document.write('<tbody>');
     for (let i = 0; i < students.length; i++) {
         document.write('<tr>');
         for (field in students[i]) {
             document.write('<td>' + students[i][field] + '</td>');
         }
         document.write('</tr>');
     }
     document.write('</tbody>');
     document.write('</table>');