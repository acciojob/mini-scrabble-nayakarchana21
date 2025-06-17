document.getElementById('evaluatedText').addEventListener('input', (e) => {
  const text = e.target.value.trim();
  document.getElementById('letterCount').innerHTML = text.length;
});
