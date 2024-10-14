var pet = {

    name: prompt("Enter Your Pet Name"),
    type: prompt("What Pet You Have"),
     age: +prompt("Enter Your Pet Age"),
     happiness: +prompt("How Your Pet is Happy"),
     hunger: +prompt("How Your Pet is Hunger"),

    feed: function(){
        this.hunger -= 20;

        if(this.hunger < 0){
            this.hunger = 0;
            alert(`${this.name} has feed Hunger is now ${this.hunger}`)
        }
       
       
    },

    play: function(){
        this.happiness += 20;
        if(this.happiness > 100){
            this.happiness = 100;
            alert(`${this.name} is Happy ${this.happiness}`)
        }
    },

    agePet: function(){
        this.age += 1;
        this.happiness -= 5;
        this.hunger += 10;

        if(this.happiness < 0) this.happiness = 0;
        if(this.hunger > 100) this.hunger = 100;

        alert(`${this.name} age is ${this.age} and Happy is ${this.happiness} and Hungry is ${this.hunger}`)
    },

    option: function(){
      

        while(true){
            var select = +prompt(`What would you like to do with ${this.name}? chose an option\n 1.feed \n 2.play \n 3.agePet`)
            

                if(select === 1){
                    this.feed();
                }else if(select === 2){
                    this.play();
                }else if(select === 3){
                    this.agePet();
                }
                else{
                    break;
                }
            }
        }
}



pet.option();