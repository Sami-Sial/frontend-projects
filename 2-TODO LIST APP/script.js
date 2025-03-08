let input = document.querySelector("#input-task");
let addTaskBtn = document.querySelector("button");
let ul = document.querySelector("ul");

addTaskBtn.addEventListener("click", () => {
    if (input.value != "") {
        let li = document.createElement("li");
        ul.append(li);

        let circle = document.createElement("div");
        circle.classList.add("circle");
        li.prepend(circle);

        let p = document.createElement("p");
        p.innerText = input.value;
        circle.after(p);

        p.addEventListener("click", () => {
            p.classList.toggle("checked");
            circle.classList.toggle("active");
        })

        circle.addEventListener("click", () => {
            p.classList.toggle("checked");
            circle.classList.toggle("active");
        })

        let delTaskBtn = document.createElement("div");
        delTaskBtn.classList.add("delBtn");
        p.after(delTaskBtn);

        let crossImg = document.createElement("img");
        crossImg.src = "images/cross.png";
        crossImg.classList.add("crossImg");
        delTaskBtn.append(crossImg);

        delTaskBtn.addEventListener("click", () => {
            li.style.display = "none";
        })

        input.value = "";
    }
})

