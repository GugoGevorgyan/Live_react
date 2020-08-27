import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-google'
class Captcha extends Component {
  constructor(props, context) {
    super(props, context);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }
 
  
  render() {
    return (
      <div className={this.props.className}>
        {/* You can replace captchaDemo with any ref word */}
        <ReCaptcha
            ref={(el) => {this.captchaDemo = el;}}
            size="normal"
            data-theme="dark"            
            render="explicit"
            sitekey="your_site_key"
            
        />
        
      </div>
    );
  };
};
export default Captcha;