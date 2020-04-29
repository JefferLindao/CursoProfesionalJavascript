const url = 'https://images.pexels.com/photos/974470/nature-stars-milky-way-galaxy-974470.jpeg?q=100'
const img = document.getElementById('huge-image')
const loadButton = document.getElementById('load')
const stopButton = document.getElementById('stop')
let controller

function startLoanding() {
    loadButton.disabled = true
    loadButton.innerText = 'Loading...'
    stopButton.disabled = false
}

function stopLoading() {
    loadButton.disabled = false
    loadButton.innerHTML = 'Load HUGE Image'
    stopButton.disabled = true
}

loadButton.onclick = async function() {
    startLoanding()
    controller = new AbortController()
    try {
        const response = await fetch(url, { sinal: controller.signal })
        const blob = await response.blob()
        const imgUrl = URL.createObjectURL(blob)
        img.src = imgUrl
    } catch (error) {
        console.log(error.message)
    }
    stopLoading()
}

stopButton.onclick = function() {
    controller.abort()
    stopLoading()
}