import { render, screen } from '@testing-library/react';
import Productos from './Servicios'; // Asegúrate de importar correctamente el componente

test('renders product section with correct titles and descriptions', () => {
    render(<Productos />);

    // Verificar que al menos un elemento "Servicios" esté en el documento
    const serviciosElements = screen.getAllByText(/servicios/i);
    expect(serviciosElements.length).toBeGreaterThan(0);

    // Verificar la descripción exacta de servicios
    expect(screen.getByText(/ofrecemos servicios personalizados/i)).toBeInTheDocument();

    // Verificar que al menos un "Mother Board" esté en el documento
    const motherBoardElements = screen.getAllByText(/mother board/i);
    expect(motherBoardElements.length).toBeGreaterThan(0);

    // Verificar la descripción de "Mother Board"
    expect(screen.getByText(/tarjeta madre marca gigabyte/i)).toBeInTheDocument();

    // Verificar que al menos un "Fuente de poder" esté en el documento
    const fuentePoderElements = screen.getAllByText(/fuente de poder/i);
    expect(fuentePoderElements.length).toBeGreaterThan(0);

    // Verificar la descripción de "Fuente de poder"
    expect(screen.getByText(/fuente de poder generica marca powergroup/i)).toBeInTheDocument();

    // Verificar que al menos una "Tarjeta gráfica" esté en el documento
    const tarjetaGraficaElements = screen.getAllByText(/tarjeta gráfica/i);
    expect(tarjetaGraficaElements.length).toBeGreaterThan(0);

    // Verificar la descripción de "Tarjeta gráfica"
    expect(screen.getByText(/tarjeta gráfica marca gigabyte/i)).toBeInTheDocument();
});
