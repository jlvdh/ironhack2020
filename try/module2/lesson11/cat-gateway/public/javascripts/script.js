
document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

  const addCatButton = document.getElementById('cat-button')

  const catContainer = document.getElementById('cat-container')

  addCatButton.addEventListener('click', function() {
    const img = document.createElement('img')

    axios.get('/cat/image').then(response => {
      img.src = response.data.image

      const link = `/cat/favourite?image_id=${response.data.image_id}`

      img.addEventListener('click', function() {
        axios.post(link)
          .then(result => {
            console.log(result)
          })
          .catch(e => console.log(e))
      })
      
      catContainer.appendChild(img)


    })
  })

}, false);
