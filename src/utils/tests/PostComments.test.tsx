import { fireEvent, render, screen } from '@testing-library/react'
import PostComments from '../../components/PostComments'

test("deve adicionar e confirmar dois comentário no campo", () => {
    render(<PostComments />)

    const input = screen.getByTestId('comment-input')
    const submit = screen.getByTestId('comment-submit')

    fireEvent.change(input, { target: { value: 'Primeiro comentário' } })
    fireEvent.click(submit)

    fireEvent.change(input, { target: { value: 'Segundo comentário' } })
    fireEvent.click(submit)

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug()

    const itens = screen.getAllByTestId('comment-item')
    expect(itens.length).toBe(2)

    expect(itens[0]).toHaveTextContent('Primeiro comentário')
    expect(itens[1]).toHaveTextContent('Segundo comentário')
})