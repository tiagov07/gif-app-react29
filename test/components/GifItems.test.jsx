import {GifItem} from  "../../src/components/GifItem"
import { render, screen } from "@testing-library/react"


describe('Test en GifsItem', () => {
    const title = "title"
    const url = "http://localhost/url"
    test('must match with the snapshot', () => {

        const {container} = render( <GifItem title={ title } url={ url }/> )

        expect( container ).toMatchSnapshot()
    })

    test('must show image with the correct url and alt', () => {

        render( <GifItem title={ title } url={ url }/> )

        // screen.debug()

        // expect( screen.getByRole('img').src).toBe( url )
        // expect( screen.getByRole('img').alt).toBe( title )

        const { alt, src } = screen.getByRole('img')
        expect( src ).toBe( url)
        expect( alt ).toBe( alt)
    })

    test('should show the component title', () => {

        render( <GifItem title={ title } url={ url }/> )

        expect( screen.getByText( title )).toBeTruthy()
    })


})