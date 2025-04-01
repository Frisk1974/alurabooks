let player = {
    name: "Hero",
    health: 100,
    experience: 0,
    level: 1
};

let enemies = [
    { name: "Goblin", health: 30, damage: 10 },
    { name: "Orc", health: 50, damage: 15 },
    { name: "Dragon", health: 100, damage: 25 }
];

function updateStatus() {
    const playerStatus = document.getElementById("player-status");
    playerStatus.innerText = `Nome: ${player.name} | Vida: ${player.health} | Nível: ${player.level} | Experiência: ${player.experience}`;
}

function log(message) {
    const logDiv = document.getElementById("log");
    logDiv.innerHTML += `<p>${message}</p>`;
    logDiv.scrollTop = logDiv.scrollHeight; // Scroll para o final
}

document.getElementById("explore").addEventListener("click", function() {
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    log(`Você encontrou um ${enemy.name}!`);
    log(`Vida do ${enemy.name}: ${enemy.health}`);
    
    document.getElementById("attack").onclick = function() {
        while (enemy.health > 0 && player.health > 0) {
            // Ataque do jogador
            enemy.health -= 20;
            log(`Você atacou o ${enemy.name} e causou 20 de dano!`);
            if (enemy.health <= 0) {
                log(`Você derrotou o ${enemy.name}!`);
                player.experience += 10;
                break;
            }
            // Ataque do inimigo
            player.health -= enemy.damage;
            log(`${enemy.name} atacou você e causou ${enemy.damage} de dano!`);
            if (player.health <= 0) {
                log(`Você foi derrotado!`);
                break;
            }
        }
        updateStatus();
    };
});

updateStatus();