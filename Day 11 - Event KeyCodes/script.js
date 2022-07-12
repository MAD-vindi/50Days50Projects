const insert = document.getElementById("insert");


// ${} is a templete it will work as long as we are in `` but not ""

window.addEventListener("keydown", (e) => {
    insert.innerHTML = `
        <div class="key">
            ${e.key === " "? "Space": e.key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${e.keyCode}
            <small>event.keyCode</small>
        </div>
        <div class="key">
            ${e.code}
            <small>event.code</small>
        </div>
        `
})