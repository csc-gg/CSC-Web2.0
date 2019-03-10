// this is a skeleton of the ContactForm component, which will give just enough
// html for the design team to style it -- 3/9/2019

// ContactForm will display club email address after solving a captcha, or will
// allow visitor to send an email to the club through a web-based form after
// solving a captcha

import React, { Component } from 'react';
class ContactForm extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="contact-form-container">
        <div className="contact-form-instructions">
          Hello! Thank you for your interest in contacting the Santa Rosa Junior
          College Computer Science Club! Please verify that you are not a bot.
        </div>
        <button className="contact-form-button">
          Display Club Contact Email
        </button>

        {
        // TODO: when user clicks button, button should dissappear and captcha
        // should be displayed
        }

        <div className="contact-form-captcha-container"></div>

        {
        // TODO: when captcha solved successfully, email address is displayed
        // where the button used to be, email address SHOULD NOT appear in plain
        // text in the souce code, because then it will just get scraped from
        // GitHub, and defeat the whole purpose. Also if it's just not visible /
        // hidden with CSS, then it will still get scraped, because scrapers
        // don't look at styling. Maybe it should be ROT13, and then the it just
        // gets unROT13'ed? Or use other substitution cipher?
        }

        <div class="contact-form-email-address">
          placeholder@example.com
        </div>
      </div>
    );
  }
}
export default ContactForm;
