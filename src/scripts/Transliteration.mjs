export class Transliteration {

    currentAlphabet = null;
    #alphabetPaths;

    alphabetsInformation = [];

    constructor(options) {
        this.#alphabetPaths = options.alphabets;
    }

    async init() {
        for (let alphabetIndex in this.#alphabetPaths) {
            // Adds all alphabets to the array
            this.alphabetsInformation.push(await this.#loadAlphabet(this.#alphabetPaths[alphabetIndex]));

        }

    }

    selectAlphabet(name) {
        if (name === null) {
            this.currentAlphabet = null;
            return;
        }

        this.currentAlphabet = this.alphabetsInformation.find(value => value['name'] === name);

        this.currentAlphabet['alphabetKeys'] = Object.keys(this.currentAlphabet['alphabet'])
            .sort((a, b) => (b.length - a.length));
    }

    async #loadAlphabet(path) {
        // Loads certain alphabet from json file
        try {
            const response = await fetch(path);
            return await response.json();
        } catch (error) {
            console.log(`Error loading "${path}": alphabet:`, error);
            throw error;
        }
    }

    transliteration(text) {

        if (this.currentAlphabet === null) {
            return text;
        }

        for (let k of this.currentAlphabet['alphabetKeys']) {
            text = text.replaceAll(k, this.currentAlphabet['alphabet'][k], 'g');
        }

        return text;

    }

    loadOptions(selectId) {
        for (let alphabet of this.alphabetsInformation) {
            const option = document.createElement('option');
            option.value = alphabet['name'];
            option.innerText = `${alphabet['icon']} ${alphabet['name']}`;
            document.getElementById(selectId).appendChild(option);
        }
    }

}