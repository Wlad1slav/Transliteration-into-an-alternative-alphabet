import {Transliteration} from "./Transliteration.mjs";

const transliterationApp = new Transliteration({
    alphabets: [
        './alphabets/Czech-Cyrillic.json',
        './alphabets/Ukranian-Latynka.json',
    ],
    // alphabetsDirection: '../alphabets'
});

transliterationApp.init().then(r => {
    transliterationApp.loadOptions('selectAlphabet');

    document.getElementById('inputTextToT').addEventListener('input', (e) => {

        document.getElementById('translOutput').innerText = transliterationApp.transliteration(e.target.value);

        e.target.style.height = `${e.target.value.length*1.1}px`;
    });

    document.getElementById('selectAlphabet').addEventListener('change', (e) => {
        try {
            transliterationApp.selectAlphabet(e.target.value);
        } catch (e) {
            transliterationApp.selectAlphabet(null);
        }
    });

});