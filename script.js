
const allQuestions = document.querySelectorAll('.accordion')
const allAnswers = document.querySelectorAll('.accordionAnswers')
allQuestions.forEach((curr, index) => {
    curr.addEventListener('click', () => {
        allOff()
     if(curr.querySelector('.accordionAnswer').style.display == 'none'){
        curr.querySelector('.accordionAnswer').style.display = 'block'
        curr.querySelector('.accordionQuestion').style.fontWeight = 'Bolder'
        curr.querySelector('.arrow').style.transform = 'rotate(180deg)'
      }
      else{
        curr.querySelector('.accordionAnswer').style.display = 'none'
        curr.querySelector('.accordionQuestion').style.fontWeight = '500'
        curr.querySelector('.arrow').style.transform = 'rotate(0deg)'
      }
    })
})

const allOff = () => {
  allAnswers.forEach((curr) => {
    curr.style.display = 'none'
  })
}


