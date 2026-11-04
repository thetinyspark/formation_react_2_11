import { Component } from "react";

export default class PageHeaderClass extends Component {

  render(){
    return (
      <header className="topbar">
      <div>
        <p className="eyebrow">{this.props.title || 'MICROMANIA'}</p>
      </div>
    </header>
    );
  }
}