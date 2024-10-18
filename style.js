function Calculate(){
     let result = document.getElementById('result');
    let currentYear = parseInt(document.getElementById('currentYear').value);
    let birthYear = parseInt(document.getElementById('birthYear').value);

     if (!currentYear || !birthYear){
       result.innerHTML = "Please fill all the fields"
         
         return;
      }
   let age = currentYear - birthYear;
 result.innerHTML = `Your age is ${age}.`
     
      }
  