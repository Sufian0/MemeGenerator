let img = document.getElementsByTagName('img');
// getelementbyID is better practice than using by tag name. The reason why is
// in a web page, it is possible to have the same name (like input fields)
// that makes them not unique. And if we try to obtain by tag name, it might 
// retrieve by many different tags with the same name.

let form = document.querySelector('form');
const LStoDos = JSON.parse(localStorage.getItem("todos")) || [];

for (let i = 0; i < LStoDos.length; i++) {
    let savedTopText = LStoDos[i].topText;
    let savedBottomText = LStoDos[i].bottomText;
    let savedImgUrl = LStoDos[i].imageUrl;
    let savedMeme = document.createElement("div");
    let retrievedTopText = document.createElement("div");
    let retrievedBottomText = document.createElement("div");
    let retrievedimgUrl = document.createElement("img");
    let newRemBtn = document.createElement("button");

    /* read the requirements carefully. 
    local storage*/

    retrievedimgUrl.src = savedImgUrl;

    retrievedTopText.classList.add("top_text");
    retrievedTopText.innerHTML = savedTopText;

    retrievedBottomText.classList.add("bottom_text");
    retrievedBottomText.innerHTML = savedBottomText;

    newRemBtn.innerHTML = "Remove Above Meme";

    savedMeme.classList.add("meme");
    savedMeme.appendChild(retrievedTopText);
    savedMeme.appendChild(retrievedBottomText);
    savedMeme.appendChild(retrievedimgUrl);
    savedMeme.appendChild(newRemBtn);

    let insertSavedMeme = document.getElementById('meme-location');
    insertSavedMeme.appendChild(savedMeme);

    newRemBtn.addEventListener('click', function(e) {
        savedMeme.remove();
    })
}

form.addEventListener('submit', function(e) {
      e.preventDefault();
      let meme = document.createElement("div");
      let top_text = document.createElement("div");
      let bottom_text = document.createElement("div");
      let img = document.createElement("img");
      
      let btn = document.createElement("button");
      btn.setAttribute("type","button");
      
      img.src = document.getElementById('picurl').value;
      top_text.classList.add("top_text");
      top_text.innerHTML = document.getElementById('top-text').value;
      
      bottom_text.classList.add("bottom_text");
      bottom_text.innerHTML = document.getElementById('bottom-text').value;
      
      btn.innerHTML = "Remove Above Meme";
      
      meme.classList.add("meme");
      meme.appendChild(top_text);
      meme.appendChild(bottom_text);
      meme.appendChild(img);
      meme.appendChild(btn);
      
      let memeLocation = document.getElementById('meme-location');
      memeLocation.appendChild(meme);

      document.getElementById('picurl').value = "";
      document.getElementById('top-text').value = "";
      document.getElementById('bottom-text').value = "";

      btn.addEventListener('click', function(e) {
          meme.remove();
      })
      LStoDos.push({ 
        topText: top_text.innerText,
        bottomText: bottom_text.innerText,
        imageUrl: img.src,
        removeButton: btn.innerText
        });

      localStorage.setItem("todos", JSON.stringify(LStoDos));
});