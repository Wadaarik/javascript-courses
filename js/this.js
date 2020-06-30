//Lorsqu'on appelle this dans une foction, c'est l'objet qui contient this qui sera appelé

var test = {
    val1: 'val1',
    val2: function(){
        console.log(this)
    }
};
test.val2();//affiche le l'objet test

var test2 = {
    val1: 'Bonjour',
    val2: function(){
        console.log(this.val1 + "ok")
    }
};
test.val2();//affichera "Bonjour ok"
