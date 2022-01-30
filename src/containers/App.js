import React , {Component} from 'react';
import AddNote from './AddNote';
import NoteList from "../components/NoteList.js"
import Search from '../components/Search.js';
import Note from '../components/Note';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchFieldText: "",
      searchFieldTopic: "",
      searchFieldState: "",
      noteList: [
        //placeholder testing Notes
        <Note key={-4} text={"make dishes"} topic={"household"} state={"completed"} id={-4} deleteFromList={this.deleteFromList}/>,
        <Note key={-2} text={"learn Phyton"} topic={"coding"} state={"not started"} id={-2} deleteFromList={this.deleteFromList}/>,
        <Note key={-3} text={"repeat HTML"} topic={"coding"} state={"not started"} id={-3} deleteFromList={this.deleteFromList}/>
      ],
      topicList: [
        //they are dummys for the dummys
        "household", "coding"
      ]
    }
  }

  //ADD LIST ITEMS
  addToList = (note) => {
    this.setState({noteList: this.state.noteList.concat([note])})
    //for the topic filter
    let noteList1 = this.state.noteList.concat([note]);
    let topicArr = noteList1.map(note => {
      return note.props.topic;
    })
    topicArr = this.clearDuplicates(topicArr);
    this.setState({topicList: topicArr});
  }

  //DELETE LIST ITEMS
  deleteFromList = (noteKey) => {
    let noteList1 = this.state.noteList;
    let index = noteList1.findIndex(note => note.props.id === noteKey);
    noteList1.splice(index, 1);
    this.setState({noteList: noteList1});
  }

  //filter methods for search components
  filterByState = (event) => {
    this.setState({searchFieldState: event.target.value});
  }
  filterByTopic = (event) => {
    this.setState({searchFieldTopic: event.target.value});
  }
  filterByText = (event) => {
    this.setState({searchFieldText: event.target.value});
  }
  //help method to clear duplicates of array
  clearDuplicates = (arr) => {
    let result = arr.filter((value, index, self) => {
      return self.indexOf(value) === index;
    })
    return result;
  } 

  render(){
    //basic destructuring
    const {noteList, searchFieldText, searchFieldTopic, searchFieldState} = this.state;;
    //create a modified list bc noteList is const
    let modifiedList = noteList;
    //filter by state
    if(searchFieldState !== ""){
      modifiedList = noteList.filter(note => {
        return note.props.state.toLowerCase() === searchFieldState.toLowerCase();
      })
    }
    //filter by topic
    if(searchFieldTopic !== ""){
      modifiedList = modifiedList.filter(note => {
        return note.props.topic.toLowerCase() === searchFieldTopic.toLowerCase();
      })
    }

    //filter by text
    //important to use modifiedList in the filter so the other filters work
    modifiedList = modifiedList.filter(note => { 
      return note.props.text.toLowerCase().includes(searchFieldText.toLowerCase());
    })

    //actual output
    return(
    <div className='tc'>
      <header>
        <h1 className='f1'>Note Manager</h1>
        <h2 className='f2'>Create Note</h2>
        <AddNote addToList = {this.addToList} deleteFromList = {this.deleteFromList}/>
        <Search filterByText = {this.filterByText} filterByState ={this.filterByState} filterByTopic={this.filterByTopic} topics={this.state.topicList}/>
        <NoteList notes = {modifiedList}/>
      </header>
    </div>
    )
  }
}

export default App;
