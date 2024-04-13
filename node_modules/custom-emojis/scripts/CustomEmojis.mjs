/**
 * CustomEmojis is a dynamic library designed to manage and integrate custom emojis within web pages effortlessly.
 *
 * Features:
 * - Dynamic Emoji Conversion: Automatically convert specified shortcodes into images within the text, enriching user experience with visual elements.
 * - Flexible Emoji Definition: Define your custom emojis directly in JavaScript or through an external JSON file, allowing for easy updates and management.
 * - Interactive Elements: Create emoji tables and clickable emoji buttons, enabling users to interact with emojis directly on your web page.
 *
 * Example of use: ```
 * const emojiObj = new CustomEmojis({
 *     emojis: [
 *         {
 *             shortcode: "/smile/",
 *             path: "https://example.com/smile.webp",
 *             alt: "\uD83D\uDE0A"
 *         }],
 *     autoSearchShortcodes: true
 * });
 * emojiObj.init().then(() => {
 *     emojiObj.addInputField('field1');
 *     emojiObj.addEmojiTable('field1', 'emojis-table');
 * });
 * ```
 *
 * Author: Vladyslav Fokin
 * License: MIT
 * GitHub: https://github.com/Wlad1slav/Custom-Emojis-for-Your-Site
 * Documentation: https://github.com/Wlad1slav/Custom-Emojis-for-Your-Site?tab=readme-ov-file#documentation
 */


import {InputField} from './InputField.mjs';
import {EmojiTable} from './EmojiTable.mjs';

export class CustomEmojis {

    config = {
        emojiSize: {                        // Emoji size
            width: 'auto',
            height: '24px',
            maxWidth: '30px',
        },
        autoSearchShortcodes: true,         // Automatic search for shortcodes on the body of the page
        emojis: null,                       // The emojis that will be used
        emojisJsonPath: 'emojis.json',      // Json file from which to download emojis
    };

    constructor(config=null) {
        config !== null ? Object.assign(this.config, config) : null;
    }

    async init() {
        // Initialization

        if (this.config.emojis === null) {
            // If an array with all emojis was not specified,
            // they are loaded from the json file
            await this.#computeEmojis();
        }

        if (this.config.autoSearchShortcodes) {
            // Search the page for shortcodes and convert them to emojis
            this.searchShortcodesAtElement(null, document.body);
        }
    }

    // // // // // // // // // // // // // // // // // // // // //
    // COMPUTE: Loading of necessary information from configs   //
    // // // // // // // // // // // // // // // // // // // // //
    async #computeEmojis() {
        // Loads all emojis
        try {
            const response = await fetch(this.config.emojisJsonPath);
            this.config.emojis = await response.json();
        } catch (error) {
            console.log('Error loading emojis:', error);
            throw error;
        }
    }

    // // // // // // // // //
    // Class methods to use //
    // // // // // // // // //
    emojiTag(path, alt) {
        // Returns an emoji element
        const emoji = document.createElement('img');
        emoji.src = path;
        emoji.classList.add('svg-emoji');
        emoji.alt = alt;
        emoji.loading = 'lazy'; // Enable native lazy loading
        emoji.style.width = this.config.emojiSize.width ? this.config.emojiSize.width : 'auto';
        emoji.style.height = this.config.emojiSize.height ? this.config.emojiSize.height : 'auto';
        emoji.style.maxWidth = this.config.emojiSize.maxWidth ? this.config.emojiSize.maxWidth : 'auto';
        return emoji;
    }

    getEmoji(shortcode) {
        // Get emoji by shortcode
        for (let i in this.config.emojis) {
            if (this.config.emojis[i]['shortcode'] === shortcode) {
                return this.emojiTag(this.config.emojis[i]['path'], this.config.emojis[i]['alt']);
            }
        }
    }

    createEmojiButton(emoji, fn) {
        // Creates a clickable emoji that calls the given function
        const emojiButton = this.emojiTag(emoji['path'], emoji['alt']);
        emojiButton.classList.add('emoji-button');
        emojiButton.onclick = () => fn();
        return emojiButton;
    }

    addEmojiToHtml(emojiShortcode, elementId, element=null) {
        // Adds an emoji to a specific element based on shortcode

        element = element === null ? document.getElementById(elementId) : element;
        element.innerHTML += this.getEmoji(emojiShortcode).outerHTML;

    }

    addInputField(fieldId, field=null) {
        // Adds the ability to use custom emojis in a specific input field
        // The input field must have a div tag with the attribute contenteditable="true"

        field = field === null ? document.getElementById(fieldId) : field;
        new InputField(this, fieldId, field)
    }

    addEmojiTable (htmlToAddId, tableId, table=null) {
        // Adds all emojis in the form of buttons to a given html object

        table = table === null ? document.getElementById(tableId) : table;
        new EmojiTable(this, htmlToAddId, tableId, table)
    }

    searchShortcodesAtElement(elementId, element=null) {
        // Checks the element for shortcodes, if it finds shortcodes, replaces them with emojis

        element = element === null ? document.getElementById(elementId) : element;

        for (let emojiIndex in this.config.emojis) {
            if (element.textContent.includes(this.config.emojis[emojiIndex]['shortcode'])) {
                element.innerHTML = element.innerHTML.replace(
                    new RegExp(this.config.emojis[emojiIndex]['shortcode'], 'g'),
                    // emojiTag returns an emoji element, outerHTML converts it to a string
                    this.emojiTag( this.config.emojis[emojiIndex]['path'], this.config.emojis[emojiIndex]['alt']).outerHTML
                );
            }
        }

    }
    
}
