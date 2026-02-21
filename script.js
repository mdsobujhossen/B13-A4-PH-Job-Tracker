const interviewList = []
const rejectedList = []



// step 1 create interview list by clicked interview button

const allCardSection = document.querySelector("#all-cards-section")
allCardSection.addEventListener("click", function(event){
    const parentNode = event.target.parentNode.parentNode.parentNode
    console.log(parentNode)
    if(event.target.classList.contains("interview-btn")){
        const jobName = parentNode.querySelector(".job-name ").innerText
        const jobName = parentNode.querySelector(".job-name ").innerText
        console.log(jobName)
        interviewList.push()
    }
})