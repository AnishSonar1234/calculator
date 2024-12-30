let box = document.querySelectorAll("button");
let str = "";

Array.from(box).forEach((btn) => {
    btn.addEventListener("click",(e) => {
        if (e.target.innerText == "="){
            str = eval(str);
            document.querySelector(".display").value = str;
        }else if (e.target.innerText == "AC"){
            str = ""
            document.querySelector(".display").value = str;
        }

        else if (e.target.innerText == "DE") {
            let n = str.length;
            str = str.substring(0,n-1);
            document.querySelector(".display").value = str;
        }
        else {
            console.log(e.target);
            str = str + e.target.innerText;
            document.querySelector(".display").value = str;
        }
    })
})