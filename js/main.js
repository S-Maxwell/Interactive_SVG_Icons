console.log('JavaScript is running!');

const ingredients = document.querySelectorAll("#ingredients img");
console.log(ingredients);

function logId() {
    console.log(this.id);
}

//short-hand
ingredients.forEach(ingredients => ingredients.addEventListener("click", logId));

//long-hand
ingredients.forEach(function(ingredients){
    ingredients.addEventListener("click", logId);
})