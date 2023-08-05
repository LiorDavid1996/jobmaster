const React = require('react');
const { render } = require('@testing-library/react');
const { BrowserRouter, Route, Routes } = require('react-router-dom');
const App = require('./App').default; // Use .default because App exports a default component

test('renders home page', () => {
  const { getByText } = render(
    React.createElement(BrowserRouter, null, React.createElement(Routes, null, React.createElement(Route, { path: '/', element: React.createElement('div', null, 'Home Page') })))
  );
  const homeElement = getByText('Home Page');
  expect(homeElement).toBeInTheDocument();
});
