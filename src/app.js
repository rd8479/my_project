const hambergerMenu=document.body.querySelector('.hambar')
const root=document.querySelector('body')
hambergerMenu.addEventListener('click',()=>{root.innerHTML+=`
    <div class="hamberMenu"></div>
    <img src="./git.svg" class="email fixed bottom-12 left-28" style="width: 30px;">
    <img src="./phone.svg" class="email fixed bottom-12 left-38" style="width: 30px;">
    <img src="./email.svg" class="email fixed bottom-12 left-48" style="width: 30px">`})
