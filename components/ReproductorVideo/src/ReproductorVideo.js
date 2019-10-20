class ReproductorVideo extends HTMLElement {
    constructor(src,controls,volume,description,title) {
      super(); 
      this._shadow = this.attachShadow({ mode: 'open' });
     this.src=src;
     this.controls=controls;
     this.volume=volume;
     this.description=description;
     this.title=title;

    }
    get shadow() {
      
      return this._shadow;
    }
  
    set shadow(val) {
      
      this._shadow = val;
    }
  
   static get observedAttributes() {
      return ['src', 'controls','volume','description','title'];
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
  
    updateDescription(val) {
      this.shadow.querySelector('#description').innerHTML = val;
    }
    
  
    updateTitle(val) {
      this.shadow.querySelector('#title').innerHTML = val;
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
  window.customElements.define('drag-drop', Weather);