var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://sun9-33.userapi.com/c855132/v855132617/21d6e4/kO5Mynu_x84.jpg') {
      myImage.setAttribute ('src','https://sun9-32.userapi.com/c858416/v858416607/1beec1/kPRBKLH-RU4.jpg');
    } else {
      myImage.setAttribute ('src','https://sun9-32.userapi.com/c858416/v858416607/1beec1/kPRBKLH-RU4.jpg');
    }
}
