/* ===== ASSIGNMENT 3 - ADVANCED FUNCTIONALITY ===== */

// --- 1. DOM ELEMENTS ---
const themeToggle = document.getElementById('theme-toggle');
const usernameInput = document.getElementById('username');
const greetBtn = document.getElementById('greet-btn');
const greetingMessage = document.getElementById('greeting-message');
const errorMessage = document.getElementById('error-message');
const timerDisplay = document.getElementById('timer-display');
const authBtn = document.getElementById('auth-btn');
const authPanel = document.getElementById('auth-panel');
const authUsernameInput = document.getElementById('auth-username');
const authSubmitBtn = document.getElementById('auth-submit-btn');
const authCancelBtn = document.getElementById('auth-cancel-btn');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sort-select');
const projectsTbody = document.getElementById('projects-tbody');
const noProjectsMsg = document.getElementById('no-projects-msg');
const githubUsernameInput = document.getElementById('github-username');
const fetchReposBtn = document.getElementById('fetch-repos-btn');
const githubLoading = document.getElementById('github-loading');
const githubError = document.getElementById('github-error');
const githubResults = document.getElementById('github-results');
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactMessage = document.getElementById('contact-message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const clearFormBtn = document.getElementById('clear-form-btn');
const formSuccess = document.getElementById('form-success');

// --- 2. THEME MANAGEMENT ---
function initTheme() {
    if (localStorage.getItem('portfolio-theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️ Light Mode';
    }
}
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    var isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
}

// --- 3. GREETING FEATURE ---
function getTimeGreeting() {
    var hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
}
function initGreeting() {
    var savedName = localStorage.getItem('portfolio-username');
    if (savedName) {
        usernameInput.value = savedName;
        greetingMessage.textContent = getTimeGreeting() + ', ' + savedName + '! Welcome back.';
        greetingMessage.classList.add('show');
    }
}
function handleGreet() {
    var name = usernameInput.value.trim();
    errorMessage.textContent = '';
    greetingMessage.textContent = '';
    greetingMessage.classList.remove('show');
    if (name === '') { errorMessage.textContent = 'Please enter your name.'; return; }
    if (name.length < 2) { errorMessage.textContent = 'Name must be at least 2 characters.'; return; }
    greetingMessage.textContent = getTimeGreeting() + ', ' + name + '!';
    greetingMessage.classList.add('show');
    localStorage.setItem('portfolio-username', name);
}

// --- 4. VISIT TIMER ---
var timerSeconds = 0;
var timerInterval;

function initTimer() {
    var saved = sessionStorage.getItem('portfolio-timer');
    if (saved) {
        timerSeconds = parseInt(saved);
    }
    updateTimerDisplay();
    clearInterval(timerInterval);
    timerInterval = setInterval(function () {
        timerSeconds++;
        sessionStorage.setItem('portfolio-timer', timerSeconds);
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    var h = Math.floor(timerSeconds / 3600);
    var m = Math.floor((timerSeconds % 3600) / 60);
    var s = timerSeconds % 60;

    timerDisplay.textContent =
        '⏱ ' +
        (h > 0 ? h + 'h ' : '') +
        m + 'm ' +
        s + 's';
}

// --- 5. AUTH STATE MANAGEMENT ---
function initAuth() {
    var savedUser = localStorage.getItem('portfolio-auth-user');

    if (savedUser) {
        updateAuthUI(true, savedUser);
    } else {
        updateAuthUI(false);
    }
}

function handleLogin() {
    var user = authUsernameInput.value.trim();

    if (user === '') {
        authUsernameInput.style.borderColor = '#ff3b30';
        return;
    }

    localStorage.setItem('portfolio-auth-user', user);
    updateAuthUI(true, user);
    authUsernameInput.value = '';
}

function handleLogout() {
    localStorage.removeItem('portfolio-auth-user');
    updateAuthUI(false);
}

function updateAuthUI(loggedIn, user = '') {
    if (loggedIn) {
        authBtn.textContent = 'Logout (' + user + ')';
        authPanel.classList.add('hidden');
    } else {
        authBtn.textContent = 'Login';
    }
}

// --- 6. PROJECT FILTER & SORT ---
function initProjectFilters() {
    filterButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            filterButtons.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            applyFilterAndSort(btn.getAttribute('data-filter'));
        });
    });
    sortSelect.addEventListener('change', function() { 
        applyFilterAndSort(document.querySelector('.filter-btn.active').getAttribute('data-filter')); 
    });
}
function applyFilterAndSort(filter) {
    var rows = Array.from(projectsTbody.querySelectorAll('tr'));
    var sort = sortSelect.value;

    // Filter rows
    var visibleRows = rows.filter(function(row) {
        return filter === 'all' || row.dataset.category === filter;
    });

    // Hide all first
    rows.forEach(function(row) {
        row.classList.add('hidden-row');
    });

    // Sort visible rows
    if (sort === 'name-asc') {
        visibleRows.sort(function(a, b) {
            return a.dataset.name.localeCompare(b.dataset.name);
        });
    }

    if (sort === 'name-desc') {
        visibleRows.sort(function(a, b) {
            return b.dataset.name.localeCompare(a.dataset.name);
        });
    }

    // Show + append sorted rows
    visibleRows.forEach(function(row) {
        row.classList.remove('hidden-row');
        projectsTbody.appendChild(row);
    });
    // Update project counter
let filterInfo = document.getElementById('filter-info');
if (!filterInfo) {
    filterInfo = document.createElement('p');
    filterInfo.id = 'filter-info';
    filterInfo.className = 'info-text';
    filterInfo.style.marginTop = '10px';
    document.querySelector('#Projects .filter-controls').after(filterInfo);
}
filterInfo.textContent = `Showing ${visibleRows.length} of ${rows.length} projects`;
    noProjectsMsg.classList.toggle('hidden', visibleRows.length > 0);
}

