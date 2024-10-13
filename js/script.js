var pet = {
    name: "mini",
    type: "cat",
    age: 2,
    happiness: 77,
    hunger: 56,


    feed: function(){
        this.hunger -= 20;

        if(this.hunger < 0){
            this.hunger = 0;
        }
        else{
            alert(`${this.name} has feed Hunger is now ${this.hunger}`)
        }
    },

    play: function(){
        this.happiness += 20;
    },

    agePet: function(){
        this.age += 1;
    }
}