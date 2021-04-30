import React from 'react';
import PropTypes from 'prop-types';



class Header extends React.Component {
    constructor() {
        super();
    this.state = {
        items: [
            {
                text: "Home",
                link: "/home"
            },
            {
                text: "ToDOList",
                link: "/about"
            },
            {
                text: "Movies",
                link: "/contactus"
            },
           
        ]

    }
    }
    render() {
        let h1Style = {
            display: "inline-block"
        }
        return <div>
            <img style={{ width: 75, height: 75 }} src={this.props.logo} />
            <h1 style={h1Style}>{this.title}</h1>
            <Menu items={this.menu} toggleActive={this.props.toggleActive}/>
        </div>
    }

}

// After end of class
Header.defaultProps ={

    title :"Welcome to Website "
}
Header.propTypes = {
    title: PropTypes.string
  };

class Menu extends React.Component {
    constructor(props) {
        super();
        this.state={count: 5}


    }
    render() {
        return <div>
            {this.props.items.map((item, i) => {
                //write arrow function bs. we 'll send argument
                return <a key={item.text} style={{backgroundColor:item.active?"red":"green"}} onClick={()=>this.props.toggleActive(item.text)} href={"#"+item.link}>{item.text} |</a>
            })}
            <div>{this.state.count}</div> 

        </div>
    }
}
export default Header;