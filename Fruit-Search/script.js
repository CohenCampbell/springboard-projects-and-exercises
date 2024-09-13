const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
let iS = 0;


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 
'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 
'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 
'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 
'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 
'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 
'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 
'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 
'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 
'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function searchHandler() {
let inputStr = input.value;
let results = [];

for(let fruits of fruit){
	if(fruits.toLowerCase().includes(inputStr.toLowerCase())){
		if(results.length < 5){
			results.push(fruits)
		}
		
	}
}

showSuggestions(results, inputStr);
}

function showSuggestions(results, inputStr) {
	for(iS; iS > 0; iS--){
		suggestions.removeChild(document.getElementById(iS));
	}
	
	

	for(let fruits of results){
		iS++;
		let newSuggestion = document.createElement("li");
		newSuggestion.innerText = fruits;
		newSuggestion.id = iS;
		suggestions.appendChild(newSuggestion);
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText;

	for(iS; iS > 0; iS--){
		suggestions.removeChild(document.getElementById(iS));
	}
}

input.addEventListener('input', searchHandler);
suggestions.addEventListener('click', useSuggestion);
