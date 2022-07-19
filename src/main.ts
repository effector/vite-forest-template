import './style.css';
import typescriptLogo from './typescript.svg';
import { using, h } from 'forest';
import { Counter } from './counter';

function Logo(href: string, img: string, alt: string) {
  h('a', {
    attr: { href, target: '_blank' },
    fn() {
      h('img', {
        attr: { src: img, alt },
        classList: ['logo'],
      });
    },
  });
}

function App() {
  h('div', () => {
    Logo('https://vitejs.dev', '/vite.svg', 'Vite logo');
    Logo('https://www.typescriptlang.org/', typescriptLogo, 'TypeScript logo');
    h('h1', { text: 'Vite + TypeScript + Forest' });
    Counter();
    h('p', {
      classList: ['read-the-docs'],
      text: 'Click on the Vite and TypeScript logos to learn more',
    });
  });
}

using(document.querySelector<HTMLDivElement>('#app')!, App);
