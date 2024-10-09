// Header.test.js
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders the header with the logo and navigation links', () => {
    render(<Header />);
    
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    expect(screen.getByText(/tecnoRemington/i)).toBeInTheDocument();
    expect(screen.getByText(/inicio/i)).toBeInTheDocument();
    expect(screen.getByText(/servicios/i)).toBeInTheDocument();
    expect(screen.getByText(/acerca de/i)).toBeInTheDocument();
    expect(screen.getByText(/contactenos/i)).toBeInTheDocument();
    
    const buttons = screen.getAllByText(/iniciar sesión/i);
    expect(buttons.length).toBeGreaterThan(0); 
});
