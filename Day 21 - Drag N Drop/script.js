const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for(const empty of empties){
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}


function dragStart(){
    this.className +=" hold";
    // here we set the class name to invisible since this is not a defined class in css it will help us to get rid of the hole thing.
    setTimeout(()=>this.className = "invisible", 0);
}

function dragEnd() {
    this.className = "fill";
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className +=" hovered";
}

function dragLeave() {
    this.className= "empty";
}

function dragDrop() {
    this.className="empty";
    this.append(fill);
}

