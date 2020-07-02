//Permet de catcher les erreurs dans le script

var x = {};

try{
    x.MethodeTest();//essaye la méthode
}catch (e) {//par défaut erreur est appelée e
    console.log('erreur' + e);//affiche l'erreur
}

try{
    x.MethodeTest();//essaye la méthode
}catch (e) {//par défaut erreur est appelée e
    console.log('erreur' + e.stack);//affiche l'erreur et sa location
}

try{
    x.MethodeTest();//essaye la méthode
}catch (e) {//par défaut erreur est appelée e
    console.log('erreur' + e.stack);//affiche l'erreur et sa location
}finally {
    console.log('fin du script');//termine le script même si une erreur a été catch
}


/***
 *Permet de créer une exeption
 */

var y = {};

var f = function (nbr) {
    if(nbr > 10){
        throw new Error('Le nombre doit être strictement inférieur à 10')//affiche une erreur concernant le script
    }

};
