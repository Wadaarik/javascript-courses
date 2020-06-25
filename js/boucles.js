i = 0;

/***Boucle Tant que*/
/**
 * Tant que i est inférieur à 11 i prend +1
 */
while (i < 11 ){
    console.log(i);
    i++;
}

/**
 * Tant que j est inférieur à 11 j prend +1
 */
for (j = 0; j < 11; j++){
    console.log(j)
}


/**
 * Tant que k est inférieur à 3 k prend +1
 * et va chercher les 3 premières unités du tableau
 */
tableau = ['val1', 'val2', 'val3'];

for (k = 0; i < 3; i++){
    console.log(tableau[1])//le tableau commence à 1
}

/**
 * Tant que l est inférieur à 3 l prend +1
 * et va chercher les toutes les unités du tableau grâve au .length
 */
tableau = ['val1', 'val2', 'val3'];

for (l = 0; i < tableau.length; i++){
    console.log(tableau[1])//le tableau commence à 1
}

/**
 * m = la taille du tableau -1
 * tant que m est positif, continue la boucle
 * par de val3 puis val2 puis val1
 */
tableau = ['val1', 'val2', 'val3'];

for (m = tableau.length - 1; i >= 0; i--){
    console.log(tableau[1])//le tableau commence à 1
}

/**
 *o = 91
 *n = 2
 *tant que n<o n++, si o modulo n === 0 alors renvoyer true
 */
o = 91;

for (n = 2; n < o; n++){
    if (o % n === 0){
        console.log('true');
    }
}


/**
 * tableau à multiple objets
 * p = 0
 * tant que p < taille du tableau p+1
 * si moy < 10 alors afficher tableau.nom
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

for (p = 0; p < tableau.length; p++){
    tab = tableau[p];
    if (tab.moy < 10){
        console.log(tableau.nom)
    }
}

