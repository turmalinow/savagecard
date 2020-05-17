import React from "react";
import Sheet from "./Sheet";
import "./App.css";
import Skills from "./Skills";
import Tokens from "./Tokens";

const App = () => {
    return <>
        <Sheet>
            <i className="logo"/>
            <section className="sw border section-info">
                <h2>Informacje</h2>
            </section>

            <section className="sw section-skills">
                <Skills lang="pl"/>
            </section>

            <section className="sw section-tokens">
                <Tokens/>
            </section>

            <section className="sw border section-edges">
                <h2>Przewagi i Zawady</h2>
            </section>

            <section className="sw border section-gear">
                <h2>Sprzęt</h2>
            </section>
        </Sheet>
    </>;
};

export default App;