function runNumberScript() {
  const code = document.getElementById('numberscript-editor').value;
  let output = '';
  try {
    // Simple parser: look for "solve <expression>"
    const lines = code.split('\n');
    for (let line of lines) {
      line = line.trim();
      if (!line) continue;
      if (line.startsWith('solve ')) {
        const expr = line.slice(6);
        // Evaluate math expression safely
        const result = solveExpression(expr);
        output += `solve ${expr} = ${result}\n`;
      }
      // ...add more commands as needed...
    }
  } catch (e) {
    output = 'Error: ' + e.message + (e.stack ? '\n' + e.stack : '');
  }
  // Escape output for HTML safety
  document.getElementById('numberscript-output').textContent = output.trim();
}

// Make available for IDE.js to wrap
window._runNumberScript = runNumberScript;

function solveExpression(expr) {
  // Only allow numbers, operators, parentheses, Math functions
  const safeExpr = expr.replace(/[^-()\d/*+.a-zA-Z0-9, ]/g, '');
  // Replace common math functions with Math.*
  const mathFuncs = ['sin','cos','tan','log','sqrt','abs','pow','exp','max','min','floor','ceil','round'];
  let jsExpr = safeExpr;
  for (const fn of mathFuncs) {
    jsExpr = jsExpr.replace(new RegExp(`\\b${fn}\\b`, 'g'), `Math.${fn}`);
  }
  // eslint-disable-next-line no-eval
  return eval(jsExpr);
}
