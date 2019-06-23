import React, { Component } from 'react'

export default class Sell extends Component {
  render() {
    return (
      <div>
      <h2>Sign up!</h2>


<div class="container">
  <form>
    <div class="row">
      <h2 style="text-align:center">Sign up with Social Media or Manually</h2>
      <div class="vl">
        <span class="vl-innertext">or</span>
      </div>

      <div class="col">
                <a href="#" class="github btn"><i class="fa fa-google fa-fw">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Avatar" class="avatar"/>
          </i> Sign up with GitHub
        </a>
        <a href="#" class="linkedin btn">
<img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Avatar" class="avatar"/>
<i class="fa fa-linkedin fa-fw">
</i> Sign up with LinkedIn
         </a>
        <a href="#" class="fb btn">
<img src="https://www.freeiconspng.com/uploads/facebook-f-logo-white-background-21.jpg" alt="Avatar" class="avatar"/>
<i class="fa fa-facebook fa-fw"></i> Sign up with Facebook
         </a>
        <a href="#" class="twitter btn">
          <img src="https://www.pngfind.com/pngs/m/123-1234348_twittericon-twitter-round-logo-png-transparent-background-png.png" alt="Avatar" class="avatar"/>
          <i class="fa fa-twitter fa-fw"></i> Sign up with Twitter
        </a>

      </div>

      <div class="col">
        <div class="hide-md-lg">
          <p>Or Sign up manually:</p>
        </div>

        <input type="text" name="username" placeholder="Username" required/>
        <input type="password" name="password" placeholder="Password" required/>
        <input type="submit" value="Sign up"/>
      </div>
      
    </div>
  </form>
</div>

<div class="bottom-container">
  <div class="row">
    <div class="col">
      <a href="#" style="color:white" class="btn">Have an account, already? Login</a>
    </div>
    <div class="col">
      <a href="#" style="color:white" class="btn">Forgot password?</a>
    </div>
  </div>
</div>




      </div>
    )
  }
}
