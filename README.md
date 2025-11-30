# Getting Started with ACE

## Resources

Design System: https://v2.grommet.io/components
Design System Figma Resources: https://github.com/grommet/design-kit
Design System Implementation: https://storybook.grommet.io
Frontend Framework (React-based): https://www.gatsbyjs.com/

## Project Structure

- Components vs Containers
- amplify directories
- State Management using GlobalStateContext, GlobalDispatchContext
- Cypress as a testing library
- Gatsby as a web framework

## Rendering Layouts.

Ensure gatsby-browser.js and gatsby-ssr.js are similar to ensure client-side and server-side renders are in sync.

```
//** Code in gatsby-browser.js **//

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider data-name="redux-layer">
      {element}
    </GlobalContextProvider>
  );
};

export const wrapPageElement = ({ element, props }) => {
  const Layout = element.type.Layout ?? React.Fragment
  return (
    <CenterLayer {...props}>
      <Layout>
        {element}
      </Layout>
    </CenterLayer>
  )
};

//** Code in gatsby-ssr.js **//

exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};

exports.wrapPageElement = ({ element, props }) => {
  const Layout = element.type.Layout ?? React.Fragment
  return (
    <CenterLayer {...props}>
      <Layout>
        {element}
      </Layout>
    </CenterLayer>
  )
};

```

Layout components should be rendered via the wrapPageElement API in gatsby-browser.js and gatsby-ssr.js

Within each component, load the Layout component value. Example:

```
//** src/pages/index.js file **//

Index.Layout = HomeLayout;
export default Index
```
