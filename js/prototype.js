/**
 * permet d'intéragir avec le prototype d'un objet
 * __proto__
 * par défaut il faut éviter d'utiliser __proto__
 *
 * on utilise plus généralement la methode Object.
 */

//EXEMPLE

const prototype1 = {};
const object1 = Object.create(prototype1);//pour créer un prototype1 dans la constante objet1

console.log(Object.getPrototypeOf(object1) === prototype1); //pour obtenir le prototype d'un objet
// expected output: true

/****************************************/
//EXEMPLE 2



var eleves = function (nom, notes) {//function eleves de param nom et notes
    if (notes != undefined){//si notes est défini
        this.note = notes;//alors return la variable note prend la val du param notes
    }
    this.nom = nom;//return la var nom qui prend le param nom
};


eleves.prototype.moy = function () {//ajoute une méthode appellé moy sur le prototype de la function eleves
    if (notes === undefined){//si le param notes est considéré comme undefined, affiche NaN
        return  NaN;
    }
    var somme = 0;//par défaut somme = 0
    for (var i = 0; i < this.note.length; i++) {//i = 0, tant que i < la taille de note, i++
      somme += this.note[i]// additionne somme avec note ayant pour valeur i
    }
    return somme / this.note.length//return somme divisée par la valeur de note
};

var eleve1 = new eleves('Aymeric', [18, 12]);//créer un nouvel objet pour la function eleves
var eleve2 = new eleves('Lilian', );//créer un nouvel objet pour la function eleves sans param notes
