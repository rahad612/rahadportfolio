document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("close-modal");
    const modalDetails = document.getElementById("modal-details");

    const projectDetails = {
        shopymerce: `
            <h3>Shopymerce</h3>
            <p>An innovative eCommerce platform offering personalized shopping recommendations and secure payment integrations.</p>
            <a href="https://github.com/your-repo/shopymerce" target="_blank">View Code on GitHub</a>
        `,
        "time-management": `
            <h3>Time Management App</h3>
            <p>A productivity app designed to optimize task management and daily scheduling.</p>
            <a href="https://github.com/your-repo/time-management" target="_blank">View Code on GitHub</a>
        `
    };

    document.querySelectorAll(".view-project").forEach(button => {
        button.addEventListener("click", (event) => {
            const project = event.target.getAttribute("data-project");
            modalDetails.innerHTML = projectDetails[project];
            modal.classList.remove("hidden");
        });
    });

    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    });
});
