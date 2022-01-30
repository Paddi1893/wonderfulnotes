import React, {Component} from "react";
import Note from "../components/Note";

class AddNote extends Component {
    constructor(){
        super();
        this.state = {
            text: "",
            state: "",
            topic: "",
            number: 1
        }
    }

    onTextChange = (event) => {
        this.setState({text: event.target.value})
    }
    onTopicChange = (event) => {
        this.setState({topic: event.target.value})
    }
    onStateChange = (event) => {
        this.setState({state: event.target.value});
    }

    onSubmit = () => {
        if(this.state.state === "completed" || this.state.state === "in progress" || this.state.state === "not started" ){
            const newNote = <Note key={this.state.number} text={this.state.text} topic={ this.state.topic} state={this.state.state} id={this.state.number}deleteFromList={this.props.deleteFromList}/>
            this.props.addToList(newNote);
            let n = this.state.number+1;
            this.setState({text: "", topic: "", state: "", number: n})
        }
        else{
            alert("Enter a valid state")
        }
    }
    keydownHandler = (e) => {
        if(e.keyCode===13 && e.ctrlKey) {
            this.onSubmit();
        }
    }

    componentDidMount(){
        document.addEventListener('keydown',this.keydownHandler);
    }
    componentWillUnmount(){
        document.removeEventListener('keydown',this.keydownHandler);
    }
    //flex  justify-center
    render(){
        return(
            //with assigning the value to the state, the form automatically resets after the submit */          
            <div>
                <div className="mw9 center ph3-ns">
                    <input value={this.state.text} className="ma1 w-third" type="text" onChange={this.onTextChange} placeholder="note"></input>               
                        
                    <input value={this.state.topic} className="ma1 " type="text" onChange={this.onTopicChange} placeholder="topic"></input>
                
                    <select value={this.state.state} className="ma1"name="state" onChange={this.onStateChange}>
                        <option value="">Select state</option>
                        <option value="completed">completed</option>
                        <option value="in progress">in progress</option>
                        <option value="not started">not started</option>
                    </select>
                </div>
                
                <button className="ma2 ph4" type="submit" onClick={this.onSubmit}>Add Note (CTRL + ENTER)</button>
            </div>
        )
    }
}

export default AddNote;