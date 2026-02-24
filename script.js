let interviewList = []
let rejectedList = []
let curentstatus = "all"


// counter board
const total = document.getElementById('total')
const interview = document.getElementById('interview')
const rejected = document.getElementById('rejected')

// jobs counter 
let interviewCount = document.getElementById("interview-count")
let rejectedCount = document.getElementById("rejected-count")
const Jobcounter = document.getElementById("total-job-counter")

const allCardSection = document.querySelector("#all-cards-section")
console.log(allCardSection.childNodes)
const mainSection = document.querySelector("main")
const filterSection = document.getElementById("filter-section")

// optional all cards
const allCards = document.getElementsByClassName("job-card")
console.log(allCards)

const emptyCard = document.getElementById("empty-card")
total.innerText = allCardSection.children.length
Jobcounter.innerText = allCardSection.children.length + " jobs"
// counter calculation
function calculationCounter() {
    interview.innerText = interviewList.length
    rejected.innerText = rejectedList.length

    // job counter
    interviewCount.innerText = interviewList.length + " of"
    rejectedCount.innerText = rejectedList.length + " of"
    Jobcounter.innerText = allCardSection.children.length + " jobs"

    total.innerText = allCardSection.children.length
}




const allFilterBtn = document.getElementById("all-filter-btn")
const interviewFilterBtn = document.getElementById("interview-filter-btn")
const rejectedFilterBtn = document.getElementById("rejected-filter-btn")

// step 2 toggle style on the filter button
function filtering(id) {
    allFilterBtn.classList.remove("btn-primary")
    interviewFilterBtn.classList.remove("btn-primary")
    rejectedFilterBtn.classList.remove("btn-primary")

    curentstatus = id

    const selected = document.getElementById(id)
    selected.classList.add("btn-primary")

    if (id === "interview-filter-btn") {
        allCardSection.classList.add("hidden")
        filterSection.classList.remove("hidden")
        renderInterview()

        // job counter 
        interviewCount.classList.remove("hidden")
        rejectedCount.classList.add("hidden")
    }
    else if (id === "rejected-filter-btn") {
        allCardSection.classList.add("hidden")
        filterSection.classList.remove("hidden")
        renderRejected()

        // job counter 
        interviewCount.classList.add("hidden")
        rejectedCount.classList.remove("hidden")


    }
    else if (id === "all-filter-btn") {
        allCardSection.classList.remove("hidden")
        filterSection.classList.add("hidden")

        // job counter 
        interviewCount.classList.add("hidden")
        rejectedCount.classList.add("hidden")

        // hide empty job card
        emptyCard.innerHTML = ""
    }


}







// step 1 create interview list by clicked interview button

mainSection.addEventListener("click", function (event) {
    const parentNode = event.target.parentNode.parentNode.parentNode
    //  console.log(event.target)
    if (event.target.classList.contains("interview-btn")) {
        const jobName = parentNode.querySelector(".job-name ").innerText
        const jobType = parentNode.querySelector(".job-type ").innerText
        const jobBenefit = parentNode.querySelector(".job-benefit ").innerText
        const status = parentNode.querySelector(".job-status ")
        const jobDescription = parentNode.querySelector(".description ").innerText

        const cardInfo = {
            jobName,
            jobType,
            jobBenefit,
            status:"Interview",
            jobDescription
        }
        const jobNameExist = interviewList.find(item => item.jobName == cardInfo.jobName)
        if (!jobNameExist) {
            status.innerText = "Interview"
            interviewList.push(cardInfo)
        }

        // removing this interview card if it has in the rejected card
        rejectedList = rejectedList.filter(item => item.jobName != cardInfo.jobName)


        // rendering the rejeced list after removing rejected to interview
        if (curentstatus === "rejected-filter-btn") {
            renderRejected()
        }

        calculationCounter()
    }
    else if (event.target.classList.contains("rejected-btn")) {
        const jobName = parentNode.querySelector(".job-name ").innerText
        const jobType = parentNode.querySelector(".job-type ").innerText
        const jobBenefit = parentNode.querySelector(".job-benefit ").innerText
        const status = parentNode.querySelector(".job-status ")
        const jobDescription = parentNode.querySelector(".description ").innerText

        const cardInfo = {
            jobName,
            jobType,
            jobBenefit,
            status:"Rejected",
            jobDescription
        }
        const jobNameExist = rejectedList.find(item => item.jobName == cardInfo.jobName)
        if (!jobNameExist) {
            status.innerText = "Rejected"
            rejectedList.push(cardInfo)
        }


        // removing this rejected card if it has in the interview card
        interviewList = interviewList.filter(item => item.jobName != cardInfo.jobName)


        // rendering the interview list after removing interview to rejected
        if (curentstatus === "interview-filter-btn") {
            renderInterview()
        }

        calculationCounter()
    }


    // deleting job cards 
    if (event.target.closest(".delete-btn")) {
        // const deleteBtnPrentNode = event.target.parentNode.parentNode.parentNode
        const deleteBtnPrentNode = event.target.closest(".job-card")
        const 
        deleteJobName = deleteBtnPrentNode.querySelector(".job-name").innerText

        interviewList = interviewList.filter(item => item.jobName !== deleteJobName)

        rejectedList = rejectedList.filter(item => item.jobName !== deleteJobName)
        
        deleteBtnPrentNode.remove()
        calculationCounter()
    }

})






