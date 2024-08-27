const btn_04 = document.querySelector('#btn-04')
const btn_06 = document.querySelector('#btn-06')
const btn_10 = document.querySelector('#btn-10')
const btn_20 = document.querySelector('#btn-20')
const res = document.querySelector('#res-dices')

function menu_roll_dices(value_dice){
    function roll_dice04(){
        let value_dice04 = Math.floor(Math.random()*5)
        if (value_dice04 == 0){
            value_dice04 += 1
        }
        res.innerHTML=value_dice04
        // console.log(`Value dice is ${value_dice04}`)
    }

    function roll_dice06(){
        let value_dice06 = Math.floor(Math.random()*7)
        if (value_dice06 == 0){
            value_dice06 += 1
        }
        res.innerHTML=value_dice06
        // console.log(`Value dice is ${value_dice06}`)
    }

    function roll_dice10(){
        let value_dice10 = Math.floor(Math.random()*11)
        if (value_dice10 == 0){
            value_dice10 += 1
        }
        res.innerHTML=value_dice10
        // console.log(`Value dice is ${value_dice10}`)
    }

    function roll_dice20(){
        let value_dice20 = Math.floor(Math.random()*21)
        if (value_dice20 == 0){
            value_dice20 += 1
        }
        res.innerHTML=value_dice20
        // console.log(`Value dice is ${value_dice20}`)
    }

    // console.log('WHAT DICE TO ROLL? ')
    // console.log('DICE 04 [1]')
    // console.log('DICE 06 [2]')
    // console.log('DICE 10 [3]')
    // console.log('DICE 20 [4]')
    // console.log('EXIT -- [0]')

    let option = value_dice
    // console.log('')
    if (option == 1){
        roll_dice04()
    } else if (option == 2){
        roll_dice06()
    } else if (option == 3){
        roll_dice10()
    } else if (option == 4){
        roll_dice20()
    }
}

btn_04.addEventListener('click', (evt)=>{
    menu_roll_dices(1)
})

btn_06.addEventListener('click', (evt)=>{
    menu_roll_dices(2)
})

btn_10.addEventListener('click', (evt)=>{
    menu_roll_dices(3)
})

btn_20.addEventListener('click', (evt)=>{
    menu_roll_dices(4)
})