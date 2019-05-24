<<<<<<< HEAD

// Enabling click events for all nav-bar links
let anchorLinks = document.querySelectorAll('a[href^="#"]');

for (let item of anchorLinks) {
    item.addEventListener('click', (e) => {
        console.log("this is what e is: ", e);
        console.log('this was the click, :', item);
    })
}

=======

// Enabling click events for all nav-bar links
let anchorLinks = document.querySelectorAll('a[href^="#"]');

for (let item of anchorLinks) {
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    });
}

>>>>>>> 2fdebacfe08df3d5de4dc5cf14b899d850846f72
console.log(anchorLinks);