// creating interview filter section carddynamicly

function renderInterview() {
    // empty card
    emptyCard.innerHTML = ""
    if (interviewList.length <= 0) {
        emptyCard.innerHTML = `
        <div class=" bg-white rounded-md flex justify-center items-center ">
                    <div class="inner-div text-center py-15">
                        <img src="./Assets/jobs.png" alt="" class="w-25 h-25 text-center mx-auto mb-5">
                        <h2 class=" font-medium text-xl">No jobs available</h2>
                        <p class=" text-gray-500 font-medium">Check back soon for new job opportunities</p>
                    </div>
                </div>
        `
    }


    filterSection.innerHTML = ""
    for (const interview of interviewList) {
        const div = document.createElement("div")
        div.className = "job-card flex justify-between bg-white p-5 rounded-md shadow shadow-black/50"
        div.innerHTML = `
            <div class="left">
                <h2 class="job-name font-medium text-xl">${interview.jobName}</h2>
                <p class="job-type text-gray-500 font-medium">${interview.jobType}</p>
                <p class="job-benefit my-5 text-gray-500"> ${interview.jobBenefit} </p>
                <p class="job-status bg-accent/30 py-1 px-3 rounded text-black  max-w-max mb-2"> ${interview.status} </p>
                <p id="description" class="description text-gray-900 mb-5"> ${interview.jobDescription} </p>
                <div class="btn-containe space-x-3">
                    <button
                        class="interview-btn btn border-green-600 shadow shadow-green-500/50 text-green-700">Interview</button>
                    <button
                        class="rejected-btn btn border-red-600 shadow shadow-red-500/50 text-red-700">rejected</button>
                </div>
            </div>

            <div class="right">
                <button class="btn rounded-full shadow w-8 h-8"><i class="delete-btn fa-solid fa-trash"></i></button>
            </div>
        
        `

        filterSection.appendChild(div)
    }
}


// creating rejected filter section card dynamicly

function renderRejected() {

    // empty card
    emptyCard.innerHTML = ""
    if (rejectedList.length <= 0) {
        emptyCard.innerHTML = `
        <div class=" bg-white rounded-md flex justify-center items-center ">
                    <div class="inner-div text-center py-15">
                        <img src="./Assets/jobs.png" alt="" class="w-25 h-25 text-center mx-auto mb-5">
                        <h2 class=" font-medium text-xl">No jobs available</h2>
                        <p class=" text-gray-500 font-medium">Check back soon for new job opportunities</p>
                    </div>
                </div>
        `
    }

    filterSection.innerHTML = ""
    for (const rejected of rejectedList) {
        const div = document.createElement("div")
        div.className = "job-card flex justify-between bg-white p-5 rounded-md shadow shadow-black/50"
        div.innerHTML = `
            <div class="left">
                <h2 class="job-name font-medium text-xl">${rejected.jobName}</h2>
                <p class="job-type text-gray-500 font-medium">${rejected.jobType}</p>
                <p class="job-benefit my-5 text-gray-500"> ${rejected.jobBenefit} </p>
                <p class="job-status bg-accent/30 py-1 px-3 rounded text-black  max-w-max mb-2"> ${rejected.status} </p>
                <p id="description" class="description text-gray-900 mb-5"> ${rejected.jobDescription} </p>
                <div class="btn-containe space-x-3">
                    <button
                        class="interview-btn btn border-green-600 shadow shadow-green-500/50 text-green-700">Interview</button>
                    <button
                        class="rejected-btn btn border-red-600 shadow shadow-red-500/50 text-red-700">rejected</button>
                </div>
            </div>

            <div class="right">
                <button class="btn rounded-full shadow w-8 h-8"><i class="delete-btn fa-solid fa-trash"></i></button>
            </div>
        
        `

        filterSection.appendChild(div)
    }
}
