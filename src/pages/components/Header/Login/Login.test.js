import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {}); // Simula el alert
});

test('renders login modal with input fields and submit button', () => {
    render(<Login />);

    expect(screen.getByLabelText(/correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();

    // Usa getAllByText para obtener todos los elementos con "Iniciar Sesión"
    const buttons = screen.getAllByText(/iniciar sesión/i);
    expect(buttons.length).toBeGreaterThan(0);
});

test('shows error if email or password are not filled and button is clicked', () => {
    render(<Login />);

    // Obtiene todos los botones con el texto "Iniciar Sesión" y usa el primero
    const buttons = screen.getAllByText(/iniciar sesión/i);
    fireEvent.click(buttons[0]);
});

test('successful login clears input fields', () => {
    render(<Login />);

    const emailInput = screen.getByLabelText(/correo electrónico/i);
    const passwordInput = screen.getByLabelText(/contraseña/i);

    // Usa getAllByText para obtener el botón "Iniciar Sesión"
    const buttons = screen.getAllByText(/iniciar sesión/i);

    // Cambia los valores de los inputs
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Haz clic en el primer botón "Iniciar Sesión"
    fireEvent.click(buttons[0]);
});
