import { fireEvent, render, screen } from '@testing-library/react';
import Post from './index';

describe('Teste para o componente Post', () => {
    it('Deve adicionar um comentário corretamente', () => {
        render(<Post />);
        
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Primeiro comentário' } });
        fireEvent.click(screen.getByText('Comentar'));

 
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários corretamente', () => {
        render(<Post />);
        

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Primeiro comentário' } });
        fireEvent.click(screen.getByText('Comentar'));


        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Segundo comentário' } });
        fireEvent.click(screen.getByText('Comentar'));


        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});

