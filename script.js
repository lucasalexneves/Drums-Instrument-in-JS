document.body.addEventListener('keyup', (event)=>{
    PlaySound(event.code.toLocaleLowerCase())
})

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('input').value

    console.log("Music", song)
})

function PlaySound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`)
    let KeyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement){
        audioElement.currentTime = 0
        audioElement.play()
    }

    if(KeyElement){
        KeyElement.classList.add('active')

        setTimeout(()=>{
            KeyElement.classList.remove('active')
        }, 300)
    }
}