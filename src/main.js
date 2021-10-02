let jokes;
const jokesLimit = 250;

async function fetchJokes() {
  const res = await fetch(
    "https://www.reddit.com/r/Jokes/hot/.json?limit=" + jokesLimit
  );

  const posts = await res.json();
  jokes = posts.data.children.map((d) => {
    return { title: d.data.title, selftext: d.data.selftext };
  });
}

const displayRandomJoke = () => {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];

  document.getElementById("title").innerText = joke.title;

  let selftext = joke.selftext.replace(/\n{2}/g, "&nbsp;</p><p>");
  selftext = selftext.replace(/\n/g, "&nbsp;<br />");

  document.getElementById("selftext").innerHTML = "<p>" + selftext + "</p>";
  document.getElementById("joke").classList.remove("hidden");
};

//getJoke();

const hello = (arg) => console.log("ciao", arg);
