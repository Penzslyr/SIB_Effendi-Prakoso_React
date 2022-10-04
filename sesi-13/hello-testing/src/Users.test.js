import { render, screen } from '@testing-library/react'
import Users from './pages/Users'
import { MemoryRouter } from 'react-router-dom';

test('Render halaman Users dengan benar', () => {
    render(
    <MemoryRouter>
    <Users />
    </MemoryRouter>
     )

    
     // mencari button tertentu
    // pastikan button kita memiliki role = "button"
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveTextContent("Back to Home")

})