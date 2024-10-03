let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEL = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

function random_num() {
    let fightOne = Math.floor( Math.random() * fighters.length );
    let fightTwo = Math.floor( Math.random() * fighters.length );

    stageEL.textContent = fighters[fightOne] + " Vs " + fighters[fightTwo]
}