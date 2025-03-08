let display = document.querySelector(".display input");
const btns = document.querySelectorAll("input[type='button']");

let string = "";

btns.forEach((btn) => {
    btn.addEventListener("click", () => { 

        if (btn.value === "AC") {
           string = "";
           display.value = "";
        } else if (btn.value === "DE") {
            string = string.slice(0, -1);
            display.value = string;
        } else if (btn.value === "=") {
            string = eval(string);
            display.value = string;
        } else {
            string = string + btn.value;
            display.value = string;
        }
        
    })
})