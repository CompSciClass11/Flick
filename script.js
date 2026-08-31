const keywordInput = document.querySelector("#keyword-search");
const locationInput = document.querySelector("#location-search");
const searchButton = document.querySelector(".search-button");
const jobCards = document.querySelectorAll(".job-card");

searchButton.addEventListener("click", function () {
    const keyword = keywordInput.value.trim().toLowerCase();
    const location = locationInput.value.trim().toLowerCase();

    jobCards.forEach(function (jobCard) {
        const jobText = jobCard.textContent.toLowerCase();

        const matchesKeyword = jobText.includes(keyword);
        const matchesLocation = jobText.includes(location);

        const matchesSearch = matchesKeyword && matchesLocation;

        jobCard.hidden = !matchesSearch;
    });
});