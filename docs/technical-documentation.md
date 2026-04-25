# Technical Documentation

## Project Info
- **Name**: Personal Portfolio Website
- **Technologies**: HTML, CSS, JavaScript
- **Features**: Dark/Light mode toggle, greeting feature, localStorage, responsive design
- **Design Inspiration**: Apple.com - minimal, elegant, premium feel
- **New in v4**: API caching, saved repositories, character counter, data export, project counter

---

## File Structure
- `index.html` - Main page
- `css/styles.css` - All styling with theme support and animations
- `js/script.js` - Theme toggle, greeting logic, and localStorage
- `assets/images/` - Project screenshots
- `presentation/demovideo` - video
- `docs/` - Documentation files
- `README.md` - Project preview and setup
- `.gitignore` — Git ignore rules
---

## Core Features

### 1. GitHub API Integration
**Endpoint used:** `https://api.github.com/users/{username}/repos?sort=updated&per_page=10`

---

## Core Features

### 1. GitHub API Integration
**Endpoint used:** `https://api.github.com/users/{username}/repos?sort=updated&per_page=10`

**Flow:**
1. User enters a GitHub username
2. Clicks "Fetch Repos" or presses Enter
3. Show loading spinner, hide previous results
4. Call `fetch()` with the API URL
5. Check response status:
   - 200: Parse JSON and display repo cards
   - 404: Show "User not found" error
   - 403: Show "Rate limit exceeded" error
   - Other: Show generic error with status code
6. If repos array is empty: show "No public repositories" message

**Each repo card displays:**
- Repository name (heading)
- Description (or "No description available")
- Language and star count (metadata)
- Link to the repo on GitHub

**Error handling:** All errors are caught and displayed as user-friendly messages. No `alert()` calls used.

---

### 2. Project Filtering & Sorting
**Data attributes:** Each table row has `data-category` and `data-name` attributes.

**Filtering logic:**
1. User clicks a filter button ("All", "Design", "Development")
2. Active button gets `.active` class (styled differently)
3. Compare each row's `data-category` with selected filter
4. Add/remove `.hidden-row` class to show/hide rows
5. Show "No projects" message if zero rows visible

**Sorting logic:**
1. User changes sort dropdown
2. Get only visible (non-hidden) rows as an array
3. Sort using `localeCompare()` on `data-name` attribute
4. Re-append sorted rows to the table body

---

### 3. Enhanced Contact Form Validation
**Validation rules per field:**

| Field   | Required | Min Length | Max Length | Pattern                          |
|---------|----------|------------|------------|----------------------------------|
| Name    | Yes      | 2 chars    | 50 chars   | Letters, spaces, hyphens only    |
| Email   | Yes      | —          | —          | `something@something.something`  |
| Message | Yes      | 10 chars   | 1000 chars | —                                |
**Validation triggers:**
- **On blur:** Validates when user leaves a field
- **On input:** Clears error when user starts typing in an invalid field
- **On submit:** Validates all fields, prevents submission if any fail

**Error display:** Each field has its own `<span class="error-text">` below it. Invalid fields get a red border (`.invalid` class).

**Success:** Shows a personalized confirmation message and clears the form.

---

### 4. Visit Timer
- Starts on page load using `setInterval()` (1000ms)
- Stores seconds in `sessionStorage` (survives refresh, resets on tab close)
- Formats as: `⏱ Xm Ys` or `⏱ Xh Ym Zs` for longer visits
- Displayed in a subtle bar below the navigation

---

### 5. Simulated Login/Logout
**Flow:**
1. User clicks "Login" button in navigation
2. A panel slides down with a username input
3. User enters a name and clicks "Sign In"
4. Username saved to `localStorage`
5. Nav button changes to "Logout (username)"
6. Clicking "Logout" clears localStorage and resets button
7. State persists across page refreshes

---

### 6. Section Toggles (Collapse/Expand)
- Each section has a ▼ button next to the heading
- Clicking it adds `.collapsed` class to both button and content
- Button rotates -90° (pointing right) when collapsed
- Content is hidden with `display: none`
- All sections start expanded

