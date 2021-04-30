import React from 'react';
class App3 extends React.Component{

    constructor(){
        super();
        this.state={
            contacts:[]
        }
    }

    componentDidMount(){
        if(localStorage["contacts"]){
        let contacts = JSON.parse(localStorage["contacts"])
        
        this.setState({contacts:contacts})
        }
    }

    addContact=(contact)=>{
        this.state.contacts.push(contact);
        this.setState({contacts:this.state.contacts});
        this.saveToLocalStorage();
    }

    saveToLocalStorage=()=>{
        localStorage["contacts"] = JSON.stringify(this.state.contacts);
    }

    render(){
        return <div>
            <h1>To Do List</h1>
            <DisplayContacts contacts={this.state.contacts} />
            <AddContact addContact={this.addContact} />
        </div>
    }

}


class AddContact extends React.Component{

    constructor(props){
        super();
        this.state={
            name:"",
            error:""
        }
    }

    addContact=()=>{
        let contact = {
            name:this.state.name,
        }

        this.props.addContact(contact);
    }

    handleEmail=(e)=>{
        let email = e.target.value;
        if(email.indexOf("@")>-1){
            this.setState({email:email,error:""})
        }
        else{
            this.setState({email:email,error:"email not valid"})
        }


    }

    render(){
        return <div>
            {this.state.error}<br/>
           Task : <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
            
            
            <button onClick={this.addContact} >Add</button>
        </div>
    }
}


class DisplayContacts extends React.Component{
    render(){
        return <div>
            {this.props.contacts.length > 0 ?this.props.contacts.map((item)=>{
                return <DisplayContact contact={item} key={item.phone} />
            }):"Empty"}
        </div>
    }
}

DisplayContacts.defaultProps={
    contacts:[]
}

class DisplayContact extends React.Component{
    render(){
        return <div>
            Task : {this.props.contact.name} <br/>
           
        </div>
    }
}


export default App3;