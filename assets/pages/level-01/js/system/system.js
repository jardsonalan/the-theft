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

let btn_options = [...document.querySelectorAll('.btn-options')
]

let alertShown = true

// btn_stats.map((el)=>{
//     el.addEventListener('click', (evt)=>{
//         el.classList.toggle('selected')
//     })
// })

let card
const capturarId = (evt) => {
    card = evt.currentTarget.id
    console.log(card)
}

document.getElementById("btn-hacker").addEventListener("click", capturarId);
document.getElementById("btn-staff").addEventListener("click", capturarId);
document.getElementById("btn-talkative").addEventListener("click", capturarId);

btn_options.map((el)=>{
    el.addEventListener('click', (evt)=>{
        if (el.innerHTML == 'Falar com guarda') {
            security1.addEventListener('click', (evt)=>{
                if (Number(res_dices.innerHTML) >= 12 && card == 'btn-talkative') {
                    balon_res.innerHTML='Security 1: Talvez tenha alguma coisa no armário!'
                }

                else if (Number(res_dices.innerHTML) >= 18 && card == 'btn-hacker') {
                    balon_res.innerHTML='Security 1: O que você quer?'
                }

                else if (Number(res_dices.innerHTML) >= 16 && card == 'btn-staff') {
                    balon_res.innerHTML='Security 1: Olá, como você vai?'
                }
                
                else {
                    balon_res.innerHTML = 'Tentativa falhou'
                }
            })

            security2.addEventListener('click', (evt)=>{
                if (Number(res_dices.innerHTML) >= 12 && card == 'btn-talkative') {
                    balon_res.innerHTML='Security 2: Talvez tenha alguma coisa no armário!'
                }

                else if (Number(res_dices.innerHTML) >= 18 && card == 'btn-hacker') {
                    balon_res.innerHTML='Security 2: O que você quer?'
                }

                else if (Number(res_dices.innerHTML) >= 16 && card == 'btn-staff') {
                    balon_res.innerHTML='Security 2: Olá, como você vai?'
                }
                
                else {
                    balon_res.innerHTML = 'Tentativa falhou'
                }
            })

            security3.addEventListener('click', (evt)=>{
                if (Number(res_dices.innerHTML) >= 12 && card == 'btn-talkative') {
                    balon_res.innerHTML='Security 3: Talvez tenha alguma coisa no armário!'
                }

                else if (Number(res_dices.innerHTML) >= 18 && card == 'btn-hacker') {
                    balon_res.innerHTML='Security 3: O que você quer?'
                }

                else if (Number(res_dices.innerHTML) >= 16 && card == 'btn-staff') {
                    balon_res.innerHTML='Security 3: Olá, como você vai?'
                }
                
                else {
                    balon_res.innerHTML = 'Tentativa falhou'
                }
            })
        }

        else if (el.innerHTML == 'Eliminar um guarda') {
            security1.addEventListener('click', (evt)=>{
                if (Number(res_dices.innerHTML) >= 12 && card == 'btn-staff') {
                    if (alertShown) {
                        alert('Security 1: Eliminate!')
                        alertShown = false

                        setTimeout(function (){
                            alertShown = true
                        }, 2000)
                    }
                    security1.style.visibility = 'hidden'
                }

                else if (Number(res_dices.innerHTML) >= 16 && card == 'btn-talkative') {
                    if (alertShown) {
                        alert('Security 1: Eliminate!')
                        alertShown = false

                        setTimeout(function (){
                            alertShown = true
                        }, 2000)
                    }
                    security1.style.visibility = 'hidden'
                }

                else if (Number(res_dices.innerHTML) >= 18 && card == 'btn-hacker') {
                    if (alertShown) {
                        alert('Security 1: Eliminate!')
                        alertShown = false

                        setTimeout(function (){
                            alertShown = true
                        }, 2000)
                    }
                    security1.style.visibility = 'hidden'
                } 
                
                else {
                    balon_res.innerHTML = 'Tentativa falhou'
                }
            })

            security2.addEventListener('click', (evt)=>{
                if (Number(res_dices.innerHTML) >= 12 && card == 'btn-staff') {
                    if (alertShown) {
                        alert('Security 2: Eliminate!')
                        alertShown = false

                        setTimeout(function (){
                            alertShown = true
                        }, 2000)
                    }
                    security2.style.visibility = 'hidden'
                }

                else if (Number(res_dices.innerHTML) >= 16 && card == 'btn-talkative') {
                    if (alertShown) {
                        alert('Security 2: Eliminate!')
                        alertShown = false

                        setTimeout(function (){
                            alertShown = true
                        }, 2000)
                    }
                    security2.style.visibility = 'hidden'
                }

                else if (Number(res_dices.innerHTML) >= 18 && card == 'btn-hacker') {
                    if (alertShown) {
                        alert('Security 2: Eliminate!')
                        alertShown = false

                        setTimeout(function (){
                            alertShown = true
                        }, 2000)
                    }
                    security2.style.visibility = 'hidden'
                } 
                
                else {
                    balon_res.innerHTML = 'Tentativa falhou'
                }
            })

            security3.addEventListener('click', (evt)=>{
                if (Number(res_dices.innerHTML) >= 12 && card == 'btn-staff') {
                    if (alertShown) {
                        alert('Security 3: Eliminate!')
                        alertShown = false

                        setTimeout(function (){
                            alertShown = true
                        }, 2000)
                    }
                    security3.style.visibility = 'hidden'
                }

                else if (Number(res_dices.innerHTML) >= 16 && card == 'btn-talkative') {
                    if (alertShown) {
                        alert('Security 3: Eliminate!')
                        alertShown = false

                        setTimeout(function (){
                            alertShown = true
                        }, 2000)
                    }
                    security3.style.visibility = 'hidden'
                }

                else if (Number(res_dices.innerHTML) >= 18 && card == 'btn-hacker') {
                    if (alertShown) {
                        alert('Security 3: Eliminate!')
                        alertShown = false

                        setTimeout(function (){
                            alertShown = true
                        }, 2000)
                    }
                    security3.style.visibility = 'hidden'
                } 
                
                else {
                    balon_res.innerHTML = 'Tentativa falhou'
                }
            })
        }

        if (el.innerHTML == 'Entrar no vestiário' && (card == 'btn-staff' || card == 'btn-hacker' || card == 'btn-talkative')) {
            if (security1.style.visibility == 'hidden' && security2.style.visibility == 'hidden' && security3.style.visibility == 'hidden') {
                if (Number(res_dices.innerHTML) >= 18) {
                    alert('Você entrou no vestiário!')
                    // Armários
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
                                alert('Parabéns! Você encontrou a roupa dos guardas.')
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
                    alert('Tentativa falhou')
                }
            } else {
                if (alertShown) {
                    alert('Ops! Você ainda não pode executar essa ação.')
                    alertShown = false
    
                    setTimeout(function (){
                        alertShown = true
                    }, 2000)
                }
            }
        }
    })
})

