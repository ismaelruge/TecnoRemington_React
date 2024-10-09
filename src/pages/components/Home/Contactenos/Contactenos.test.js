/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contactenos from './Contactenos';

beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {}); // Simular alertas
    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve({}),
        })
    );
});

afterEach(() => {
    jest.restoreAllMocks();
});

test('renders contact form with all input fields', () => {
    render(<Contactenos />);

    expect(screen.getByPlaceholderText(/nombre completo/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/mensaje/i)).toBeInTheDocument();
    expect(screen.getByText(/enviar/i)).toBeInTheDocument();
});

test('shows success alert and clears form on successful submission', async () => {
    render(<Contactenos />);

    const nameInput = screen.getByPlaceholderText(/nombre completo/i);
    const emailInput = screen.getByPlaceholderText(/correo electrónico/i);
    const messageInput = screen.getByPlaceholderText(/mensaje/i);
    const submitButton = screen.getByText(/enviar/i);

    fireEvent.change(nameInput, { target: { value: 'Juan Pérez' } });
    fireEvent.change(emailInput, { target: { value: 'juan@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Este es un mensaje de prueba.' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(
            'https://tecnoremington.azurewebsites.net/api/Contactenos',
            expect.objectContaining({
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nombreCompleto: 'Juan Pérez',
                    email: 'juan@example.com',
                    mensaje: 'Este es un mensaje de prueba.',
                }),
            })
        );

        expect(window.alert).toHaveBeenCalledWith(
            'Hola Juan Pérez, se te enviará un correo a juan@example.com cuando nuestros asesores hayan analizado tu mensaje, muchas gracias.'
        );

        expect(window.alert).toHaveBeenCalledWith('Mensaje enviado exitosamente.');
    });

    await waitFor(() => {
        expect(nameInput.value).toBe('');
        expect(emailInput.value).toBe('');
        expect(messageInput.value).toBe('');
    });
});

test('shows error alert on server error', async () => {
    global.fetch.mockImplementationOnce(() =>
        Promise.resolve({
            ok: false,
        })
    );

    render(<Contactenos />);

    const nameInput = screen.getByPlaceholderText(/nombre completo/i);
    const emailInput = screen.getByPlaceholderText(/correo electrónico/i);
    const messageInput = screen.getByPlaceholderText(/mensaje/i);
    const submitButton = screen.getByText(/enviar/i);

    fireEvent.change(nameInput, { target: { value: 'Juan Pérez' } });
    fireEvent.change(emailInput, { target: { value: 'juan@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Este es un mensaje de prueba.' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(window.alert).toHaveBeenCalledWith('Hubo un problema al enviar el mensaje.');
    });
});
