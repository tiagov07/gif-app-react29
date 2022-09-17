import { render } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"


describe(' gifExpertApp testing', () => {

    const { result } = render( () => GifExpertApp())

    console.log(result)

})


