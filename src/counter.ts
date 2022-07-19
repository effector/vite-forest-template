import { createStore, createEvent } from 'effector';
import { h, val } from 'forest';

export function Counter() {
  const $counter = createStore(0);
  const counterClicked = createEvent<MouseEvent>();

  $counter.on(counterClicked, (counter) => counter + 1);

  h('div', {
    classList: ['card'],
    fn() {
      h('button', {
        attr: { id: 'counter', type: 'button' },
        text: val`count is ${$counter}`,
        handler: { click: counterClicked },
      });
    },
  });
}
