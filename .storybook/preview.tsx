import "normalize.css";
import "../styles/global.scss";
import React from "react";
import { NavigationProvider } from "../features/layout";
import { decorator as mockRouterDecorator } from "../__mocks__/next/router";

export const decorators = [
  (Story) => (
    <NavigationProvider>
      <Story />
    </NavigationProvider>
  ),
  mockRouterDecorator,
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
