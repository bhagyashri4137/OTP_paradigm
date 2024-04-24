import './Error.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div id="container" className="error-page">
        <div className="row">
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4 error-div ">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/sad-icon.png" />
                <div>
                <h1>Oops something went wrong!</h1>
                </div>
                <div>
                    <Link to="/Login">Back to Login</Link>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
        </div>
    </div>
   


  )
}

export default Error