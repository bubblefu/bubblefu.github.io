let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/chaichai.jpg') {
        myImage.setAttribute('src', 'images/2_chaichai.jpg');
    } else {
        myImage.setAttribute('src', 'images/chaichai.jpg')
    }
}

console.log("asdasdasd");