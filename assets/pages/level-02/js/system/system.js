let security1 = document.querySelector('#security1')
let security2 = document.querySelector('#security2')
let security3 = document.querySelector('#security3')

let laser1 = document.querySelector('#laser-1')
let laser2 = document.querySelector('#laser-2')
let laser3 = document.querySelector('#laser-3')
let laser4 = document.querySelector('#laser-4')
let laser5 = document.querySelector('#laser-5')

let btn_hackear = document.querySelector('#btn-hackear')

let balon_res = document.querySelector('#balon-res')

let res_dices = document.querySelector('#res-dices')

let btn_stats = [...document.querySelectorAll('.btn-stats')]

let btn_options = [...document.querySelectorAll('.btn-options')]

let alertShown = true

let card

let currentAction = ''

let laser1Visibility = ''
let laser2Visibility = ''
let laser3Visibility = ''
let laser4Visibility = ''
let laser5Visibility = ''

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
    if (currentAction === 'Talk to the guard') {
        if (Number(res_dices.innerHTML) >= minFalar) {
            if (card === 'btn-talkative') {
                if (security.id == 'security1') {
                    balon_res.innerHTML = `Security 1: Sometimes, the key to deactivating security systems lies in the digital realm.`
                } else if (security.id == 'security2') {
                    balon_res.innerHTML = `Security 2: The solution might be hidden where technology and security intersect.`
                } else if (security.id == 'security3') {
                    balon_res.innerHTML = `Security 3: The controls for the lasers might be in an unexpected place, like the main console.`
                } else {
                    balon_res.innerHTML = `The attempt failed.`
                }
            } else if (card === 'btn-hacker' && Number(res_dices.innerHTML) >= 18) {
                if (security.id == 'security1') {
                    balon_res.innerHTML = `Security 1: I once saw a cat solve a puzzle with a single keystroke.`
                } else if (security.id == 'security2') {
                    balon_res.innerHTML = `Security 2: The best way to find something is to look where you're not looking.`
                } else if (security.id == 'security3') {
                    balon_res.innerHTML = `Security 3: Have you ever considered that the solution might be in the wrong place?`
                } else {
                    balon_res.innerHTML = `The attempt failed.`
                }
            } else if (card === 'btn-staff' && Number(res_dices.innerHTML) >= 16) {
                if (security.id == 'security1') {
                    balon_res.innerHTML = `Security 1: Sometimes, answers come when you least expect them—like during a rainstorm.`
                } else if (security.id == 'security2') {
                    balon_res.innerHTML = `Security 2: They say the key to success is in the details, but what if the details are missing?`
                } else if (security.id == 'security3') {
                    balon_res.innerHTML = `Security 3: If you think you've found the solution, maybe you should try looking elsewhere.`
                } else {
                    balon_res.innerHTML = `The attempt failed.`
                }
            }
        } else {
            balon_res.innerHTML = `The attempt failed.`
        }

    } else if (currentAction === 'Eliminate a guard') {
        if (laser1Visibility == 'hidden' && laser2Visibility == 'hidden' && laser3Visibility == 'hidden' && laser4Visibility == 'hidden' && laser5Visibility == 'hidden') {
            if ((card === 'btn-staff' && Number(res_dices.innerHTML) >= 12) ||
            (card === 'btn-talkative' && Number(res_dices.innerHTML) >= 16) ||
            (card === 'btn-hacker' && Number(res_dices.innerHTML) >= 18)) {
                if (alertShown) {
                    if (security.id == 'security1') {
                        alert(`Security 1: Eliminated!`)
                    } else if (security.id == 'security2') {
                        alert(`Security 2: Eliminated!`)
                    } else if (security.id == 'security3') {
                        alert(`Security 3: Eliminated!`)
                    }
                    alertShown = false
                    setTimeout(() => { alertShown = true }, 2000)
                }
                security.style.visibility = 'hidden'
            } else {
                balon_res.innerHTML = `The attempt failed.`
            }
        } else {
            alert('You still cannot perform this action!')
        }
    }
}

security1.addEventListener('click', () => handleSecurityClick(security1, 12, 12))
security2.addEventListener('click', () => handleSecurityClick(security2, 12, 12))
security3.addEventListener('click', () => handleSecurityClick(security3, 12, 12))

