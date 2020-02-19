import React from "react";
import Input from "./Input";
import Groups from "./Groups"
import MemberCard from "./MemberCards";
import MemberData from "./MemberData";
import { STUDENTS } from "../configs/data";
import { image } from 'faker'

class Main extends React.Component {
  state = {
    students: false,
    maxStudentsPerGroup:0
   
  };

  componentDidMount() {
    const students = new Map(
      STUDENTS.map(i => [
        i.id,
        { id: i.id, 
          name: i.name, 
          active: i.active, 
          image: image.avatar() 
        }
      ])
    );

    this.setState({
      students
    });
  }

  handleActive = id => {
    const {students } = this.state;
    //which one is clicked??//
    const student = students.get(id);

    // ! => NOT IN operator
    student.active = !student.active;

    this.setState({
      students
    });
  };

  handleMaxStudentsInput=e=>{
      this.setState({
          maxStudentsPerGroup:e.target.value
      });
  };

  renderCards = () => {
    // auxiliary array
    const displayStudents = [];
    const { students } = this.state;
    //if students is not empty....
    students &&
      students.forEach(i => {
        displayStudents.push(
          <MemberCard handleActive={this.handleActive} obj={i}>
            <MemberData obj={i} />
          </MemberCard>
        );
      });
    console.log(students);
    // return the auxiliary array to render
    return displayStudents;
  };

  
  render() {
    const { renderCards } = this;
    const { students, maxStudentsPerGroup } = this.state;

    return (
      <>
        
        <div className="wrapper">
          <div className="students">
           <h3>
            Students{""}
           <Input handleMaxStudentsInput={this.handleMaxStudentsInput}/>{""}
           </h3>
            {renderCards()}
          </div>
          {students && (
            <Groups 
            students={students}
            maxStudentsPerGroup={maxStudentsPerGroup}
            />
           
          )}
        </div>
      </>
    );
  }
}

export default Main;
