const init = () => {
    const input = document.querySelector('form');
    input.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('input#searchByID');
    
      fetch(`http://localhost:3000/movies/${input.value}`)
      .then(response => response.json())
      .then(data => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
        title.innerText = data.title;
        sum.innerText = data.summary;
      })
      .catch( err => console.log(err))



    })
}
init()
document.addEventListener('DOMContentLoaded', init);