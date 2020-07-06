console.log('dom.js Connected');

document.getElementById('test');//cherche un élément de la page par son id
document.getElementsByClassName('paragraphe');//cherche un élément de la page par sa classe
document.getElementsByTagName('p');//cherche un élément de la page par sa balise
document.getElementsByTagName('p')[0];//cherche le premier élément p
document.querySelector("#test p");//cherche l'élément p dans la balise d'id test
document.querySelectorAll("p");//cherche tous les p

document.querySelector('.paragraph').className = ".newclass";//donne une nouvelle class à un élément
p.classList.remove(".newclass");//supprime la class newclass de la balise p
