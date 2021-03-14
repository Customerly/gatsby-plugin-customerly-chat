const isEnabled = () =>
  (window.GatsbyCustomerlyIncludeInDevelopment ||
    process.env.NODE_ENV === `production`) &&
  typeof window.customerly === `object` &&
  typeof window.customerly.load === `function` &&
  typeof window.customerly.update === `function` &&
  window.GatsbyCustomerlyAppId;

exports.onInitialClientRender = () => {
  if (!isEnabled()) {
    return;
  }

  window.customerly.load({
    app_id: window.GatsbyCustomerlyAppId,
  });
};

exports.onRouteUpdate = function ({ location }) {
  if (!isEnabled()) {
    return;
  }

  window.customerly.update({
    app_id: window.GatsbyCustomerlyAppId,
  });
};
