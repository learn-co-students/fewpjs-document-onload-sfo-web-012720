document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    const pg = document.getElementById('text')
    pg.innerHTML = 'This is really cool!'
  });

console.log(
   "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
  