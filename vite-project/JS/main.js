import "../CSS/style.css";
import { songs } from "./songs";

const songsListContainer = document.getElementById("songsList");

function showsongs(songs) {
  songsListContainer.innerHTML = "";
  songs.forEach((song) => {
    const songHTML = `
    <div class="song">
        <h2>${song.name}</h2>
        <h5>Album: ${song.album}</h5>
        <h5>Features: ${song.features}</h5>
        <h5>Length: ${song.length}</h5>
    </div>
    `;
    songsListContainer.insertAdjacentHTML("beforeend", songHTML);
  });
}

showsongs(songs);

albumsorterC.addEventListener("click", () => {
  const albumsC = songs.filter((song) => song.album === "Chromakopia");
  showsongs(albumsC);
  document.body.classList.remove("igor");
  document.body.classList.remove("cmiygl");
  document.body.classList.remove("flower");
  document.body.classList.add("chromakopia");
});

albumsorterI.addEventListener("click", () => {
  const albumsI = songs.filter((song) => song.album === "Igor");
  showsongs(albumsI);
  document.body.classList.remove("chromakopia");
  document.body.classList.remove("cmiygl");
  document.body.classList.remove("flower");
  document.body.classList.add("igor");
});

albumsorterCM.addEventListener("click", () => {
  const albumsCM = songs.filter(
    (song) => song.album === "Call Me if You Get Lost"
  );
  showsongs(albumsCM);
  document.body.classList.remove("chromakopia");
  document.body.classList.remove("igor");
  document.body.classList.remove("flower");
  document.body.classList.add("cmiygl");

});

albumsorterFB.addEventListener("click", () => {
  const albumsFB = songs.filter((song) => song.album === "Flower Boy");
  showsongs(albumsFB);
  document.body.classList.remove("chromakopia");
  document.body.classList.remove("cmiygl");
  document.body.classList.remove("igor");
  document.body.classList.add("flower");
});
