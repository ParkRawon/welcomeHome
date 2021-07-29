function makeRow(obj) {
    let tr = document.createElement('tr');
    tr.addEventListener('mouseover', mover, true);
    tr.addEventListener('mouseout', mout, true);  // true=상위요소 -> 하위요소
    tr.addEventListener('click', trClick, false);  //false = 하위요소 -> 상위요소
    //필드의 갯수만큼 반복할때 fon...in 반복문사용
    for (let field in obj) {
        // console.log('필드: '+field+'값: '+obj[field]); //둘다 가능
        console.log(`필드: ${field}, 값: ${obj[field]}`);
        let td = document.createElement('td');
        let text = document.createTextNode(obj[field]);
        td.appendChild(text);
        tr.appendChild(td);

    }
    let td = document.createElement('td');
    let button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('value', '삭제');
    button.addEventListener('click', deleteRow); //콜백함수..
    td.appendChild(button);
    tr.appendChild(td);

    return tr;
}

let deleteRow = (arg) => {
    arg.stopPropagation(); //이벤트의 전파를 차단 
    // arrow function 일 경우에는 this 키워드는 window 오브젝트.
    arg.target.parentElement.parentElement.remove();
}


let mover = function (arg) {
    console.log(this.target);
    this.style.backgroundColor = 'beige';
}

let mout = function (arg) {
    //function 일 경우에는 this 키워드는 event 대상.
    this.style.backgroundColor = '';
}

let trClick = function () {
    window.alert(this.children[0].innerHTML)
}