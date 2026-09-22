const savedJobsList = document.querySelector("#saved-jobs-list");
const noSavedJobsMessage = document.querySelector("#no-saved-jobs");
const clearButton = document.querySelector("#clear-saved-jobs");

const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

if (savedJobs.length > 0) {
    noSavedJobsMessage.hidden = true;

    savedJobs.forEach(function (job) {
        savedJobsList.innerHTML += `
            <article class="job-card">
                <h3>${job.title}</h3>

                <p>${job.company}</p>

                <div class="job-details">
                    <span class="job-detail">
                        <strong>Location:</strong> ${job.location}
                    </span>

                    <span class="job-detail">
                        <strong>Type:</strong> ${job.type}
                    </span>
                </div>
            </article>
        `;
    });
}

clearButton.addEventListener("click", function () {
    localStorage.removeItem("savedJobs");

    window.location.reload();
});