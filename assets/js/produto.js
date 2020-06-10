var inputSize = document.querySelector('[name=size]')
var outputSize = document.querySelector('[name=value-size]')

function printSize() {
    outputSize.value = inputSize.value;
}

inputSize.oninput = printSize;