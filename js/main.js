const words = document.getElementById('words').children;


function animate_word(word) {
    var min = 3000,
        max = 5000;
    var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10

    word.animate([
        { color: '#1f1f1f' },
        { color: '#1e3748' },
        { color: '#3c6e71' },
        { color: '#d9d9d9' },
        { color: '#3c6e71' },
        { color: '#1e3748' },
        { color: '#1f1f1f' },
    ], { duration: rand });
    setTimeout(function () { animate_word(word) }, rand * 2);
}

for (let i = 0; i < words.length; i++) {
    animate_word(words[i]);
}