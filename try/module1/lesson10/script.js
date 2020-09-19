const catButton = document.getElementById('cat-button');
// console.log(catButton)
const catContainer = document.getElementById('cat-container')


function createCatCard() {
    const inputField = document.getElementById('name')
    
    const catImg = document.createElement('img')

    catImg.setAttribute('src', 'http://placekitten.com/300/200');
    
    const catCard = document.createElement('div');
    
    catCard.style.backgroundColor = "blue";
    catCard.style.display = "flex";
    catCard.style.flexDirection = "column"
    catCard.className = "cat-card";
    
    catCard.appendChild(catImg)
    let catName = document.createTextNode(`mr. ${inputField.value}`)
    catCard.insertBefore(catName, catImg)
    catContainer.appendChild(catCard);
    catCard.addEventListener('click', removeCatCard)
}

catButton.addEventListener('click', createCatCard)

function removeCatCard(event){
    const currentCard = event.currentTarget;
    currentCard.remove()
    // const parent = currentCard.parentNode;
    // parent.removeChild(currentCard)
}

catContainer.addEventListener('click', function(e) {
    if (e.target !== e.currentTarget) {
        const currentCard = e.target.parentNode;
        // currentCard.remove()
        const parent = currentCard.parentNode;
        parent.removeChild(currentCard)
        console.log(e.target);
    }

}, true)
