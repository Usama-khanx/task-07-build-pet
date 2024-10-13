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

        alert(`${this.name} age is ${this.age} and Happy is ${this.happiness} and Hungry is ${this.hunger}`)
    }
}

console.log("Hello")
pet.feed();
pet.play();
pet.agePet();