const desligarLaser = () => {
    if (currentAction === 'Hack the laser') {
        laser5.addEventListener('click', (evt)=>{
            if ((Number(res_dices.innerHTML) >= 12 && card === 'btn-hacker') || (Number(res_dices.innerHTML) == 20 && card === 'btn-talkative') || (Number(res_dices.innerHTML) == 20 && card === 'btn-staff')) {
                if (alertShown) {
                    alert('Laser 5: Successfully deactivated!')
                    alertShown = false

                    setTimeout(function (){
                        alertShown = true
                    }, 2000)
                }
                laser5.style.visibility = 'hidden'
                laser5Visibility = 'hidden'
            } else {
                msg(`The attempt failed.`)
            }
        })

        laser4.addEventListener('click', (evt)=>{
            if ((Number(res_dices.innerHTML) >= 14 && card === 'btn-hacker') || (Number(res_dices.innerHTML) == 20 && card === 'btn-talkative') || (Number(res_dices.innerHTML) == 20 && card === 'btn-staff')) {
                if (alertShown) {
                    alert('Laser 4: Successfully deactivated!')
                    alertShown = false

                    setTimeout(function (){
                        alertShown = true
                    }, 2000)
                }
                laser4.style.visibility = 'hidden'
                laser4Visibility = 'hidden'
            } else {
                msg(`The attempt failed.`)
            }
        })

        laser3.addEventListener('click', (evt)=>{
            if ((Number(res_dices.innerHTML) >= 16 && card === 'btn-hacker') || (Number(res_dices.innerHTML) == 20 && card === 'btn-talkative') || (Number(res_dices.innerHTML) == 20 && card === 'btn-staff')) {
                if (alertShown) {
                    alert('Laser 3: Successfully deactivated!')
                    alertShown = false

                    setTimeout(function (){
                        alertShown = true
                    }, 2000)
                }
                laser3.style.visibility = 'hidden'
                laser3Visibility = 'hidden'
            } else {
                msg(`The attempt failed.`)
            }
        })

        laser2.addEventListener('click', (evt)=>{
            if ((Number(res_dices.innerHTML) >= 18 && card === 'btn-hacker') || (Number(res_dices.innerHTML) == 20 && card === 'btn-talkative') || (Number(res_dices.innerHTML) == 20 && card === 'btn-staff')) {
                if (alertShown) {
                    alert('Laser 2: Successfully deactivated!')
                    alertShown = false

                    setTimeout(function (){
                        alertShown = true
                    }, 2000)
                }
                laser2.style.visibility = 'hidden'
                laser2Visibility = 'hidden'
            } else {
                msg(`The attempt failed.`)
            }
        })

        laser1.addEventListener('click', (evt)=>{
            if ((Number(res_dices.innerHTML) >= 19 && card === 'btn-hacker') || (Number(res_dices.innerHTML) == 20 && card === 'btn-talkative') || (Number(res_dices.innerHTML) == 20 && card === 'btn-staff')) {
                if (alertShown) {
                    alert('Laser 1: Successfully deactivated!')
                    alertShown = false

                    setTimeout(function (){
                        alertShown = true
                    }, 2000)
                }
                laser1.style.visibility = 'hidden'
                laser1Visibility = 'hidden'
            } else {
                msg(`The attempt failed.`)
            }
        })
    }
}

btn_hackear.addEventListener('click', desligarLaser)

const msg = (mensagem) => {
    balon_res.style.visibility = 'visible'
    balon_res.innerHTML=mensagem
}

const del_msg = () => {
    balon_res.style.visibility = 'hidden'
}

security1.addEventListener('mouseover', ()=>{
    msg(`Security 1: I wonder what's happening?`)
})

security1.addEventListener('mouseout', ()=>{
    del_msg()
})

security2.addEventListener('mouseover', ()=>{
    msg('Security 2: The system generated an alert.')
})

security2.addEventListener('mouseout', ()=>{
    del_msg()
})

security3.addEventListener('mouseover', ()=>{
    msg('Security 3: I knew this could happen at any moment. That guard at the entrance is very lazy.')
})

security3.addEventListener('mouseout', ()=>{
    del_msg()
})