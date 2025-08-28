// --- Syntax Highlighting ---
const editor = document.getElementById('numberscript-editor');
const highlight = document.getElementById('numberscript-highlight');

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, function(m) {
    switch (m) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#39;';
    }
  });
}

function highlightNumberScript(code) {
  // Escape HTML first!
  code = escapeHtml(code);
  // Basic highlighting: keywords, numbers, operators, functions, comments
  return code
    .replace(/(solve|let|const|set|to|from)\b/g, '<span class="ns-keyword">$1</span>')
    .replace(/(\d+(\.\d+)?)/g, '<span class="ns-number">$1</span>')
    .replace(/([+\-*/=^()])/g, '<span class="ns-operator">$1</span>')
    .replace(/\b(sin|cos|tan|log|sqrt|abs|pow|exp|max|min|floor|ceil|round)\b/g, '<span class="ns-function">$1</span>')
    .replace(/\/\/.*/g, '<span class="ns-comment">$&</span>');
}

function updateHighlight() {
  const code = editor.value;
  highlight.innerHTML = highlightNumberScript(code);
}

editor.addEventListener('input', updateHighlight);
editor.addEventListener('scroll', () => {
  highlight.scrollTop = editor.scrollTop;
  highlight.scrollLeft = editor.scrollLeft;
});
updateHighlight();

// --- File Operations ---
function newFile() {
  editor.value = '';
  updateHighlight();
  document.getElementById('numberscript-output').textContent = '';
}

function saveLocal() {
  const blob = new Blob([editor.value], {type: 'text/plain'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'script.numscript';
  a.click();
}

function openLocal() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.numscript,.txt';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = evt => {
      editor.value = evt.target.result;
      updateHighlight();
    };
    reader.readAsText(file);
  };
  input.click();
}

// --- GitHub/Drive Integration Stubs ---
function saveAsGithub() {
  alert('Save to GitHub: Not implemented in this demo.');
}
function saveToDrive() {
  alert('Save to Google Drive: Not implemented in this demo.');
}
function importFromGithub() {
  alert('Import from GitHub: Not implemented in this demo.');
}
function importFromDrive() {
  alert('Import from Google Drive: Not implemented in this demo.');
}
