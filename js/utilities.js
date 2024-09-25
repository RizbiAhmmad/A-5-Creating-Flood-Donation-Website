function getInputFieldValueById(id){
 
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function gettextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

// showSectionById(id){
//     // hide section
//     document.getElementById('btn-history').classList.add('hidden');

//     document.getElementById('btn-history').classList.remove('hidden');



// }