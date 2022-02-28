import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('eagerly-cursor')
export class EagerlyCursor extends LitElement {
  @property({type: String}) linkElements = '';
  @property({type: String}) active = "is-active";
  @property({type: String}) inactive = "is-inactive";
  @property({type: Array}) links = null;

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
    
    this.links.forEach((link: { removeEventListener: (arg: string,arg1: () => void) => Element; }) => link.removeEventListener('mouseover', this._disableAnimation));
    this.links.forEach((link: { removeEventListener: (arg: string,arg1: () => void) => Element; }) => link.removeEventListener('mouseleave', this._disableAnimation));

    super.disconnectedCallback();
  }

  static styles = css`
    :host {
      --eagerly-crsr-inner-size: 0.5rem;
      --eagerly-crsr-outer-size: 1.5rem;
      --eagerly-crsr-radius: 50%;
      --eagerly-crsr-clr-inner: hsl(330 100% 71%);
      --eagerly-crsr-clr-outer: hsl(330 100% 71% / 50%);
      --eagerly-crsr-clr-inner-active: hsl(220 100% 71%);
      --eagerly-crsr-clr-outer-active: hsl(220 100% 71%);
      --eagerly-crsr-clr-transition: 0.25s ease-in-out;
      --eagerly-crsr-transform: 0.1s ease-out;
      --eagerly-crsr-scale: scale(1.75);

      --offset: calc((var(--eagerly-crsr-outer-size) - var(--eagerly-crsr-inner-size)) / 2);
      --center-pos: (var(--eagerly-crsr-outer-size) / 2);
    }

    .crsr {
      box-sizing: border-box;
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      border-radius: var(--eagerly-crsr-radius);
      pointer-events: none;
    }

    .crsr-inner {
      top: calc((var(--eagerly-crsr-outer-size) - var(--offset)) * -1);
      left: calc((var(--eagerly-crsr-outer-size) - var(--offset)) * -1);
      width: var(--eagerly-crsr-inner-size);
      height: var(--eagerly-crsr-inner-size);

      background-color: currentColor;
      color: var(--eagerly-crsr-clr-inner);

      transform: translate(calc(var(--pos-x) + var(--center-pos)), calc(var(--pos-y) + var(--center-pos)));
      transition: color var(--eagerly-crsr-clr-transition);
    }

    .crsr-inner.is-active {
      transform: translate(calc(var(--pos-x) + var(--center-pos)), calc(var(--pos-y) + var(--center-pos))) var(--eagerly-crsr-scale);
    }

    .crsr-outer {
      top: calc(var(--eagerly-crsr-outer-size) * -1);
      left: calc(var(--eagerly-crsr-outer-size) * -1);
      width: var(--eagerly-crsr-outer-size);
      height: var(--eagerly-crsr-outer-size);

      border: 2px solid currentColor;
      color: var(--eagerly-crsr-clr-outer);

      transform: translate(calc(var(--pos-x) + var(--center-pos)), calc(var(--pos-y) + var(--center-pos))) scale(1);
      transition: transform var(--eagerly-crsr-transform), color var(--eagerly-crsr-clr-transition);
    }

    .is-active {
      --eagerly-crsr-clr-inner: var(--eagerly-crsr-clr-inner-active);
      --eagerly-crsr-clr-outer: var(--eagerly-crsr-clr-outer-active);
    }
  `

  private _followMouse = (e: any) => {
    let xPos = e.clientX;
    let yPos = e.clientY;

    this.setAttribute('style', `--pos-y: ${yPos}px; --pos-x: ${xPos}px;`)
  }

  private _disableAnimation = () => {
    const crsrItems = this.shadowRoot.querySelectorAll('.crsr');

    crsrItems.forEach(crsr => {
      const hasBounceClass = crsr.classList.contains(this.active);

      if (hasBounceClass) {
        crsr.classList.add(this.inactive);
        crsr.classList.remove(this.active);
      } else {
        crsr.classList.add(this.active);
        crsr.classList.remove(this.inactive);
      }
    });
  }

  render() {
    return html`
      <div class="crsr  crsr-outer"></div>
      <div class="crsr  crsr-inner"></div>
    `
  }
}
