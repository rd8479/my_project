const hambergerMenu=document.body.querySelector('.hambar')
const footer=document.querySelector('footer')
const clock=document.querySelector('.clock')
const section=document.querySelector('section')
const data=[{
    id:'1',
    sectionName:'section-name',
    batteryName1:'battery-name',
    batteryName2:'battery-name',
    batteryName3:'battery-name',
    batteryName4:'battery-name',
    batteryPercentCharge:34,
    batteryPercentDanger:64
}]
hambergerMenu.addEventListener('click',()=>{
    footer.innerHTML=`
    <div class="hamberMenu"></div>
    <img src="./git.svg" class="git fixed bottom-12 left-28" style="width: 30px;">
    <img src="./phone.svg" class="phone fixed bottom-12 left-38" style="width: 30px;">
    <img src="./email.svg" class="email fixed bottom-12 left-48" style="width: 30px">`
    const git=document.body.querySelector('.git')
    const phone=document.body.querySelector('.phone')
    const email=document.body.querySelector('.email')
    git.addEventListener('mouseover',()=>{git.setAttribute('src','./gitHover.svg')
        git.setAttribute('style','width:40px; transform: translate(-10px,0);')
    })
    git.addEventListener('mouseout',()=>{git.setAttribute('src','./git.svg')
        git.setAttribute('style','width:30px;')
    })
    phone.addEventListener('mouseover',()=>{phone.setAttribute('src','./phoneHover.svg')
    phone.setAttribute('style','width:40px; transform: translate(-5px,0);')
    })
    phone.addEventListener('mouseout',()=>{phone.setAttribute('src','./phone.svg')
    phone.setAttribute('style','width:30px;')})
    email.addEventListener('mouseover',()=>{email.setAttribute('src','./emailHover.svg')
        email.setAttribute('style','width:40px; transform: translate(10px,0);')
    })
    email.addEventListener('mouseout',()=>{email.setAttribute('src','./email.svg')
        email.setAttribute('style','width:30px;')
    })
    window.addEventListener('mouseup',(event)=>{
        if(event.target != footer && event.target.parentNode != footer){
            footer.classList.add('hidden')
        }
  })
  hambergerMenu.addEventListener('click',()=>{footer.classList.remove('hidden')})
})
function renderClock(){
    const now=new Date();
    const hour=now.getHours()
    const min=now.getMinutes()
    if(hour/10<1){
        if(min/10<1){
            clock.innerHTML=`<div class="mb-4">0${hour}:0${min}</div>`
        }
        else{
            clock.innerHTML=`<div class="mb-4">0${hour}:${min}</div>`
        }
    }
    else{
        if(min/10<1){
            clock.innerHTML=`<div class="mb-4">${hour}:0${min}</div>`
        }
        else{
            clock.innerHTML=`<div class="mb-4">${hour}:${min}</div>`
        }
    }
}
setInterval(renderClock,1000)
function renderBord(){
    
}