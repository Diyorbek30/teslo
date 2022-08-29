let url = 'http://localhost:3001'

function check(res) {
    if (res.status === 201 || res.status === 200) {
        getAllData()
    }
}

function getAllData() {
    axios.get(url + '/teslo')
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                add(res.data)
            }
        })
        .catch(error => console.log(error))
}
getAllData()

let father = document.querySelector('.tesla')
let tesla = father.querySelector('.tesla_photo')
let door = father.querySelector('.door')
let salon = document.querySelector('.azizs_salon_none')
let aziz_buttons = salon.querySelector('.buttons')
let aziz_right = aziz_buttons.querySelector('.right')

let aziz_stick = aziz_right.querySelector('.stick')
let aziz_round = aziz_stick.querySelector('.round')


let aziz_left = aziz_buttons.querySelector('.left')

let round_black = aziz_left.querySelector('.black')
let round_white = aziz_left.querySelector('.white')
let round_milk = aziz_left.querySelector('.milk')

let salon_color = salon.querySelector('.salon_photo')



door.onclick = () => {
    tesla.classList.remove('tesla_photo')
    tesla.classList.add('tesla_photo_post')

    function animation() {
        father.classList.toggle('tesla_none')
        salon.classList.remove('azizs_salon_none')
        salon.classList.add('azizs_salon')
    }
    setTimeout(animation, 1000)



    aziz_stick.classList.remove('stick_post')
    aziz_stick.classList.add('stick')

    aziz_round.classList.remove('round_post')
    aziz_round.classList.add('round')

}

round_black.onclick = () => {
    salon_color.classList.add('salon_photo_black')

    salon_color.classList.remove('salon_photo_white')
    salon_color.classList.remove('salon_photo_milk')
}

round_white.onclick = () => {
    salon_color.classList.add('salon_photo_white')

    salon_color.classList.remove('salon_photo_black')
    salon_color.classList.remove('salon_photo_milk')
}

round_milk.onclick = () => {
    salon_color.classList.add('salon_photo_milk')

    salon_color.classList.remove('salon_photo_black')
    salon_color.classList.remove('salon_photo_white')
}

aziz_round.onclick = () => {

    aziz_stick.classList.remove('stick')
    aziz_stick.classList.add('stick_post')

    aziz_round.classList.remove('round')
    aziz_round.classList.add('round_post')

    function stick() {
        father.classList.toggle('tesla_none')

        tesla.classList.remove('tesla_photo_post')
        tesla.classList.add('tesla_photo')

        salon.classList.remove('azizs_salon')
        salon.classList.add('azizs_salon_none')
    }
    setTimeout(stick, 50)
}
function add(arr) {
    let km = document.querySelector('.km')
    let price = document.querySelector('.price')
    let km_two = document.querySelector('.km_two')
    let price_two = document.querySelector('.price_two')
    let km_hour = document.querySelector('.km_hour')
    let temp = document.querySelector('.temp')
    let disk = document.querySelector('.disk')    

    for (let item of arr) {
        km.innerHTML = item.Fast
        price.innerHTML = item.price
        km_two.innerHTML = item.Fast
        price_two.innerHTML = item.price
        km_hour.innerHTML = item.hour
        temp.innerHTML = item.tempreture
        disk.innerHTML = item.disk
    }
}
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let stick_one = document.querySelector('.stick_one')
let stick_two = document.querySelector('.stick_two')

stick_one.onclick = () => {
    one.classList.toggle('round_post')
    stick_one.classList.toggle('stick_post')
}
stick_two.onclick = () => {
    two.classList.toggle('round_post')
    stick_two.classList.toggle('stick_post')
}