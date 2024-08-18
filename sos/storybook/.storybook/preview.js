/** @type { import('@storybook/react').Preview } */
import '@sos/style-tokens/style-tokens.css';
import '@sos/components-react/style/css';
import './style.css'


const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    rootAttributesTooltip: true,
    rootAttributes: [
      {
        root: 'body',
        attribute: ['class'],
        defaultState: {
          name: 'light',
          value: '',
        },
        states: [
          {
            name: 'dark',
            value: 'dark',
          }
        ]
      },
    ]
  },
};

const initTheme = () => {
  const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkTheme = mediaQueryList.matches;

  if (isDarkTheme) {
    document.body.classList.add("dark");
  }

  mediaQueryList.addEventListener('change', (e) => {
    if (e.matches) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  });
}

initTheme();

export default preview;
