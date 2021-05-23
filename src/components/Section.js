export class Section {
  constructor({ data, renderer}, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderer() {
    this._renderedItems.forEach((item) => {
      this.addItem(this._renderer(item));
    });
  }

}
