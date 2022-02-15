const words = document.getElementById('words').children;

function animate_word(word) {
    var min = 2000,
        max = 4500;
    var rand = Math.floor(Math.random() * (max - min + 1) + min);

    if (word.id == 'creativity') {
        console.log(rand);
    }

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

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#my-nav'
})

//  added
// $('#contact-form').bootstrapValidator({
//     //        live: 'disabled',
//     message: 'This value is not valid',
//     feedbackIcons: {
//         valid: 'glyphicon glyphicon-ok',
//         invalid: 'glyphicon glyphicon-remove',
//         validating: 'glyphicon glyphicon-refresh'
//     },
//     fields: {
//         Name: {
//             validators: {
//                 notEmpty: {
//                     message: 'The Name is required and cannot be empty'
//                 }
//             }
//         },
//         email: {
//             validators: {
//                 notEmpty: {
//                     message: 'The email address is required'
//                 },
//                 emailAddress: {
//                     message: 'The email address is not valid'
//                 }
//             }
//         },
//         Message: {
//             validators: {
//                 notEmpty: {
//                     message: 'The Message is required and cannot be empty'
//                 }
//             }
//         }
//     }
// });

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
