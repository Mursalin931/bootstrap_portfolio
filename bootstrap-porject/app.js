/*------------------------------scroll design----------------- */

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav')
    navbar.classList.toggle('sticky', window.scrollY > 0);

})

const btn = document.getElementById('btn')
const email = document.getElementById('em')
const Name = document.getElementById('fn')
const massege = document.getElementById('ms')

let user = {}

btn.addEventListener('click', function(e) {
    e.preventDefault()
    if (Name.value === '') {
        return alert('Name is required !!')
    } else {
        user['Name'] = Name.value
    }
    if (email.value === '') {
        return alert('E-mail is required !!')
    } else {
        user['Email'] = email.value
    }
    if (massege.value === '') {
        return alert('Massege Box is empty !!')
    } else {
        user['Massege'] = massege.value
    }

})
console.log(user)