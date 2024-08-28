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

let alertShown = true

btn_stats.map((el)=>{
    el.addEventListener('click', (evt)=>{
        el.classList.toggle('selected')
    })
})

let card
const capturarId = (evt) => {
    card = evt.currentTarget.id
    console.log(card)
}

document.getElementById("btn-hacker").addEventListener("click", capturarId);
document.getElementById("btn-staff").addEventListener("click", capturarId);
document.getElementById("btn-talkative").addEventListener("click", capturarId);

const msg = (mensagem) => {
    balon_res.style.visibility = 'visible'
    balon_res.innerHTML=mensagem
}

const del_msg = () => {
    balon_res.style.visibility = 'hidden'
}

security1.addEventListener('mouseover', ()=>{
    msg('Why so much noise? Why did not I choose to be a programmer?!')
    security1.addEventListener('click',()=>{
        if (Number(res_dices.innerHTML) > 18 && card == 'btn-talkative') {
            security1.style.visibility = 'hidden'
        } else {
            balon_res.innerHTML='Wow! Your tentative failed!'
        }
    })
})

security1.addEventListener('mouseout', ()=>{
    del_msg()
})

security2.addEventListener('mouseover', ()=>{
    msg('Where are my clothes?')
    security2.addEventListener('click',()=>{
        if (Number(res_dices.innerHTML) > 18 && card == 'btn-talkative') {
            security2.style.visibility = 'hidden'
        } else {
            balon_res.innerHTML='Wow! Your tentative failed!'
        }
    })
})

security2.addEventListener('mouseout', ()=>{
    del_msg()
})

security3.addEventListener('mouseover', ()=>{
    msg('Cronch! zzZ!')
    security3.addEventListener('click',()=>{
        if (Number(res_dices.innerHTML) > 18 && card == 'btn-talkative') {
            security3.style.visibility = 'hidden'
        } else {
            balon_res.innerHTML='Wow! Your tentative failed!'
        }
    })
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
    armario1.addEventListener('click',()=>{
        if (Number(res_dices.innerHTML) > 16 && card == 'btn-staff') {
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
})

armario1.addEventListener('mouseout', ()=>{
    del_msg()
})

armario2.addEventListener('mouseover', ()=>{
    msg('Armário 2')
    armario2.addEventListener('click',()=>{
        if (Number(res_dices.innerHTML) > 16 && card == 'btn-staff') {
            armario2.src = '../../img/objetos/armario/armario-quebrado.png'
            if (alertShown) {
                alert('Congratulations! You have a shirts the guards.')
                alertShown = false

                setTimeout(function (){
                    alertShown = true
                }, 2000)
            }
        } else {
            balon_res.innerHTML='Wow! Your tentative failed!'
        }
    })
})

armario2.addEventListener('mouseout', ()=>{
    del_msg()
})