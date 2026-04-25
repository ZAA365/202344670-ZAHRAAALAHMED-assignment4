# 202344670-ZAHRAAALAHMED-assignment4

## Project Description
This is the fourth version of my personal portfolio website, building on the interactive features from Assignments 2 and 3.

The goal of this version is to add **advanced functionality, external integrations, complex logic, and data management** to make the web application more powerful and professional.

In addition to the previous features (greeting system, dark mode, localStorage, GitHub API, filtering, sorting, and form validation), this version introduces **API caching**, **save to favorites**, **character counter**, **data export**, **project counter**, and **scroll to top button**.

---

## Live Demo
🔗 **Deployed URL:** [https://zaa365.github.io/202344670-ZAHRAAALAHMED-assignment4/](https://zaa365.github.io/202344670-ZAHRAAALAHMED-assignment4/)

---

## Features

### API Integration (From Assgn 3)
- Connects to the GitHub Public API to fetch real-time repository data
- Users can enter any GitHub username to view their public repositories
- Displays repo name, description, language, and star count in elegant cards
- Includes proper error handling (user not found, API rate limits, network errors)
- Shows a loading spinner while fetching data

### GitHub API Caching (NEW in v4)
- Results cached for 5 minutes in localStorage with cache indicator
- Reduces API calls and respects GitHub's rate limits
- Shows "cached for 5 min" on timestamp

### Save to Favorites (NEW in v4)
- Users can save any GitHub repository to favorites, stored in localStorage
- Saved repos persist across sessions
- Dedicated "Saved Repositories" section displays all favorites
- Prevents duplicate saves with user feedback

### Character Counter (NEW in v4)
- Real-time "XX/1000 characters" counter under message field
- Turns red when approaching/exceeding the 1000-character limit
- Prevents users from typing beyond the limit

### Data Export (NEW in v4)
- One-click export of all user data (theme, settings, saved repos, timer) as JSON file
- Professional backup feature for user settings
- Timestamped filename for easy organization

### Project Counter (NEW in v4)
- Live "Showing X of Y projects" display when filtering projects
- Updates automatically when filtering or sorting

### Scroll to Top Button (NEW in v4 - Innovation)
- Appears after scrolling 300px
- Smooth scroll animation back to top
- Fully styled for both light and dark modes

### Complex Logic (From Assgn 3)
- **Project Filtering:** Filter projects by category ("All", "Design", "Development")
- **Project Sorting:** Sort projects alphabetically (A–Z or Z–A)
- **Enhanced Contact Form Validation:** Multi-rule validation for name (letters only, min 2 chars), email (format check), and message (min 10 chars)
- Real-time error feedback when user leaves a field or tries to submit

### State Management (From Assgn 3)
- **Simulated Login/Logout:** Users can "log in" with a username; status is saved and remembered across page refreshes
- **Visit Timer:** Counts how long a visitor has been on the site (survives page refresh using sessionStorage)
- Previous state features (dark mode and greeting name) are still saved using localStorage

### Dynamic Greeting Feature (From Assgn 2)
- Users can enter their name and receive a personalized greeting
- Greeting changes based on time of day (morning/afternoon/evening)
- Displays instantly without reloading the page

### Data Handling (localStorage & sessionStorage)
- Saves user greeting name and theme preference (localStorage)
- Saves login status (localStorage)
- Saves visit timer seconds (sessionStorage)
- Saves GitHub API cache (localStorage, 5 min expiry)
- Saves favorite repositories (localStorage)

### Dark/Light Mode Toggle (From Assgn 2)
- Users can switch between themes
- Theme preference is saved automatically
- All new features (API cards, filters, auth panel, save button, export button, counter, scroll button) fully support dark mode

### Performance Optimizations (From Assgn 3 + NEW)
- Images use `loading="lazy"` for faster initial page load
- Removed inline styles from HTML (moved to external CSS for better caching)
- Clean, non-repetitive CSS code
- API response caching (5-minute expiry)

### Animations & Transitions
- Smooth transitions for theme switching
- Hover effects on buttons, navigation, and project rows
- Fade-in effect for greeting message
- Slide-down animation for the login panel

### Responsive Design
- Works seamlessly on desktop, tablet, and mobile devices

---

## Folder Structure

2. **Ensure folder structure is correct:**
```
202344670-ZAHRAAALAHMED-assignment4/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── project1.png
│       └── project2.png
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── README.md
└── .gitignore
```

3. **Open the website**
- Double-click `index.html` OR open it in any modern browser (Chrome recommended)

4. **Test the new Assignment 3 features**
- **API:** Enter a GitHub username (e.g., "octocat") in the GitHub section and click "Fetch Repos"
- **Filtering:** Click "Design" or "Development" to filter the projects table
- **Sorting:** Use the dropdown to sort projects by name
- **Form Validation:** Try submitting the contact form with empty fields or invalid email
- **Login/Logout:** Click "Login" in the nav, enter a name, and refresh the page
- **Timer:** Watch the timer bar below the navigation count your visit time

---
## Test Assignment 4 New Features

### GitHub Caching
Fetch the same username twice – notice faster second load and cache indicator

### Save Favorites
Click "⭐ Save to Favorites" on any repo, check Saved Repositories section

### Character Counter
Type in contact message field – watch counter update in real-time

### Export Data
Click "📤 Export Data" button – downloads your settings as JSON

### Project Counter
Use filter buttons – see "Showing X of Y projects" appear

---
## Test Previous Features (Assignments 2 & 3)

| Feature | Action |
|---------|--------|
| Greeting | Enter name in greeting section → personalized time-based greeting |
| Dark Mode | Toggle dark mode → theme saves on refresh |
| GitHub API | Enter "octocat" to see repositories |
| Filter Projects | Click "Design" or "Development" |
| Form Validation | Try submitting empty fields |
| Login/Logout | Click Login button in navigation |
| Timer | Watch timer count your visit time |
---
- **GitHub API Caching:** Results cached for 5 minutes in localStorage with cache indicator
- **Save to Favorites:** Users can save any GitHub repository to favorites, stored in localStorage
- **Character Counter:** Real-time "XX/1000 characters" counter under message field, turns red at limit
- **Data Export:** One-click export of all user data (theme, settings, saved repos, timer) as JSON file
- **Project Counter:** Live "Showing X of Y projects" display when filtering projects
- **Scroll to Top Button:** Appears after scrolling 300px, smooth scroll animation back to top
- **Fixed duplicate function bug:** Removed duplicate `updateAuthUI` function from script.js
- **Fixed export function scope:** Moved `exportUserData` outside `initContactForm` for global access
- **Dark mode support for all new features:** Save button, export button, counter, and scroll button all support dark mode
---
## AI Usage Summary
AI tools were used to assist in:
- Implementing the GitHub API integration with `fetch()` and error handling
- Designing the multi-rule contact form validation logic with regex
- Understanding how to sort and filter DOM elements dynamically
- Explaining the difference between `localStorage` and `sessionStorage` for the timer
- Structuring JavaScript into organized, well-commented sections
- Performance optimization suggestions (lazy loading, removing inline styles)

Detailed explanation is available in:
📄 `docs/ai-usage-report.md`

---

## Technical Documentation
Detailed explanation of system design, API integration, validation rules, and implementation:
📄 `docs/technical-documentation.md`

---

## Optional Deployment
You can deploy the project using:
- GitHub Pages
- Netlify
- Vercel

---

## Notes
- This project focuses on **advanced functionality and real-world web application logic**
- API integration uses the free GitHub Public API (no API key required)
- Contact form validates on the frontend only (no backend server)
- All features were implemented, tested manually, and debugged
- AI was used as a learning tool and all code was reviewed, modified, and fully understood

---
## Future Improvements

- Add import functionality to restore saved data
- Add option to remove individual saved repositories
- Add more GitHub data (contributions, followers, etc.)
- Add form submission to a real backend
- Add user account system with proper authentication
---
## Browser Support

| Browser | Support |
|---------|---------|
| Google Chrome | ✅ Recommended |
| Mozilla Firefox | ✅ |
| Microsoft Edge | ✅ |
| Safari | ✅ (requires `-webkit-backdrop-filter`) |

*Requires JavaScript enabled*
---
## Optional Deployment

You can deploy the project using:

- GitHub Pages
- Netlify
- Vercel
---
## Author
**Zahraa AL-Ahmed**
Computer Science Student – KFUPM