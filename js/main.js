const words = document.getElementById('words').children;


function animate_word(word) {
    ran = 1.5 + 1.5 * Math.random();
    console.log(ran)

    word.animate([
        {
        },
        {
            color: '#1e3748',
        },
        {
            color: '#3c6e71',
            fontSize: `${ran}em`,
        },
        {
            color: 'orange',
        },
        {
            color: '#3c6e71',
            fontSize: `${ran}em`,
        },
        {
            color: '#1e3748',
        },
        {
        },
    ], {
        duration: ran * 3000
    });
    setTimeout(function () { animate_word(word) }, ran * 5000);
}

for (let i = 0; i < words.length; i++) {
    animate_word(words[i]);
}