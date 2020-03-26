

document.addEventListener('DOMContentLoaded', () => {
  const addCatButton = document.getElementById("randomCat")  
  const catContainer = document.getElementById('cat-container')
  addCatButton.addEventListener('click', () => {
    axios.get('/image')
    .then(response => {
      const img = document.createElement('img')
      img.src = response.data.url 
      catContainer.appendChild(img)
    })
  })
  console.log('IronGenerator JS imported successfully!');

}, false);

