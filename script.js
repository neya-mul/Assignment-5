let username = document.getElementById('username');
let password = document.getElementById('password')
let loginBtn = document.getElementById('login-btn')
let loginPage = document.getElementById('login-page')
let allElements = document.getElementById('all-elements')
let searchInput = document.getElementById('search-input')
let searchbBtn = document.getElementById('search-btn')
let cardsContaier = document.getElementById('cards-container');
let issueCount = document.getElementById('issue-count')








// login form interactiviy(no works needed here, it's fully complete now)
loginBtn.addEventListener('click', function () {
    if (username.value === 'admin' && password.value === 'admin123') {
        loginPage.classList.add('hidden')
        allElements.classList.remove('hidden')
    }
})


// function for load all data
const loadData = () => {
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then(res => res.json())
        .then(data => displayData(data.data))

}
loadData()


// function for display all data
const displayData = (allData) => {


    allData.forEach(element => {
        let lbl = ''
        element.labels.forEach(label => {
            lbl += `<span class="bg-amber-50 p-1">${label}</span>`
        })

        let card = document.createElement('div')
        card.className = "card max-w-[400px] space-y-3 p-3 bg-white "
        card.innerHTML = `
     <p class="text-right">${element.priority}</p>
                <h1 class="text-2xl min-h-[70px]">${element.title}</h1>
               <p class="line-clamp-2">${element.description}</p>
               <div class="flex gap-2 ">
                   
                ${lbl}
               </div>
                <hr>
                 <p>${element.author}</p>
                 <p>${element.createdAt}</p>
    
    `
        // min-h-4

        // issueCount.innerText = element.data.length
        cardsContaier.appendChild(card)
       issueCount.innerText = cardsContaier.children.length

    });
}



// <div class="card max-w-[400px] space-y-3 p-3 bg-white border">
//     <p class="text-right">High</p>
//     <h1 class="text-2xl">Fix navigation menu on mobile devices</h1>
//     <p>The navigation menu doesn't collapse properly on mobile devices...</p>
//     <div class="flex gap-2 ">
//         <span class="bg-amber-50 p-1">Bug</span>
//         <span class="bg-amber-50 p-1">Help wanted</span>
//     </div>
//     <hr>
//     <p>#1 by john_doe</p>
//     <p>1/15/2024</p>
// </div>
