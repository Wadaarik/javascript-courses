/**
 * Création de l'objet
 */
objet1 = {
    nom: 'Aymeric',
    age: '30',
    moyenne: '15'
};
/**
 * Si objet1 est = ou > à 29 alors ok, si objet1 est = ou > à 15 alors autre, sinon pas ok
 */
if (objet1.age >= 29){
    console.log('ok')
}else if(objet1.age >= 15){
    console.log('autre')
}else{
    console.log('pas ok')
}


/**
 * > strictement sup
 * < strinctement inf
 * >= sup ou égal
 * <= inf ou égal
 * == égal à
 * === égal et de même type
 * && ET
 * || OU
 * != Non égal à
 * !== Non identifié comme
  */

/**Switch*/
/**
 *Permet d'éviter le surplus de if else
 */
switch (objet1.age){
    case "30":
        console.log('ok');
        break;
    case "15":
        console.log('pas ok');
        break;
    default:
        console.log('Hello Word');

}


/**
 * Ternaire
    ? = if
    : else
 */

console.log(objet1.age >= 29 ? 'ok' : 'pas ok');
