const modalOverlay = document.querySelector('.modal-overlay')

const cards = document.querySelectorAll('.cards')


for (let card of cards) {
    card.addEventListener('click', function () {
        const imgID = '/assets/escondidinho.jpg' //card.getAttirbutes('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('.modal-content img').src='/assets/escondidinho.jpg' 

    })
}

document.querySelector('.close-modal').addEventListener('click', function () {
    modalOverlay.classList.remove('active')
})

//'/assets/escondidinho.jpg'