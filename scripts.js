
// Enabling click events for all nav-bar links
let anchorLinks = document.querySelectorAll('a[href^="#"]');

for (let item of anchorLinks) {
    item.addEventListener('click', (e) => {
        console.log("this is what e is: ", e);
        console.log('this was the click, :', item);
    })
}

console.log(anchorLinks);