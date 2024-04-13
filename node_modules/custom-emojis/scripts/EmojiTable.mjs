/**
 * EmojiTable - a class for creating and managing an emoji table.
 *
 * This class allows adding an interactive emoji table to an HTML document, where users can browse
 * and select emojis for insertion into text fields. The table automatically populates with emojis from the CustomEmojis object,
 * and each selected emoji can be inserted into the specified text field.
 *
 * Dependencies:
 * - The class uses data and functions from CustomEmojis to display emojis.
 *
 * Example of use:
 * ```
 * const emojiObj = new CustomEmojis();
 * emojiObj.init().then(() => {
 *     new EmojiTable(emojiObj, 'emoji-table-container', 'editable-text-field');
 * });
 * ```
 *
 */

export function EmojiTable(emojisObj, htmlToAddId, tableId, table=null) {

    // A table with all emojis in the form of buttons that add emojis to a specific html container

    this.table = table === null ? document.getElementById(tableId) : table;

    for (let emojiIndex in emojisObj.config.emojis) {
        // During the cycle, a button is created and added to the specified container
        const button = emojisObj.createEmojiButton(
            emojisObj.config.emojis[emojiIndex], // An emoji that will be clickable
            () => emojisObj.addEmojiToHtml(emojisObj.config.emojis[emojiIndex]['shortcode'], htmlToAddId) // Emoji action
        );

        this.table.appendChild(button);
    }

}