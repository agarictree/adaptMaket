let burger = document.getElementById("burger");
let menu; 
function addMenu() {
    console.log(menu);
        if(!menu) {
            menu = document.createElement("div");
            menu.className = "menu";
            let hheight = document.getElementsByTagName("header")[0].offsetHeight;
            menu.style.top = hheight + "px";
            let list = ["mobile menu list 1", "mobile menu list 2", "mobile menu list 3", "mobile menu list 4"];
                list.forEach(el => {
                let listBlock = document.createElement("li");
                let a = document.createElement("a");
                a.href = "/";
                a.textContent = el;
                listBlock.append(a);
                listBlock.className = "burger-list";
                menu.append(listBlock);
    })
    document.body.append(menu);
    } else {
        menu.remove();
        menu = null;
    }
}

burger.addEventListener("click", addMenu);