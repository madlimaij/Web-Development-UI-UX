const countDownNumber = prompt("Palun sisestage positiivne number");

if (countDownNumber <= 0 || typeof countDownNumber !== "number") {
    alert("Ainult positiivne number on lubatud!");
} else {
    function countDown(number) {
        document.getElementById("result").innerHTML += `Count down ${number}<br>`;
    
        const newNumber = number - 1;
    
        if (newNumber >= 0) {
            setTimeout(() => {
                countDown(newNumber);
            }, 1000);
        } else {
            document.getElementById("result").innerHTML = "Hurra!!!";
        }
    }
    
    countDown(countDownNumber);
}