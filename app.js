// Ecouter le clic sur chacune des cases
document.querySelectorAll('.cell').forEach(function (cell) {
    cell.addEventListener('click', handleClick);
});

// Fonction où on va ranger la logique du clic sur une case
function handleClick(event) {
    let cell = event.target; // Récupère la case cliquée
    let index = cell.dataset.cell; // Récupère la valeur du data-cell=

    console.log(index);
}
