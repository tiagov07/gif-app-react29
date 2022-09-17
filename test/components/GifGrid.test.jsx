import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe(" GifGrid testing ", () => {
    const category = 'full metal alchemist'

    test(" should show loading at the begining", () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={ category }/>)
        expect( screen.getByText( 'Cargando...' ))
        expect( screen.getByText( category ))
    })

    test(" should show items when the items charge", () => {

        const gifs = [
            {
                id: '123',
                title: 'Saitama',
                url: 'http://localhost/saitama.jpg'
            },
            {
                id: '345',
                title: 'Goku',
                url: 'http://localhost/goku.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        
        render( <GifGrid category={ category }/>)

        expect( screen.getAllByRole('img').length).toBe( 2 )

        
    })
})