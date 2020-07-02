console.log('is Working');

console.log(window);//affiche l'objet window et ses propriétés

var a = "Test";//déclarée globalement, donc propriété de window
//window.a -> Test

(function () {
    var b = "Test 2";//b n'est pas global
})();//création d'une fonction qui s'auto execute
//window.b -> undefined

/************************/
(function () {
    window.alert('Hello Word');//affiche une pop-up
})();
// ATTENTION bloque l'execution scipt


/************************/
(function () {
    var test = window.prompt('Remplissez le champs');//affiche une pop-up avec un input text
    console.log(test)
})();
//

/************************/
(function () {
    var test2 = window.confirm('Acceptez le champs');//affiche une pop-up avec une checkbox, si elle est coché, affiche true
    console.log(test2)
})();
//

/************************/
(function () {
    var nbr = Math.round(Math.random() * 10);//random un chiffre entre 0 et 10 rond
    var test3 = window.prompt('Quel chiffre ?');//affiche une pop-up avec une checkbox, si elle est coché, affiche true
    test3 = parseInt(test3, 10); // Vérifie que la chaine est bien un chifrre en base 10
    var essais = 3;

    while (test3 != nbr && essais > 0) {//tant que test3 est different de nbr et que le nombre d'essais est < 0
        essais--;
        if (test3 > nbr){
            window.alert('le chiffre est moins important');
        } else{
            window.alert('le chiffre est plus important');
        }
        if (essais === 0){
            alert('perdu');
        }
        if (essais > 0){
            test3 = prompt('Retente ta chance');
        }

    }
    if (test3 === nbr){
        alert('Tu as trouvé, le chiffre était' + nbr);//autre manière d'écrire un window.alert
    }

    

})();
//

/************************/
(function () {
    var tes4 = function () {
        console.log('test 4')
    };
    window.setInterval(tes4, 1000)//bloque le script pendant x secondes
})();
//

(function () {
    var i = 0;
    window.setInterval(function () {
            i++;
            console.log(i)
    }, 1000);//pendant x seconds, i prend plus 1 et affiche i
    console.log('Test 4')

})();
//
