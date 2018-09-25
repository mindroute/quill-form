# Quill Form
Module for simple form and input field bindings in [Quill](https://github.com/quilljs/quill). Automatically creates hidden input fields for a form and adds submit handling and submit by key (⌘/Ctrl+S). You may also specify your own custom input fields. It creates fields for text, html and delta.

## Installation
#### Yarn
```bash
yarn add quill-form
```
#### NPM
```bash
npm i quill-form
```
 
## Usage
To add quill-form to your Quill, simply add the javascript after quill or import it in your project. Make sure that your editor is placed within a form or specify custom input fields.

```html
<body>
  ...
  <form action="#" method="get">
    <div id="editor-container"></div>
  </form>
  ...
  <script src="/path/to/quill.min.js"></script>
  <script src="/path/to/quill-form.js"></script>
  <script>
    var editor = new Quill('#editor-container', {
      modules: {
        form: true
      }
    });
  </script>
  ...
</body>
```
 
## Options
Specify one option or more to override defaults.

```javascript
var editor = new Quill('#editor-container', {
  modules: {
    form: {
      htmlField: 'html', // Input name string, HTMLElement or false
      deltaField: 'delta', // Input name string, HTMLElement or false
      textField: 'text', // Input name string, HTMLElement or false
      submitKey: { // Keyboard key binding object or false
        key: 'S',
        shortKey: true
      },
      updateOnBlur: true, // Updates the fields on blur
      updateOnChange: false // Updates the fields on every change
    }
  }
});
```
