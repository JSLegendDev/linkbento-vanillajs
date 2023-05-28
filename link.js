function main() {
    
    const bentoContent = document.getElementById('bento-content')
    const data = window.location.href.split('?data=')[1]
    const bentoData = JSON.parse(decodeURIComponent(window.atob(data)))
    console.log(bentoData)
    for (const link of bentoData) {

    }
}

main()