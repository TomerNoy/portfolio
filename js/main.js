const words = document.getElementById('words').children;


function animate_word(word) {
    var min = 2000,
        max = 4500;
    var rand = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(rand);

    word.animate([
        {
            color: '#1f1f1f',
        },
        {
            color: '#1e3748',
        },
        {
            color: '#3c6e71',
            fontSize: `min(${rand / 1000}vw, 35px)`
        },
        {
            color: 'orange',
        },
        {
            color: '#3c6e71',
            fontSize: `min(${rand / 1000}vw, 35px)`
        },
        {
            color: '#1e3748',
        },
        {
            color: '#1f1f1f',
        },
    ], { duration: rand * 2 });
    setTimeout(function () { animate_word(word) }, rand * 4);
}

for (let i = 0; i < words.length; i++) {
    animate_word(words[i]);
}