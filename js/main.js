document.addEventListener('DOMContentLoaded', () => {
  // Initialize the site
  initTheme();
  renderTools(toolsData);
  setupEventListeners();
});

// Initialize theme based on user preference or system preference
function initTheme() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
  } else if (prefersDarkMode) {
    document.body.setAttribute('data-theme', 'dark');
  } else {
    document.body.setAttribute('data-theme', 'light');
  }
}

// Render the tool cards to the DOM
function renderTools(tools) {
  const toolsContainer = document.getElementById('tools-container');
  toolsContainer.innerHTML = '';
  
  if (tools.length === 0) {
    toolsContainer.innerHTML = '<div class="no-results">No tools match your search criteria.</div>';
    return;
  }
  
  tools.forEach(tool => {
    const toolCard = createToolCard(tool);
    toolsContainer.appendChild(toolCard);
  });
}

// Create a tool card element
function createToolCard(tool) {
  const card = document.createElement('div');
  card.className = 'tool-card';
  card.setAttribute('data-category', tool.category);
  
  // Icon by category
  let icon = '';
  if (tool.category === 'network') icon = '🌐';
  else if (tool.category === 'forensics') icon = '🕵️';
  else if (tool.category === 'pentest') icon = '🛡️';
  else icon = '🔧';

  card.innerHTML = `
    <div class="tool-card-header">
      <span class="tool-icon" aria-hidden="true">${icon}</span>
      <div>
        <h3 class="tool-name">${sanitizeHTML(tool.name)}</h3>
        <span class="tool-category">${sanitizeHTML(tool.categoryDisplay)}</span>
        <p class="tool-description">${sanitizeHTML(tool.description)}</p>
      </div>
    </div>
    <div class="tool-card-body">
      <div class="code-block">
        <h4>Installation</h4>
        <button class="copy-btn" data-clipboard-target="install-${tool.id}">Copy</button>
        <pre id="install-${tool.id}">${sanitizeHTML(tool.installCommand)}</pre>
      </div>
      <div class="code-block">
        <h4>Basic Usage</h4>
        <button class="copy-btn" data-clipboard-target="usage-${tool.id}">Copy</button>
        <pre id="usage-${tool.id}">${sanitizeHTML(tool.usageExample)}</pre>
      </div>
      <a href="${sanitizeHTML(tool.documentationUrl)}" class="tool-docs-link" target="_blank" rel="noopener noreferrer">Official Documentation →</a>
    </div>
  `;
  
  return card;
}

// Set up event listeners for interactivity
function setupEventListeners() {
  // Theme toggle
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  themeToggleBtn.addEventListener('click', toggleTheme);
  
  // Search functionality
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', handleSearch);
  
  // Filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', handleFilter);
  });
  
  // Copy buttons
  document.addEventListener('click', e => {
    if (e.target.classList.contains('copy-btn')) {
      handleCopy(e);
    }
  });
}

// Toggle between light and dark theme
function toggleTheme() {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Handle search input and filter tools
function handleSearch() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
  
  let filteredTools = toolsData;
  
  // Apply category filter first if not "all"
  if (activeFilter !== 'all') {
    filteredTools = filteredTools.filter(tool => tool.category === activeFilter);
  }
  
  // Then apply search filter
  if (searchTerm) {
    filteredTools = filteredTools.filter(tool => {
      return (
        tool.name.toLowerCase().includes(searchTerm) ||
        tool.description.toLowerCase().includes(searchTerm) ||
        tool.category.toLowerCase().includes(searchTerm)
      );
    });
  }
  
  renderTools(filteredTools);
}

// Handle category filter buttons
function handleFilter(e) {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => btn.classList.remove('active'));
  
  e.target.classList.add('active');
  
  handleSearch(); // Re-apply search with new filter
}

// Handle copy to clipboard functionality
function handleCopy(e) {
  const targetId = e.target.getAttribute('data-clipboard-target');
  const targetElement = document.getElementById(targetId);
  
  if (!targetElement) return;
  
  const textToCopy = targetElement.textContent;
  
  // Create a temporary textarea element to copy from
  const textarea = document.createElement('textarea');
  textarea.value = textToCopy;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  
  // Show "Copied!" feedback
  const originalText = e.target.textContent;
  e.target.textContent = 'Copied!';
  e.target.classList.add('copied');
  
  setTimeout(() => {
    e.target.textContent = originalText;
    e.target.classList.remove('copied');
  }, 2000);
}

// Sanitize HTML to prevent XSS
function sanitizeHTML(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
} 