import React, { Component } from "react";
import "./App.css";

class App extends Component {
    state = {
        displayText: "Gainstrive's Full-Stack MERN Template"
    }
    render() {
        return (
            <div id="App" className="App container-fluid text-center">
                <h1 id="siteHeader">{this.state.displayText}</h1>
                <p> I've designed this template as a Full Stack MERN app that's set up and ready to go. Below, I've included
                    a list of all the technologies and dependencies used:
                </p>
                <div className="row">
                    <div className="col">
                        <ul className="text-left">
                            <li>CSS</li>
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>JSX (React syntax ext.)</li>
                            <li>React.js (font-end JS component-based library)</li>
                            <li>Node.js (back-end runtime environment)</li>
                            <li>NPM (Node Package Manager)</li>
                            <ul>
                                <li>Bcryptjs (hashing/salting pwds.)</li>
                                <li>Bootstrap (css framework)</li>
                                <li>CORS (Express middleware)</li>
                                <li>Express (web framework/creating server)</li>
                                <li>Express-Sessions</li>
                                <li>Dotenv (handling environment vars.)</li>
                                <li>Mongoose (MongoDB obj. modeling tool)</li>
                                <li>Passport.js (user auth.)</li>
                                <li>Passport-local (Passport Local Strategy)</li>
                                <li>React</li>
                                <li>React-Bootstrap (bootstrap react components)</li>
                                <li>React-dom</li>
                                <li>React-router-dom</li>
                                <li>React-scripts</li>
                            </ul>
                        </ul>
                    </div>
                    <div className="col">
                        <p>
                            <b>For a full overview of the app and how it works, check the README.md file
                            in the root directory of this repo.</b>
                        </p>
                        <p>Each file also contains comments that will guide you through the flow of the application.</p>
                        <p>
                            <b> I've included functional examples of a Full Stack MERN app built using this template, which you can view by clicking
                                this link <a href="/example">here</a>. It features basic user-authentication, accessing data via mongoDB, and rendering components.
                            </b>
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;