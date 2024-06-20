window.onload = () =>  {
  let count = 0 

  let intervalId
  
  function runTimer() {
    if(!intervalId) {
      intervalId = setInterval(incrementTimer, 1000)
    }
  }

  function incrementTimer() {
    let timer = document.querySelector('#counter')
    count++
    updateCounter()
    
  }
  runTimer()
  console.log(runTimer())

  function updateCounter() {
    document.querySelector('#counter').textContent = count 
  }


  document.querySelector('#minus').addEventListener('click', (e) => {
    e.preventDefault()
    count--
    updateCounter()
  })
      
  document.querySelector('#plus').addEventListener('click', (e) => {
    e.preventDefault()
    count++
    updateCounter()
  })


  document.getElementById("pause").addEventListener("click", (e) => {
     clearInterval(intervalId)
     intervalId = null
    })
  
}

