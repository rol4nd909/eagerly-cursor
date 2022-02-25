import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('eagerly-cursor')
export class EagerlyCursor extends LitElement {
  @property({type: Number}) xPos = 0;
  @property({type: Number}) yPos = 0;
  @property({type: String}) linkElements = '';
  @property({type: String}) bounce = "bounce";
  @property({type: String}) inactive = "inactive";
  @property({type: Array}) links = null;
  @property({type: Element}) crsr = null;

  constructor() {
    super()
  }
 
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('mousemove', (this._followMouse));

    if(this.linkElements) {
      this.links = document.querySelectorAll('.'+this.linkElements);

      this.links.forEach((link: { addEventListener: (arg: string,arg1: () => void) => Element; }) => link.addEventListener('mouseover', this._disableAnimation));
      this.links.forEach((link: { addEventListener: (arg: string,arg1: () => void) => Element; }) => link.addEventListener('mouseleave', this._disableAnimation));
    }
  }
  
  disconnectedCallback() {
    window.removeEventListener('mousemove', this._followMouse);

    if(this.linkElements) {
      this.links = document.querySelectorAll('.'+this.linkElements);

      this.links.forEach((link: { removeEventListener: (arg: string,arg1: () => void) => Element; }) => link.removeEventListener('mouseover', this._disableAnimation));
      this.links.forEach((link: { removeEventListener: (arg: string,arg1: () => void) => Element; }) => link.removeEventListener('mouseleave', this._disableAnimation));
    }

    super.disconnectedCallback();
  }

  static styles = css`
    :host {
      --eagerly-crsr-inner-size: 1.5rem;
      --eagerly-crsr-outer-size: 2rem;
      --eagerly-crsr-offset: calc((var(--eagerly-crsr-outer-size) - var(--eagerly-crsr-inner-size)) / 2);
      --eagerly-crsr-radius: 50%;
      --eagerly-crsr-clr: 330 100% 71%;
    }

    .crsr {
      box-sizing: border-box;
      display: block;
      position: fixed;
      border-radius: var(--eagerly-crsr-radius);
      pointer-events: none;
    }


    .crsr-inner.inactive {
      --eagerly-crsr-clr: 330 100% 71%;
    }

    .crsr-inner {
      top: calc((var(--eagerly-crsr-outer-size) - var(--eagerly-crsr-offset)) * -1);
      left: calc((var(--eagerly-crsr-outer-size) - var(--eagerly-crsr-offset)) * -1);
      width: var(--eagerly-crsr-inner-size);
      height: var(--eagerly-crsr-inner-size);

      background-color: hsl(var(--eagerly-crsr-clr) / 50%);

      transition: transform 0.2s ease;
    }

    .crsr-outer {
      top: calc(var(--eagerly-crsr-outer-size) * -1);
      left: calc(var(--eagerly-crsr-outer-size) * -1);
      width: var(--eagerly-crsr-outer-size);
      height: var(--eagerly-crsr-outer-size);

      border: 2px solid hsl(var(--eagerly-crsr-clr));
    }
  `

  private _followMouse = (e: any) => {
    this.xPos = e.pageX;
    this.yPos = e.pageY;
  }

  private _disableAnimation = () => {
    this.crsr = this.shadowRoot.querySelector('.crsr-inner');

    const hasBounceClass = this.crsr.classList.contains(this.bounce);

    if (hasBounceClass) {
      this.crsr.classList.add(this.inactive);
      this.crsr.classList.remove(this.bounce);
    } else {
      this.crsr.classList.add(this.bounce);
      this.crsr.classList.remove(this.inactive);
    }
  }

  render() {
    return html`
      <div class="crsr  crsr-outer" style="transform: translate(calc(${this.xPos}px + (var(--eagerly-crsr-outer-size) / 2)),calc(${this.yPos}px + (var(--eagerly-crsr-outer-size) / 2)))"></div>
      <div class="crsr  crsr-inner  bounce" style="transform: translate(calc(${this.xPos}px + (var(--eagerly-crsr-outer-size) / 2)),calc(${this.yPos}px + (var(--eagerly-crsr-outer-size) / 2)))"></div>
    `
  }
}
