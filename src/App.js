import React from 'react'
import Header from './components/header/Header'
import Companies from './components/companies/Companies'
import Features from './components/features/Features'
import Content from './components/content/Content'
import Financial from './components/financial/Financial'
import FeaturesBlowsMind from './components/features_blows_mind/Features_blows_mind'
import Payment from './components/payment/Payment'
import SignUp from './components/signUp/SignUp'
import './app.css'
const App = () => {
    return (
        <>
            <Header />
            <Companies />
            <Features />
            <Content />
            <Financial />
            <FeaturesBlowsMind />
            <Payment />
            <SignUp />
        </>
    )
}

export default App