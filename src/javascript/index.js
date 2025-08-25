// Function to update the progress bar based on ID and percentage
function updateProgressBar(progressId, percentage) {
    const progressBar = document.getElementById(progressId);
    progressBar.style.width = percentage + "%";
}

// Intersection Observer to detect when the progress bars come into view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Update the progress bars when they come into view
            if (entry.target.id === "progress-html") {
                updateProgressBar("progress-html", 80);
            }
            if (entry.target.id === "progress-css") {
                updateProgressBar("progress-css", 70);
            }
            if (entry.target.id === "progress-js") {
                updateProgressBar("progress-js", 60);
            }
            if (entry.target.id === "progress-reactt") {
                updateProgressBar("progress-reactt", 65);
            }
            // Stop observing the element once the animation is triggered
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 1 });  // Trigger when 50% of the element is visible

// Start observing the progress bars
window.onload = function () {
    observer.observe(document.getElementById("progress-html"));
    observer.observe(document.getElementById("progress-css"));
    observer.observe(document.getElementById("progress-js"));
    observer.observe(document.getElementById("progress-reactt"));
}