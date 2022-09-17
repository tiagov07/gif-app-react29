import { AddCategory } from "../../src/components/AddCategory"
import { fireEvent, render, screen } from "@testing-library/react"


describe(' Add category test ', () => {
    test('should return a new text box', () => {
        render( <AddCategory onNewCategory={ () => {}}/>)
        const input = screen.getByRole('textbox')

        fireEvent.input( input, { target: { value : 'Naruto'}} )

        expect( input.value ).toBe('Naruto')

    })

    test('should call onNewCategory if input has a value', () => {

        const inputValue = 'Bleach'
        const onNewCategory= jest.fn()

        render( <AddCategory onNewCategory={ onNewCategory }/>)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value : inputValue }} )
        fireEvent.submit( form );

        expect( input.value ).toBe('')

        expect( onNewCategory ).toHaveBeenCalled()
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 )
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue )

    })

    test(' can not call if the input is null', () => {

        const onNewCategory= jest.fn()

        render( <AddCategory onNewCategory={ onNewCategory }/>)

        const form = screen.getByRole('form')

        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes( 0 )
        expect( onNewCategory ).not.toHaveBeenCalled()



    } )
})

