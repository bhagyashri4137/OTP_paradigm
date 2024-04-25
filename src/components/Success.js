import "../assets/css/style.css"
import React from 'react'

function Success() {
  return (
    <div className="success-page">
        <div className="row">
            <div className="col-sm-6 success-div ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Check_mark_%28blue%29.svg/500px-Check_mark_%28blue%29.svg.png"/>
                <div>
                    <h2>Registered Succesfully!</h2>
                </div>
                <div>
                    <p>Welcome to our services</p>
                </div>
                <button>Ok</button>
            </div>
            <div className="col-sm-4 info-div">
                <form className="table mt-3">
                    <table className="table table-bordered border-white text-center text-white">
                        <tr>
                            <th>User Id</th>
                            <th>Password</th>
                        </tr>
                        <tr>
                            <td>xx</td>
                            <td>xx</td>
                        </tr>
                    </table> 
                </form>
            </div>
        </div>
        <div class="col-sm-4">
        </div>
    </div>
    


    
  )
}

export default Success