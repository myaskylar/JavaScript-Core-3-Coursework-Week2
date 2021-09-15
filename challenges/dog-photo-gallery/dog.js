let apiUrl = `https://dog.ceo/api/breeds/image/random`;
const randomDisplay = document.getElementById("random-dog");


// .then .catch() method
// const loadRandomImage = () => {
//     fetch(apiUrl)
//     .then((response) => response.json())
//     .then(data =>{
//     displayImage(data);
//     console.log(data);
//     }).catch((error)=>console.log(error));
// }

const displayImage = (images) => {
    let htmlElement = `<li><img src="${images.message}" alt="Dog breed"/></li>`
    randomDisplay.innerHTML = htmlElement;
}

//<------------------------------------------------------------------------------------->
//try  catch -> async await (asynchronous function) method

const loadRandomImage = async () => {
    try {
        const response = await fetch(apiUrl);
        data = await response.json();
        displayImage(data);
    }catch (error){
        console.error(error);
    }
}