import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

test('renders home page', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Home Page</div>} />
      </Routes>
    </BrowserRouter>
  );
  const homeElement = getByText('Home Page');
  expect(homeElement).toBeInTheDocument();
});
