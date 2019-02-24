let inputText = document.getElementById('inputText');
let addText = document.getElementById('add');
let container = document.querySelector('#container');
let list = container.children;
let dragSrcEl = null;
const zero = 0;
const one = 1;
let limit = document.body.children[zero].children[one];
const maxCount = 10;

limit.setAttribute('hidden', 'true');

function validAdd() {
    if (inputText.value === '' || list.length === maxCount) {
        addText.setAttribute('disabled', 'disabled');
    } else {
        addText.removeAttribute('disabled');
    }
}

function validInputText() {
    if (list.length === maxCount) {
        inputText.setAttribute('disabled', 'disabled');
        limit.removeAttribute('hidden');
    } else {
        inputText.removeAttribute('disabled');
        limit.setAttribute('hidden', 'true');
    }
}

function createItem() {
    let item = document.createElement('div');
    item.className = 'items';
    item.draggable = 'true';
    
    let check = document.createElement('i');
    check.className = 'input material-icons';
    check.innerText = 'check_box_outline_blank';
    
    let p = document.createElement('p');
    
    let iconDel = document.createElement('i');
    iconDel.className = 'del material-icons';
    iconDel.innerText = 'delete';
    
    let label = document.createElement('label');
    label.appendChild(check);
    label.appendChild(p);
    
    item.appendChild(label);
    item.appendChild(iconDel);

    return item;
}

function addItem() {
    let item = createItem();
    let p = item.children[zero].children[one];
    
    p.innerHTML = inputText.value;
    inputText.value = '';
    addText.setAttribute('disabled', 'disabled');
    
    container.appendChild(item);
    
    validInputText();
    initEvents(item);
}

function delItem(event) {
    let k = -1;
    for (let i = 0; i < list.length; i++) {
        if (list[i].children[one] === event.target) {
            k = i;
        } 
    }
    
    if (k >= zero) {
        container.removeChild(list[k]);
    }
    
    validInputText();
}

function disabledChek(event) {
    let k = -1;
    for (let i = 0; i < list.length; i++) {
        if (list[i].children[zero].children[zero] === event.target) {
            k = i;
        } 
    }
    
    if (k >= zero) {
        event.target.innerText = 'done';
    }
}

document.addEventListener('keyup', validAdd);
addText.addEventListener('click', addItem);
container.addEventListener('click', delItem);
container.addEventListener('click', disabledChek);

function handleDragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if(e.preventDefault) {
        e.preventDefault();
    }
    
    return false;
}

function handleDrop(e) {
    if(e.preventDefault) {
        e.preventDefault();
    }
    
    if (dragSrcEl !== this && dragSrcEl !== null) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    
    return false;
}

function initEvents(e) {
        e.addEventListener('dragstart', handleDragStart, false); 
        e.addEventListener('dragover', handleDragOver, false);
        e.addEventListener('drop', handleDrop, false);
}
