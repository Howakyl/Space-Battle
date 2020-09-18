//make a ship class
//make a player ship class extension, and alien extension
// make a method for the ships to attack eachother (loop?)
// make a battle sequence for player and one ship


//Parent SHIP class
class Ship {
    constructor (hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

}

//player ship class
class UssAssembly extends Ship{
    constructor(name) {
        super(20,5,.7);
        this.name = name;
    }

//function that compares Ship accuracy value against accuracyNum variable, to decide if a hit will land
    humanFire (target) {
        let accuracyNum = Math.random().toFixed(1);
        if (this.accuracy >= accuracyNum) {
            console.log(`${this.name} fires for ${this.firepower} damage!`);
            return target.hull -= this.firepower;
        } else if (this.accuracy < accuracyNum) {
            console.log(`The ${this.name} missed! ${target.name} readies their shot...`)
        }
    }
}

//alien ship class  MAKE SURE RANDOM DOESNT RESET EACH ATTACK
class AlienShip extends Ship {
    constructor (name) {
        super(Math.floor(Math.random() * (7-3)) + 3, Math.floor(Math.random() * (5-2)) + 2, Math.random().toFixed(1) * (.8-.6)+.6);
        this.name = name;
    }

//function that compares Alien Ship accuracy value against accuracyNum variable, to decide if a hit will land
    alienFire (target) {
        let accuracyNum = Math.random().toFixed(1);
        if (this.accuracy >= accuracyNum ) {
            console.log(`${this.name} fires for ${this.firepower} damage!`);
            return target.hull -= this.firepower;
        } else if (this.accuracy < accuracyNum) {
            console.log(`The ${this.name} missed! ${target.name} readies their shot...`)
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

//attacking

//FUNCTION that makes the human and alien ship objects attack eachother. It continues until either the human is destroyed, or all aliens are destroyed.
function battleSequence () {
    for (let i = 0; i < alienSquadron.length; i++) {
let userChoice = prompt('Continue...?', 'yes');
if(userChoice.toLowerCase() === 'yes') {
} else if (userChoice.toLowerCase() === 'no' || userChoice === null || alienSquadron[5].hull <= 0) {
    alert('You live to fight another day!')
    break;
};
        if (playerShip[0].hull <= 0) {
            console.log(`${playerShip[0].name} has been destroyed...Earth's last hope has been defeated!!!`);
            break;
        }

        while(alienSquadron[i].hull > 0) {
            console.log(`${playerShip[0].name} has ${playerShip[0].hull} hitpoints remaining, and ${alienSquadron[i].name} has ${alienSquadron[i].hull} hitpoints remaining.`)
            playerShip[0].humanFire(alienSquadron[i]);
            if(alienSquadron[i].hull > 0) {
                alienSquadron[i].alienFire(playerShip[0]);
                playerShip[0].humanFire(alienSquadron[i]);
            }
        }   

        if (alienSquadron[i].hull <= 0) {
            console.log(`${alienSquadron[i].name} has been destroyed! KABOOM!!!`);
        } 
        if (alienSquadron[5].hull <=0) {
            console.log('All ships have been defeated! Earth is saved!');
            break;
        } 
    }
}
battleSequence();
console.log(playerShip[0])

