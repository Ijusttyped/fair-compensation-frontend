import React from 'react'
import "./features.css"
import {useRef, useState} from "react";
import {getSalary} from "../../services/SalaryService";
import labels from "../../assets/labels.json";


const Features = () => {
    const light = "var(--color-primary-variant)"
    const dark = "transparent"
    const ageDefault = 30
    const experienceDefault = 6
    const [requestData, setRequestData] = useState({
        Age: ageDefault,
        Years_of_Experience: experienceDefault,
    })

    function updateRequestData(key, value) {
        setRequestData(prevState => {
            // console.log("Changing request data key", key, "with value", value)
            return {...prevState, [key]: value};
        })
    }

    const form = useRef();
    const [calculation, setCalculation] = useState(0)
    const updateCalculation = (text) => setCalculation(text)
    const currentTime = new Date().getFullYear() + "-01-01 00:00:00"
    const sendRequest = (e) => {
        console.log("Sending request...")
        const salary = getSalary([
            {
                "Timestamp": currentTime,
                ...requestData
            }]
        );
        salary.then((result) => {
            updateCalculation(result[0]["Salary_Yearly"])
        })
    }
    return (
        <section id={"features"}>
            <h2>Select your current status:</h2>
            <div className={"container feature__container"}>
                <div className={"feature__names"}>
                    <div className={"feature__names_forms"}>
                        <form ref={form}>
                            <h4>Age</h4>
                            <input type={"number"} name={"Age"} required={true} min={18} defaultValue={ageDefault}
                                   onChange={(e) => updateRequestData("Age", e.target.value)}/>
                            <h4>Years of experience</h4>
                            <input type={"number"} name={"Years_of_Experience"} required={true}
                                   defaultValue={experienceDefault}
                                   onChange={(e) => updateRequestData("Years_of_Experience", e.target.value)}/>
                        </form>
                    </div>
                    {
                        Object.entries(labels).map(([feature, featureValues], index) => {
                            return (
                                <div className={"feature__names_selectable"}>
                                    <h4>{feature.replace("_", " ")}</h4>
                                    <div className={"feature__names_buttons"}>
                                        {
                                            Object.entries(featureValues).map(([index]) => {
                                                return (
                                                    <button
                                                        onClick={() => updateRequestData(feature, featureValues[index])}
                                                        className={"btn"}
                                                        style={{backgroundColor: (requestData[feature] === featureValues[index]) ? light : dark}}>
                                                        {featureValues[index]}
                                                    </button>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={"calculation__container"}>
                <button type={"submit"} onClick={sendRequest} className={"btn btn-primary"}>Calculate</button>
                <div className={"calculation__result"}>
                    <h4>Your estimated annual salary:</h4>
                    <h2>{Math.round(calculation)} €</h2>
                </div>

            </div>
        </section>
    )
}

export default Features