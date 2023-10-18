function calcul_moyenne(){
    var n1= prompt("Donner la première note: ");
    var n2= prompt("Donner la deuxième note");
    var n3= prompt("Donner la troisième note: ");

    var somme = Number(n1)+Number(n2)+Number(n3);

    document.write ("Voici la somme: "+somme+ "<br>");
    var moyenne= somme/3;

    document.write("Voici la moyenne: "+moyenne+"<br>"); 
    if (moyenne<10)
    document.write("Vous êtes redoublant");
    else
    document.write("Vous êtes Admis");}

function test_age(){
    let age = prompt('Quelle est votre age ?')
    if(age < 18){
        document.write("Vous etes mineur")
        document.bgColor="red"
    }
    else{
        document.write("Vous etes majeur")
        document.bgColor="green"
    }
}

function simple_affichage(){
    let name = prompt('Donner votre Prénom')
    let familyName = prompt('Donner votre Nom')

    document.write('<div style="margin:auto; width:300px; border:2px solid blue; ">')
    document.write(`Bonjour ${name} ${familyName}`)
    document.write('</div>')
}

function test_couleur(){
    let c = prompt("Donner une couleur")
    if(c == "rouge" || c == "ROUGE" || c == "R"){
        document.body.style.background = "red"
    }
    else if (c == "bleu" || c == "Bleu" || c == "B"){
        document.body.style.background = "blue"
    }
    else{
        document.write("Couleur non comprise")
    }
}

function permute(){
    var v3 = "";
    a = document.getElementById.t1.value;
    b = document.getElementById.t2.value;
    V3 = a;
    a = b;
    b = v3;

    t1.value = a;
    t2.value = b;
}

function addition(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)+Number(b);

    t3.value = c;
}

function multiplication(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)*Number(b);

    t3.value = c;
}

function division(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)/Number(b);

    t3.value = c;
}

function soustraction(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)-Number(b);

    t3.value = c;
}

function permute(){
    var v3 = "";
    a = document.getElementById("t1").value;
    b = document.getElementById("t2").value;
    v3 = a;
    a = b;
    b = v3;

    t1.value = a;
    t2.value = b;
}

function parite(){
    var v;
    v = Number(document.getElementById("t3").value);
    if (v%2==0)
    t4.value = ("Pair")
    else
    t4.value = ("Impair")
}

function affichagetab(){
    document.write('<table border=2px width=30%');
    for(let i = 0 ; i <= 5; i++){
        document.write('<tr><td>*</td><td>*</td><td>*</td></tr>');
    }
    document.write('</table>');
}

function affichagetab2(){
    var count = prompt("Combien de lignes souhaitez vous ?");
    console.log(count)
    document.write('<table border=2px width=30%');
    for(let i = 1 ; i <= count; i++){
        document.write(`<tr><td>${i}</td><td>*</td><td>*</td></tr>`);
    }
    document.write('</table>');

}

function seconnecter(){
    var login = prompt("Donner votre nom d'utilisateur")
    var password = prompt("Entrer votre mot de passe")
    if( login == "admin" && password == "admin"){
        document.write(`Bienvenue :     ${login}`)
    }
    else{
        alert("Accès refusé")
    }
}

function seconnecter2(){
    var i = 0;
    do {
    var id = prompt("Donner votre nom d'utilisateur");
    var mdp = prompt("Entrez votre mot de passe");
    if (id == "admin" && mdp == "admin")
    {
        document.write("Bienvenue :    "+id);
        break;
    }
    else
    alert("Accès refusé");
    i+=1;
    } while (i<3);
    if (i==3)
    alert("Délai dépassé");
}
function cdc() {
    var chaine = prompt("Donnez un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("la chaine contient    " + chaine.length+"    caractères    " + "<br>");
    document.write("la première lettre est   " + chaine.substr(0,1)+ "<br>");
}

function swich() {
    var color = prompt ("Entrez une couleur");
    switch(color)
    {
        case "rouge" : document.body.style.background = "red";
        break;
        case "ROUGE" : document.body.style.background = "red";
        break;
        case "bleu" : document.body.style.background = "blue";
        break;
        case "BLEU" : document.body.style.background = "blue";
        break;
        case "vert" : document.body.style.background = "green";
        break;
        case "VERT" : document.body.style.background = "green";
        break;
        default:alert("couleur non définie");
    }
}

function bonus(){

    var totalf = 0
    var total = ""
    var c = ""
    do{
        var article = prompt("Votre article")
        var price = prompt("Le prix")
        var quantity = prompt("La quantité")

        alert(`Vos ${article} couterons ${price * quantity} €`)
        total = Number(price)*Number(quantity) 
        totalf += total 
        c += ("Article : " +article+" <br> PRIX : "+price +"€"+ " <br> Quantité : "+quantity+ " <br> Total : "+total+"€"+"<br><br><br>")
        alert('Vos articles additionnés courterons ' + totalf + "€")

        next = prompt("Voulez vous continuer (OUI/STOP) ?")
    }
    while(next != "STOP");
    document.write(c);
    document.write(" TOTAL FINAL : "+totalf+"€");


}

