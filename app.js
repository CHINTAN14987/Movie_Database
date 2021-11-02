//const modalHandler= document.querySelector(".modal");
const buttonHandler=document.querySelector(".button-Movie");
const closebuttonHandler=document.querySelector(".close-btn");
 const addbuttonHandler=document.querySelector(".add-btn");
const section_1=document.querySelector(".section-1");
const section_2=document.querySelector("#section-2");
// const modalviewHandler=document.getElementsByClassName("section-1");
const userInput=document.querySelectorAll("input");
const ul=document.querySelector("ul");
 const mymovies=[];

function myUIUpdate()
 {
    if(mymovies.length===0)
    {
        section_2.style.display="block";
    }
    else
    {
        section_2.style.display="none";
    }
 }

buttonHandler.addEventListener("click", buttonFunction);
function buttonFunction()
{
    
    section_1.style.display="block";
     section_1.style.backgroundColor=  "rgba(0,0,0,0.4)";
    
 }

 closebuttonHandler.addEventListener("click", closeButton);
 function closeButton()
{
    section_1.style.display="none";

    
}

function addmovies(){
    const userTitle= userInput[0].value;
    const userURL= userInput[1].value;
    const userRating= userInput[2].value;
    
    
    const movieVaule=
    {
        title:userTitle,
        URL:userURL,
        rating:userRating
    };
    
    mymovies.push(movieVaule);
    console.log(movieVaule);
    closeButton();
    moviesUI(movieVaule.title,
        movieVaule.URL,
        movieVaule.rating);
        myUIUpdate();
}
    function moviesUI(title, imageurl, rating)
    
     {
    const list_1=document.createElement("li");
    list_1.className="listElements";
    list_1.innerHTML=`<div class="imagelementsInfo">
    <img src="${imageurl}" alt="${title}">
    </div>
    <div class="movie_TitleInfo"> <h2>${title}</h2>
    <p>${rating}/5 stars</p>
    </div>
    `;
    ul.append(list_1);
    
     }

    addbuttonHandler.addEventListener("click", addmovies);
