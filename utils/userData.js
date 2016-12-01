let userData = {
  foo: "bar"
}

export function getUserData() {

  console.warn("THIS IS ON");

}
export function setUserData() {

  console.warn("THIS IS ON");

}

export function randomiZer() {
  var userID = "user-";

      var theNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      var theAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

      var userIDNumericChar = '';
      var userIDAlphaChar = '';
      var binaryCounter = '';

      for (var x = 0; x < 7; x++) {
          binaryCounter = Math.round(Math.random() * 1);
          if (binaryCounter == 0) {
              userIDNumericChar = Math.round(Math.random() * (theNumbers.length - 1));
              console.log(userIDNumericChar);
              userID += userIDNumericChar;

          } else {
              userIDAlphaChar = Math.round(Math.random() * (theAlphabets.length - 1));
              userID += theAlphabets[userIDAlphaChar].toUpperCase();
          }
      }
      return userID;

}
