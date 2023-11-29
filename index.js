const memeImgSrc = [
  "images/aB26dRZ_460s.jpg",
  "images/dank-meme.gif",
  "images/frog1.png",
  "images/cartoon-peter.jpeg",
  "images/sus-ur.gif",
  "images/maxresdefault.jpg",
  "images/shrek1.jpeg",
  "images/billnye.jpg",
  "images/lag.gif",
  "images/general-chat.gif",
  "images/memes.gif",
  "images/meme-shrek.gif",
  "images/avatars-000216201090-dqx4ac-t500x500.jpg",
  "images/avatars-000432308172-ko4j58-t500x500.jpg",
  "images/hao5qjn8175a1.webp",
  "images/lol-funny-memes.gif",
  "images/just-about-mcfucking-had.png",
  "images/memes.png",
  "images/limp.png",
  "images/barbie.png",
  "images/dank-2.png",
  "images/doggo.png",
  "images/twinpeaks.png",
  "images/metalcore.png",
  "images/castlevania.png",
  "images/heavyhair.png",
  "images/832-pm-google-learn-c-843-pm-google-learn-python-made-with-mematic.png",
  "images/new-language.jpg",
  "images/error.png",
  "images/coding_praising_meme.webp",
];

let memeImgSrcRandomIdx;
const genMemeBtn = document.getElementById("new-meme");
const displayMeme = document.getElementById("display-meme");
const shareSpan = document.getElementById("share");
const shareNewUrl = document.getElementById("share-url");
const shareOutputUrl = document.getElementById("share-output");

async function getDynamicMemes() {
  const response = await fetch("https://api.imgflip.com/get_memes"); // uses the GET HTTP Method.
  const jsonData = await response.json();

  const outputArray = jsonData.data.memes.map(({ url }) => url);
  const random = Math.floor(Math.random() * outputArray.length);

  for (const output in outputArray) outputArray.push(output);

  displayMeme.src = outputArray[random];
  shareNewUrl.textContent = "Share this meme!";
}

function debugDisplay() {
  let random = Math.floor(Math.random() * memeImgSrc.length);

  while (random === memeImgSrcRandomIdx)
    random = Math.floor(Math.random() * memeImgSrc.length);

  memeImgSrcRandomIdx = random;

  displayMeme.src = memeImgSrc[random];
  shareNewUrl.textContent = "Share this meme!";
  console.log("Hello World!");
}

genMemeBtn.addEventListener("click", function () {
  const newMemeFunctions = [getDynamicMemes, debugDisplay];
  const randomIndex = Math.floor(Math.random() * newMemeFunctions.length);

  newMemeFunctions[randomIndex]();
});

shareNewUrl.addEventListener("click", function () {
  navigator.clipboard.writeText(displayMeme.src);
  shareOutputUrl.textContent = "Image link copied to clipboard";
});
