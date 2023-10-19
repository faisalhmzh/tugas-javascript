import { userData } from '../data/data.js'

function onLogin() {
    const usernameLogin = document.querySelector('#username').value
    const passwordLogin = document.querySelector('#password').value

    const users = userData.find(user => user.username == usernameLogin && user.password == passwordLogin)

    if (users) {
        localStorage.setItem('user', JSON.stringify(users))
        window.location.href = 'home.html'
    } else {
        alert('Username dan Password salah')
    }
}

const formElm = document.getElementById('myForm')

formElm.addEventListener('submit', function (event) {
    event.preventDefault()
    onLogin()
})