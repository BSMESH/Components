class DragYDrop extends HTMLElement {
    constructor() {
      super(); 
      this._shadow = this.attachShadow({ mode: 'open' });
      this.size = {
        width: undefined,
        height: undefined,
    }
      this.border = false;
    }
  
    get shadow() {
      
      return this._shadow;
    }
  
    set shadow(val) {
      
      this._shadow = val;
    }
  
   static get observedAttributes() {
      return ['size', 'border'];
    }
  
    /**
       * attributeChangedCallback
       *
       * Se ejecuta cuando el valor de cualquier atributo declarado dentro del arreglo de los
       * observedAttributes cambia.
       *
       * @param {string} name nombre del atributo que cambia
       * @param {mixed} oldVal valor anterior del atributo
       * @param {mixed} newValue nuevo valor del atributo
       */
    attributeChangedCallback(name, oldVal, newValue) {
      this[`update${name.charAt(0).toUpperCase() + name.slice(1)}`](newValue);
    }
  
    updateSize(w,h) {
      this.shadow.querySelector('#dropArea').style.width = w;
      this.shadow.querySelector('#dropArea').style.height = h;
    }
    
  
    updateBorder(val) {
      this.shadow.querySelector('#dropArea').style.border = val;
    }
  
    connectedCallback() {
      let template;
  
      fetch('/components/DragYDrop/template.html', {
        method: 'GET',
      }).then((response) => {
        response.text().then((data) => {
          template = data;
          this.shadow.innerHTML = template;
        });
      });
    }
  }
  window.customElements.define('drag-drop', DragYDrop);
  