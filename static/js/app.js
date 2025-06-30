async function loadData() {
    const response = await fetch('data/bible_sample.json');
    const data = await response.json();
    return data;
}

function populateTranslationOptions(data) {
    const select = document.getElementById('translation');
    const translations = Object.keys(data.translations);
    translations.forEach(t => {
        const option = document.createElement('option');
        option.value = t;
        option.textContent = t;
        select.appendChild(option);
    });
    select.addEventListener('change', () => displayVerses(data));
}

function displayVerses(data) {
    const translation = document.getElementById('translation').value;
    const container = document.getElementById('content');
    container.innerHTML = '';
    data.verses.forEach(v => {
        const verseDiv = document.createElement('div');
        const text = v[translation] || '[Missing translation]';
        verseDiv.innerHTML = `<span class="reference">${v.ref}</span> ` + colorize(text);
        container.appendChild(verseDiv);
    });
}

function colorize(text) {
    return text.replace(/<jesus>(.*?)<\/jesus>/gi, '<span class="red-text">$1</span>')
               .replace(/<father>(.*?)<\/father>/gi, '<span class="father-text">$1</span>');
}

window.addEventListener('DOMContentLoaded', async () => {
    const data = await loadData();
    populateTranslationOptions(data);
    displayVerses(data);
});
