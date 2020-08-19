function testing(div) {
    const test = document.createElement('p')
    test.innerHTML = 'testing webpack'
    div.appendChild(test)
}

function render(){
    const main = document.querySelector('#weather')
    const div = document.createElement('div')
    testing(div)
    main.appendChild(div)
}

export default render;