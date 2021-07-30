const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = document.querySelector('#searchByID');

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(resp => resp.json())
    .then(json => {
      const title = document.querySelector('section#movieDetails h4');
      const summary = document.querySelector('section#movieDetails p');
      
      title.textContent = json.title;
      summary.textContent = json.summary;
    })

    inputForm.reset()
  })
}

document.addEventListener('DOMContentLoaded', init);