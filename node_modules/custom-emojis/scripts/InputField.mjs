/**
 * InputField - a class for integrating custom emojis into text fields.
 *
 * This class is designed to add the ability to insert emojis into text fields that have the attribute contenteditable="true".
 * It monitors user input and replaces emoji shortcodes with corresponding images, as well as handles pasting text
 * from the clipboard to prevent the insertion of unauthorized formatting.
 *
 * Dependencies:
 * - The class uses functions from CustomEmojis for searching and replacing emojis.
 *
 * Example of use:
 * ```
 * const emojiObj = new CustomEmojis();
 * emojiObj.init().then(() => {
 *     new InputField(emojiObj, 'editable-text-field');
 * });
 * ```
 *
 */

export class InputField {

    #emojisObj;
    #field;

    constructor(emojisObj, fieldId, field=null) {
        this.#field = field === null ? document.getElementById(fieldId) : field;
        this.#emojisObj = emojisObj;

        this.#setupEventListeners();
    }

    #setupEventListeners() {
        // Setting event listeners for a field
        this.#field.addEventListener('input', (e) => this.#handleInput(e));
        this.#field.addEventListener('paste', (e) => this.#handlePaste(e));
        this.#field.addEventListener('input', (e) => this.#checkTextForIllegalTags(e));
    }

    // CHECKING THE ENTERED TEXT FOR THE PRESENCE OF SHORT CODES
    #handleInput(e) {
        let text = e.target.innerHTML;

        for (let emojiIndex in this.#emojisObj.config.emojis) {
            if (text.includes(this.#emojisObj.config.emojis[emojiIndex]['shortcode'])) {
                // If there is a key phrase in the text field,
                // it is replaced by an image
                e.target.innerHTML = text.replace(this.#emojisObj.config.emojis[emojiIndex]['shortcode'],
                    // emojiTag returns an emoji element, outerHTML converts it to a string
                    this.#emojisObj.emojiTag(this.#emojisObj.config.emojis[emojiIndex]['path'], this.#emojisObj.config.emojis[emojiIndex]['alt']).outerHTML);

                this.#moveCursorToEnd(); // Move the input cursor to the end
            }
        }
    }

    // INSERT UNFORMATTED TEXT
    #handlePaste(e) {
        // Stop the standard handling of the insert event
        e.preventDefault();

        // Get text from clipboard as plain text
        let text = (e.originalEvent || e).clipboardData.getData('text/plain');

        // Insert plain text without formatting
        document.execCommand("insertHTML", false, text);
    }

    // CHECK TEXT FOR ILLEGAL TAGS
    #checkTextForIllegalTags(e) {
        const allowedTags = ['IMG']; // Tags are allowed
        const nodes = Array.from(e.target.childNodes); // Get all child nodes

        nodes.forEach(node => {
            // If the node is not a text node and is not in the list of allowed tags
            if (node.nodeType !== Node.TEXT_NODE
                && (!allowedTags.includes(node.nodeName) || !node.classList.contains('svg-emoji'))
            ) {
                node.parentNode.removeChild(node); // Delete the node
            }
        });
    }

    // MOVE INPUT CURSOR TO END OF LINE
    #moveCursorToEnd() {
        // Method to move the input cursor to the end of the input

        const sel = window.getSelection();
        sel.removeAllRanges();

        // Creates a new range
        const range = document.createRange();
        range.selectNodeContents(this.#field); // Selects all content from a div
        range.collapse(false); // false means that the range will be pushed to the end of the content

        // Adds a range to the selection
        sel.addRange(range);

        // Switch the focus to the div so that the user can see the cursor moving
        this.#field.focus();
    }

}