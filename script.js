const container = document.querySelector('#container');

for (let index = 1; index < 17; index++) {
    let div = document.createElement('div');
    div.id= `${index}`;
    container.append(div);
}