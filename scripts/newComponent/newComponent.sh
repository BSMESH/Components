componentName=$1
mkdir -p ./components/$componentName/css ./components/$componentName/src
cp ./scripts/newComponent/templates/main.css  ./components/$componentName/css/
echo "class $componentName extends HTMLElement {\n  constructor() {\n    super();\n    // eslint-disable-next-line no-underscore-dangle\n    this._shadow = this.attachShadow({ mode: 'open' });\n  }\n}\nwindow.customElements.define('app-REPLACEME', $componentName);" >> ./components/$componentName/src/$componentName.js
cp ./scripts/newComponent/templates/index.html  ./components/$componentName/