// --- SAVE TO FAVORITES FUNCTIONALITY ---
const SAVED_REPOS_KEY = 'saved-github-repos';

function saveToFavorites(repoName, repoUrl) {
    let saved = JSON.parse(localStorage.getItem(SAVED_REPOS_KEY) || '[]');
    if (!saved.some(repo => repo.name === repoName)) {
        saved.push({ name: repoName, url: repoUrl });
        localStorage.setItem(SAVED_REPOS_KEY, JSON.stringify(saved));
        displaySavedRepos();
        showTemporaryMessage(`✓ "${repoName}" saved!`);
    } else {
        showTemporaryMessage(`"${repoName}" is already saved!`);
    }
}

function showTemporaryMessage(msg) {
    let tempMsg = document.getElementById('temp-save-msg');
    if (!tempMsg) {
        tempMsg = document.createElement('p');
        tempMsg.id = 'temp-save-msg';
        tempMsg.className = 'success-text';
        tempMsg.style.fontSize = '13px';
        const githubSection = document.getElementById('GitHub');
        githubSection.appendChild(tempMsg);
    }
    tempMsg.textContent = msg;
    setTimeout(() => { tempMsg.textContent = ''; }, 2000);
}

function displaySavedRepos() {
    const saved = JSON.parse(localStorage.getItem(SAVED_REPOS_KEY) || '[]');
    let container = document.getElementById('saved-repos-list');
    if (!container) return;
    if (saved.length === 0) {
        container.innerHTML = '<p class="info-text">No saved repositories yet. Use ⭐ Save buttons above!</p>';
        return;
    }
    container.innerHTML = saved.map(repo => 
        `<li style="margin-bottom: 8px;"><a href="${repo.url}" target="_blank" style="color: #8100cc; text-decoration: none;">⭐ ${repo.name}</a></li>`
    ).join('');
}
// --- 7. GITHUB API INTEGRATION ---
function initGitHub() {
    fetchReposBtn.addEventListener('click', function() {
        var user = githubUsernameInput.value.trim();
        if (user === '') { githubError.textContent = 'Please enter a GitHub username.'; return; }
        fetchGitHubRepos(user);
    });
}
function fetchGitHubRepos(user) {
    const cacheKey = `github-cache-${user}`;
    const cachedData = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(`${cacheKey}-time`);
    
    // Check if cache exists and is less than 5 minutes old
    if (cachedData && cachedTime && (Date.now() - parseInt(cachedTime)) < 300000) {
        displayReposFromCache(JSON.parse(cachedData));
        return;
    }
    
    githubError.textContent = ''; 
    githubResults.innerHTML = '';
    githubLoading.classList.remove('hidden'); 
    githubResults.classList.add('hidden');
    
    fetch('https://api.github.com/users/' + encodeURIComponent(user) + '/repos?sort=updated&per_page=10')
        .then(function(res) {
            if (!res.ok) {
                if (res.status === 404) throw new Error('User "' + user + '" not found.');
                if (res.status === 403) throw new Error('API rate limit exceeded. Try again later.');
                throw new Error('Failed to fetch (Status: ' + res.status + ').');
            }
            return res.json();
        })
        .then(function(repos) {
            // Save to cache
            localStorage.setItem(cacheKey, JSON.stringify(repos));
            localStorage.setItem(`${cacheKey}-time`, Date.now().toString());
            displayReposFromCache(repos);
        })
        .catch(function(err) {
            githubLoading.classList.add('hidden');
            githubError.textContent = '⚠ ' + err.message;
        });
}

