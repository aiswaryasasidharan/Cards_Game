const card = document.querySelectorAll('.box')
const front = document.querySelectorAll('.front')
const container = document.querySelector('.container')
const score = document.querySelector('.score span')

//click and suffle
suffleImg()
click()

//clicking
function click(){

    for(let i =0; i<card.length; i++)
    {
        front[i].classList.add('open')

        setInterval(() => {
            front[i].classList.remove('open')
        }, 1000);

        card[i].addEventListener('click' ,()=>{

            front[i].classList.add('flip')
           const filpCard = document.querySelectorAll('.flip')

            if(filpCard.length ==2){

                container.style.pointerEvents ='none'
                
                setInterval(() => {
                    
                    container.style.pointerEvents ='all'
                }, 1000);
 //matching view
                match(filpCard[0] , filpCard[1])
            }
        })
    }
}
//suffle
function suffleImg()
{
    card.forEach(b=>{

        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)

        b.style.order = num[random]
    })
}
//matching images
function match(card1 , card2){

    if(card1.dataset.index == card2.dataset.index){
//score 
        score.innerHTML = parseInt(score.innerHTML) + 1
       
        card1.classList.remove('flip') 
        card2.classList.remove('flip') 

        card1.classList.add('match')
        card2.classList.add('match')

    }else{

        setTimeout(() => {
            
            card1.classList.remove('flip') 
            card2.classList.remove('flip') 
        }, 1000);
    }
}