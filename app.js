// Variables nécessaires pour le jeu
let gameState = ['', '', '', '', '', '', '', '', ''];
// Ecouter le clic sur chacune des cases
document.querySelectorAll('.cell').forEach(function (cell) {
    cell.addEventListener('click', handleClick);
});

// Fonction où on va ranger la logique du clic sur une case
function handleClick(event) {
    let cell = event.target; // Récupère la case cliquée
    let index = cell.dataset.cell; // Récupère la valeur du data-cell=

    // Vérifier si la case n'est pas vide
    if (gameState[index] != '') {
        return; // On stoppe le code et rien ne se passe si la case est remplie
    }

    // On remplit le tableau pour suivre l'état du jeu
    gameState[index] = 'X';
    // On mets à jour "l'interface" du jeu
    cell.innerHTML = 'X';
}
