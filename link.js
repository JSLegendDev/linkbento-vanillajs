function main() {
    
    const bentoContainer = document.getElementById('bento-container')
    const data = window.location.href.split('?data=')[1]
    let bentoData
    try {
        bentoData = JSON.parse(decodeURIComponent(window.atob(data)))
    } catch {
        bentoContainer.innerText = 'You entered an invalid url.'
        return
    }
    const bentoMetaData = bentoData.shift()
    
    const bento = {
        title: document.createElement('h1'),
        author: document.createElement('h3'),
        description: document.createElement('p'),
        linksContainer: document.createElement('div')
    }

    bento.title.innerText = bentoMetaData.bentoTitle
    bento.author.innerText = 'Author : ' + bentoMetaData.bentoAuthor
    bento.description.innerText = bentoMetaData.bentoDescription

    for (const link of bentoData) {
        const linkCard = {
            container: document.createElement('div'),
            title: document.createElement('h4'),
            url: document.createElement('a'),
            description: document.createElement('p')
        }

        linkCard.title.innerText = link.titleField
        linkCard.url.innerText = link.urlField
        linkCard.url.href = link.urlField
        linkCard.description.innerText = link.descriptionField
        
        linkCard.container.appendChild(linkCard.title)
        linkCard.container.appendChild(linkCard.url)
        linkCard.container.appendChild(linkCard.description)

        bento.linksContainer.appendChild(linkCard.container)
    }

    bentoContainer.appendChild(bento.title)
    bentoContainer.appendChild(bento.author)
    bentoContainer.appendChild(bento.description)
    bentoContainer.appendChild(bento.linksContainer)
}

main()