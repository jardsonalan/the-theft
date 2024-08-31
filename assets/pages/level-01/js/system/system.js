let security1 = document.querySelector('#security1')
let security2 = document.querySelector('#security2')
let security3 = document.querySelector('#security3')

let atendente1 = document.querySelector('#atendente1')
let atendente2 = document.querySelector('#atendente2')

let cliente1 = document.querySelector('#cliente1')
let cliente2 = document.querySelector('#cliente2')

let armario1 = document.querySelector('#armario1')
let armario2 = document.querySelector('#armario2')

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
    if (currentAction === 'Falar com guarda') {
        if (Number(res_dices.innerHTML) >= minFalar) {
            if (card === 'btn-talkative') {
                if (security.id == 'security1') {
                    balon_res.innerHTML = `Security 1: O que você quer?`
                } else if (security.id == 'security2') {
                    balon_res.innerHTML = `Security 2: Talvez tenha alguma coisa no armário!` // Talkative: único que contém essa função
                } else if (security.id == 'security3') {
                    balon_res.innerHTML = `Security 3: Olá, como você vai?`
                }
            } else if (card === 'btn-hacker' && Number(res_dices.innerHTML) >= 18) {
                if (security.id == 'security1') {
                    balon_res.innerHTML = `Security 1: O que você quer?`
                } else if (security.id == 'security2') {
                    balon_res.innerHTML = `Security 2: Talvez tenha alguma coisa no armário!`
                } else if (security.id == 'security3') {
                    balon_res.innerHTML = `Security 3: Olá, como você vai?`
                } else {
                    balon_res.innerHTML = `Tentativa falhou`
                }
            } else if (card === 'btn-staff' && Number(res_dices.innerHTML) >= 16) {
                if (security.id == 'security1') {
                    balon_res.innerHTML = `Security 1: O que você quer?`
                } else if (security.id == 'security2') {
                    balon_res.innerHTML = `Security 2: Talvez tenha alguma coisa no armário!`
                } else if (security.id == 'security3') {
                    balon_res.innerHTML = `Security 3: Olá, como você vai?`
                } else {
                    balon_res.innerHTML = `Tentativa falhou`
                }
            }
        } else {
            balon_res.innerHTML = 'Tentativa falhou'
        }

    } else if (currentAction === 'Eliminar um guarda') {
        if ((card === 'btn-staff' && Number(res_dices.innerHTML) >= 12) ||
            (card === 'btn-talkative' && Number(res_dices.innerHTML) >= 16) ||
            (card === 'btn-hacker' && Number(res_dices.innerHTML) >= 18)) {
            if (alertShown) {
                if (security.id == 'security1') {
                    alert(`Security 1: Eliminate!`)
                } else if (security.id == 'security2') {
                    alert(`Security 2: Eliminate!`)
                } else if (security.id == 'security3') {
                    alert(`Security 3: Eliminate!`)
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

const abrirArmario = () => {
    if (currentAction === 'Abrir armário') {
        if (security1.style.visibility == 'hidden' && security2.style.visibility == 'hidden' && security3.style.visibility == 'hidden') {
            armario1.addEventListener('click',()=>{
                if (Number(res_dices.innerHTML) >= 16) {
                    armario1.src = '../../img/objetos/armario/armario-quebrado.png'
                    if (alertShown) {
                        alert('Ops! Nesse armário não tem nada.')
                        alertShown = false

                        setTimeout(function (){
                            alertShown = true
                        }, 2000)
                    }
                } else {
                    balon_res.innerHTML='Wow! Your tentative failed!'
                }
            })

            armario2.addEventListener('click',()=>{
                if (Number(res_dices.innerHTML) >= 16) {
                    armario2.src = '../../img/objetos/armario/armario-quebrado.png'
                    if (alertShown) {
                        alert('Parabéns! Vocês encontraram as roupas dos guardas.')
                        alertShown = false

                        setTimeout(function (){
                            alertShown = true
                        }, 2000)
                    }
                } else {
                    balon_res.innerHTML='Wow! Your tentative failed!'
                }
            })
            
        } else {
            alert('Você ainda não pode executar está ação!')
        }
    }
}

armario1.addEventListener('click', abrirArmario)
armario2.addEventListener('click', abrirArmario)

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

atendente1.addEventListener('mouseover', ()=>{
    msg('I am tired, I just want to get out of here!')
})

atendente1.addEventListener('mouseout', ()=>{
    del_msg()
})

atendente2.addEventListener('mouseover', ()=>{
    msg('Number 127, please come to the counter!')
})

atendente2.addEventListener('mouseout', ()=>{
    del_msg()
})

cliente1.addEventListener('mouseover', ()=>{
    msg('I am number 128, I am next!')
})

cliente1.addEventListener('mouseout', ()=>{
    del_msg()
})

cliente2.addEventListener('mouseover', ()=>{
    msg('My goodness, these people are so slow!')
})

cliente2.addEventListener('mouseout', ()=>{
    del_msg()
})

armario1.addEventListener('mouseover', ()=>{
    msg('Armário 1')
})

armario1.addEventListener('mouseout', ()=>{
    del_msg()
})

armario2.addEventListener('mouseover', ()=>{
    msg('Armário 2')
})

armario2.addEventListener('mouseout', ()=>{
    del_msg()
})