const msg = (mensagem) => {
    balon_res.style.visibility = 'visible'
    balon_res.innerHTML=mensagem
}

const del_msg = () => {
    balon_res.style.visibility = 'hidden'
}

security1.addEventListener('mouseover', ()=>{
    msg('Security 1: Why so much noise? Why did not I choose to be a programmer?!')
    // security1.addEventListener('click',()=>{
    //     if (Number(res_dices.innerHTML) > 18 && card == 'btn-talkative') {
    //         security1.style.visibility = 'hidden'
    //     } else {
    //         balon_res.innerHTML='Wow! Your tentative failed!'
    //     }
    // })
})

security1.addEventListener('mouseout', ()=>{
    del_msg()
})

security2.addEventListener('mouseover', ()=>{
    msg('Security 2: Where are my clothes?')
    // security2.addEventListener('click',()=>{
    //     if (Number(res_dices.innerHTML) > 18 && card == 'btn-talkative') {
    //         security2.style.visibility = 'hidden'
    //     } else {
    //         balon_res.innerHTML='Wow! Your tentative failed!'
    //     }
    // })
})

security2.addEventListener('mouseout', ()=>{
    del_msg()
})

security3.addEventListener('mouseover', ()=>{
    msg('Security 3: Cronch! zzZ!')
    // security3.addEventListener('click',()=>{
    //     if (Number(res_dices.innerHTML) > 18 && card == 'btn-talkative') {
    //         security3.style.visibility = 'hidden'
    //     } else {
    //         balon_res.innerHTML='Wow! Your tentative failed!'
    //     }
    // })
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
    // armario1.addEventListener('click',()=>{
    //     if (Number(res_dices.innerHTML) > 16 && card == 'btn-staff') {
    //         armario1.src = '../../img/objetos/armario/armario-quebrado.png'
    //         if (alertShown) {
    //             alert('Ops! Nesse armário não tem nada.')
    //             alertShown = false

    //             setTimeout(function (){
    //                 alertShown = true
    //             }, 2000)
    //         }
    //     } else {
    //         balon_res.innerHTML='Wow! Your tentative failed!'
    //     }
    // })
})

armario1.addEventListener('mouseout', ()=>{
    del_msg()
})

armario2.addEventListener('mouseover', ()=>{
    msg('Armário 2')
    // armario2.addEventListener('click',()=>{
    //     if (Number(res_dices.innerHTML) > 16 && card == 'btn-staff') {
    //         armario2.src = '../../img/objetos/armario/armario-quebrado.png'
    //         if (alertShown) {
    //             alert('Congratulations! You have a shirts the guards.')
    //             alertShown = false

    //             setTimeout(function (){
    //                 alertShown = true
    //             }, 2000)
    //         }
    //     } else {
    //         balon_res.innerHTML='Wow! Your tentative failed!'
    //     }
    // })
})

armario2.addEventListener('mouseout', ()=>{
    del_msg()
})