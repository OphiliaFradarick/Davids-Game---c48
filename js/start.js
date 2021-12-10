class Start {
    constructor(){
        this.button = createImg("images/button.png");
        
        
    }

    handleElements(){
        this.button.position(displayWidth/2-100,displayHeight/2);
        this.button.size(100,100);
    }

    hide(){
        this.button.hide();
    }

    display(){
       
        this.handleElements();

        textSize(120);
        fill("white")
        stroke("black")
        text("Sea Survivor",displayWidth/2-300,displayHeight/2-200);
        textSize(40);
        fill("white")
        stroke("black")
        text("How To Play",displayWidth/2-110,displayHeight/2+210);
        
          
       this.button.mouseClicked(()=>{
           gamestate = "play";
           this.button.hide();
       })
        
     
    }
}