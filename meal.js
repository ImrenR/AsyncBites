let arr = []



fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=") // .then((res)=>console.log(res)) // first check if the data is true or false
  .then((res) => res.json()) // when we changed to json=>we saw the data is an object, therefore we have to change it to Array
  .then((veri) => {
    arr = veri
    showScreen(veri.meals)}); // console.log(veri) check the type of array, add the name(veri.meals) since we are going to use the data we need use function

//! open the function first and call the function with forEach
const showScreen = (data) => {

  data.forEach((a) => {

    document.querySelector(".food").innerHTML += `


<div class="col-sm-6 col-md-4">

<p>${a.strMeal}</p>

<img  width="200px" src=${a.strMealThumb} alt="" />
</div>

`;
  });
};

//! filter by flag
document.querySelectorAll("img").forEach(
  (e) => 
  // since there is more than one flag choose querySelecterAll
  (e.onclick = () => {
    fetch(
      `www.themealdb.com/api/json/v1/1/filter.php?a=${e.id}`
    ).then((response) => response.json())
      .then((veri) => showScreen(veri.meals)); //click one of the flag and check =>  all the time check if they are object or array
  })
);

//! Search by first letter

document.querySelector("input").oninput=(e)=>{   // oninput is helps whatever you write on input

// console.log(e) check what is called to call input = > target
// console.log(arr) // now when you search on input you can see them on console
dizi.meals.filter((a)=>a.strMeal.includes(a.target.value))

} 


