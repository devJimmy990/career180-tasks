onload = () => {
    const devWord = "DEVELOPER";
    const word = document.getElementById("wordAnimation");
    let isAdding = true;
    let index = 1;
    setInterval(() => {
        if (isAdding) {
            word.textContent += devWord[index++];
            if (word.textContent.length === devWord.length+1) {
                isAdding = false;
            }
        } else {
            word.textContent = word.textContent.slice(0, index--);
            if (index === 1) {
                isAdding = true;
            }
        }
    }, 500);
}