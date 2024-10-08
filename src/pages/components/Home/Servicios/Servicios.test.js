// Productos.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Productos from './Servicios';

beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
});

test('renders product section with correct titles and descriptions', () => {
    render(<Productos />);

    // Verificar que el título principal de Servicios y su descripción estén en el documento
    expect(screen.getByText(/servicios/i)).toBeInTheDocument();
    expect(screen.getByText(/ofrecemos servicios personalizados/i)).toBeInTheDocument();

    // Verificar que los productos se muestren correctamente
    expect(screen.getByText(/mother board/i)).toBeInTheDocument();
    expect(screen.getByText(/tarjeta madre marca gigabyte/i)).toBeInTheDocument();
    
    expect(screen.getByText(/fuente de poder/i)).toBeInTheDocument();
    expect(screen.getByText(/fuente de poder generica marca powergroup/i)).toBeInTheDocument();

    expect(screen.getByText(/tarjeta gráfica/i)).toBeInTheDocument();
    expect(screen.getByText(/tarjeta gráfica marca gigabyte/i)).toBeInTheDocument();
});

test('displays alert when "Compra Ahora" is clicked for each product', () => {
    render(<Productos />);

    // Simular la compra de "Tarjeta madre marca gigabyte"
    const btnMotherBoard = screen.getByText(/compra ahora/i, { selector: 'button' });
    fireEvent.click(btnMotherBoard);
    expect(window.alert).toHaveBeenCalledWith('haz comprado el articulo Tarjeta madre marca gigabyte');

    // Simular la compra de "Fuente de poder generica marca PowerGroup"
    const btnFuentePoder = screen.getAllByText(/compra ahora/i, { selector: 'button' })[1];
    fireEvent.click(btnFuentePoder);
    expect(window.alert).toHaveBeenCalledWith('haz comprado el articulo Fuente de poder generica marca PowerGroup');

    // Simular la compra de "Tarjeta gráfica marca Gigabyte"
    const btnTarjetaGrafica = screen.getAllByText(/compra ahora/i, { selector: 'button' })[2];
    fireEvent.click(btnTarjetaGrafica);
    expect(window.alert).toHaveBeenCalledWith('haz comprado el articulo Tarjeta gráfica marca Gigabyte');
});
