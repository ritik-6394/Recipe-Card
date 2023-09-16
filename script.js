 
const API_KEY = "4ad1788fc7cf4b2b8d2f1a18879443b4";
async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
    const data = await response.json();
    return data;
    // console.log(data['recipe'])

}

// getRecipes();

getRecipes().then(data => {
    $.each(data.recipes, function (key, val) {
        console.log(val)
        $('#recipe-list').append('<li class="recipe-item">\
        <img src="'+ val.image + '" alt="not found">\
        <h2>'+ val.sourceName + '</h2>\
        <p>\
            <strong>Ingredients\
                :</strong>\
            '+ val.title + '\
        </p>\
        <a href="'+ val.sourceUrl + '">View Recipe</a>\
    </li>');
    });
});

// $(document).ready(function () {
getRecipes();
// });
