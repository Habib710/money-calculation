function comon(value) {

    let comValue = document.getElementById(value);

    // ........input error.....................................

    if (comValue.value < 0) {
        document.getElementById('input-error').style.display = 'block';
    } else {
        return comValue;
    }
};

// .......................function-1............................

function totalCost() {


    // ...................sum ..................

    let totalCost = parseFloat(comon('food-input').value) + parseFloat(comon('rent-input').value) + parseFloat(comon('cloth-input').value);

    document.getElementById('input-error').style.display = 'none';

    return totalCost;
};

// ...................eventhandlar.........................

document.getElementById('cal-btn').addEventListener('click', function () {

    var incomeInput = document.getElementById('income-input');
    var income = incomeInput.value;
    var totalExpen = totalCost();


    // .................error message.....................

    if (income >= totalExpen && totalExpen > 0) {

        document.getElementById('total-exp').innerHTML = totalExpen;
        document.getElementById('balance').innerHTML = parseFloat(income) - totalExpen;
        document.getElementById('error-2').style.display = "none";

    } else if (income < totalExpen) {

        document.getElementById('error-2').style.display = "block";
    }

    comon('food-input').value = ' ';
    comon('rent-input').value = ' ';
    comon('cloth-input').value = ' ';

});

//..................... function-2........................................


function saving() {

    // var balance = document.getElementById('balance').innerHTML;
    var incomeInput = document.getElementById('income-input');
    var income = incomeInput.value;

    var persent = document.getElementById('save');
    var persentase = persent.value;

    var saveAmount = parseFloat(income) * parseFloat(persentase) / 100;


    persent.value = ' ';
    incomeInput.value = ' ';
    return saveAmount;
    // console.log(saveAmount);

};

// .......................EVENHANDLAR...............................


document.getElementById('btn-save').addEventListener('click', function () {
    var balance = document.getElementById('balance').innerHTML;

    var save = saving();


    if (save >= balance) {

        document.getElementById('error-3').style.display = "block";

    } else {
        document.getElementById('error-3').style.display = "none";


        document.getElementById('saving').innerHTML = save;

        var saveRemain = document.getElementById('saving').innerHTML = save;


        var remain = balance - saveRemain;
        document.getElementById('remaining').innerHTML = remain;
    }

});