//  https://www.youtube.com/watch?v=N3cq0BHDMOY 
const Keyboard ={
    elements:{
        main: null,
        keysContainer: null,
        keys:[]

    },
    eventHandlers:{
        oninput: null,
        onclose: null
    },

    propertise:{
        value: "",
        capsLock: false
    },

    init(){
        this.elements.main= document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        this.elements.main.classList.add("keyboard", "1keyboard--hidden")
        this.elements.keysContainer.classList.add("keyboard__keys")

        this.elements.main.appendChild(this.elements.keysContainer)
        document.body.appendChild(this.elements.main);
    },
    _createKeyse(){
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "q","w", "e", "r", "t", "y", "u", "i", "o", "p", 
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter", 
            "done", "z", "x", "c", "v", "b", "n", "n", "m", ",", ".", "?",
            "space"
        ];
        const createIconHTML = (icon_name) =>{
            return `<i class="material-icons">${icon_name}</i>`
        }
        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const inserLineBreak= ["backspace","p","enter", "?"].indexOf(key) !== 1;
        })
    },
    _triggerEvent(handlerName)
    {
        console.log(handlerName)
    },
    _toggleCapsLock(){
        console.log("Caps");
    },
    open(initialValue, oninput, onclose){

    },

    close(){

    }
};

window.addEventListener("DOMContentLoaded", function(){
    Keyboard.init();
})