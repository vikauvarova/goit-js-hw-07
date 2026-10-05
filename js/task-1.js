//
//З використанням властивостей і методів DOM - елементів, напиши скрипт, який:
//Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

//Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка
// елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);
items.forEach(item => {
    const itemName = item.querySelector("h2");
    const elements = item.querySelectorAll("li");
    console.log(`Category: ${itemName.innerText}`)

    console.log(`Elements: ${elements.length}`)
})

