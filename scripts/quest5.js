function stringReversa(str = document.getElementById("textString").value) {
    let reverseString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }

    return document.getElementById("reverseText").innerText = reverseString;
}