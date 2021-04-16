const isEnabled = () =>
  (window.GatsbyCustomerlyIncludeInDevelopment ||
    process.env.NODE_ENV === `production`) &&
  typeof window.customerly === `object` &&
  typeof window.customerly.load === `function` &&
  typeof window.customerly.update === `function` &&
  window.GatsbyCustomerlyConfiguration;

exports.onInitialClientRender = () => {
  if (!isEnabled()) {
    return;
  }

  window.customerly.load(JSON.parse(window.GatsbyCustomerlyConfiguration));
};

exports.onRouteUpdate = function ({ location }) {
  if (!isEnabled()) {
    return;
  }

  window.customerly.update(JSON.parse(window.GatsbyCustomerlyConfiguration));
};
