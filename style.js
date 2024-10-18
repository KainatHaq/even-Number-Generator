function generateEven(){
    let inputValue = document.getElementById('inputValue').value;
    let i = 0;
    let value = '';
    while (i <= inputValue) {
        if(i % 2 === 0){
            value += `${i} `;
        }
        i++;
    }
    document.getElementById('result').innerHTML = value;
}