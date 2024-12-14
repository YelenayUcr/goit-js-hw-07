const categoriesList = document.querySelector('#categories');
const categoriesItem = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach((item) => {
    const categoriesTitle = item.querySelector('h2').textContent;
    const categoriesElements = Array.from(item.querySelector('ul').children);
    console.log(`Category: ${categoriesTitle}`);
    console.log(`Elements: ${categoriesElements.length}`);
});
