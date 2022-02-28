# Custom Cursor Component

## Install
```cli
npm install @wcd/rol4nd909.eagerly-cursor
```

## Usage

**properties:**
- linkElements

you can give a classname of items to watch

**styling:**
- --eagerly-crsr-inner-size
- --eagerly-crsr-outer-size
- --eagerly-crsr-radius
- --eagerly-crsr-clr-inner
- --eagerly-crsr-clr-outer
- --eagerly-crsr-clr-inner-active [used for color change when active on a linkElement]
- --eagerly-crsr-clr-outer-active [used for color change when active on a linkElement]
- --eagerly-crsr-clr-transition: 0.25s ease-in-out; [used for color change when active on a linkElement]
- --eagerly-crsr-transform: 0.1s ease-out; [used for transition]
- --eagerly-crsr-scale: scale(1); [used for transition when active on linkElement]

```javascript
import "@wcd/rol4nd909.eagerly-slider";
```

```html
<eagerly-cursor></eagerly-cursor>
```