import React from 'react';
import '../styles/alumni2.css'; // Import your CSS file
import BackButton from './back';
import Footer from './footer';
function Alumni() {
  const logo = require('./loginSignin/logo.png');
  const man= require('./manprofile.png');
  const woman= require('./womenprofile.jpg');
  return (
    <div>
      
      <BackButton/>
      <img className="logo" src={logo} alt="Logo" />
      <h1>MEET THE LEGENDS</h1>
      <div className="card-containeral">
        {/* First Row */}
        <div className="cardal">
          <img className="profile-imageal" src={man} alt="Profile 1" />
          <h2 className="nameal">Devang Arora</h2>
          <p className="paraal">Software Engineer, Microsoft</p>
          <p>Passionate about technology, currently working as a software engineer at Microsoft</p>
          <a href="https://www.linkedin.com/in/devangarora/" title="LinkedIn" className="btnal btnal-linkedin btnal-lg">
            <i className="fa fa-linkedin fa-fw"></i> LinkedIn
          </a>
          <br />
          <br />
          {/* <button id="bottone1al"><strong>Chat with me</strong></button> */}
        </div>
        <div className="cardal">
          <img className="profile-imageal" src={woman} alt="Profile 2" />
          <h2 className="nameal">Mrs Shruti Verma</h2>
          <p className="paraal">Software Engineer, Google</p>
          <p>Passionate about technology, currently working as a software engineer at Google</p>
          <a href="https://www.linkedin.com/in/shruti-verma-91b058166/" title="LinkedIn" className="btnal btnal-linkedin btnal-lgal">
            <i className="fa fa-linkedin fa-fw"></i> LinkedIn
          </a>
          <br />
          <br />
          {/* <button id="bottone1al"><strong>Chat with me</strong></button> */}
        </div>
        <div className="cardal">
          <img className="profile-imageal" src={man} alt="Profile 3" />
          <h2 className="nameal">Hariharan B</h2>
          <p className="paraal">Technical Consultant, Adobe</p>
          <p>Eager to solve problems using data-driven technologies</p>
          <a href="https://www.linkedin.com/in/hariharan-b-3a1935218/" title="LinkedIn" className="btnal btnal-linkedin btnal-lgal">
            <i className="fa fa-linkedin fa-fw"></i> LinkedIn
          </a>
          <br />
          <br />
          {/* <button id="bottone1al"><strong>Chat with me</strong></button> */}
        </div>
       </div>
      {/* <button className="btnal">UNLOCK PREMIUM</button>*/ }
      
    <Footer/>
    </div> 
  );
}

export default Alumni;
