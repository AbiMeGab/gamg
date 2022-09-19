window.addEventListener("load", function(){
    barra.innerHTML += `<nav>
    <ul><li><a href="/index.html">Homepage</a></li>
        <li>|</li>
        <li><a href="/pages/about.html">About me</a></li>
        <li>|</li>
        <li><a href="/pages/skills.html">Skills</a></li>
        <li>|</li>
        <li><a href="/pages/proj.html">Projects</a></li>
        <li>|</li>
        <li><a href="/pages/quo.html">Quotations</a></li></ul>
        </nav>`

    footer.innerHTML += `<footer>

    <div class="card bg-transparent text-black border-0">
        <img src="/src/nube.png" class="card-img" alt="nubes">
        <div class="card-img-overlay">
        <div><audio controls autoplay class="audio" hidden>
            <source src="/src/golden.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        <p class="card-text text-center mt-3">&#169; Gadi Abi Medero Gabriel</p></div>
        </div>
      </div>
      
</footer>`
});