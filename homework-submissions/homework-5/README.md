# DEV.140 — Homework 4: Accessibility Audit

## Part 1: Accessibility Issues and Concerns

### Issue 1: Redundant Navigation Links (Confirmed by WAVE)

When I tested my portfolio using WAVE, it identified two adjacent links that directed users to the same webpage. My name/logo and the Home navigation button both linked to index.html.

This can create unnecessary repetition for people using screen readers or navigating with a keyboard. Instead of moving directly to the next destination, users have to navigate through two links that perform the same function.

**Correction:** I changed the name/logo from a clickable link to a regular div element while keeping the Home navigation link functional. After updating the code and running WAVE again, the error disappeared.

### Issue 2: Missing Alternative Text (Common Accessibility Concern)

Another accessibility issue I reviewed was missing alternative text for images. Images without descriptive alternative text can prevent screen reader users from understanding important visual information.

**Correction:** Meaningful images should include an alt attribute describing their content or purpose. WAVE did not identify missing alternative text as an error on my portfolio, but this is something I will continue checking.

### Issue 3: Poor Color Contrast (Common Accessibility Concern)

Poor color contrast occurs when the colors of text and its background are too similar. This can make content difficult to read, especially for people with low vision or color-vision deficiencies.

**Correction:** Text and background colors should provide sufficient contrast without making the website difficult to look at. WAVE did not flag any contrast errors on my portfolio, but I understand why checking contrast is important.

## Part 2: Reflection

When I started this assignment, I expected WAVE to find several problems with my portfolio. Instead, it identified one issue involving two nearby links that both directed users to the Home page. I had made my name/logo clickable even though I already had a Home link in the navigation. I learned that something as small as this can create unnecessary steps for someone using a keyboard or screen reader.

I corrected the problem by changing the name/logo into regular text while keeping the Home navigation link functional. After updating the code and testing the website again, WAVE reported zero errors.

I also reviewed two common accessibility concerns from the assignment: missing alternative text and poor color contrast. Neither was flagged on my website, but I understand how both can affect people who rely on assistive technology or have visual impairments.

This assignment taught me that accessibility involves more than getting a clean report. It means considering how different people interact with a website and making sure the information is usable for everyone.

I didn't know what to do for the other 2 results, so I picked 2 "general issues" and how you would go about fixing them for your site.
