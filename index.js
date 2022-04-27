const codes = document.querySelectorAll('.code')
let enteredDigits = ''

codes[0].focus()

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = ''
      if (idx === codes.length - 1) {
        codes[idx].focus()
      } else {
        setTimeout(() => codes[idx + 1].focus(), 10)
      }
    }
  })
})