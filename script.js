let username = document.getElementById('username');
let password = document.getElementById('password')
let loginBtn = document.getElementById('login-btn')
let loginPage = document.getElementById('login-page')
let allElements = document.getElementById('all-elements')
let searchInput = document.getElementById('search-input')
let searchbBtn = document.getElementById('search-btn')




// login form interactiviy(no works needed here, it's fully complete now)
loginBtn.addEventListener('click', function () {
    if (username.value === 'admin' && password.value === 'admin123') {
        loginPage.classList.add('hidden')
        allElements.classList.remove('hidden')
    }
})
