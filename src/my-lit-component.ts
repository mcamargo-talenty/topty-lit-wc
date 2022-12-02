/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {format} from "./utils/utils";

/**
 * An example element.
 *
 * @csspart button - The button
 */
@customElement('my-lit-component')
export class MyLitComponent extends LitElement {
  static override styles = css`
    .name {
      text-align: center;
      color: darkred;
    }
  `;

  /**
   * The first name to say "Hello" to.
   */
  @property()
  first = '';

  /**
   * The middle name to say "Hello" to.
   */
  @property()
  middle = '';

  /**
   * The last name to say "Hello" to.
   */
  @property()
  last = '';

  override render() {
    return html`
      <div class="name">Hola, ${this.getText()}. Bienvenido a Topty WC con Lit</div>
    `;
  }

  /**
   * Formats a greeting
   */
  getText(): string {
    return format(this.first, this.middle, this.last);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-lit-component': MyLitComponent;
  }
}
