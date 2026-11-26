# Kevin Highlander — Portfolio Milestone 4

This milestone builds on the separate Milestone 3 portfolio. Earlier milestones and homework are unchanged by this addition.

## Requirements
- DOM interaction: the Projects page filters project cards by category with querySelector, querySelectorAll and addEventListener. A live status reports the visible count without reloading.
- Form validation: the About / Contact page validates required name, email and message fields, including whitespace-only values and malformed email addresses. Errors are displayed beside fields with aria-describedby, aria-invalid and live messages, and clear when corrected. Focus moves to the first invalid field. A valid form opens an email draft; no server-side sending is claimed.
- API bonus: the Home page fetches public GitHub profile statistics, handles loading, network errors, HTTP errors and timeouts, and offers a refresh button.
- Accessibility: native keyboard-operable controls, visible focus, descriptive labels and status messages. Gestalt proximity and similarity and the responsive palette are retained from Milestone 3.

## Manual verification checklist (pending browser testing)
- [ ] Test all three pages at 320px, 768px and 1200px.
- [ ] Select All, Web development and Cybersecurity; verify card counts 3, 2 and 1.
- [ ] Submit blank fields, whitespace-only fields and invalid email; verify inline errors and focus.
- [ ] Correct each field and verify errors clear; verify valid form opens an email draft.
- [ ] Test GitHub success, refresh and offline / error behavior.
- [ ] Navigate by keyboard, run WAVE and inspect the browser console.

## GitHub Pages
https://kevinhighlander.github.io/dev-140-KHighlander-f26/project-milestone-submissions/project-milestone-4/
