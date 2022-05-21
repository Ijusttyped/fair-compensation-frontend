import React from 'react'
import "./features.css"
import {useRef, useState} from "react";
import { getSalary } from "../../services/SalaryService";
// import labels from "../../assets/labels.json";




const Features = () => {
    const form = useRef();
    const [ calculation, setCalculation] = useState(0)
    const updateCalculation = (text) => setCalculation(text)
    const currentTime = new Date().getFullYear() + "-01-01 00:00:00"
    const sendRequest = (e) => {
        e.preventDefault();

        const salary = getSalary([
            {
                "Timestamp": currentTime,
                "Gender": e.target["gender"].value,
                "City": e.target["city"].value,
                "Seniority": e.target["seniority"].value,
                "Position": e.target["position"].value,
                "Age": e.target["age"].value,
                "Years_of_Experience": e.target["years_of_experience"].value,
                "Company_Size": e.target["company_size"].value,
                "Company_Type": e.target["company_type"].value
            }]
        );
        salary.then((result) => {
            updateCalculation(result[0]["Salary_Yearly"])
        })

        // e.target.reset()
    }
    return (
        <section id={"features"}>
            <h2>Select your current status:</h2>
            {/*{*/}
            {/*    Object.entries(labels).map(([key, value], index) => {*/}
            {/*        return (*/}
            {/*            <div>*/}
            {/*                {key}: <input type={"text"} name={key}/>*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    })*/}

            {/*}*/}
            <div className={"container feature__container"}>
                <div className={"feature__names"}>
                    <text>Age:</text>
                    <text>Years of experience:</text>
                    <text>Gender:</text>
                    <text>City:</text>
                    <text>Seniority:</text>
                    <text>Position:</text>
                    <text>Company size:</text>
                    <text>Company type:</text>
                </div>
                <form ref={form} onSubmit={sendRequest}>
                    <input type={"number"} name={"age"} required={true} min={"18"}/>
                    <input type={"number"} name={"years_of_experience"} required={true}/>
                    <input type={"text"} name={"gender"} required={true}/>
                    <input type={"text"} name={"city"} required={true}/>
                    <input type={"text"} name={"seniority"} required={true}/>
                    <input type={"text"} name={"position"} required={true}/>
                    <input type={"text"} name={"company_size"} required={true}/>
                    <input type={"text"} name={"company_type"} required={true}/>
                    <button type={"submit"} className={"btn btn-primary"}>Calculate</button>
                </form>
            </div>
            <div className={"calculation__container"}>

                <text>Your estimated annual salary: {Math.round(calculation)} €</text>

            </div>
        </section>
    )
}

export default Features