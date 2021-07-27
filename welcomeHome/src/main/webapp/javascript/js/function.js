       
        let a = 10;
        console.log(a);

        function cal() {
            let num1 = document.getElementById('num1');
            let num2 = document.getElementById('num2');
            let result = document.getElementById('result');
            result.value =sum(Number(num1.value), Number(num2.value));
            console.log(Number(num1.value) + Number(num2.value));
        }

        console.log('function정의 전: ' +sum(10, 20));
        
        let fnc = function(a, b){
            return a+b;

        }
        console.log('function정의 전: ' +fnc(10, 20));

        console.log(fnc(10, 20));

        function sum(num1, num2) { //hoisting: function 정의문을 끌어올림.
            return num1 + num2; 
        }
         let result = sum(10, 20);
         console.log(result);
         result = sum('Hello', 'World');
         console.log(result);     