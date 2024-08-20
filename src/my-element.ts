import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { setup } from '@sl-design-system/sanoma-learning';
import { faCat, faDog, faFish, faHippo, faHorse, faKiwiBird, faMosquito, faOtter, faShrimp, faSpider, faWorm } from '@fortawesome/free-solid-svg-icons';
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
  @property({type: Boolean}) zooLoaded?: boolean;

  override connectedCallback(): void {
    super.connectedCallback();

    Icon.register(faCat);
  }

  render() {
    return html`
       
        <table>
          <tr><td>from included collection</td><td><sl-icon name="info"></sl-icon></td><td></td></tr>
          <tr><td>registered on component load (connectedCallback)</td><td><sl-icon name="fas-cat"></sl-icon></td><td></td></tr>
          <tr>
            <td>single icon registered on button click</td>
            <td><sl-button @click=${this.#loadSingle} part="button">Load dog</sl-button></td>
            <td>${this.loadedOnClick?html`<sl-icon .name=${this.loadedOnClick}></sl-icon>`:nothing}</td>
          </tr>
          <tr>
            <td>whole zoo registered on button click</td>
            <td><sl-button @click=${this.#loadMultiple} part="button">Load zoo</sl-button></td>
            <td>${this.zooLoaded?html`
              <sl-icon name="fas-hippo"></sl-icon>
              <sl-icon name="fas-fish"></sl-icon>
              <sl-icon name="fas-otter"></sl-icon>
              <sl-icon name="fas-kiwi-bird"></sl-icon>
              <sl-icon name="fas-worm"></sl-icon>
              <sl-icon name="fas-spider"></sl-icon>
              <sl-icon name="fas-shrimp"></sl-icon>
              <sl-icon name="fas-mosquito"></sl-icon>
              <sl-icon name="fas-horse"></sl-icon>
              `:nothing}</td>
          </tr>
        </table> 
    `
  }

  private #loadSingle() {

    Icon.register(faDog);
    this.loadedOnClick = 'fas-dog';
  }

  private #loadMultiple() {

    Icon.register(faHippo, faFish, faOtter, faKiwiBird, faWorm, faSpider, faShrimp, faMosquito, faHorse);
    this.zooLoaded = true;
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
