const interviewList = []
const rejectedList = []


// counter board
const total = document.getElementById('total')
const interview = document.getElementById('interview')
const rejected = document.getElementById('rejected')


const allCardSection = document.querySelector("#all-cards-section")
const filterSection = document.getElementById("filter-section")
console.log(allCardSection.children.length)
// counter calculation
total.innerText = allCardSection.children.length
function calculationCounter() {
    interview.innerText = interviewList.length
    rejected.innerText = rejectedList.length
}
// step 1 create interview list by clicked interview button

allCardSection.addEventListener("click", function (event) {
    const parentNode = event.target.parentNode.parentNode.parentNode
    console.log(parentNode)
    if (event.target.classList.contains("interview-btn")) {
        const jobName = parentNode.querySelector(".job-name ").innerText
        const jobType = parentNode.querySelector(".job-type ").innerText
        const jobBenefit = parentNode.querySelector(".job-benefit ").innerText
        const status = parentNode.querySelector(".job-status ").innerText
        const jobDescription = parentNode.querySelector(".description ").innerText

        const cardInfo = {
            jobName,
            jobType,
            jobBenefit,
            status,
            jobDescription
        }
        const jobNameExist = interviewList.find(item => item.jobName == cardInfo.jobName)
        if (!jobNameExist) {
            interviewList.push(cardInfo)
            cardInfo.status = "Interview"
            calculationCounter()
        }

    }
    else if (event.target.classList.contains("rejected-btn")) {
        const jobName = parentNode.querySelector(".job-name ").innerText
        const jobType = parentNode.querySelector(".job-type ").innerText
        const jobBenefit = parentNode.querySelector(".job-benefit ").innerText
        const status = parentNode.querySelector(".job-status ").innerText
        const jobDescription = parentNode.querySelector(".description ").innerText

        const cardInfo = {
            jobName,
            jobType,
            jobBenefit,
            status,
            jobDescription
        }
        const jobNameExist = rejectedList.find(item => item.jobName == cardInfo.jobName)
        if (!jobNameExist) {
            rejectedList.push(cardInfo)
            cardInfo.status = "rejected"
            calculationCounter()
        }
    }
    console.log(rejectedList)
})


// step 2 toggle style on the filter button
const allFilterBtn = document.getElementById("all-filter-btn")
const interviewFilterBtn = document.getElementById("interview-filter-btn")
const rejectedFilterBtn = document.getElementById("rejected-filter-btn")
function filtering(id) {
    allFilterBtn.classList.remove("btn-primary")
    interviewFilterBtn.classList.remove("btn-primary")
    rejectedFilterBtn.classList.remove("btn-primary")

    const selected = document.getElementById(id)
    selected.classList.add("btn-primary")

    if (id == "interview-filter-btn") {
        allCardSection.classList.add("hidden")
        filterSection.classList.remove("hidden")
        renderInterview()
    }
    else if(id == "rejected-filter-btn"){
        allCardSection.classList.add("hidden")
        filterSection.classList.remove("hidden")
        renderRejected()
    }
    else if(id == "all-filter-btn"){
        allCardSection.classList.remove("hidden")
        filterSection.classList.add("hidden")
    }


}



// creating interview filter section carddynamicly

function renderInterview() {
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
                <button class="btn rounded-full shadow w-8 h-8"><i class="fa-solid fa-trash"></i></button>
            </div>
        
        `

        filterSection.appendChild(div)
    }
}


// creating rejected filter section card dynamicly

function renderRejected() {
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
                <button class="btn rounded-full shadow w-8 h-8"><i class="fa-solid fa-trash"></i></button>
            </div>
        
        `

        filterSection.appendChild(div)
    }
}
