const dogButton = document.getElementById("get-dog-button");
const dogButtonFive = document.getElementById("get-dog-button-five");
const quoteContainer = document.getElementById("quote-container");

const getRandomDog = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');

        if(!response.ok) {
            throw new Error(response.status + " error with request")
        }

        const data = await response.json();
    
        quoteContainer.innerHTML += `<img src=${data.message} class="dog-image"></img>`
    }
    catch(error) {
        alert(error.message)
    }

};

const getFiveDogs = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/5');

    const data = await response.json();

    data.message.forEach(image => {
        quoteContainer.innerHTML += `<img src=${image} class="dog-image"></img>`
    });

};

dogButton.addEventListener('click', getRandomDog)
dogButtonFive.addEventListener('click', getFiveDogs)