import React from 'react'
import Header from './components/header/Header'
import Companies from './components/companies/Companies'
import Features from './components/features/Features'
import Content from './components/content/Content'
import './app.css'
const App = () => {
    return (
        <>
            <Header />
            <Companies />
            <Features />
            <Content />
        </>
    )
}

export default App