import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Responsive } from './MainLayout.styled'

const MainLayout = ({ children }) => {
    return (
        <Responsive>
            <Header />
            {children}
            <Footer />
        </Responsive>
    )
}

export default MainLayout
