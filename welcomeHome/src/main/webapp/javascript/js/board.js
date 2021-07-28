function submitFnc(e) {
    e.preventDefault();
    let list = document.querySelector('#list> tbody');

    let num = document.frm.num.value;
    let title = document.frm.title.value;
    let writer = document.frm.writer.value;
    let regDate = document.frm.regDate.value;


    if (document.frm.num.value == '') {
        alert('번호입력')
        document.frm.num.focus();
    }
    if (document.frm.title.value == '') {
        alert('제목입력')
        document.frm.title.focus();
    }
    if (document.frm.writer.value == '') {
        alert('이름입력')
        document.frm.writer.focus();
    }
    if (document.frm.regDate.value == '') {
        alert('날짜입력')
        document.frm.regDate.focus();
        return;
    }

    let chilCnt = list.children.length + 1;
    if (chilCnt % 2 == 0) {
        let liTag = createTr(num, title, writer, regDate);
        liTag.setAttribute('class', 'altRow');
        list.appendChild(liTag);
    } else {
        list.appendChild(createTr(num, title, writer, regDate));
    }
    document.frm.num.value = chilCnt + 1;
    addTrEvent();

    //기존에 생성되어있는 tr에 tr 완성하려고
    function createTr(num, title, writer, regDate) {
        let trTag = document.createElement('tr');
        trTag.setAttribute('id', num);
        // let num = document.createTextNode(num);
        // trTag.appendChild(tdTag);
        // let title = document.createTextNode(title);
        // trTag.appendChild(tdTag);
        // let writer = document.createTextNode(writer);
        // trTag.appendChild(tdTag);
        // let regDate = document.createTextNode(regDate);
        // trTag.appendChild(tdTag);
        for (let i = 0; i < arguments.length; i++) {
            let tdTag = document.createElement('td');
            tdTag.setAttribute('class', 'td' + (i + 1));
            let text = document.createTextNode(arguments[i]);
            tdTag.appendChild(text); //<td>name</td>
            trTag.appendChild(tdTag); //<tr><td>....</td></tr>
        }
        //체크박스 요소 추가
        let td = document.createElement('td');
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        td.appendChild(checkbox);
        trTag.appendChild(td);
        return trTag;
    }
}
//기존에 생성되어있는 tr에 이벤트 등록
function addTrEvent() {
    let trs = document.querySelectorAll('#list > tbody > tr');
    console.log(trs);
    for (let i = 0; i < trs.length; i++) {
        trs[i].addEventListener('click', function () {
            console.log('번호: ', this.children[0].innerHTML);
            // form 화면의 각 요소의 값 <= this.children[0].innerHTML
            document.getElementById('num').value = this.children[0].innerHTML;
            document.getElementById('title').value = this.children[1].innerHTML;
            document.getElementById('writer').value = this.children[2].innerHTML;
            document.getElementById('regDate').value = this.children[3].innerHTML;
        }); //매개값(event, function)     
    }
}

//수정버튼을 클릭하면 실행될 eventHandler(코드);
let updateBtn = document.querySelector('#inputForm > form > input[type="button"]');
console.log(updateBtn);
updateBtn.addEventListener('click', function () {
    //폼태그 안에 사용자가 수정한 값을 테이블에서 찾아와서 (tr=id) 하위요소 값 변경. 
    let numInput = document.getElementById('num');
    let titInput = document.getElementById('title');
    let wriInput = document.getElementById('writer').value;
    let regInput = document.getElementById('regDate');
    console.log(numInput.value); //수정하고자 하는 게시판의 글번호.
    let searchId = numInput.value;
    document.getElementById(searchId);
    let findTr = document.getElementById(searchId);
    console.log(findTr);
    //제목:
    findTr.children[1].innerHTML = titInput.value;
    //이름:
    findTr.children[2].innerHTML = wriInput;
    //날짜:
    findTr.children[3].innerHTML = regInput.value;
});

//선택삭제 버튼 클릭하면 선택값만 삭제처리/
document.getElementById('delBtn').addEventListener('click', function () {
    let checkedBox = document.querySelectorAll('#list > tbody > tr > td > input[type="checkbox"]:checked')
    console.log(checkedBox);
    for (let i = 0; i < checkedBox.length; i++) {
        checkedBox[i].parentNode.parentNode.remove();
    }

    //남은 데이터의 tr 건수만큼 가져와서 class => altRow;
    let remainTr = document.querySelectorAll('#list > tbody > tr');
    for (let i = 0; i < remainTr.length; i++) {
        if (i % 2 == 1) {
            remainTr[i].className = 'altRow';
        } else {
            remainTr[i].className = '';
        }
    }
});