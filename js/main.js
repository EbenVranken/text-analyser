let val = document.getElementById("textfield");
let charLen, wordsCount, wordLen, lines, currentLine, wpm, words, word_time, delay, readTime;


function valueCheck() {
    val = document.getElementById("textfield");



    /// Character Count
    charLen = val.value.length;
    document.getElementById("charCount").innerHTML = "Characters: " + charLen;



    /// Word Count 
    wordsCount = val.value.match(/\b[-?(\w+)?]+\b/gi);
    if(wordsCount != null) {
            wordLen = wordsCount.length;
    document.getElementById("wordCount").innerHTML = "Words: " + wordLen;
    }


    /// Line count
    lineCount = 0;
    lines = val.value.split("\n");
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].length > 0) lineCount++;
    }
    document.getElementById("lineCount").innerHTML = "Lines: " + lineCount;



    /// current Line
    currentLine = val.value.substr(0, val.selectionStart).split("\n").length;
    document.getElementById("currentLine").innerHTML = "Current line: " + currentLine;



    /// Read time
    let readTimeCalc = wordLen / 180;

    let readTimes =
        [
            (readTimeCalc > 0) ? Math.floor(readTimeCalc) : Math.ceil(readTimeCalc),
            readTimeCalc % 1
        ];

    let readTimeMinute = readTimes[0];
    let readTimeSecond = Math.round(readTimes[1] * 60);

    let readTime = readTimeMinute.toString() + " minutes and " + readTimeSecond.toString() + " seconds";
    document.getElementById("readTime").innerHTML = "Reading time: " + readTime;



    /// Speak time
    let speakTimeCalc = wordLen / 120;

    let speakTimes =
        [
            (speakTimeCalc > 0) ? Math.floor(speakTimeCalc) : Math.ceil(speakTimeCalc),
            speakTimeCalc % 1
        ];

    let speakTimeMinute = speakTimes[0];
    let speakTimeSecond = Math.round(speakTimes[1] * 60);

    let speakTime = speakTimeMinute.toString() + " minutes and " + speakTimeSecond.toString() + " seconds";
    document.getElementById("speakTime").innerHTML = "Speaking time: " + speakTime;
};

function save() {
    var text = document.getElementById("textfield").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain" });
    var anchor = document.createElement("a");
    anchor.download = "notes.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = "_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
};


function remove() {
    val = document.getElementById("textfield");
    val.value = "";
}