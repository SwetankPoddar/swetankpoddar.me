var app = document.getElementById('typewriter-effect');

var typewriter = new Typewriter(app, {
    loop: true
});

const REFRESH_EVERY = 1800 // seconds

typewriter.typeString('Hello there!')
    .pauseFor(REFRESH_EVERY)
    .deleteChars(6)
    .typeString("<strong>World</strong>!")
    .pauseFor(REFRESH_EVERY)
    .deleteAll()
    .typeString("I am a software developer!")
    .pauseFor(REFRESH_EVERY)
    .deleteAll()
    .typeString("I am a computer scientist!")
    .pauseFor(REFRESH_EVERY)
    .start();