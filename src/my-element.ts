import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { setup } from '@sl-design-system/sanoma-learning';
import { faArrowRotateLeft, faArrowUpRightFromSquare, faAt, faBabyCarriage, faCaretDown, faCaretUp, faCat, faCheck, faChevronCircleLeft, faChevronCircleRight, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faCircleInfo, faClock, faDog, faDownload, faEllipsisVertical, faEye, faEyeSlash, faFileArchive, faFish, faFolder, faFolderBlank, faFolderClosed, faFolderOpen, faGripLinesVertical, faHippo, faHorse, faImage, faKiwiBird, faLayerGroup, faLock, faMagnifyingGlass, faMagnifyingGlassPlus, faMosquito, faOtter, faPencil, faPlus, faRectangleList, faRotate, faShrimp, faSignalPerfect, faSpider, faTrash, faTriangleExclamation, faUser, faWorm, faXmark } from '@fortawesome/free-solid-svg-icons';
import { fas } from  '@fortawesome/free-solid-svg-icons';
import { Icon, IconDefinition } from '@sl-design-system/icon'; 
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleDown';

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

    Icon.register(faCat as IconDefinition);
    console.log(Object.entries(fas).length, 'icons have been added to the icon registry');
    for(const icon in fas){
      Icon.register(fas[icon] as IconDefinition);

    }
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

  #loadSingle() {

    Icon.register(faDog as IconDefinition);
    this.loadedOnClick = 'fas-dog';
  }

  #loadMultiple() {

    Icon.register(
        faHippo as IconDefinition,
        faFish as IconDefinition,
        faOtter as IconDefinition,
        faKiwiBird as IconDefinition,
        faWorm as IconDefinition,
        faSpider as IconDefinition,
        faShrimp as IconDefinition,
        faMosquito as IconDefinition,
        faHorse as IconDefinition,
        faArrowRotateLeft as IconDefinition,
        faArrowAltCircleDown as IconDefinition,
        faArrowUpRightFromSquare as IconDefinition,
        faAt as IconDefinition,
        faBabyCarriage as IconDefinition,
        faCaretDown as IconDefinition,
        faCaretUp as IconDefinition,
        faCheck as IconDefinition,
        faChevronDown as IconDefinition,
        faChevronLeft as IconDefinition,
        faChevronRight as IconDefinition,
        faChevronCircleLeft as IconDefinition,
        faChevronCircleRight as IconDefinition,
        faChevronUp as IconDefinition,
        faCircleInfo as IconDefinition,
        faClock as IconDefinition,
        faDownload as IconDefinition,
        faEllipsisVertical as IconDefinition,
        faEye as IconDefinition,
        faEyeSlash as IconDefinition,
        faFileArchive as IconDefinition,
        faFolder as IconDefinition,
        faFolderClosed as IconDefinition,
        faFolderBlank as IconDefinition,
        faFolderOpen as IconDefinition,
        faGripLinesVertical as IconDefinition,
        faImage as IconDefinition,
        faLayerGroup as IconDefinition,
        faLock as IconDefinition,
        faMagnifyingGlass as IconDefinition,
        faMagnifyingGlassPlus as IconDefinition,
        faPencil as IconDefinition,
        faPlus as IconDefinition,
        faRectangleList as IconDefinition,
        faRotate as IconDefinition,
        faSignalPerfect as IconDefinition,
        faTrash as IconDefinition,
        faTriangleExclamation as IconDefinition,
        faUser as IconDefinition,
        faXmark as IconDefinition
      );
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
