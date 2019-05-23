function onClick() {
    var input1Field = document.getElementById('input1');
    var input2Field = document.getElementById('input2');
    var calculateFields = document.getElementsByName("calculate");
    var result = document.getElementById('result');
 
    for (var i = 0; i < calculateFields.length; i++) {
        if (calculateFields[i].checked) {
            var input1 = Number(input1Field.value);
            var input2 = Number(input2Field.value);

            switch (i) {
                case 0:
                result.innerHTML = input1 + input2;
                break;
                case 1:
                result.innerHTML = input1 - input2;
                break;
                case 2:
                result.innerHTML = input1 * input2;
                break;
                case 3:
                result.innerHTML = input1 / input2;
                break;
            }
            break;
        }
    }
}


