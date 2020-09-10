const container = document.querySelector('#container');

function createDivs(n){
    container.style.gridTemplateColumns= `repeat(${n}, 1fr)`;
    for (let index = 1; index <= (n*n); index++) {
        let div = document.createElement('div');
        div.id= `${index}`;
        div.classList.add('blank');
        div.classList.add('divs');
        div.addEventListener('mouseover', () => {
            div.classList.remove('blank');
            div.classList.add('colored');
        })

        container.append(div);
        
    }
}

createDivs(16);

let divs = container.querySelectorAll('div');

const button = document.querySelector('button');
button.addEventListener('click', () => {
    divs.forEach((square) => {
        square.classList.remove('colored');
        square.classList.add('blank');
    })
    let number = prompt('Enter a new size: ', 'Max. 80');
    if (number != null && number > 0 && number <= 80){
        container.textContent = '';
        createDivs(parseInt(number));
    }
    else{
        alert("Your new dimension must be a number between 1 and 80");
    }
    
})