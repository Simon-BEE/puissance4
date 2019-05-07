var numJoueur = 1;
var nbColonnes = 5;
var nbLines = 5;
var jeu = true;
var text = "";
var plateau = [];

for (var i = 0; i < nbLines; i++) {
    plateau[i] = [];
}

newGame();

function newGame(){
    for (var i = 0; i < nbLines; i++) {
        for (var j = 0; j < nbColonnes; j++) {
            plateau[i][j] = 0;
        }
    }
    numJoueur = 1;
    afficheTextAnnonce("Le jeu commence ! C'est au tour du joueur "+nomJoueur(numJoueur));
    jeu = true;
}