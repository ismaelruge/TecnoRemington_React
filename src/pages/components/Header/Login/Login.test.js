// Login.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
});

test('renders login modal with input fields and submit button', () => {
    render(<Login />);

    expect(screen.getByLabelText(/correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();
    expect(screen.getByText(/iniciar sesión/i)).toBeInTheDocument();
});

test('shows error if email or password are not filled and button is clicked', () => {
    render(<Login />);

    const loginButton = screen.getByText(/iniciar sesión/i);
    fireEvent.click(loginButton);

    expect(window.alert).toHaveBeenCalledWith('Por favor ingrese el correo electrónico y la contraseña.');
});

test('successful login clears input fields', () => {
    render(<Login />);

    const emailInput = screen.getByLabelText(/correo electrónico/i);
    const passwordInput = screen.getByLabelText(/contraseña/i);
    const loginButton = screen.getByText(/iniciar sesión/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(loginButton);

    expect(window.alert).toHaveBeenCalledWith('Inicio de sesión correcto');
    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');
});
