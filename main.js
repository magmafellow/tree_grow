console.log('Hello Tree!')

const list = document.querySelector('.list')
const tree = document.querySelector('.tree')
let allInputs = document.querySelectorAll('input')
let coeff = 1

allInputs.forEach((item) => {
  item.addEventListener('change', onChangeHandler)
})

function onAddClick() {
  const allItems = document.querySelectorAll('.item')
  const previousLi = allItems[allItems.length - 1]
  const allNs = previousLi.querySelectorAll('.item__n')
  const previousNumber = allNs[allNs.length - 1].textContent

  const newLi = previousLi.cloneNode(true)
  newLi.querySelector('.item__n').textContent = Number(previousNumber) + 1
  list.appendChild(newLi)

  allInputs = document.querySelectorAll('input')
  console.log(allInputs)
  allInputs.forEach((item) => {
    item.addEventListener('change', onChangeHandler)
  })
}

function onChangeHandler(e) {
  let total = 0;
  allInputs.forEach((item) => {
    total += Number(item.value)
  })
  console.log(total)
  if (total === 100) {
    coeff = 2.41
    tree.style.transform = `scale(${coeff})`
  } else {
    coeff = 1
    tree.style.transform = `scale(${coeff})`
  }
}

function onFillTree() {
  console.log('fill pressed')
  if (coeff >= 2.41) return false
  else if (coeff >= 1 && coeff <= 2.41) {
    coeff += 0.15

    if (coeff > 2.41) coeff = 2.41

    tree.style.transform = `scale(${coeff})`
  }
}

const addBtn = document.querySelector('.add-item button')
const fillBtn = document.querySelector('.fill-tree button')

addBtn.addEventListener('click', onAddClick)
fillBtn.addEventListener('click', onFillTree)
