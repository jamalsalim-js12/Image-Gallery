const inputEl = document.querySelector('input');
const searchEl = document.querySelector('.inputContainer i');
const imageBoxEl = document.querySelectorAll('.imageBox');

// when we press ENTER button or when we click search button this function will start executing.
function handleSearch(event) {
  if (event.key === 'Enter' || event === 'search') {
    const inputValue = inputEl.value.toLowerCase();

    // if the entered value matches the text content of any p element, it shows (i.e., block), else it displays none.
    imageBoxEl.forEach((image) => {
      const name = image.querySelector('p').textContent.toLowerCase();
      if (name.includes(inputValue)) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  }
}

// when we click on the search button it calls the handleSearch function.
searchEl.addEventListener('click', () => {
  handleSearch('search');
});

inputEl.addEventListener('keyup', () => {
  if (inputEl.value != '') return;

  // if there is an empty value then it shows all the images.
  imageBoxEl.forEach((image) => {
    image.style.display = 'block';
  });
});

// when we press the ENTER button then it calls the handleSearch function.
inputEl.addEventListener('keyup', handleSearch);
