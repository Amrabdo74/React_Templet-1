import React from "react";
import './style.css'
const Contact =()=>{

    return(
        <div class="drop">
        <div class="container">
            <h2 class="drop-title"><span>Drop </span>Me A line</h2>
            <form action="">
                <div class="form-input">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                </div>
                <input type="text" class="sub" placeholder="Your Subject" />
                <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
                <input type="submit" value="Send Message" />
            </form>
        </div>
    </div>
    )

}
export default Contact;