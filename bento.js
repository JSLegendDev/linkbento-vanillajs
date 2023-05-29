function createLinkForm() {
    const root = {
        container: document.createElement('div'),
        urlField: document.createElement('input'),
        titleField: document.createElement('input'),
        descriptionField: document.createElement('input'),
        removeButton: document.createElement('button')
    }
    root.container.classList.add('link')
    root.container.appendChild(root.removeButton)
    root.container.appendChild(root.urlField)
    root.container.appendChild(root.titleField)
    root.container.appendChild(root.descriptionField)

    root.urlField.placeholder = 'Link'
    root.urlField.name = 'url-field'
    root.titleField.placeholder = 'Title'
    root.titleField.name = 'title-field'
    root.descriptionField.placeholder = 'Description'
    root.descriptionField.name = 'description-field'
    root.removeButton.innerText = 'Remove'

    root.removeButton.addEventListener('click', () => {
        root.container.remove()
    })
 
    return root.container
}


function main() {
    const links = document.getElementById('links')
    links.appendChild(createLinkForm())

    const addButton = document.getElementById('add-button')
    addButton.addEventListener('click', (event) => {
        // because parent is form tag which will cause a refresh.
        // we want to prevent that.
        event.preventDefault()
        links.appendChild(createLinkForm())
    })

    const generateBentoLinkButton = document.getElementById('generate-bento-link')
    const generatedLink = document.getElementById('generated-link')
    generateBentoLinkButton.addEventListener('click', (event) => {
        // same reason as for the add button
        event.preventDefault()

        const links = document.getElementById('links').children
        const bentoData = [{
            bentoTitle: document.getElementById('bento-title').value,
            bentoAuthor: document.getElementById('bento-author').value,
            bentoDescription: document.getElementById('bento-description').value
        }]
        for (const link of links) {
            const linkData = {}
            for (const element of link.children) {
                if (element.name === 'url-field') {
                    linkData.urlField = element.value
                    continue
                }

                if (element.name === 'title-field') {
                    linkData.titleField = element.value
                    continue
                }

                if (element.name === 'description-field') {
                    linkData.descriptionField = element.value
                    continue
                }
            }
            bentoData.push(linkData) 
        }
        generatedLink.innerText = `${location.protocol}${location.host}/link.html?data=${window.btoa(encodeURIComponent(JSON.stringify(bentoData)))}`
    })

    const copyButton = document.getElementById('copy-button')
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(generatedLink.innerText)
        const message = document.getElementById('message')
        message.innerText = 'Link copied to clipboard!'
        setTimeout(() => message.innerText = '', 2000)
    })
}
main()