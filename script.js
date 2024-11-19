const countValue = document.querySelector('#counter');

const increment = () => {
    //getting the value from tne countValue and Changing it into the Integer bcs of innerText returns String
    let value = parseInt(countValue.innerText);

    //Updating the value
    value = value +1;

    //Setting the value
    countValue.innerText = value;

}

const decrement = () => {
    //Getting the value and changing it into the Integer
    let value = countValue.innerText;
    value = parseInt(value);

    //Updating the value
    value = value - 1;

    //Setting the value
    countValue.innerText = value;

}