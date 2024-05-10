const categoriesArray = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesArray.length}`);

categoriesArray.forEach(category => {
  const categoryNameText = category.querySelector('h2').textContent;
  const categoryContentArray = category.querySelectorAll('li.item li');
  console.log(
    `Category: ${categoryNameText}\nElements: ${categoryContentArray.length}`
  );
});
