//recovery of the DIV base where the photo appears
const base =  document.querySelector('.base');

//Recovery of all containers, recovery of nodes. This will give a list of nodes
const container = document.querySelectorAll(".container");

base.addEventListener('dragstart', dragStart);
base.addEventListener('dragend', dragEnd);

function dragStart() {
    /* we add the class hold to the div using className +=.
    * If you only put the = it changes the base class to hold.
    *Be careful with the space between base and hold 
    */
    this.className += " hold";

    /* When we move the image, we want the background image in the container 
    * to disappear. We will have to change the class to make it invisible.
    * We will use a setTimeOut to make the background disappear while still being
    * able to DRAG&DROP
    */
    setTimeout(() => {
        this.className = "invisible";
    },200)

}

function dragEnd(){
    /* As soon as we drop the image,
    * we give it the base class so that it returns to its original state 
    */
    this.className = "base";
}

for (const empty of container) {
    //as soon as we take the image, we do a dragover
    empty.addEventListener('dragover', dragOver);

    //as soon as we enter the image in a container
    empty.addEventListener('dragenter', dragEnter);

    //as soon as we leave the image in a container
    empty.addEventListener('dragleave', dragLeave);

    //as soon as we drop the image into a container
    empty.addEventListener('drop', dragDrop);
}

function dragOver(e){
    /* dragover has a default action, so it must be cancelled 
    * (https://www.w3schools.com/jsref/event_ondragover.asp) 
    */
    e.preventDefault();

}

function dragEnter(e){
    // same as dragover
    e.preventDefault();
    //we add the hoovered class to make an effect on the container
    this.className += " hoovered";

}

function dragLeave(){
    //we put back the container class only
    this.className = "container";
    
}

function dragDrop(){
    //we put back the container class only
    this.className = "container"
    //the base DIV is added to the container
    this.append(base);

    
}

