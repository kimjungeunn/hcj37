document.querySelectorAll('.toggle').forEach((btn) => {
  btn.addEventListener('click', function () {
    const desc = this.previousElementSibling
    if (desc.style.display === 'none') {
      desc.style.display = 'block'
      this.textContent = '접기 ▴'
    } else {
      desc.style.display = 'none'
      this.textContent = '자세히 보기 ▾'
    }
  })
})
