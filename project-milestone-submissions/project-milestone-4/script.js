"use strict";

// DOM interaction: filter the existing portfolio cards without reloading.
const projectFilter = document.querySelector("#project-filter");
if (projectFilter) {
    const cards = document.querySelectorAll(".project-card");
    const status = document.querySelector("#filter-status");
    document.querySelector(".filter-controls").hidden = false;
    projectFilter.addEventListener("change", () => {
        let visible = 0;
        cards.forEach((card) => {
            card.hidden = projectFilter.value !== "all" &&
                card.dataset.category !== projectFilter.value;
            if (!card.hidden) visible += 1;
        });
        status.textContent = "Showing " + visible + " of " + cards.length + " projects.";
    });
}

// Accessible form validation, with native validation as a no-JS fallback.
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    const fields = [
        { input: document.querySelector("#contact-name"), error: document.querySelector("#name-error"), required: "Please enter your name." },
        { input: document.querySelector("#contact-email"), error: document.querySelector("#email-error"), required: "Please enter your email address." },
        { input: document.querySelector("#contact-message"), error: document.querySelector("#message-error"), required: "Please enter a message." }
    ];
    const formStatus = document.querySelector("#form-status");

    function validateField(field) {
        let message = "";
        if (!field.input.value.trim()) {
            message = field.required;
        } else if (field.input.type === "email" && field.input.validity.typeMismatch) {
            message = "Please enter a valid email address.";
        }
        field.error.textContent = message;
        if (message) {
            field.input.setAttribute("aria-invalid", "true");
        } else {
            field.input.removeAttribute("aria-invalid");
        }
        return !message;
    }

    contactForm.noValidate = true;
    fields.forEach((field) => {
        field.input.addEventListener("input", () => {
            formStatus.textContent = "";
            if (field.input.hasAttribute("aria-invalid")) validateField(field);
        });
    });

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const invalidFields = fields.filter((field) => !validateField(field));
        if (invalidFields.length) {
            formStatus.textContent = "Please correct the highlighted fields.";
            invalidFields[0].input.focus();
            return;
        }
        formStatus.textContent = "Validation passed. Opening your email application; send the draft there.";
        const body = "Name: " + fields[0].input.value.trim() +
            "\nEmail: " + fields[1].input.value.trim() +
            "\n\n" + fields[2].input.value.trim();
        window.location.href = "mailto:KHighlander@campus.edu?subject=" +
            encodeURIComponent("Portfolio contact") + "&body=" + encodeURIComponent(body);
    });
}

// Optional bonus: retrieve public GitHub statistics with error handling.
const githubStatus = document.querySelector("#github-status");
if (githubStatus) {
    const refresh = document.querySelector("#github-refresh");
    const dataPanel = document.querySelector("#github-data");
    async function loadGitHub() {
        refresh.disabled = true;
        dataPanel.hidden = true;
        githubStatus.textContent = "Loading GitHub statistics...";
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000);
        try {
            const response = await fetch("https://api.github.com/users/KevinHighlander", { signal: controller.signal });
            if (!response.ok) throw new Error("GitHub request failed");
            const profile = await response.json();
            if (!Number.isFinite(profile.public_repos) || !Number.isFinite(profile.followers)) {
                throw new Error("Unexpected GitHub response");
            }
            document.querySelector("#github-repos").textContent = profile.public_repos;
            document.querySelector("#github-followers").textContent = profile.followers;
            dataPanel.hidden = false;
            githubStatus.textContent = "GitHub statistics loaded.";
        } catch (error) {
            githubStatus.textContent = "GitHub statistics are unavailable. Try refreshing or visit my profile.";
        } finally {
            clearTimeout(timeout);
            refresh.disabled = false;
        }
    }
    refresh.hidden = false;
    refresh.addEventListener("click", loadGitHub);
    loadGitHub();
}
