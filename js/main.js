const icons = [
	{
	  name: 'apple-alt',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'ice-cream',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'fish',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'lemon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'hamburger',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'pizza-slice',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'beer',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-whiskey',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'wine-bottle',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'cocktail',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'coffee',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-martini',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'dragon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'kiwi-bird',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'frog',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'hippo',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'otter',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'horse',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
  ];

// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

var iconsContainer = document.getElementById("container");

const printIcons = () => icons.forEach(element => {
    //destrutturazione
    let {name, family, prefix} = element;

    iconsContainer.innerHTML += `<div class="card">
    <div class="icon"><i class="${family} ${prefix}${name}"></i></div>
    <p class="icon-name">${name}</p>
    </div>`
});

// Milestone 2
// Coloriamo le icone per tipo

//per colorare le icone è preferibile clonare l'array di oggetti originale aggiungendo, per ogni oggetto, una proprietà "colore" il cui valore viene attribuito leggendo un secondo oggetto che ha come chiavi il valore delle categorie di icons. Nella stampa il colore va aggiunto con style.

//creo un oggetto che contenga i colori associati alle categorie
var colors = {
    "food" : "#D15006",
    "beverage" : "#0696D1",
    "animal": "#049714"
}

//creo una copia dell'array icons al quale aggiungo la proprietà colore
const coloredIcons = icons.map((element) => {
    return {...element, "color": colors[element.category]}
});

//stampo gli elementi con il colore corrispondente
const printColoredIcons = () => coloredIcons.forEach(element => {
    //destrutturazione
    let {name, family, prefix, color} = element;

    iconsContainer.innerHTML += `<div class="card">
    <div class="icon" style="color:${color}"><i class="${family} ${prefix}${name}"></i></div>
    <p class="icon-name">${name}</p>
</div>`
});

printColoredIcons();

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

//per compilare dinamicamente la select devo creare un array che contenga le categorie dell'array di oggetti icons. Con forEach attraverso l'array icons e, se la categoria non è presente nell'array delle categorie, la aggiungo. Infine, compilo la select con un altro ciclo forEach che attraversa l'array di categorie.

let iconCategories = [];

icons.forEach(element => {
    if(!iconCategories.includes(element.category)){
        iconCategories.push(element.category);
    }
});

let select = document.getElementById("filter");

iconCategories.forEach(element => {
    select.innerHTML += `<option value="${element}">${element}</option>`
});

//per stampare in pagina solo le categorie richieste devo associare un evento change alla select e, con un filter che controlli il value della select, stampare solo la categoria selezionata. Devo svuotare l'innerHTML del container ad ogni change per evitare le stampe si accumulino. Infine, per la select All, devo aggiungere una condizione OR all'if che stampa la categoria selezionata.

select.addEventListener("change", 
    function() {
        //svuoto il contenitore
        iconsContainer.innerHTML = "";

        //stampo le icone che possiedono la categoria selezionata
        coloredIcons.forEach(element => {
            if(element.category == select.value || select.value == "all") {
                let {name, family, prefix, color} = element;

                iconsContainer.innerHTML += `<div class="card">
                <div class="icon" style="color:${color}"><i class="${family} ${prefix}${name}"></i></div>
                 <p class="icon-name">${name}</p>
                </div>`
            }
        })
    }
);