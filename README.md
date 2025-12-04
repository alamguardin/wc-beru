# wc-sonner

Wc-Sonner is a web component Toast. It allows you to easily integrate beautiful and accessible toasts into any web project, regardless of the framework you are using.

## Installation

To use `wc-sonner` in your project, you can install it via pnpm (or npm/yarn):

```bash
pnpm add wc-sonner
```

## Usage

Once installed, you can import and use the web component directly in your HTML or JavaScript:

```html
<!-- In your HTML -->
<wc-sonner></wc-sonner>
<div id="app">
  <button id="btn">Push me</button>
</div>
```

```javascript
import { toast } from 'wc-sonner';

const button = document.getElementById('btn')

button.addEventListener('click', () => {
  toast.display('Hello world from WcSonner')
})
```

## Development

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   cd wc-sonner
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```
   This will start a Vite development server, and you can view the examples in your browser.

4. **Build the project:**
   ```bash
   pnpm build
   ```
   This will build the web component for production, outputting the files to the `dist` directory.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## License

[MIT License](LICENSE)