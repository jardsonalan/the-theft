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

let card
const capturarId = (evt) => {
    card = evt.currentTarget.id
    console.log(card)
}

document.getElementById("btn-hacker").addEventListener("click", capturarId);
document.getElementById("btn-staff").addEventListener("click", capturarId);
document.getElementById("btn-talktive").addEventListener("click", capturarId);

const msg = (mensagem) => {
    balon_res.style.visibility = 'visible'
    balon_res.innerHTML=mensagem
}

const del_msg = () => {
    balon_res.style.visibility = 'hidden'
}

security1.addEventListener('mouseover', ()=>{
    msg('Security 1')
    security1.addEventListener('click',()=>{
        if (Number(res_dices.innerHTML) == 6 && card == 'btn-hacker') {
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
    msg('Security 2')
})

security2.addEventListener('mouseout', ()=>{
    del_msg()
})

security3.addEventListener('mouseover', ()=>{
    msg('Security 3')
})

security3.addEventListener('mouseout', ()=>{
    del_msg()
})

atendente1.addEventListener('mouseover', ()=>{
    msg('Atendente 1')
})

atendente1.addEventListener('mouseout', ()=>{
    del_msg()
})

atendente2.addEventListener('mouseover', ()=>{
    msg('Atendente 2')
})

atendente2.addEventListener('mouseout', ()=>{
    del_msg()
})

cliente1.addEventListener('mouseover', ()=>{
    msg('Cliente 1')
})

cliente1.addEventListener('mouseout', ()=>{
    del_msg()
})

cliente2.addEventListener('mouseover', ()=>{
    msg('Cliente 2')
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