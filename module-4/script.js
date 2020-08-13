/*
Solution of assignment 4:
Expected output:
Hello Yashik
Good Bye Jag
Good Bye Juri
Good Bye Jason
Hello Pirthvi
Hello Felix
Hello Laki
Hello Pooja
Hello Lakshman
Good Bye Jenni
*/

(function() {
    var names = ["Yashik", "Jag", "Juri", "Jason", "Pirthvi", "Felix", "Laki", "Pooja", "Lakshman", "Jenni"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();