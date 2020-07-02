/**
 *la fonction prend en paramètre la variable i
 * on reprend la boucle précédente
 * on remplace le console.log par return pour ce boolean
 *
 */
nbr = 91;

function nombrePremier(nbr) {
    for (n = 2; n < o; n++){
        if (o % n === 0){
           return false;
        }
    }return true;
}

/**
 * les fonctions peuvent prendre plusieurs param
 * ici, si on ne passe pas 2 param, il ne pourra pas associer la valeur aux 2 var
 */
function multiples(i, j) {
    return i * j;
}

/**
 *on crée une valeur par défaut pour la variable b afin déviter le return NaN
 */
function multiples(i, j) {
    if (b === undefined){
        b = 1;
    }
    return i * j;
}


/**
 *Avec un ou plusieurs tableaux
 */
tableau = [{
    nom : 'val1',
    moy : 15,
}, {
    nom : 'val2',
    moy : 7,
}, {
    nom : 'val3',
    moy : 4,
}];


function moyenne(tableau) {
    for (i = 0; i < tableau.length; i++){//tant que i < à la taille du tableau, i++
        tab = tableau[i];//le tableau prend la valeur de i
        if (tab.moy >= 10){
            return tableau.nom//si la moyenne >= à 10 alors afficher la var nom
        }
    }
}


/**
 *Une var peut stocker plusieurs méthodes et appeler différentes fonctions
 */
var test = {
    crier : function () {
        console.log("CRIER");
    },
    manger : function () {
        console.log("MANGER");
    }
};

/**
 *ATTENTION :
 * var x = 1 different de x = 1 dans une fonction
 *
 * lorsqu'une var est déclarée dans une fonction sans le "var" en préfix, la variable est déclarée globalement et non juste dans la fonction
 *
 */

// var y = function () {
//     var x = ('Hello word');
//     console.log(x);
// };
//undifined car la variable est contenue


// var x = ('Hello word');
// var y = function () {
//
//     console.log(x);
// };
// //Affiche le contenu de la var

var x = ('Hello word');
var y = function () {
   x = 1;//contenu de la var modifié
    console.log(x);
};
//Attention, ici la var change
