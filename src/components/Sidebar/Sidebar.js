// import React, { useContext, useState } from 'react'
import './Sidebar.css'
import React from 'react';
// import './styles.css';


const Sidebar = () => {
  return (
    <div className="menu">
      <div className="menu-item">
        <h3>Users</h3>
        <ul>
          <li>Admins</li>
          <li>Editors</li>
          <li>Instructors</li>
          <li >   <a href="studentinfo">Students</a>
          </li>
        </ul>
      </div>
      <div className="menu-item">
        <h3>Articles</h3>
        <ul>
          <li>Published Articles</li>
          <li>Scheduled Articles</li>
          <li>Saved Drafts</li>
        </ul>
      </div>
      <div className="menu-item">
        <h3>Jobs</h3>
        <ul>
          <li>Published Jobs</li>
          <li>Saved Drafts</li>
        </ul>
      </div>
      <div className="menu-item">
        <h3>Courses</h3>
        <ul>
          <li>Published Courses</li>
          <li>Scheduled Courses</li>
          <li>Saved Drafts</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;