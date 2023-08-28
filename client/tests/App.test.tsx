import React from 'react';
import { render, screen ,fireEvent, waitFor} from '@testing-library/react';
import App from '../src/App';
import { BrowserRouter,MemoryRouter } from 'react-router-dom';
import { Landing, Register } from '../src/pages';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import { toast } from 'react-toastify';
import AddJob from '../src/pages/dashboard/AddJob'
import Profile from '../src/pages/dashboard/Profile'

test('renders landing page', () => {
  render(
    <BrowserRouter>
    <Landing />
    </BrowserRouter>
  )
  ;
  
  // Assuming your Landing component renders some specific content
  const landingText = screen.getByText(/Login/i);
  expect(landingText).toBeInTheDocument();
});

test('toggles between login and register', async() => {
  render(
    <BrowserRouter>
    <Provider store={store}>
    <Register />
    </Provider>
    </BrowserRouter>
  )
  ;
 
  const toggleButton = screen.getByText('Register');
  fireEvent.click(toggleButton);

  const nameLabel = screen.getByText('name');
  expect(nameLabel).toBeInTheDocument();

  fireEvent.click(toggleButton);

  await waitFor(() => {
    expect(nameLabel).not.toBeInTheDocument();
  });
});

test('enters email in the input field', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    </Provider>
  );

  const nameInput = screen.getByLabelText('email');
  
  fireEvent.change(nameInput, { target: { value: 'JohnDoe@gamil.com' } });

  expect(nameInput.value).toBe('JohnDoe@gamil.com');
});
 

test('enters job information and submits', async () => {
  render(
    <Provider store={store}>
      <AddJob />
    </Provider>
  );

  const positionInput = screen.getByLabelText('position');
  const companyInput = screen.getByLabelText('company');
  const jobLocationInput = screen.getByLabelText('job location');
  const statusSelect = screen.getByLabelText('status');
  const jobTypeSelect = screen.getByLabelText('job type');
  const submitButton = screen.getByText('submit');

  fireEvent.change(positionInput, { target: { value: 'Software Engineer' } });
  fireEvent.change(companyInput, { target: { value: 'Example Company' } });
  fireEvent.change(jobLocationInput, { target: { value: 'City, Country' } });
  fireEvent.change(statusSelect, { target: { value: 'open' } });
  fireEvent.change(jobTypeSelect, { target: { value: 'full-time' } });

  fireEvent.click(submitButton)})

  test('enters user information and submits', async () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );
  
    const nameInput = screen.getByLabelText('name');
    const lastNameInput = screen.getByLabelText('last name');
    const emailInput = screen.getByLabelText('email');
    const locationInput = screen.getByLabelText('location');
    const submitButton = screen.getByText('save changes');
  
    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(locationInput, { target: { value: 'City' } });
  
    fireEvent.click(submitButton);
  
    
  });