// Acercade.test.js
import { render, screen } from '@testing-library/react';
import Acercade from './Acercade';

test('renders Acerca de Nosotros section with heading and description', () => {
    render(<Acercade />);
    
    expect(screen.getByText(/acerca de nosotros/i)).toBeInTheDocument();
    expect(screen.getByText(/somos una empresa líder en el mercado de la tecnología/i)).toBeInTheDocument();
});
