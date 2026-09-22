const keywordInput = document.querySelector("#keyword-search");
const locationInput = document.querySelector("#location-search");
const searchButton = document.querySelector(".search-button");
const jobCards = document.querySelectorAll(".job-card");

function searchJobs() {
    const keyword = keywordInput.value.trim().toLowerCase();
    const location = locationInput.value.trim().toLowerCase();

    jobCards.forEach(function (jobCard) {
        const jobText = jobCard.textContent.toLowerCase();
        const jobLocation = jobCard.dataset.location.toLowerCase();

        const matchesKeyword = jobText.includes(keyword);
        const matchesLocation = jobLocation.includes(location);

        const matchesSearch = matchesKeyword && matchesLocation;

        jobCard.hidden = !matchesSearch;
    });
}


searchButton.addEventListener("click", searchJobs);


const searchParams = new URLSearchParams(window.location.search);

const homeKeyword = searchParams.get("keyword");
const homeLocation = searchParams.get("location");


if (homeKeyword !== null || homeLocation !== null) {
    keywordInput.value = homeKeyword || "";
    locationInput.value = homeLocation || "";

    searchJobs();
}



const jobDialog = document.querySelector("#job-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogCompany = document.querySelector("#dialog-company");
const dialogLocation = document.querySelector("#dialog-location");
const dialogType = document.querySelector("#dialog-type");
const dialogDescription = document.querySelector("#dialog-description");
const closeDialogButton = document.querySelector(".close-dialog");

function openJobDialog(jobCard) {
    dialogTitle.textContent = jobCard.dataset.title;
    dialogCompany.textContent = jobCard.dataset.company;
    dialogLocation.textContent = jobCard.dataset.location;
    dialogType.textContent = jobCard.dataset.type;
    dialogDescription.textContent = jobCard.dataset.description;

    jobDialog.showModal();
}

jobCards.forEach(function (jobCard) {
    jobCard.addEventListener("click", function () {
        openJobDialog(jobCard);
    });
});

closeDialogButton.addEventListener("click", function () {
    jobDialog.close();
});