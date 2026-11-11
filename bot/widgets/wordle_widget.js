class Tile{
    constructor(state,data,element){
        this.element = element;
        this.data = data;
        this.state = state;
    }
    render(){
        this.element.textContent = this.data
        switch(this.state){
            case "present":
                this.element.className = "tile present";
                break;
            case "correct":
                this.element.className = "tile correct";
                break;
            case "absent":
                this.element.className = "tile absent";
                break;
            case "filled":
                this.element.className = "tile filled";
                break;
            case "current":
                this.element.className= "tile current";
                break;
            default:
                this.element.className = "tile";
        }
    }
    
    set state(state){
        this._state = state;
        this.render()
    }

    get state(){
        return this._state;
    }
    clear(){
        this.data = ""
        this.state = "empty"
    }
}

const firstcell = document.querySelector("#board .tile");
const cell = new Tile("correct", "Ж", firstcell);


answer = ["Ж","А","Л","К","А"];

function CompareToAnswer(word, answer){
    const compared = []
    word_letters = Array.from(word, word => word.textContent);
    for(let i=0; i<word_letters.length; i++){
        if(word_letters[i] == answer[i]){
            compared.push("correct")
            continue;
        }
        if(answer.includes(word_letters[i])){
            compared.push("present")
            continue;
        }
        compared.push("absent")
    }
    return compared
}

const rows = document.querySelectorAll("#board .board-row");
for(let i=0;i<2;i++){
    const cells = rows[i].querySelectorAll(".tile");
    console.log(CompareToAnswer(cells, answer))
}