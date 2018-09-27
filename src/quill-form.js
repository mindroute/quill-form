import Quill from 'quill';

const Module = Quill.import('core/module');

// Binds html and delta to input fields in a form
// Ctrl+S sends the form per default

class Form extends Module {
  constructor(quill, options) {
    super(quill, options);

    this.htmlField = getInputField(options.htmlField, quill);
    this.deltaField = getInputField(options.deltaField, quill);
    this.textField = getInputField(options.textField, quill);
    
    this.form = this.htmlField ? this.htmlField.form : 
                this.deltaField ? this.deltaField.form : 
                this.textField ? this.textField.form :
                false;
    
    if (this.form) {
      this.form.addEventListener("submit", this.update.bind(this), true);

      if (this.options.submitKey) {
        this.quill.keyboard.addBinding(this.options.submitKey, this.submit.bind(this), {}, true);
      }
    } 

    if (this.options.updateOnBlur) {
      this.quill.on(Quill.events.SELECTION_CHANGE, (range, oldRange, source) => {
        if (!range) {
          this.update.call(this);
        }
      });

      if (this.form) {
        this.form.addEventListener("click", this.update.bind(this), true);
      }
    }

    if (this.options.updateOnChange) {
      this.quill.on(Quill.events.EDITOR_CHANGE, (eventName, delta, oldDelta, source) => {
        if (eventName !== Quill.events.TEXT_CHANGE) return;
        this.update.call(this);
      });
    }

    this.update();
  }

  update() {
    if (this.deltaField) {
      this.deltaField.value = JSON.stringify(this.quill.getContents());
    }
    if (this.htmlField) {
      this.htmlField.value = this.quill.root.innerHTML;
    }
    if (this.textField) {
      this.textField.value = this.quill.root.innerText;
    }
  }

  submit() {
    this.update.call(this);
    if (this.form) {
      this.form.submit();
    }
  }

}

Form.DEFAULTS = {
  htmlField: 'html',
  deltaField: 'delta',
  textField: 'text',
  submitKey: {
    key: 'S',
    shortKey: true
  },
  updateOnBlur: true,
  updateOnChange: false
};

function getInputField(field, quill) {
  if (field instanceof HTMLInputElement) {
    return field;
  } else if (typeof field === "string") {
    var newField = document.createElement("input");
    newField.type = "hidden";
    newField.name = field;
    newField.classList.add("ql-form-input");
    newField.classList.add("ql-form-" + field);
    quill.addContainer(newField);
    return newField;
  } else if (field === false) {
    return false;
  } else {
    throw new TypeError("Expected HTMLInputElement or string: " + field);
  }
}

Quill.register('modules/form', Form);

export { Form as default };
