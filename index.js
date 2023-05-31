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
const memeArray = [];
const genMemeBtn = document.getElementById("new-meme");
const displayMeme = document.getElementById("display-meme");
const shareSpan = document.getElementById("share");
const shareNewUrl = document.getElementById("share-url");
const shareOutputUrl = document.getElementById("share-output");

async function getDynamicMemes() {
  const response = await fetch("https://api.imgflip.com/get_memes"); // uses the GET HTTP Method.
  const jsonData = await response.json();
  let outputArray = jsonData.data.memes.map(({ url }) => url);
  let random = Math.floor(Math.random() * outputArray.length);
  for (o in outputArray) {
    outputArray.push(o);
  }
  displayMeme.innerHTML = `<img src=${outputArray[random]} id="display-meme"/>`;
}

// Removed old comments of previous code.
// takes in two parameters, random and indexAt.
// random "randomizes" the index of the image in the array.
// and indexAt iterates through the elements lenght starting from 0.

function debugDisplay(random, indexAt) {
  const outputArr = [];
  shareNewUrl.textContent = "Share this meme!";
  random = Math.floor(Math.random() * memeImgSrc.length);
  for (let i = 0; i < memeImgSrc.length; i++) {
    indexAt += 1;
    outputArr.push(memeImgSrc[i]);
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
  shareOutputUrl.textContent = "";
  return memeArray;
}
