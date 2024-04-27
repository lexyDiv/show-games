const React = require("react");

// eslint-disable-next-line react/prop-types
function Layout({ title, children }) {
  const cssPath = title === "wc" ? "wc/index.css" : "boulder/index.css";

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={cssPath}></link>
        <title>{title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
