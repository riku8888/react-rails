import React from 'react'


class Contact extends React.Component{
  handleSubmit(e){
    debugger
  }
  render(){
    return(
      <div className = "container" style={{padding: '40px 0'}}>
          <div className = "row">
            <div className ="col-md-8 offset-md-2">
                <h3>Contact US.</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                <input type = "text" name = "message" className = "form-control" placeholder="Send a message!"/>
                <button clssName="btn btn-primary" type ="submit">Contact US</button>
              </form>
            </div>
          </div>
      </div>

    )
  }
}

export default Contact
