const key = document.querySelector('#key')
const cadeado1 = document.querySelector('#cadeado1')
const cadeado2 = document.querySelector('#cadeado2')
const cadeado3 = document.querySelector('#cadeado3')
const camera = [...document.querySelectorAll('.camera')]

key.addEventListener('click', (evt)=>{
    key.style.visibility = 'hidden'
    cadeado1.style.visibility = 'hidden'
    cadeado2.style.visibility = 'hidden'

    if (key.style.visibility = 'hidden') {
        camera.map((el)=>{
            el.addEventListener('click', (evt)=>{
                el.style.visibility = 'hidden'

                if (el.style.visibility = 'hidden') {
                    cadeado3.addEventListener('click', (evt)=>{
                        cadeado3.style.visibility = 'hidden'
                    })
                }
            })
        })
    }
})