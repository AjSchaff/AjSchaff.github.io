
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

console.log(anchorLinks);