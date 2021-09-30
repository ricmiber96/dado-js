const imgDice = document.querySelector(".img-dade");
const divContentHistory = document.querySelector(".history-content");
const arrayImgs = [];

function launch() {
    let number = Math.round(Math.random()*(6 - 1) + 1)
    const imgDiceSrc = `../assets/img/dado${number.toString()}.png`
    imgDice.src = imgDiceSrc
    setHistory(imgDiceSrc)
}

function setHistory(stringImg){

    const imgHistory = document.createElement("img");

    if(stringImg != ""){
        console.log(arrayImgs);
        if (arrayImgs.length >= 5 ){
            arrayImgs.shift();
            divContentHistory.removeChild(divContentHistory.firstChild)
        } 
        
        arrayImgs.push(stringImg);
        imgHistory.classList.add("img-history");
        imgHistory.src = arrayImgs[arrayImgs.length - 1];
        divContentHistory.appendChild(imgHistory);
           
      
    }

}