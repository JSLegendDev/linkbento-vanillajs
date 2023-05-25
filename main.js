
function button(text, onClick) {
    const domElement = document.createElement('button')
    domElement.innerText = text
    domElement.addEventListener('click', onClick)
    domElement.classList.add(
        'bg-blue-500',
        'hover:bg-blue-700',
        'text-white',
        'font-bold', 
        'py-2', 
        'px-4',
        'rounded'
    )

    return domElement
}

function main() {
    const app = document.getElementById('app')

    
    app.appendChild(button('Add Link', () => {
        console.log('text')
    }))
}

main()