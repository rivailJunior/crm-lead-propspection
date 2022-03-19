import "../src/index.css";

export const decorators = [
  (Story, { globals }) => {
    return <Story />;
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
