// Footer.test.js
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer with privacy policy and terms links', () => {
    render(<Footer />);
    
    expect(screen.getByText(/políticas de privacidad/i)).toBeInTheDocument();
    expect(screen.getByText(/términos y condiciones/i)).toBeInTheDocument();
    expect(screen.getByText(/© tecnoRemington 2024/i)).toBeInTheDocument();
    expect(screen.getByText(/desarrollado por ismael ruge/i)).toBeInTheDocument();
});
