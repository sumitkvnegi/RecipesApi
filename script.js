const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");
const mealDetailsContent = document.querySelector(".meal-details-content");
const recipeCloseBtn = document.getElementById("recipe-close-btn");

searchBtn.addEventListener("click",getMealList);
mealList.addEventListener('click', getMealRecipe);

function getMealList(){
    let searchInputText = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`).then(response => response.json()).then(data => {
        let html = "";
        if(data.meals){
            console.log(data);
            data.meals.forEach(meal => {
                html +=`
                <div class="meal-item" data-id = "${meal.idMeal}">
                    <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="food">
                    </div>
                    <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href="#" class="recipe-btn">Get Receipe</a>
                    </div>
                </div>
            `;
            });
            mealList.classList.remove('notFound');
        } else{
            html = "Sorry, we didn't find any meal!"
            mealList.classList.add('notFound');
        }

        mealList.innerHTML = html;
    })
}

function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        
    }
}