function displayReposFromCache(repos) {
    githubLoading.classList.add('hidden');
    if (repos.length === 0) { 
        githubError.textContent = 'This user has no public repositories.'; 
        return; 
    }
    githubResults.innerHTML = '';
    repos.forEach(function(repo) {
        var card = document.createElement('div'); 
        card.className = 'repo-card';
        card.innerHTML = '<h3>' + repo.name + '</h3>' +
            '<p>' + (repo.description || 'No description available.') + '</p>' +
            '<div class="repo-meta"><span>' + (repo.language || 'Unknown') + '</span><span>⭐ ' + repo.stargazers_count + '</span></div>' +
            '<a href="' + repo.html_url + '" target="_blank">View on GitHub →</a>';
        
        // Add save button
        const saveBtn = document.createElement('button');
        saveBtn.textContent = '⭐ Save to Favorites';
        saveBtn.className = 'save-repo-btn';
        saveBtn.style.cssText = 'background: none; border: 1px solid #8100cc; border-radius: 980px; padding: 6px 12px; font-size: 12px; margin-top: 12px; cursor: pointer; color: #8100cc;';
        saveBtn.onclick = function() { saveToFavorites(repo.name, repo.html_url); };
        card.appendChild(saveBtn);
        
        githubResults.appendChild(card);
    });
    githubResults.classList.remove('hidden');
    
    // Add timestamp
    let timestamp = document.getElementById('github-timestamp');
    if (!timestamp) {
        timestamp = document.createElement('p');
        timestamp.id = 'github-timestamp';
        timestamp.className = 'info-text';
        timestamp.style.marginTop = '15px';
        timestamp.style.textAlign = 'center';
        githubResults.parentNode.insertBefore(timestamp, githubResults.nextSibling);
    }
    const now = new Date();
    timestamp.textContent = `🕐 Last updated: ${now.toLocaleTimeString()} (cached for 5 min)`;
}

