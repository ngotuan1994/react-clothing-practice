import React from 'react';
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from "../../assets/crown.svg"

import './footer.styles.scss'


const Footer = () => {
  return (
    <footer className="footer-distributed">

			<div className="footer-left">
        <div>
          <Logo className="logo"></Logo>

        </div>


				<Link to ="/shop" className="footer-links">
					<Link to="/">Honme.</Link>

					<Link to="/">Blog.</Link>

					<Link to="/">Pricing.</Link>

					<Link to="/">About.</Link>

					<Link to="/">Faq.</Link>

					<Link to="/">Contact.</Link>
				</Link>

				<p className="footer-company-name">Company Name © 2022</p>

				<div className="footer-icons">

					<Link to="/"><i className="fa-brands fa-facebook"></i></Link>
					<Link to="/"><i className="fa-brands fa-twitter"></i></Link>
					<Link to="/"><i className="fa-brands fa-linkedin"></i></Link>
					<Link to="/"><i className="fa-brands fa-github"></i></Link>

				</div>

			</div>

			<div className="footer-right">

				<p>Contact Us</p>

				<form action="#" method="post">

					<input type="text" name="email" placeholder="Email"></input>
					<textarea name="message" placeholder="Message"></textarea>
					<button>Send</button>

				</form>

			</div>

		</footer>
  );
}

export default Footer;
