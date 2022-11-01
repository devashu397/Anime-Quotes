function showQuote() {
  const url = "https://animechan.vercel.app/api/random";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const info = document.getElementById("quoteinfo");
      info.innerHTML = `Quote: ${data.quote}<br>Anime: ${data.anime}<br>Character: ${data.character}`;
    });
}
