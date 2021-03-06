//make a ship class
//make a player ship class extension, and alien extension
// make a method for the ships to attack eachother (loop?)
// make a battle sequence for player and one ship


///////////////////////////////////////////
//                 SPACE                 //
//                BATTLE                 //
///////////////////////////////////////////

const yesButton = document.querySelector('.yesButton');
const noButton = document.querySelector('.noButton');


//Parent SHIP class
class Ship {
    constructor (hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

}

//player ship class (I lowered the accuracy of the player ship down to .5 to give the Aliens an actual chance at winning.)
class UssAssembly extends Ship{
    constructor(name) {
        super(20,5,.5);
        this.name = name;
    }

//function that compares Ship accuracy value against Math.random, to decide if a hit will land
    humanFire (target) {
        if (this.accuracy >= Math.random().toFixed(1)) {
            console.log(`%c ${this.name} fires for ${this.firepower} damage! ${target.name} has ${target.hull} hull remaining.` , 'font-size: 20px; color: green;');
            return target.hull -= this.firepower;
        } else if (this.accuracy < Math.random().toFixed(1)) {
            console.log(`%c The ${this.name} missed! ${target.name} readies their shot...` , 'font-size: 20px; color: yellow;')
        }
    }
}

//alien ship class  MAKE SURE RANDOM DOESNT RESET EACH ATTACK
class AlienShip extends Ship {
    constructor (name) {
        super(Math.floor(Math.random() * (7-3)) + 3, Math.floor(Math.random() * (5-2)) + 2, Math.random().toFixed(1) * (.8-.6)+.6);
        this.name = name;
    }

//function that compares Alien Ship accuracy value against Math.random, to decide if a hit will land
    alienFire (target) {
        if (this.accuracy >= Math.random().toFixed(1)) {
            console.log(`%c ${this.name} fires for ${this.firepower} damage!` , 'font-size: 20px; color: red;');
            return target.hull -= this.firepower;
        } else if (this.accuracy < Math.random().toFixed(1)) {
            console.log(`%c The ${this.name} missed! ${target.name} readies their shot...` , 'font-size: 20px; color: orange;')
        }
    }
}

//ARRAYS HOLDING PLAYER AND ALIEN INSTANCES
let playerShip = [
    new UssAssembly('USS Assembly')
]

let alienSquadron = [
    new AlienShip('Alien Ship Alpha'),
    new AlienShip('Alien Ship Beta'),
    new AlienShip('Alien Ship Charlie'),
    new AlienShip('Alien Ship Delta'),
    new AlienShip('Alien Ship Echo'),
    new AlienShip('Alien Ship Foxtrot'),
];


console.log(playerShip[0])

//FUNCTION that makes the human and alien ship objects attack eachother. It continues until either the human is destroyed, or all aliens are destroyed.
//click OK or hit return to continue. Inputting 'no' or cancelling the prompt will end the game.
function battleSequence () {
    for (let i = 0; i < alienSquadron.length; i++) {
        let userChoice = prompt('Continue...?', 'yes');
        if(userChoice === 'yes') {
        } else if (userChoice === 'no' || userChoice === null || alienSquadron[5].hull <= 0) {     //Hit yes to start the game! 
            alert('You live to fight another day!')
            break;
};
        if (playerShip[0].hull <= 0) {
            console.log(`%c ${playerShip[0].name} has been destroyed...Earth's last hope has been defeated!!!`, 'font-size: 40px; color: red;');
            break;
        }

        while(alienSquadron[i].hull > 0) {
            console.log(`%c ${playerShip[0].name} has ${playerShip[0].hull} hull remaining, and ${alienSquadron[i].name} has ${alienSquadron[i].hull} hull remaining.` , 'font-style: italic;')
            playerShip[0].humanFire(alienSquadron[i]);
            if(alienSquadron[i].hull > 0) {
                alienSquadron[i].alienFire(playerShip[0]);
                playerShip[0].humanFire(alienSquadron[i]);
            }
        }   

        if (alienSquadron[i].hull <= 0) {
            console.log(`%c ${alienSquadron[i].name} has been destroyed! KABOOM!!!` , 'font-size: 25px; color: limegreen;');
        } 
        if (alienSquadron[5].hull <=0) {
            console.log('%c All ships have been defeated! Earth is saved!' , 'font-size: 40px; color: limegreen;');
            break;
        } 
    }
}
document.querySelector('.yesButton').onclick = battleSequence();  // I couldn't seem to get the function to start only when the 'yes' button was clicked. Any tips on how to get it to work would  be appreciated!!
console.log(playerShip[0])
