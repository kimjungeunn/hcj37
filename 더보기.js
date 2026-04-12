document.querySelectorAll('.toggle').forEach((btn) => {
  // label 태그는 JS 토글에서 제외
  if (btn.tagName === 'LABEL') return

  btn.addEventListener('click', function () {
    const desc = this.nextElementSibling
    if (desc.style.display === 'none') {
      desc.style.display = 'block'
      this.textContent = '접기 ▴'
    } else {
      desc.style.display = 'none'
      this.textContent = '자세히 보기 ▾'
    }
  })
})
