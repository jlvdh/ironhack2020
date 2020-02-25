
const addCat = document.getElementById('add-cat');

const addCatPicture = function () {

    const catCard = document.createElement('div');
    catCard.className = "cat-card";

    const ourImage = document.createElement('img');
    const RandomNumber = Math.floor(Math.random() * 400) + 100;
    ourImage.setAttribute('src', `http://placekitten.com/${RandomNumber}/${RandomNumber}`);
    const catContainer = document.getElementById('cat-container');
    const catName = document.getElementById('cat-name').value;
    const textName = document.createTextNode("mr." + catName);

    catCard.appendChild(ourImage);
    catCard.insertBefore(textName, ourImage);

    catCard.addEventListener('click', (e) => e.currentTarget.remove());

    catContainer.appendChild(catCard);
}

const removeCat = function(e) {
    const catCard = e.currentTarget;
    console.log(e.currentTarget);
    const catCardParent = catCard.parentNode;

    catCardParent.removeChild(catCard);

    //catCard.remove();
}

//addCat.onclick = addCatPicture;

addCat.addEventListener('click', addCatPicture);