/** 
 * File:Contacts.jsx
 * Student Name:Cyrus Maina
 * Student Id:301147699
 * Date:
*/

import Profile from "../assets/Profile.jpg";
export default function About()
{
     return(
      <div className="about-container">
         <h1>About Me</h1>
         <img 
         src={Profile}
         alt="Profile of Cyrus Maina"
         style={{width:'150px',borderRadius:'8px',marginBottom:'1rem'}}

         />
         <h2>Cyrus C Maina</h2>
         <p> 
          I am a passonate, dedicated to developing my  web application 
          skills in React,Javascript  and full stack development.
          I aim to create a clean and user-friendly web experiences.
          </p>
          <p>
        I enrolled in the Health Informatics Technology program in 2021 at Centennial College to transition into
        the tech field. I’ve since built several hands-on projects and am
        currently working to develop my
        technical skills.
      </p>
      <p>
       <strong>Technical skills:</strong>
        <ul>
          <li><strong>Frontend:</strong> React, JavaScript, HTML, CSS</li>
          <li><strong>Backend:</strong> Node.js, Express, C#</li>
          <li><strong>Databases:</strong> MongoDB, Oracle SQL</li>
         </ul>
      </p>
      <p>
        I'm actively seeking internship or junior developer opportunities where
        I can apply my knowledge, continue learning, and contribute to
        real-world projects in a collaborative team environment.
      </p>
      <hr />

      <h2>Education & Coursework Highlights</h2>


      <h3>Completed Courses</h3>
      <ul>
        <li>1.Data Structures & Algorithms</li>
        <li>2.Enterprise Systems Integration (ESI)</li>
        <li>3.IT Project Management</li>
        <li>4.Advanced Database Concepts (MySQL/SQL Server)</li>
        <li>5.Software Testing & Quality</li>
        <li>6.Clinical Workflow & IT Solutions</li>
        <li>7.Tools, Algorithms & Methods for HCIS</li>
        <li>8.Programming in C#, JavaScript, Python</li>
        <li>9.Client-side Web Development</li>
        <li>10.Unix/Linux, Networking for Developers</li>
        <li>11.Business Communication, Entrepreneurship</li>
        <li>12.Web Application Development</li>
      </ul>
    
         </div>
       
     )
}