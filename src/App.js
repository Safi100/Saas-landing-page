import React from 'react'
import Header from './components/header/Header'
import Companies from './components/companies/Companies'
import Features from './components/features/Features'
import Content from './components/content/Content'
import Financial from './components/financial/Financial'
import './app.css'
const App = () => {
    return (
        <>
            <Header />
            <Companies />
            <Features />
            <Content />
            <Financial />
        </>
    )
}

export default App