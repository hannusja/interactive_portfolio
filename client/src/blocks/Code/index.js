import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron"

class Code extends Component {

    sendAchiev=()=>{
        this.props.callbackFromParent("Code Guts")
    }

    render() {
        return (
            <Jumbotron style={{backgroundImage: "linear-gradient(#bfbfbf, #ffe6cc, #ffe6cc, #E6E6FA)", padding:200}}>
                <p> My whole thing is React. Rendered as one page, components get switched by Menu buttons. Achievements get tracked by App component state and passed to/from children by props and callbacks.</p>
                <p>Map with markers is rendered by google-map-react npm package. Search is made by server-side call to Google Places API. Data about favorite cities fed from/saved into MongoDB, server-side communication with said database is supported by Mongoose. </p>
                <p>Server is set by Express framework. Requests supported by Axios.</p>
                <p>Funny story about Tic-tac-toe game. This crazy girl made it from scratch out of pure madness, making a point not to look at any tutorials, instructions and videos of building said game. I mean, I'm sure 130 lines of code is a bit excessive for it but I guess that's a peculiar way of testing one's logic and originality.</p>
                <p>Styling is done by Bootstrap and a lot of cussing just for the purpose of showing vague familiarity with CSS.</p>
                <p>Deployed to Heroku.</p>
                <a style={{color:"#cc0066"}} href="https://github.com/yanjasho/interactive_portfolio" target="_blank" rel="noopener noreferrer" onClick={this.sendAchiev}>I am a very handsome App. Here you can see me naked.</a>
            </Jumbotron>
        );
    }
}
      
export default Code;