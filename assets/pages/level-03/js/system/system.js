let security1 = document.querySelector('#security1')
let security2 = document.querySelector('#security2')
let security3 = document.querySelector('#security3')

let key = document.querySelector('#chave')

let camera1 = document.querySelector('#camera-1')
let camera2 = document.querySelector('#camera-2')

let cadeado1 = document.querySelector('#cadeado-1')
let cadeado2 = document.querySelector('#cadeado-2')

let btn_hackear = document.querySelector('#btn-hackear')

let balon_res = document.querySelector('#balon-res')

let res_dices = document.querySelector('#res-dices')

let btn_stats = [...document.querySelectorAll('.btn-stats')]

let btn_options = [...document.querySelectorAll('.btn-options')]

let alertShown = true

let card

let currentAction = ''

// Captura o id da carta
const capturarId = (evt) => {
    card = evt.currentTarget.id
    console.log(card)
}

document.getElementById("btn-hacker").addEventListener("click", capturarId)
document.getElementById("btn-staff").addEventListener("click", capturarId)
document.getElementById("btn-talkative").addEventListener("click", capturarId)

// Seleciona a ação que o usuário deseja executar no game
btn_options.map((el) => {
    el.addEventListener('click', (evt) => {
        currentAction = el.innerHTML
    })
})

// Ações dos personagens e valores dos dados
const handleSecurityClick = (security, minFalar, minEliminar) => {
    if (currentAction === 'Eliminar um guarda') {
        if ((card === 'btn-staff' && Number(res_dices.innerHTML) >= 12) ||
        (card === 'btn-talkative' && Number(res_dices.innerHTML) >= 16) ||
        (card === 'btn-hacker' && Number(res_dices.innerHTML) >= 18)) {
            if (alertShown) {
                if (security.id == 'security1') {
                    alert(`Security 1: Eliminate!`)
                    security1Visibility = 'hidden'
                } else if (security.id == 'security2') {
                    alert(`Security 2: Eliminate!`)
                    security2Visibility = 'hidden'
                } else if (security.id == 'security3') {
                    alert(`Security 3: Eliminate!`)
                    security3Visibility = 'hidden'
                }
                alertShown = false
                setTimeout(() => { alertShown = true }, 2000)
            }
            security.style.visibility = 'hidden'
        } else {
            balon_res.innerHTML = 'Tentativa falhou'
        }
    }
}

security1.addEventListener('click', () => handleSecurityClick(security1, 12, 12))
security2.addEventListener('click', () => handleSecurityClick(security2, 12, 12))
security3.addEventListener('click', () => handleSecurityClick(security3, 12, 12))

const roubarKey = () => {
    if (currentAction === 'Roubar') {
        if (security1.style.visibility == 'hidden' && security2.style.visibility == 'hidden' && security3.style.visibility == 'hidden') {
            if ((card === 'btn-staff' && Number(res_dices.innerHTML) >= 12) ||
            (card === 'btn-talkative' && Number(res_dices.innerHTML) >= 16) ||
            (card === 'btn-hacker' && Number(res_dices.innerHTML) >= 18)) {
                key.style.visibility = 'hidden'
                cadeado2.style.visibility = 'hidden'
                keyVisibility = 'hidden'
            } else {
                balon_res.innerHTML = 'Tentativa falhou'
            }
        } else {
            alert('Essa ação ainda não pode ser realizada!')
        }
    }
}

key.addEventListener('click', roubarKey)

const desligarCameras = () => {
    if (currentAction === 'Hackear') {
        if (key.style.visibility == 'hidden') {
            if ((Number(res_dices.innerHTML) >= 12 && card === 'btn-hacker') || (Number(res_dices.innerHTML) == 20 && card === 'btn-talkative') || (Number(res_dices.innerHTML) == 20 && card === 'btn-staff')) {
                if (alertShown) {
                    alert('Câmera 1: Desativada com sucesso!')
                    alertShown = false

                    setTimeout(function (){
                        alertShown = true
                    }, 2000)
                }
                camera1.style.visibility = 'hidden'
            } else {
                balon_res.innerHTML = 'Tentativa falhou'
            }

            if ((Number(res_dices.innerHTML) >= 18 && card === 'btn-hacker') || (Number(res_dices.innerHTML) == 20 && card === 'btn-talkative') || (Number(res_dices.innerHTML) == 20 && card === 'btn-staff')) {
                if (alertShown) {
                    alert('Câmera 2: Desativada com sucesso!')
                    alertShown = false

                    setTimeout(function (){
                        alertShown = true
                    }, 2000)
                }
                camera2.style.visibility = 'hidden'
            } else {
                balon_res.innerHTML = 'Tentativa falhou'
            }
        } else {
            alert('Essa ação ainda não pode ser realizada!')
        }
    }
}

btn_hackear.addEventListener('click', desligarCameras)

const roubarCofre = () => {
    if (currentAction === 'Roubar') {
        if (key.style.visibility == 'hidden' && camera1.style.visibility == 'hidden' && camera2.style.visibility == 'hidden') {
            if ((Number(res_dices.innerHTML) >= 18 && card === 'btn-hacker') || (Number(res_dices.innerHTML) >= 18 && card === 'btn-talkative') || (Number(res_dices.innerHTML) >= 18 && card === 'btn-staff')) {
                if (alertShown) {
                    alert('Congratulations! Vocês ganharam.')
                    alertShown = false

                    setTimeout(function (){
                        alertShown = true
                    }, 2000)
                }
                cadeado1.style.visibility = 'hidden'
            } else {
                balon_res.innerHTML = 'Tentativa falhou'
            }
        } else {
            alert('Essa ação ainda não pode ser realizada!')
        }
    }
}

cadeado1.addEventListener('click', roubarCofre)

const msg = (mensagem) => {
    balon_res.style.visibility = 'visible'
    balon_res.innerHTML=mensagem
}

const del_msg = () => {
    balon_res.style.visibility = 'hidden'
}

security1.addEventListener('mouseover', ()=>{
    msg('Security 1: Why so much noise? Why did not I choose to be a programmer?!')
})

security1.addEventListener('mouseout', ()=>{
    del_msg()
})

security2.addEventListener('mouseover', ()=>{
    msg('Security 2: Where are my clothes?')
})

security2.addEventListener('mouseout', ()=>{
    del_msg()
})

security3.addEventListener('mouseover', ()=>{
    msg('Security 3: Cronch! zzZ!')
})

security3.addEventListener('mouseout', ()=>{
    del_msg()
})