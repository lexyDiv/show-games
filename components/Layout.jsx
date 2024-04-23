const React = require('react');

// eslint-disable-next-line react/prop-types
function Layout({ title, children }) {
  return (

    <html lang="en">
      <head>
        <title>{title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>

  );
}

module.exports = Layout;
