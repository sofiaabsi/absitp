function seconnecter() {
    var login = prompt("Donner votre nom d'utilisateur")
    var mdp = prompt("Donner votre mot de passe")
    if (login == "admin" && mdp == "admin") {
        document.write(`Bienvenue ${login}`);
    }
    else {
        alert("Accès refusé")
    }
}



function seconnecter2 () {
    window.location.href='connexion.html'
}

function connexion() {
    var login = document.getElementById("login").value;
    var mdp = document.getElementById("password").value;

    if (login == "admin" && mdp == "admin") {
        window.location.href='admin.html'
    }
    else {
        window.location.href='default.html'
    }
}


function affichagetab() {
    document.write('<table border=2px width=30%>');
    for(var i = 0; i<=5; i++) {
        document.write('<tr><td>*</td><td>*</td><td>*</td></tr>');
    }
    document.write('</table>');
}
function connexion() {
    var login = document.getElementById("login").value;
    var mdp = document.getElementById("password").value;

    if (login == "admin" && mdp == "admin") {
        window.location.href='admin.html'
    }
    else {
        window.location.href='default.html'
    }
}

function cdc() {
    var chaine = prompt("Donnez un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chaîne contient " + chaine.length + " caractères" + "<br>");
    document.write("La première lettre est " + chaine.substring(0,1) + "<br>");
}

function swich() {
    var color = prompt("Entrez une couleur");
    switch (color) {
        case "rouge":
            document.body.style.background = "red";
            break;
        case "ROUGE":
            document.body.style.background = "red";
            break;
        case "bleu":
            document.body.style.background = "blue";
            break;
        case "BLEU":
            document.body.style.background = "blue";
            break;
        case "rose":
            document.body.style.background = "pink";
            break;
        case "ROSE":
            document.body.style.background = "pink";
            break;
        case "violet":
            document.body.style.background = "purple";
            break;
        case "VIOLET":
            document.body.style.background = "purple";
            break;
    
        default:
            alert("Couleur non définie, choississez entre rouge, bleu, rose ou violet.");
    }
}

function connexion3() {
    var i = 0;
    do {
        var id = prompt("Donner votre nom d'utilisateur");
        var mdp = prompt("Entrez votre mot de passe");

        if (id == "admin" && mdp == "admin") {
            document.write("Bienvenue : " +id);
            break;
        }
        else {
            alert("Accès refusé")
        }
        i +=1;
    } while(i<3);
    if (i==3) {
        alert("Délai dépassé");
    }
}

function bonus() {
    var affich1 = "";
    var somme_tot = 0;
    do {
        var article = prompt("Votre article");
        var prix = prompt("Le prix");
        var quantite = prompt("La quantité");
        var somme = (Number(prix) * Number(quantite));
       
        somme_tot += somme;
        alert("Vos " + article + " coûteront " + somme + " €");
        affich1 += ("Article : " + article + "<br> Prix : " + prix + "€" + "<br> Quantité : " + quantite + "<br> Total : " + somme + " € " + "<br><br><br>");
        alert("Vos articles additionnés coûteront " + somme_tot + " €");
        var suite = prompt("Voulez-vous continuer (OUI/STOP) ?")
    }while(suite == "OUI");
    if (suite == "STOP") {
        document.write(affich1);
        document.write("Prix total : " + somme_tot + " €");

    }

}
