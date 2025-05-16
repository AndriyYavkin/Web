// Ініціалізація слайдера
const myCarousel = new bootstrap.Carousel('#mainSlider', {
  interval: 4000,
  wrap: true
})

// Валідація форми
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault()
    const form = e.target
    let isValid = true

    form.querySelectorAll('[required]').forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error')
            isValid = false
        } else {
            input.classList.remove('error')
        }
    })

    if (isValid) {
        alert('Дякуємо за ваше повідомлення!')
        bootstrap.Modal.getInstance(document.getElementById('feedbackModal')).hide()
    }
})