let idInput = document.getElementById('idInput')
let setColor = document.getElementById('setColor')

const setCard = () => {
    const card = document.getElementById(idInput.value)
    card.style.color = setColor.value
}


console.log(idInput)
console.log(setColor)
// console.log('the house always wins')

