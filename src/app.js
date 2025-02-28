const hambergerMenu = document.body.querySelector('.hambar')
const footer = document.querySelector('footer')
const clock = document.querySelector('.clock')
const section = document.querySelector('section')
function findBatteryCharge(sectionId,id,dataBase){
  return dataBase[sectionId-1] [('battery'+String(id))].charge
}
const dataBase = [{
  id: '1',
  sectionName: 'section-name',
  hid:false,
  battery1: {
    id: '1',
    name: 'battery-name',
    charge: 34,
    denger: 64
  },
  battery2: {
    id: 2,
    name: 'battery-name',
    charge: 56,
    denger: 32
  },
  battery3: {
    id: 3,
    name: 'battery-name',
    charge: 22,
    denger: 36,
  },
  battery4: {
    id: 4,
    name: 'battery-name',
    charge: 87,
    denger: 59
  },
},{
  id: '2',
  sectionName: 'section-name',
  hid:false,
  battery1: {
    id: '1',
    name: 'battery-name',
    charge: 34,
    denger: 64
  },
  battery2: {
    id: 2,
    name: 'battery-name',
    charge: 56,
    denger: 32
  },
  battery3: {
    id: 3,
    name: 'battery-name',
    charge: 22,
    denger: 36,
  },
  battery4: {
    id: 4,
    name: 'battery-name',
    charge: 87,
    denger: 59
  },
}]
hambergerMenu.addEventListener('click', () => {
  footer.innerHTML = `
    <div class="hamberMenu"></div>
    <img src="./git.svg" class="git fixed bottom-12 left-28" style="width: 30px;">
    <img src="./phone.svg" class="phone fixed bottom-12 left-38" style="width: 30px;">
    <img src="./email.svg" class="email fixed bottom-12 left-48" style="width: 30px">`
  const git = document.body.querySelector('.git')
  const phone = document.body.querySelector('.phone')
  const email = document.body.querySelector('.email')
  git.addEventListener('mouseover', () => {
    git.setAttribute('src', './gitHover.svg')
    git.setAttribute('style', 'width:40px; transform: translate(-10px,0);')
  })
  git.addEventListener('mouseout', () => {
    git.setAttribute('src', './git.svg')
    git.setAttribute('style', 'width:30px;')
  })
  phone.addEventListener('mouseover', () => {
    phone.setAttribute('src', './phoneHover.svg')
    phone.setAttribute('style', 'width:40px; transform: translate(-5px,0);')
  })
  phone.addEventListener('mouseout', () => {
    phone.setAttribute('src', './phone.svg')
    phone.setAttribute('style', 'width:30px;')
  })
  email.addEventListener('mouseover', () => {
    email.setAttribute('src', './emailHover.svg')
    email.setAttribute('style', 'width:40px; transform: translate(10px,0);')
  })
  email.addEventListener('mouseout', () => {
    email.setAttribute('src', './email.svg')
    email.setAttribute('style', 'width:30px;')
  })
  window.addEventListener('mouseup', (event) => {
    if (event.target != footer && event.target.parentNode != footer) {
      footer.classList.add('hidden')
    }
  })
  hambergerMenu.addEventListener('click', () => { footer.classList.remove('hidden') })
})
function renderClock() {
  const now = new Date();
  const hour = now.getHours()
  const min = now.getMinutes()
  if (hour / 10 < 1) {
    if (min / 10 < 1) {
      clock.innerHTML = `<div class="mb-4">0${hour}:0${min}</div>`
    }
    else {
      clock.innerHTML = `<div class="mb-4">0${hour}:${min}</div>`
    }
  }
  else {
    if (min / 10 < 1) {
      clock.innerHTML = `<div class="mb-4">${hour}:0${min}</div>`
    }
    else {
      clock.innerHTML = `<div class="mb-4">${hour}:${min}</div>`
    }
  }
}
function renderSection(){
  const tamplate=dataBase.map((item)=>{
    return `
      <div class="drive${item.id} flex flex-col items-center">
        <div onclick="renderBord(${item.id},${item.hid})" class="driveBar mt-6 flex justify-between bg-amber-50 rounded-[12px] w-[272px] mb-10 items-center cursor-pointer">
          <div class=" h-[28px] border-r-2 px-3 flex items-center">
            <img src="./gitHover.svg" alt="" width="24px">
          </div>
          <div class="text-[18px]">section-name</div>
          <div class="text-2xl rotate-90 ">></div>
          <div class=""></div>
        </div>
      </div>                
`
  }).join('')
  section.innerHTML=tamplate
}
renderSection()
setInterval(renderClock, 1000)
function renderBord(id,hid) {
  let drive=document.querySelector(`.drive${id}`)
  console.log(drive)
  drive.innerHTML+= `
        <div class="lineTo${id} relative w-full h-[200px] left-[50%] -translate-x-[50%] ">
          <hr class="bg-red-500 w-45 h-1.5 opacity-30 rotate-90 absolute top-12 left-8">
          <hr class="bg-red-500 w-10 h-1.5 opacity-30  absolute top-34 left-21">

          <hr class="bg-[#FF6500] w-45 h-1.5 opacity-30 rotate-90 absolute top-12 left-27">
          <hr class="bg-[#ff6600] w-10 h-1.5 opacity-30  absolute top-34 left-49">

          <hr class="bg-[#67ecb2] w-20 h-1.5 opacity-30 rotate-90 absolute -top-0.5 left-34">
          <hr class="bg-[#67ECB2] w-15 h-1.5 opacity-30  absolute top-9 left-43">
          <hr class="bg-[#183C62] w-20 h-1.5 opacity-30 rotate-90 absolute -top-0.5 left-28">
          <hr class="bg-[#183C62] w-17 h-1.5 opacity-30  absolute top-9 left-21.5">
          <div class="absolute left-0 -top-4">
            <canvas class="w-[90px] " id="${id}1"></canvas>
          </div>
          <div class="charge1 absolute -top-7 text-white text-[13px] left-1"><p>battery-name</p></div>
          <div class="charge1 absolute top-5 text-white left-7.5"><p>34%</p></div>

          <div class="absolute left-56.5 -top-4">
            <canvas class="w-[90px] " id="${id}2"></canvas>
          </div>
          <div class="charge2 absolute -top-7 text-white text-[13px] left-58"><p>battery-name</p></div>
          <div class="charge2 absolute top-5 text-white left-64"><p>56%</p></div>

          <div class="absolute left-57 top-25">
            <canvas class="w-[90px]" id="${id}3"></canvas>
          </div>
          <div class="charge3 absolute top-22 text-white text-[13px] left-58"><p>battery-name</p></div>
          <div class="charge3 absolute top-34 text-white left-64"><p>22%</p></div>
          <div class="absolute left-0 top-25">
            <canvas class="w-[90px] "id="${id}4"></canvas>
          </div>
          <div class="charge4 absolute top-22 text-white text-[13px] left-1"><p>battery-name</p></div>
          <div class="charge4 absolute top-34 text-white left-7.5"><p>87%</p></div>
  `
  if(dataBase[id-1].hid){
    [...document.querySelectorAll(`.lineTo${id}`)].map(item=>{
      item.remove()
    })
    dataBase[id-1].hid=!dataBase[id-1].hid
  }
  else{
    dataBase[id-1].hid=!dataBase[id-1].hid
    renderChart(id)
  }
}
function renderChart(id){
  const ctx1 = document.getElementById(`${id}1`)
  const ctx2 = document.getElementById(`${id}2`)
  const ctx3 = document.getElementById(`${id}3`)
  const ctx4 = document.getElementById(`${id}4`)
  const data1 = {
    datasets: [{
      data: [findBatteryCharge(2,1,dataBase), 100-findBatteryCharge(2,1,dataBase)],
      backgroundColor: [
        '#183C62',
        '#183c624b'
      ],
    }]
  }
  new Chart(ctx1, {
    type: 'doughnut',
    data: data1,
    options: {
      plugins: {
        tooltip: {
          enabled: false
        }
      }
    }
  })
  const data2 = {
    datasets: [{
      data: [findBatteryCharge(2,2,dataBase), 100 -findBatteryCharge(2,2,dataBase)],
      backgroundColor: [
        '#67ECB2',
        '#67ecb24d'
      ],
    }]
  }
  new Chart(ctx2, {
    type: 'doughnut',
    data: data2,
    options: {
      plugins: {
        tooltip: {
          enabled: false
        }
      }
    }
  })
  const data3 = {
    datasets: [{
      data: [findBatteryCharge(2,3,dataBase), 100 -findBatteryCharge(2,3,dataBase)],
      backgroundColor: [
        '#FF6500',
        '#ff66004d'
      ],
    }]
  }
  new Chart(ctx3, {
    type: 'doughnut',
    data: data3,
    options: {
      plugins: {
        tooltip: {
          enabled: false
        }
      }
    }
  })
  const data4 = {
    datasets: [{
      data: [findBatteryCharge(2,4,dataBase), 100-findBatteryCharge(2,4,dataBase)],
      backgroundColor: [
        '#fb2c36',
        '#fa32394d'
      ],
    },
    ]
  }
  new Chart(ctx4, {
    type: 'doughnut',
    data: data4,
    options: {
      plugins: {
        tooltip: {
          enabled: false
        }
      }
    }
  })
}
