// Inicio.test.js
import { render, screen } from '@testing-library/react';
import Inicio from './Inicio';

test('renders the welcome section with the correct headings and text', () => {
    render(<Inicio />);

    expect(screen.getByText(/tecnoremington/i)).toBeInTheDocument();
    expect(screen.getByText(/bienvenido/i)).toBeInTheDocument();
    expect(screen.getByText(/descubre la mejor tecnología/i)).toBeInTheDocument();
});
