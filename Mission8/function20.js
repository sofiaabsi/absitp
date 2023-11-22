document.addEventListener('DOMContentLoaded', function() {
    // Gestion du bouton "Valider"
    document.querySelector('button').addEventListener('click', function() {
        let chaine1 = document.querySelectorAll('input[type="text"]')[0].value;
        let caract = document.querySelectorAll('input[type="text"]')[1].value;

       
        if (chaine1.length === 0) {
            alert("La chaine1 doit contenir au moins un caractère.");
            return;
        }

    
        if (caract.length !== 1) {
            alert("Le caractère doit être unique.");
            return;
        }

     
        let count = [...chaine1].filter(c => c === caract).length;

      
        alert(`Longueur de la chaîne: ${chaine1.length}, En majuscule: ${chaine1.toUpperCase()}, Nombre de fois le caractère '${caract}' est trouvé: ${count}`);
    });

   
});