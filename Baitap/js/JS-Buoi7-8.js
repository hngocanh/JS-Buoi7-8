// Declare an empty array to store the numbers
var numbers = [];

document.querySelector('#btnAdd').addEventListener('click', function (event) {
    event.preventDefault();

    var input = document.getElementById("number-input");

    // Get the value of the input element and parse it as an integer
    var number = parseInt(input.value);

    // Check if the number is valid
    if (isNaN(number)) {
        // Display an error message
        alert("Please enter a valid integer number");
    } else {
        // Push the number to the array
        numbers.push(number);

        // Clear the input element
        input.value = "";

    }

    for (var i = 0; i < numbers.length; i++) {
        document.querySelector('#arrNumbers').textContent = numbers;
    }
});

document.querySelector('#btnTinhTong').addEventListener('click', function (event) {
    event.preventDefault();

    var sum = 0;

    for (const num of numbers) {
        if (num > 0) {
            sum += num;
        }
        
    }

    document.querySelector('#sumEven').textContent = sum;
});



document.querySelector('#btnCalculateEvenNum').addEventListener('click', function (event) {
    event.preventDefault();

    var total = 0;

    for (const evenNum of numbers) {
        if (evenNum > 0) {
            total++;
        }
    }

    document.querySelector('#evenNum').textContent = total;
});

document.querySelector('#btnSmallestNum').addEventListener('click', function (event) {
    event.preventDefault();

    var min = numbers[0];

    for (let index = 1; index < numbers.length; index++) {
        if (numbers[index] < min) {
            min = numbers[index];
        }
        
    }
    document.querySelector('#smallest').textContent = min;

});

document.querySelector('#btnSmallestInt').addEventListener('click', function (event) {
    event.preventDefault();

    var smallestPositiveNumber = null;
    for (let index = 0; index < numbers.length; index++) {
        if ((numbers[index] < smallestPositiveNumber || smallestPositiveNumber === null) && numbers[index] > 0) {
            smallestPositiveNumber = numbers[index];
        }
        
    }
    document.querySelector('#smallestInt').textContent = smallestPositiveNumber;
});


document.querySelector('#btnLastEvenNum').addEventListener('click', function (event) {
    event.preventDefault();

    var lastEvenNumber = -1;

    for (let index = numbers.length - 1; index >= 0; index--) {
        if (numbers[index] % 2 === 0) {
            lastEvenNumber = numbers[index];
            break;
        }
        
    }
    document.querySelector('#lastEvenNum').textContent = lastEvenNumber;
});

document.querySelector('#btnSort').addEventListener('click', function (event) {
    event.preventDefault();

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++){
            if (numbers[i] > numbers[j]) {
                var temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
        
    }
    
    document.querySelector('#sortArray').textContent = numbers;
});

document.querySelector('#btnCompare').addEventListener('click', function (event) {
    event.preventDefault();

    var positive = 0;
    var negative = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positive++;
        } else {
            negative++;
        }
        
    }

    document.querySelector('#positiveNum').textContent = positive;
    document.querySelector('#negativeNum').textContent = negative;
});

