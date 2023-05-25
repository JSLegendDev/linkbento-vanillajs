
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

function appendChildren(parent, elements) {
    for (const element of elements) {
        parent.appendChild(element)
    }
}

function linkForm() {
    const rootElement = document.createElement('div')
    rootElement.classList.add(
        'flex',
        'flex-col',
    )
    const [titleField, urlField, descriptionField] = [
        document.createElement('input'),
        document.createElement('input'),
        document.createElement('input')
    ]

    const inputStyles = [
        'bg-gray-200',
        'shadow',
        'appearance-none',
        'border', 
        'rounded',
        'w-full', 
        'py-2',
        'px-3',
        'my-3',
        'text-gray-700',
        'leading-tight',
        'focus:outline-none',
        'focus:shadow-outline'
    ]
    titleField.placeholder = 'Enter a title for the link'
    titleField.classList.add(...inputStyles)
    urlField.placeholder = 'Enter the url for the link'
    urlField.classList.add(...inputStyles)
    descriptionField.placeholder = 'Write a short description for the link'
    descriptionField.classList.add(...inputStyles)
    
    appendChildren(rootElement, [
        titleField, 
        urlField, 
        descriptionField,
        button('Add link', () => console.log('link added'))
    ])

    return rootElement
}

function main() {
    const app = document.getElementById('app')
    app.appendChild(linkForm())
}

main()