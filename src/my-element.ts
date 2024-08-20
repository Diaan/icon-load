import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { setup } from '@sl-design-system/sanoma-learning';
import { faCat, faDog } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@sl-design-system/icon';
import { ifDefined } from 'lit/directives/if-defined.js';

setup();
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  @property() loadedOnClick?: string;

  override connectedCallback(): void {
    super.connectedCallback();

    Icon.register(faCat);
  }

  render() {
    return html`
       <sl-button @click=${this._onClick} part="button">
          Load additional icons
        </sl-button>
        <table>
          <tr><td>from included collection</td><td><sl-icon name="info"></sl-icon></td></tr>
          <tr><td>registered on component load (connectedCallback)</td><td><sl-icon name="fas-cat"></sl-icon></td></tr>
          <tr><td>registered on button click</td><td>${this.loadedOnClick?html`<sl-icon .name=${this.loadedOnClick}></sl-icon>`:nothing}</td></tr>
        </table> 
    `
  }

  private _onClick() {

    Icon.register(faDog);
    this.loadedOnClick = 'fas-dog';
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      display: flex;
      flex-direction: column;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
