import "../assets/css/style.css"
import React from 'react'

function ResetPassword() {
  return (
    <>
    <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="horizontal-container">
          <div class="horizontal-form-box">
            <div class="horizontal-info-container ">
              <p class="horizontal-heading">Reset your password</p>
              <p>Your password needs to be at least 8 characters.</p>
            </div>
            <form class="form1 horizontal-form">
             <div>
              <div class="in-label">
                <label for="new_password">New password</label>
                <input type="password" id="new_password" />
              </div>
              <div class="in-label">
                <label for="confirm_password">Confirm new password</label>
                <input type="password" class="o3-form-control o3-input-lg" id="confirm_password" />
              </div>
              </div>
              <button class="o3-btn o3-btn-primary o3-btn-block">Set new password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    

     
    </>
  )
}

export default ResetPassword