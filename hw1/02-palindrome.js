const elem = document.querySelector('input');
const res = document.getElementById('result');
;
elem.addEventListener('input', handleInput);

function handleInput(){

      
        const val = document.getElementById('num').value;
        res.textContent = "";
        if(val === ""){
            return;
        }
        if(val < 0){
            return "Not a positive number";
        }

        else{
        const str = val.toString();
    
        const reversedStr = str.split('').reverse().join('');
    
        
        if (str === reversedStr) {
           res.textContent = "Yes, it is a palindrome!";
           res.style.color = "green";
        } else {
           res.textContent = "No, Try again!";
           res.style.color = "red";
        }

    }
}