// --- 8. CONTACT FORM VALIDATION ---
function showErr(input, span, msg) { input.classList.add('invalid'); span.textContent = msg; }
function clearErr(input, span) { input.classList.remove('invalid'); span.textContent = ''; }
function validateName() {
    var v = contactName.value.trim();
    if (!v) { showErr(contactName, nameError, 'Name is required.'); return false; }
    if (v.length < 2) { showErr(contactName, nameError, 'Min 2 characters.'); return false; }
    if (!/^[a-zA-Z\s\-]+$/.test(v)) { showErr(contactName, nameError, 'Letters and spaces only.'); return false; }
    clearErr(contactName, nameError); return true;
}
function validateEmail() {
    var v = contactEmail.value.trim();
    if (!v) { showErr(contactEmail, emailError, 'Email is required.'); return false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { showErr(contactEmail, emailError, 'Invalid email format.'); return false; }
    clearErr(contactEmail, emailError); return true;
}
function validateMessage() {
    var v = contactMessage.value.trim();
    if (!v) { showErr(contactMessage, messageError, 'Message is required.'); return false; }
    if (v.length < 10) { showErr(contactMessage, messageError, 'Min 10 characters.'); return false; }
    clearErr(contactMessage, messageError); return true;
}
function initContactForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); formSuccess.textContent = '';
        if (validateName() & validateEmail() & validateMessage()) {
            formSuccess.textContent = '✓ Thank you, ' + contactName.value.trim() + '! Message received.';
            contactForm.reset(); 
            [contactName, contactEmail, contactMessage].forEach(el => el.classList.remove('invalid'));
            [nameError, emailError, messageError].forEach(el => el.textContent = '');
        }
    });
    clearFormBtn.addEventListener('click', function() {
        contactForm.reset(); 
        [contactName, contactEmail, contactMessage].forEach(el => el.classList.remove('invalid'));
        [nameError, emailError, messageError, formSuccess].forEach(el => el.textContent = '');
    });
    contactName.addEventListener('blur', validateName);
    contactEmail.addEventListener('blur', validateEmail);
    contactMessage.addEventListener('blur', validateMessage);
    // Character counter for message
    const charCounter = document.createElement('small');
    charCounter.className = 'char-counter';
    charCounter.style.display = 'block';
    charCounter.style.textAlign = 'right';
    charCounter.style.fontSize = '12px';
    charCounter.style.marginTop = '5px';
    charCounter.style.color = '#86868b';
    contactMessage.parentNode.appendChild(charCounter);

    function updateCharCount() {
        const len = contactMessage.value.length;
        charCounter.textContent = `${len}/1000 characters`;
        if (len > 1000) {
            charCounter.style.color = '#ff3b30';
            contactMessage.value = contactMessage.value.slice(0, 1000);
            updateCharCount();
        } else {
            charCounter.style.color = '#86868b';
        }
    }
    contactMessage.addEventListener('input', updateCharCount);
    updateCharCount();

    // --- EXPORT DATA FUNCTIONALITY ---
function exportUserData() {
    const data = {
        exportDate: new Date().toISOString(),
        exportDateReadable: new Date().toString(),
        settings: {
            theme: localStorage.getItem('portfolio-theme') || 'light',
            savedUsername: localStorage.getItem('portfolio-username') || 'not set',
            authUser: localStorage.getItem('portfolio-auth-user') || 'not logged in'
        },
        savedRepositories: JSON.parse(localStorage.getItem('saved-github-repos') || '[]'),
        visitStats: {
            timerSeconds: timerSeconds,
            timerFormatted: timerDisplay.textContent
        }
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio-export-${new Date().toISOString().slice(0,19)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Show success message
    const exportMsg = document.getElementById('export-msg');
    if (exportMsg) {
        exportMsg.textContent = '✓ Data exported successfully!';
        setTimeout(() => { exportMsg.textContent = ''; }, 3000);
    }
}
}

// --- 9. INITIALIZE EVERYTHING ---
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initGreeting();
    initTimer();
    initAuth();
    initProjectFilters();
    initGitHub();
    displaySavedRepos();
    // Export button
    const exportBtn = document.getElementById('export-data-btn');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportUserData);
    }
    initContactForm();

    themeToggle.addEventListener('click', toggleTheme);
    greetBtn.addEventListener('click', handleGreet);

    usernameInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') greetBtn.click();
    });

    authBtn.addEventListener('click', function () {
        if (localStorage.getItem('portfolio-auth-user')) {
            handleLogout();
        } else {
            authPanel.classList.toggle('hidden');
        }
    });

    authSubmitBtn.addEventListener('click', handleLogin);

    authCancelBtn.addEventListener('click', function () {
        authPanel.classList.add('hidden');
        authUsernameInput.value = '';
    });

    authUsernameInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') handleLogin();
    });
});