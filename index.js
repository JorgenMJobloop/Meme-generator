const memeIMGsrc = [
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
];

const memeArray = [];
const genMemeBtn = document.getElementById("new-meme");
const displayMeme = document.getElementById("display-meme");
const resetButton = document.getElementById("reset-meme");
const shareSpan = document.getElementById("share");
const shareNewUrl = document.getElementById("share-url");
const shareOutputUrl = document.getElementById("share-output");
const likeButton = document.getElementById("like-button");
const dislikeButton = document.getElementById("dislike-button");
const getFiles = document.getElementById("file-inputs").files[0];

// Removed old comments of previous code.
// resets the innerHTML.
function reset() {
  displayMeme.innerHTML = "";
  shareNewUrl.textContent = "";
  shareOutputUrl.textContent = "";
}
// takes in two parameters, random and indexAt.
// random "randomizes" the index of the image in the array.
// and indexAt iterates through the elements lenght starting from 0.

function debugDisplay(random, indexAt) {
  const outputArr = [];
  shareNewUrl.textContent = "Share this meme!";
  random = Math.floor(Math.random() * memeIMGsrc.length);
  for (let i = 0; i < memeIMGsrc.length; i++) {
    indexAt += 1;
    outputArr.push(memeIMGsrc[i]);
    if (indexAt > outputArr.length) {
      break;
    } else {
      continue;
    }
  }
  if (outputArr[random] === outputArr.indexOf(random)) {
    outputArr.push(indexAt);
  }
  displayMeme.innerHTML = `<img src=${outputArr[
    random
  ].split()} id="display-meme"/>`; // prefer textContent over innerHTML.
  shareNewUrl.addEventListener("click", function (prefix, copyUrl) {
    prefix = `${outputArr[random]}`;
    copyUrl = window.location.href.concat(prefix).replace("/index.html", "/");
    navigator.clipboard.writeText(copyUrl);
    shareOutputUrl.textContent = "Image link copied to clipboard";
  });
  likeButton.addEventListener("click", function (getImage, stats) {
    getImage = `${outputArr[random]}`;
    stats = 0;
    shareOutputUrl.textContent = `This meme has ${(stats += 1)} likes`;
  });
  shareOutputUrl.textContent = "";
  return memeArray;
}
