console.log('Hello Tree!')

const list = document.querySelector('.list')
const tree = document.querySelector('.tree')
let coeff = 1


function onAddClick() {
  const allItems = document.querySelectorAll('.item')
  const previousLi = allItems[allItems.length - 1] 
  const allNs = previousLi.querySelectorAll('.item__n')
  const previousNumber = allNs[allNs.length - 1].textContent

  const newLi = previousLi.cloneNode(true)
  list.appendChild(newLi)
  newLi.querySelector('.item__n').textContent = Number(previousNumber) + 1
  
}

function onFillTree() {
  console.log('fill pressed')
  if (coeff >= 3) return false
  else if (coeff >= 1 && coeff <= 3) {
    coeff += 0.15;
    
    tree.style.transform = `scale(${coeff})`
  }
}

const addBtn = document.querySelector('.add-item button')
const fillBtn = document.querySelector('.fill-tree button')

addBtn.addEventListener('click', onAddClick)
fillBtn.addEventListener('click', onFillTree)
