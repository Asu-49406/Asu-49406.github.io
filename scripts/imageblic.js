var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/yoba1.png') {
      myImage.setAttribute ('src','images/yoba2.png');
    } else {
      myImage.setAttribute ('src','images/yoba2.png');
    }
}