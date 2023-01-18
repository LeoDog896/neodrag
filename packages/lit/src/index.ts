import { draggable, type DragOptions } from '@neodrag/core';
import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('neo-draggable')
export class NeoDraggable extends LitElement {

	@property()
	options = 'Somebody';
  
	render() {
  
	  return html`<p>Hello, ${this.options}!</p>`;
  
	}
}

// export class Draggable {
// 	private _dragInstance: ReturnType<typeof draggable>;
// 	private _options: DragOptions = {};

// 	constructor(public node: HTMLElement, options: DragOptions = {}) {
// 		this._dragInstance = draggable(node, (this._options = options));
// 	}

// 	public updateOptions(options: DragOptions) {
// 		this._dragInstance.update(Object.assign(this._options, options));
// 	}

// 	set options(options: DragOptions) {
// 		this._dragInstance.update((this._options = options));
// 	}

// 	get options() {
// 		return this._options;
// 	}

// 	public destroy() {
// 		this._dragInstance.destroy();
// 	}
// }

export type {
	DragAxis,
	DragBounds,
	DragBoundsCoords,
	DragEventData,
	DragOptions,
} from '@neodrag/core';
