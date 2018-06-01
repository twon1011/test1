class Character {
    constructor(age,name,traits){
        this.age = age;
        this.name = name;
        this.trait = traits;
        this.render(); 
    }



}


class Spongebob extends Character {
    constructor(age,name,traits) {
        super();
        this.age = 24;
        this.name = "SpongeBob SquarePants";
        this.trait = "Hard worker";
        this.imagePath = "http://www.stickpng.com/assets/images/58bf1d11e443f41d77c734a5.png";
        this.render();

    }
}

class Sandy extends Character {
    constructor(age,name,traits) {
        super();
        this.age = 28;
        this.name = "Sandy Cheeks";
        this.trait = "Extremely Smart";
        this.imagePath = "https://vignette.wikia.nocookie.net/cartoons/images/1/1c/Sandy_Cheeks_w-suit.png/revision/latest?cb=20081223021521";
        this.render();
    }    
}  

class Patrick extends Character {
    constructor(age,name,traits) {
        super();
        this.age = 23;
        this.name = "Patrick Starr";
        this.trait = "No common sense but very loyal";
        this.imagePath = "https://vignette.wikia.nocookie.net/central/images/4/40/SURPRISED_PATRICK_Transparent.png/revision/latest?cb=20170205012438";
        this.render();
    }    
}

class Plankton extends Character {
    constructor(age,name,traits) {
        super();
        this.age = 48 ;
        this.name = "Sheldon J.Plankton";
        this.trait = "Very smart but does not think his plans all the way through";
        this.imagePath = "https://vignette.wikia.nocookie.net/spongebob/images/8/85/Plankton_1.png/revision/latest?cb=20150227140830";
        this.render();
    }    

} 

class Larry extends Character {
    constructor(age,name,traits) {
        super();
        this.age =34;
        this.name = name;
        this.trait = traits;
        this.imagePath = "https://vignette.wikia.nocookie.net/nicktoons-united/images/8/84/Larry_Lobster.png/revision/latest?cb=20130624125006";
        this.render();
    
    }    

}
 





let sqbtn = document.getElementById("button");
sqbtn.addEventListener( insertSquare);



function insertSquare() {
    alert("clicked!");

}


