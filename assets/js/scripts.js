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
    var numJoueur = 1;
    afficheTextAnnonce("Le jeu commence ! C'est au tour du joueur "+nomDuJoueur(numJoueur)); //numJoueur
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
            texte += "<td onclick='detectClic("+j+")' id='"+i+"-"+j+"'>";
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

function detectClic(j){
    if (verifPosition(j) && jeu) {
        var ligneEnCours = poseJeton(j); //numero ligne en cours
        var verifEnd = puissance4(ligneEnCours, j, 0, 0);
        if (verifEnd) {
            jeu = false;
            afficheTextAnnonce("Le joueur "+nomDuJoueur(numJoueur)+" a gagné la partie !");
        } else {
            if (numJoueur == 1) {
                numJoueur = 2;
            } else {
                numJoueur = 1;
            }
        afficheTextAnnonce("C'est au tour du joueur "+nomDuJoueur(numJoueur));
        }
    }
}

function verifPosition(j){ //si case en haut de la colonne est vide on retourne vrai sinon faux
    if (plateau[0][j] == 0) {
        return true;
    } else {
        return false;
    } 
}

function poseJeton(j){
    for (var i = (nbLines-1); i >= 0; i--){
        if (plateau[i][j] == 0) {
            plateau[i][j] = numJoueur;
            refreshTab(i, j, numJoueur);
            return i;
        }        
    }
}

function refreshTab(x, y, i){
    document.getElementById(x+'-'+y).innerHTML = "<div class='joueur'>"+i+"</div>";
}

function puissance4(ligne, colonne, l, c){
    console.log('valeur : '+ligne+' '+colonne+' / incremente '+l+' '+c);
    return false;
}