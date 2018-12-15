import React from 'react'


class Contact extends React.Component{
  render(){
    return(
      <div className = "container" style={{padding: '40px 0'}}>
          <div className = "row">
            <div className ="col-md-8 offset-md-2">
                <h3>Contact US.</h3>
                <form>
                <input type = "text" name = "message" class = "form-control" />
                <button clss="btn btn-primary" type ="submit">Contact US</button>
              </form>
            </div>
          </div>
      </div>

    )
  }
}

export default Contact
