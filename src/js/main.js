//Övning 1, gissa talet :)
const theNumber = 4;
let numberInput = document.getElementById("num");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", checkNumber);

/* lite coola ? operators
function checkNumber(){
   parseInt(numberInput) === theNumber ? console.log("Jaaa du hade rätt!") : console.log("Nejjj du hade fel!!");
}
*/

    const exer1Container = document.getElementById("exer1");
    const para = document.createElement("p");
    exer1Container.appendChild(para);
function checkNumber(){

    if(parseInt(numberInput.value) !== theNumber){
        para.innerHTML="";
        para.innerHTML = "nej du hade fel! försök igen";
        numberInput.value = "";
    }else if(parseInt(numberInput.value) === theNumber){
        para.innerHTML="";
        para.innerHTML = "yay du är bäst!!!";
        numberInput.value = "";
    }
}

//Övning 2, loopa en lista och klick!

const exer2 = document.getElementById("exer2");
const theList = ["Croatia", "Peru" , "Brazil", "Japan"];


for (let i=0; i < theList.length;i++){
    const newButton = document.createElement("button");
    exer2.appendChild(newButton);
    newButton.innerHTML = theList[i];
    newButton.addEventListener("click",()=> {clickFunction(theList[i])});
    
}   
const newP = document.createElement("p");
exer2.appendChild(newP);

function clickFunction (theChoice){
    newP.innerHTML ="";
    newP.innerHTML = "Du älskar "+ theChoice;
}

//Övning 3, hämta och presentera från API :)
//https://medieinstitutet-wie-products.azurewebsites.net/api/products

const exer3 = document.getElementById("exer3");
const newerButton = document.createElement("button");
exer3.appendChild(newerButton);
newerButton.addEventListener("click",displayMovies);
newerButton.innerHTML = "Show movies that Sebastian has ilegally downloaded";



async function displayMovies(){
    
const url = "https://medieinstitutet-wie-products.azurewebsites.net/api/products";
const response = await fetch(url);
const movies = await response.json();
console.log(movies);

for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    
  const section = document.createElement("section");
  exer3.appendChild(section);
  const movieName = document.createElement("h1");
  const movieReleaseYear = document.createElement("h5");
  //const movieId = document.createElement("h6");
  const moviePrice = document.createElement("h6");
  const movieDescription = document.createElement("p");
  const movieImg = document.createElement("img");


  section.appendChild(movieName);
  section.appendChild(movieReleaseYear);
  //section.appendChild(movieId);
  section.appendChild(movieDescription);
  section.appendChild(moviePrice);
  section.appendChild(movieImg);
  movieName.innerHTML = movie.name;
  movieReleaseYear.innerHTML = movie.year;
  movieDescription.innerHTML = movie.description;
  //movieId.innerHTML = movie.id;
  moviePrice.innerHTML = movie.price;
  movieImg.setAttribute("src",movie.imageUrl);

}    
}
//var mydata = JSON.parse(url);


/*
const myJson = "https://medieinstitutet-wie-products.azurewebsites.net/api/products"

const myObj= JSON.parse(myJson);
console.log(myObj);
*/






//     {"id":76,
//     "name":"The Dark Knight",
//     "description":"When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice",
//     "price":199,
//     "imageUrl":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
//     "year":2008,
//     "added":"2016-01-05T00:00:00",
//     "productCategory":[{"categoryId":5,"category":null}
// ]
// function getFullMovie(item) {
//     return [item.id,item.name,item.description].join(" ");
//   }
// url.map(getFullMovies);


//fetch(url) .then(response => { // Do something with the response here });
