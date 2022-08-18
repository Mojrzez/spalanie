function roadCost() {
    let distance = document.querySelector('#distance').value;
    let combustion = document.querySelector('#combustion').value;
    let price = document.querySelector('#price').value;


    let combustionPerKm = combustion / 100;

    let combustionPerDistance = combustionPerKm * distance;
    let finalPrice = combustionPerDistance * price;

    if (distance == "" || combustion == "" || price == "") {
        document.querySelector('.result').innerHTML = `Wprowadź wartości`;
    } else {
        document.querySelector('.result').innerHTML = `Koszt przejechania ${distance}km wynosi ${finalPrice.toFixed(2)}zł`;
    }




}