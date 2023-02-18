import { Component } from "react";
import { connect } from "react-redux";
 
import { AddDoctor } from "./doctor-components/addDoctor";
import Department from "./doctor-components/department";
import DoctorList from "./doctor-components/doctorList";
import { listDepartment } from "../store/action/department";

export  class Doctor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      componentNum: 0
    };
  }
 
  componentDidMount(){
    this.props.listDepartment();
  }
  render() { 
    return (
      <div className="container-fliud">
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
              <li className=" list-group-item"> <button   className="list-group-item doctor-sidebar" onClick={()=>{
                this.setState({componentNum : 1})
              }} > Show all Doctors </button> </li>
              <li className="list-group-item">
                <button  className=" list-group-item doctor-sidebar" 
                onClick={()=>(this.setState({componentNum : 2}))}>
                   Add Department</button></li>
                   <li className="list-group-item">
                <button  className=" list-group-item doctor-sidebar" 
                onClick={()=>(this.setState({componentNum : 3}))}>
                   Add Doctor</button></li>
              
            </ul>
          </div>
          <div className="col-lg-9">
              {this.state.componentNum === 1?
                  <DoctorList />:this.state.componentNum === 2?
                  <Department />:<AddDoctor dept={this.props.dept} />}
          </div> 
        </div>
      </div>
    );
  }
};
function mapStateToProps(state){
  return {
      dept : state.department
  }    
}
export default connect(mapStateToProps, {listDepartment })(Doctor); 