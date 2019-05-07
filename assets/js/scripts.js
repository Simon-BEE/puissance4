var numJoueur = 1;
var nbColonnes = 5;
var nbLines = 5;
var jeu = true;
var texte = "";
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
    var joueur = 1;
    afficheTextAnnonce("Le jeu commence ! C'est au tour du joueur "+nomDuJoueur(joueur)); //numJoueur
    jeu = true;
    creerTableau();
}

function afficheTextAnnonce(text) {
    document.getElementById('text-annonce').innerHTML = text;
}

function nomDuJoueur(numJoueur){
    if (numJoueur == 1) {
        return "rouge";
    } else {
        return "bleu";
    }
}

function creerTableau(){
    texte = "<table>";
    for (var i = 0; i < nbLines; i++) {
        texte += "<tr>";
        for (var j = 0; j < nbColonnes; j++) {
            texte += "<td onclick='detectClic("+j+")' id="+i+"-"+j+">";
            if (plateau[i][j] == 1) {
                texte += "<div class='joueur1'></div>";
            } else if (plateau[i][j] == 2) {
                texte += "<div class='joueur2'></div>";
            }
            texte += "</td>";
        }
        texte += "</tr>";
    }
    texte += "</table>";
    document.getElementById('puissance4').innerHTML = texte;
}