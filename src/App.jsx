import { useRef, useEffect, useState } from 'react';
import setUpObserver from "./intersectionObserver"
import Header from './Header'
import Main from './Main'

const App = () => {

    useEffect(() => {
        setUpObserver()
    })

    return (
    <>
        <Header />
        <Main />
    </>
    )
}

export default App