---

### 7. Theme Switching
- Toggle button adds/removes `dark-mode` class on `<body>`
- All dark mode styles use `body.dark-mode` prefix
- Preference saved in `localStorage` as `portfolio-theme`

---

### 8. Greeting Feature
- Reads user input, validates (not empty, min 2 chars)
- Gets time-based greeting (morning/afternoon/evening)
- Displays with fade-in animation (CSS opacity transition)
- Saves name in `localStorage`
- On reload, checks localStorage and shows welcome-back message

---

## State Management Summary

| Data                  | Storage       | Key                   | Purpose                        |
|-----------------------|---------------|-----------------------|--------------------------------|
| Theme preference      | localStorage  | `portfolio-theme`     | Remember dark/light mode       |
| User greeting name    | localStorage  | `portfolio-username`  | Remember visitor name          |
| Login username        | localStorage  | `portfolio-auth-user` | Remember login state           |
| Visit timer seconds   | sessionStorage | `portfolio-timer`     | Persist timer across refreshes |

---

## Performance Optimizations
- All images use `loading="lazy"` attribute
- All images have explicit `width` and `height` to prevent CLS (Cumulative Layout Shift)
- No inline styles in HTML (all moved to external CSS)
- CSS organized with clear sections, no duplicate rules
- JavaScript uses cached DOM references (queried once at top)
- `defer` attribute on script tag prevents render blocking
- Minimal use of `!important` (only on `.hidden` utility class)

---
- **GitHub API Caching:** 5-minute cache using localStorage with cache key format `github-cache-{username}`
- **Save to Favorites:** localStorage array storage with `saved-github-repos` key, prevents duplicates
- **Character Counter:** Real-time `input` event listener, truncates at 1000 characters, color changes at limit
- **Data Export:** JSON export with `Blob`, `URL.createObjectURL()`, timestamped filename
- **Project Counter:** Dynamic DOM element creation if missing, updates on filter/sort
- **Scroll to Top Button:** Fixed position, appears at 300px scroll, smooth scroll behavior
- **Dark Mode CSS Additions:** Added `.dark-mode` styles for `.save-repo-btn`, `#saved-repos-list a`, `#export-data-btn`, `.char-counter`, `#scroll-top-btn`
- **Cache invalidation:** Checks `Date.now() - cachedTime < 300000` (5 minutes)
- **Export data structure:** Includes `exportDate`, `settings` (theme, savedUsername, authUser), `savedRepositories`, `visitStats`
- **Scroll threshold:** 300px using `window.scrollY`
---
## Color Themes

### Light Mode
- Background: #ffffff
- Text: #1d1d1f
- Header Gradient: #f5f5f7 → #ffffff
- Accent: Purple (#8100cc, #a310f8)
- Navigation: White with blur effect

### Dark Mode
- Background: #000000
- Text: #f5f5f7
- Header Gradient: #1a1a1a → #000000
- Accent: Light purple (#a310f8)
- Navigation: Black with blur effect

---

## Setup Instructions
1. Clone or download the project files
2. Keep the folder structure unchanged
3. Ensure image paths are correct (`assets/images/`)
4. Open `index.html` in any modern browser
5. Test features:
   - Click "🌙 Dark Mode" button
   - Enter name in greeting section
   - Check saved greeting after reload
6. Resize browser to test responsiveness

---

## Known Issues
- Inline styles may not fully adapt in dark mode
- Contact form does not send real data (frontend only)
- Contact form does not send data to a real server (frontend only)
- GitHub API has a rate limit of 60 requests/hour for unauthenticated users
- Login system is simulated (no real authentication)
- Export only (no import feature yet)
---

## Browser Support
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari (requires `-webkit-backdrop-filter`)
- Requires JavaScript enabled

---

## Personal Reflection
"In Assignment 4, I learned how to make my web application more professional by adding caching to reduce API calls, allowing users to save favorites, providing real-time form feedback with a character counter, and enabling data export for backup purposes. The most challenging part was implementing the caching system while maintaining dark mode compatibility."
— Zahraa AL-Ahmed, CS Student at KFUPM