let jokes;
const numberOfJokes = 100;

async function fetchJokes() {
  const res = await fetch(
    "https://www.reddit.com/r/Jokes/new/.json?limit=" + numberOfJokes
  );

  const posts = await res.json();
  jokes = posts.data.children.map((d) => {
    return { title: d.data.title, selftext: d.data.selftext };
  });

  jokes = jokes.splice(2);
}

const displayRandomJoke = () => {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];

  document.getElementById("title").innerText = joke.title;

  let selftext = joke.selftext.replace(/\n{2}/g, "&nbsp;</p><p>");
  selftext = selftext.replace(/\n/g, "&nbsp;<br />");
  var txt = document.createElement("textarea");
  txt.innerHTML = selftext;
  document.getElementById("selftext").innerHTML = "<p>" + txt.value + "</p>";

  document.getElementById("joke").classList.remove("hidden");
};

//getJoke();

const hello = (arg) => console.log("ciao", arg);
