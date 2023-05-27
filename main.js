



function main() {
    const linkForm = {
        root: document.createElement('div'),
        link: document.createElement('input'),
        title: document.createElement('input'),
        description: document.createElement('input'),
        addBtn: document.createElement('button')
    }

    linkForm.addBtn.innerText = 'Add link'
    linkForm.addBtn.addEventListener('click', () => {
        console.log(linkForm.link.value)
    })


    linkForm.root.appendChild(linkForm.link)
    linkForm.root.appendChild(linkForm.title)
    linkForm.root.appendChild(linkForm.description)
    linkForm.root.appendChild(linkForm.addBtn)

    document.getElementById('app').appendChild(linkForm.root)
}

main()