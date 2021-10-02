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

  addEnterListner();
}

const displayRandomJoke = () => {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];

  document.getElementById("title").innerText = joke.title;

  let selftext = joke.selftext.replace(/\n{2}/g, "&nbsp;</p><p>");
  selftext = selftext.replace(/\n/g, "&nbsp;<br />");
  var txt = document.createElement("textarea");
  txt.innerHTML = selftext;
  document.getElementById("selftext").innerHTML = "<p>" + txt.value + "</p>";

  animateCSS("joke", "tada");
  document.getElementById("joke").classList.remove("hidden");
};

const animateCSS = (element, animation, prefix = "animate__") => {
  return new Promise((resolve, _) => {
    const animationName = `${prefix}${animation}`;
    const node = document.getElementById(element);

    node.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });
};

const addEnterListner = () => {
  window.addEventListener("keyup", function (event) {
    if (event.code == "Enter") {
      displayRandomJoke();
    }
  });
};
