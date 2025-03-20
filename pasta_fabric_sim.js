// Pasta Fabric Simulator
// Meatball Monsters make pasta!

class MeatballMonster {
    constructor(name) {
        this.name = name;
        this.energy = 100;
    }
    
    work() {
        if (this.energy > 0) {
            this.energy -= 10;
            return `${this.name} made some pasta!`;
        } else {
            return `${this.name} is too tired to work!`;
        }
    }
    
    rest() {
        this.energy = 100;
        return `${this.name} took a nap and is ready to work!`;
    }
}

const monsters = [
    new MeatballMonster("Meaty"),
    new MeatballMonster("Saucy"),
    new MeatballMonster("Spaghetter")
];

function producePasta() {
    const output = document.getElementById("output");
    let messages = monsters.map(monster => monster.work());
    output.innerHTML = messages.join("<br>");
}

function restMonsters() {
    const output = document.getElementById("output");
    let messages = monsters.map(monster => monster.rest());
    output.innerHTML = messages.join("<br>");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("produce").addEventListener("click", producePasta);
    document.getElementById("rest").addEventListener("click", restMonsters);
});
