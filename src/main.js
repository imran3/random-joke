let jokes;
const jokesLimit = 250;

async function fetchJokes() {
  console.log("getting jokes");
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
  console.log(joke);

  document.getElementById("title").innerText = joke.title;

  to = joke.selftext.replace(/\n{2}/g, "&nbsp;</p><p>");
  to = to.replace(/\n/g, "&nbsp;<br />");
  to = "<p>" + to + "</p>";

  document.getElementById("selftext").innerHTML = to;
  document.getElementById("joke").classList.remove("hidden");
};

//getJoke();

const hello = (arg) => console.log("ciao", arg);
