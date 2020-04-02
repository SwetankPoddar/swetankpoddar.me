var app = document.getElementById('name-typewritter');

var typewriter = new Typewriter(app, {
    loop: true
});

const REFRESH_EVERY = 1800 // mili-seconds

typewriter.typeString('Swetank <span class="text-primary">Poddar</span>')
    .pauseFor(REFRESH_EVERY)
    .deleteAll()
    .typeString('Hello there!')
    .pauseFor(REFRESH_EVERY / 3)
    .deleteChars(6)
    .typeString('<span class="text-primary">World</span>!')
    .pauseFor(REFRESH_EVERY)
    .deleteAll()
    .start();