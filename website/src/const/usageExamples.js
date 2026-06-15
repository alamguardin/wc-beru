export const usageExampleOne = `<wc-beru></wc-beru>
<div id="app">
  <button id="btn">Push me</button>
</div>
`;

export const usageExampleTwo = `import { toast } from 'wc-beru';

const button = document.getElementById('btn')

button.addEventListener('click', () => {
  toast.display('Hello world from WcBeru')
})`;

export const optionalParamsExample = `toast.display('Hi Jhon', {
    description: 'This is a message from wc-beru',
    closeButton: true,
    beruId: 'my-toast'
})`;

export const fullcolorExample = `<wc-beru fullcolor></wc-beru>`;

export const multipleToastsExampleOne = `<wc-beru id="first" position="bottom-right"></wc-beru>
<wc-beru id="second" position="bottom-left"></wc-beru>`;

export const multipleToastsExampleTwo = `toast.display('Hello from wc-beru', {
    description: 'This is a message from wc-beru',
    beruId: 'second'
})`;
