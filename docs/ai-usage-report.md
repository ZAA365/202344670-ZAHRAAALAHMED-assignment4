# AI Usage Report – Assignment 4

## Tools Used & Use Cases

### GitHub Copilot → Code completion & generation
- Suggested syntax for localStorage caching implementation
- Helped complete the character counter event listener logic
- Autocompleted CSS styles for new UI elements (save button, counter display, scroll to top)
- Generated JSON structure for export feature

### ChatGPT → Problem-solving & explanations
- Designed the 5-minute cache strategy for GitHub API
- Explained how to implement save-to-favorites with localStorage
- Helped debug the duplicate `updateAuthUI` function issue
- Provided regex pattern for character counter validation
- Guided on best practices for data export as JSON
- Explained difference between sessionStorage and localStorage
- Helped create scroll to top button as innovation feature

---

## New Features in Assignment 4 – AI Assistance

### 1. GitHub API Caching
**How AI helped:**
- Explained how to implement time-based cache expiry (5 minutes)
- Provided code pattern for checking cache before making API calls
- Showed how to display "cached" indicator to users

**What I learned:**
- How to store timestamps alongside cached data
- How to implement cache invalidation strategy
- Why caching improves performance and respects API rate limits

### 2. Save to Favorites
**How AI helped:**
- Designed the localStorage structure for storing array of repositories
- Showed how to prevent duplicate saves
- Explained how to dynamically generate the saved repos list

**What I learned:**
- How to store and retrieve arrays from localStorage
- How to manipulate arrays (find, push, filter) for data management
- How to dynamically update DOM when localStorage changes

### 3. Character Counter
**How AI helped:**
- Provided real-time input event listener code
- Showed how to slice text beyond the limit
- Explained color change logic (gray → red)

**What I learned:**
- How to use `input` event for real-time updates
- How to enforce character limits programmatically
- How to provide visual feedback during user input

### 4. Data Export (JSON)
**How AI helped:**
- Designed the JSON data structure for export
- Provided Blob and download link generation code
- Explained how to create timestamped filenames

**What I learned:**
- How to create downloadable files from JavaScript
- How to structure JSON for export/import compatibility
- How to use `URL.createObjectURL()` and `Blob`

### 5. Project Counter
**How AI helped:**
- Suggested where to insert counter in existing filter logic
- Provided code to count visible vs total rows
- Showed how to create dynamic DOM elements if missing

**What I learned:**
- How to extend existing functions without breaking them
- How to create fallback DOM elements

### 6. Scroll to Top Button (Innovation)
**How AI helped:**
- Suggested this as an easy innovation feature
- Provided scroll event listener logic
- Showed smooth scroll behavior
- Gave CSS for button appearance and dark mode

**What I learned:**
- How to detect scroll position with `window.scrollY`
- How to add/remove classes based on scroll position
- How to implement smooth scrolling

---

## Benefits & Challenges

### How AI helped me in Assignment 4:
- Implemented complex caching logic correctly on first try
- Saved time on debugging localStorage array operations
- Made JSON export feature work without external libraries
- Improved user experience with real-time feedback (character counter)
- Helped maintain code organization with new features
- Provided quick solution for scroll to top innovation

### Difficulties I faced:
- Understanding cache invalidation (when to show fresh vs cached data)
- Preventing duplicate saved repositories required extra logic
- Making all new features work with existing dark mode was challenging
- Ensuring character counter didn't break form validation
- Fixing export function scope (initially placed inside another function)

### How I overcame challenges:
- Tested each feature individually before integrating
- Used console.log to debug cache timing issues
- Added conditional checks for dark mode classes
- Modified AI suggestions to fit my existing code structure
- Moved export function outside initContactForm after discovering the bug

---

## Learning Outcomes

### What I learned from using AI in Assignment 4:
- How to implement API response caching with time-based expiry
- How to build a favorites/saved items feature with localStorage
- How to create real-time character counters with visual feedback
- How to export application state as downloadable JSON
- How to extend existing functions without breaking them
- How to maintain backward compatibility when adding new features
- How to add smooth scroll functionality

### Technical skills improved:
- **JavaScript:** `localStorage` with arrays, `Date.now()` for caching, `Blob` and `URL.createObjectURL()` for exports, `window.scrollY` and `scrollTo`
- **CSS:** Dynamic color changes based on state (counter turning red)
- **DOM Manipulation:** Dynamically adding/removing elements, updating counts in real-time
- **Debugging:** Cache timing issues, function scope problems

---

## Responsible Use & Modifications

### How I reviewed and modified AI suggestions for Assignment 4:
- **Tested all code** – Ran each feature multiple times before keeping it
- **Simplified solutions** – Removed unnecessary complexity from AI-generated code
- **Understood logic** – Made sure I understood how caching and export worked
- **Customized features** – Changed colors, messages, and behavior to match my Apple-style design
- **Integrated with existing code** – Ensured new features worked with dark mode and existing state
- **Added comments** – Documented all new functions for future reference
- **Fixed bugs** – Moved export function when I discovered it was in wrong scope

### Specific modifications I made:
- Changed cache duration from 10 minutes to 5 minutes (better for API limits)
- Added dark mode support for save button and counter (AI only gave light mode)
- Modified export JSON structure to include more user data
- Added temporary success message for save to favorites
- Fixed duplicate function that AI didn't notice
- Fixed export function scope issue
- Customized scroll to top button colors to match theme

---

## Academic Integrity Practices
- I understood all the code before using it
- I modified AI-generated code instead of copying it directly
- I designed the website structure and content myself
- I used AI as a support tool for learning and problem-solving
- I ensured all work reflects my own understanding and effort
- I documented all AI assistance in this report

---

## Time Saved vs. Learning Trade-off

| Feature | Without AI | With AI | Learning Gained |
|---------|-----------|---------|-----------------|
| API Caching | 2 hours | 30 min | Understood cache invalidation |
| Save Favorites | 90 min | 25 min | Learned localStorage arrays |
| Character Counter | 45 min | 15 min | Real-time event handling |
| Data Export | 60 min | 20 min | Blob and download generation |
| Scroll to Top | 30 min | 10 min | Scroll events and smooth behavior |
| **Total** | **~5 hours** | **~1.5 hours** | **3.5 hours saved, still learned concepts** |

---

## Conclusion for Assignment 4

AI was instrumental in helping me implement complex features like caching, favorites, character counter, data export, and scroll to top. However, I made sure to understand every line of code and customize it to my project. The most valuable lesson was learning how to debug AI-generated code (like the export function scope issue) and how to manage application state across multiple storage types.

I can confidently say I now understand:
- Why caching matters for API rate limits
- How to store and retrieve arrays from localStorage
- How to create real-time form feedback
- How to export data as downloadable files
- How to add smooth UI interactions like scroll to top

---

**Zahraa AL-Ahmed**
CS Student – KFUPM