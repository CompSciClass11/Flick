const keywordInput = document.querySelector("#keyword-search");
const searchButton = document.querySelector(".search-button");
const jobCards = document.querySelectorAll(".job-card");

searchButton.addEventListener("click", function () {
    const keyword = keywordInput.value.trim().toLowerCase();

    jobCards.forEach(function (jobCard) {
        const jobText = jobCard.textContent.toLowerCase();
        const matchesKeyword = jobText.includes(keyword);

        if (matchesKeyword) {
            jobCard.hidden = false;
        } else {
            jobCard.hidden = true;
        }
    });
});