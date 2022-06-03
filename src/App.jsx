import React from 'react'
import Header from "./components/header/Header";
import Features from "./components/features/Features";
import { pingService } from "./services/SalaryService";
// import Calculation from "./components/calculation/Calculation";
// import Footer from "./components/footer/Footer";

const App = () => {
    const serviceStatusCode = pingService()
    console.log("Service status code", serviceStatusCode)
    return (
        <>
            <Header/>
            <Features/>
            {/*<Calculation/>*/}
            {/*<Footer/>*/}
        </>
    )
}

export default App