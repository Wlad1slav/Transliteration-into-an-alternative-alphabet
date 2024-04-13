# Custom Emojis for Your Website
CustomEmojis is a dynamic library designed to manage and integrate custom emojis within web pages effortlessly. It allows for the conversion of specified shortcodes (e.g., /smile/) into images directly within text content, including input fields. This library supports [defining emojis](https://github.com/Wlad1slav/Custom-Emojis-for-Your-Site?tab=readme-ov-file#create-own-emoji) through JavaScript or external JSON files, offering flexibility in customization and integration.
- Version: `1.0.0`
- License: MIT

## Features
- **Dynamic Emoji Conversion:** Automatically convert specified shortcodes into images within the text, enriching user experience with visual elements.
- **Flexible Emoji Definition:** Define your custom emojis directly in JavaScript or through an external JSON file, allowing for easy updates and management.
- **Interactive Elements:** Create emoji tables and clickable emoji buttons, enabling users to interact with emojis directly on your web page.

## Install
- Before you begin, ensure you have Node.js installed on your system. This library requires Node.js version **12.x** or higher due to its use of ECMAScript modules. If you're unsure about your Node.js version, you can check it by running `node -v` in your terminal.
- To install CustomEmojis, use the following command in your project's root directory:
`npm i custom-emojis`

### Use Example
```html
<script type="module">
    // The path where you have the CustomEmojis.mjs file
    import {CustomEmojis} from "./node_modules/custom-emojis/scripts/CustomEmojis.mjs";
        
    const emojiObj = new CustomEmojis({
        emojis: [
            {
                shortcode: "/smile/",
                path: "https://example.com/smile.webp",
                alt: "\uD83D\uDE0A"
            }],
        autoSearchShortcodes: true // Automatic search for shortcodes and converting them into emojis in the body of the page
    });
    
    emojiObj.init().then(r => {
        // ...
        emojiObj.addInputField('field1'); // Shortcodes will be converted to custom emojis in a specific input field
        emojiObj.addEmojiTable('field1', 'emojisTable'); // Will add all emojis as clickable buttons to a specific HTML element
        let btn = emojiObj.createEmojiButton(emojiObj.getEmoji('/smile/'), () => console.log('emoji click')); // Creates a clickable button in the form of a specified emoji
    });
</script>
```

## Documentation
### Get Started
To use **CustomEmojis**, first, import it into your module:
```html
<script type="module">
    // The path where you have the CustomEmojis.mjs file
    import {CustomEmojis} from "./node_modules/custom-emojis/scripts/CustomEmojis.mjs";
</script>
```
Create an instance of `CustomEmojis` and initialize it:
```html
<script type="module">
  const emojiObj = new CustomEmojis({
    // Configuration options here
  });
  
  emojiObj.init().then(() => {
    // Your code after initialization
  });
</script>
```

### Create own emoji

#### Configuring Emojis Directly in JavaScript
When specifying emojis directly in your JavaScript code, you define them in an array within the configuration object passed to the CustomEmojis constructor. Each emoji in the array is an object with the following properties:
- `shortcode`: A string that represents the shortcode used to insert the emoji into the text. This should be unique for each emoji. For example, "/smile/".
- `path`: The URL or path to the emoji's image file. This can be a relative path or an absolute URL to an external resource. Example: "https://example.com/smile.webp".
- `alt`: The alternative text for the emoji, which is used for accessibility purposes and displayed if the image cannot be loaded. This should describe the emoji or the emotion it represents. Example: "smiling face".
```javascript
const emojiObj = new CustomEmojis({
    emojis: [
        {
            shortcode: "/smile/",
            path: "https://example.com/smile.webp",
            alt: "smiling face"
        }
        // Add more emojis as needed
    ]
});
```

#### Configuring Emojis via a JSON File
Alternatively, you can specify a path to a JSON file that contains an array of emoji configurations. The structure of the JSON file mirrors the direct JavaScript configuration, with each emoji represented as an object with shortcode, path, and alt properties.
```json
[
  {
    "shortcode": "/smile/",
    "path": "https://example.com/smile.webp",
    "alt": "smiling face"
  }
]
```
To use this JSON file for configuration, set the `emojisJsonPath` property in your `CustomEmojis` constructor:
```javascript
const emojiObj = new CustomEmojis({
    emojisJsonPath: 'path/to/your/emojis.json'
});
```

### Input field with dynamic emojis
To create an input field, you need to create a special container `div` with the attribute `contenteditable="true"` and any id. After that, use the `addInputField()` method.
```html
<body>
    <div contenteditable="true" id="field1" style="width: 100%; height: 100px;"></div>
</body>

<script type="module">
    import {CustomEmojis} from "./node_modules/custom-emojis/scripts/CustomEmojis.mjs";
    const emojiObj = new CustomEmojis({
        // ...
    });
    emojiObj.init().then(() => {
        emojiObj.addInputField('field1'); // Use the id of the input field
        // ...
    });
</script>
```

### Table with all custom emojis
```html
<body>
    <div id="output" contenteditable="true">
        <!-- The location where the emoji will be added when clicked in the emoji table -->
    </div>
    <div id="emojiTable"></div>
</body>

<script type="module">
    import {CustomEmojis} from "./node_modules/custom-emojis/scripts/CustomEmojis.mjs";
    const emojiObj = new CustomEmojis({
        // ...
    });
    emojiObj.init().then(() => {
        // The id of the element where emojis will be added when clicking on them,
        // The id of the container where clickable buttons will be added in the form of custom emojis
        emojiObj.addEmojiTable('output', 'emojiTable');
        // ...
    });
</script>
```

### Clickable button in the form of an emoji
```javascript
import {CustomEmojis} from "./node_modules/custom-emojis/scripts/CustomEmojis.mjs";
const emojiObj = new CustomEmojis({
    // ...
});
emojiObj.init().then(() => {
    const button = emojiObj.createEmojiButton('/smile/', () => {
        // Action when the button is pressed
    });
    // ...
});
```

### Replace shortcodes with emojis in a specific element
The method finds and replaces all shortcodes in the given element with the corresponding emoji shortcodes.
```javascript
import {CustomEmojis} from "./node_modules/custom-emojis/scripts/CustomEmojis.mjs";
const emojiObj = new CustomEmojis({
    // ...
});
emojiObj.init().then(() => {
    const element = document.getElementById('myElement');
    emojiObj.searchShortcodesAtElement(null, element); // An alternative is to write the id of the element as the first attribute
    // ...
});
```

### Add an emoji to a specific element
```javascript
import {CustomEmojis} from "./node_modules/custom-emojis/scripts/CustomEmojis.mjs";
const emojiObj = new CustomEmojis({
    // ...
});
emojiObj.init().then(() => {
    // An alternative is to write the id of the element as the first attribute
    // The ID of the element or the element itself
    emojiObj.addEmojiToHtml('/smile/', 'myElement');
    // ...
});
```

### Get emoji element
```javascript
import {CustomEmojis} from "./node_modules/custom-emojis/scripts/CustomEmojis.mjs";
const emojiObj = new CustomEmojis({
    // ...
});
emojiObj.init().then(() => {
    const emoji = emojiObj.getEmoji('/smile/');
    // ...
});
```

### Change emoji sizes
```javascript
import {CustomEmojis} from "./node_modules/custom-emojis/scripts/CustomEmojis.mjs";
const emojiObj = new CustomEmojis({
    emojiSize: {
        width: 'auto',
        height: '24px',
        maxWidth: '30px',
    },
    // ...
});
```

### Config
- `emojisJsonPath`
  - default: `'emojis.json'`
  - The path to the json file with all the emojis
- `emojis`
  - default: `null`
  - An array of emoji objects
- `emojiSize`
  - `width`
    - default: `'auto'`
  - `height`
    - default: `'24px'`
  - `max-width`
    - default: `'30px'`
  - Set the emoji sizes
  - If it is assumed that emojis should have different sizes in different tags, styles should be specified separately through the CSS.
- `autoSearchShortcodes` 
  - default: `true`
  - Whether to check the body of the page for emojis on load
