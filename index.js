const memeIMGsrc = [
  "https://i1.sndcdn.com/avatars-000432308172-ko4j58-t500x500.jpg",
  "https://thechive.com/wp-content/uploads/2022/12/hao5qjn8175a1.jpg?attachment_cache_bust=4277317&quality=85&strip=info&w=400",
  "https://img-9gag-fun.9cache.com/photo/aB26dRZ_460s.jpg",
  "https://thechive.com/wp-content/uploads/2023/02/ngv8ogsb91b31.jpg?attachment_cache_bust=4327922&quality=85&strip=info&w=400",
  "https://i1.sndcdn.com/artworks-000375247065-25icsp-t500x500.jpg",
  "https://i1.sndcdn.com/avatars-000216201090-dqx4ac-t500x500.jpg",
  "https://media.tenor.com/Rz19D5EE6QoAAAAC/dank-meme.gif",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhnSXFOh0rzDIXtXtIsCnI7lX4mOyMrpLYgLkeALBKdGfDiqKXNeF_tvuevYgWv1y3cQ&usqp=CAU",
  "https://i.chzbgr.com/full/9608541440/h22655D23/just-about-mcfucking-had",
  "https://i.chzbgr.com/full/9170967296/hD3918864/cartoon-peter",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUSiUiBDgOchrkQYm_KCdBnpc90Xaqt0a4dtD5mahRrgJksd-RiE3rtOjoy00OYAVaBDA&usqp=CAU",
  "https://media.tenor.com/images/58a8b6744c6dbf7ee8ae9fe641c5aff2/tenor.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0gnQFuBR_1AN3zaBdpxTX1Z0hPwjtV9EVQkSTrxsCdoYuICvd0jNe3opQhkFjeslgRD8&usqp=CAU",
];

const memeArray = [];
const genMemeBtn = document.getElementById("new-meme");
const displayMeme = document.getElementById("display-meme");
const resetButton = document.getElementById("reset-meme");
// Removed old comments of previous code.
function reset() {
  displayMeme.innerHTML = "";
}
// takes in two parameters, random and indexAt.
// random "randomizes" the index of the image in the array.
// and indexAt iterates through the elements lenght starting from 0.

function debugDisplay(random, indexAt) {
  const outputArr = [];
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
  return memeArray;
}
