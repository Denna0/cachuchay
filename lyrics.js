document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "Tatlong bilyon",
        "ikaw lang nga ang aking gusto",
        "Pasensiya na kung ngayon ako'y 'di para sa 'yo",
        "Tayo ay papunta na sa 'ting bagong yugto",
        "'Yokong mabuhay sa isang mundong walang tayo",
        "o(〃＾▽＾〃)o",
        "Mwaaa HAHAHHAHA"

    ];

    const delay = 90; // adjust the speed here
    const lyricsElement = document.getElementById("lyrics");

    async function displayLyrics() {
        for (const line of lyrics) {
            for (const char of line) {
                const charElement = document.createElement("span"); 
                charElement.textContent = char;
                charElement.style.animation = "glow 2s ease-in-out"; 
                lyricsElement.appendChild(charElement); 

                await new Promise((resolve) => setTimeout(resolve, delay));

                
                charElement.style.animation = "";
            }

            lyricsElement.appendChild(document.createElement("br")); 

            await new Promise((resolve) => setTimeout(resolve, delay * 10));

            lyricsElement.textContent = "";

            await new Promise((resolve) => setTimeout(resolve, delay * 10));
        }
        setTimeout(function () {
            window.location.href =  "end.html"; //set here your next target html
        }, 700);
    }
    displayLyrics();
});