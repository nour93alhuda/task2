import React, { useState } from 'react';
import './Jobs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Jobs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobs = [
    {
      company: 'Here\'s the company name',
      position: 'Here\'s the position',
      status: 'Open',
      postedAt: 'Monday, June 5th 12:30 PM',
      applications: 20,
    
    },
    {
      company: 'Here\'s the company name',
      position: 'Here\'s the position',
      status: 'Open',
      postedAt: 'Monday, June 5th 12:30 PM',
      applications: 20,
    
    },
    {
      company: 'Here\'s the company name',
      position: 'Here\'s the position',
      status: 'Closed',
      postedAt: 'Monday, June 5th 12:30 PM',
      applications: 25,
    },
    {
      company: 'Here\'s the company name',
      position: 'Here\'s the position',
      status: 'Closed',
      postedAt: 'Monday, June 5th 12:30 PM',
      applications: 48,
    },
    {
      company: 'Here\'s the company name',
      position: 'Here\'s the position',
      status: 'Closed',
      postedAt: 'Monday, June 5th 12:30 PM',
      applications: 0,
    },
    {
      company: 'Here\'s the company name',
      position: 'Here\'s the position',
      status: 'Closed',
      postedAt: 'Monday, June 5th 12:30 PM',
      applications: 11,
    },
    {
      company: 'Here\'s the company name',
      position: 'Here\'s the position',
      status: 'Closed',
      postedAt: 'Monday, June 5th 12:30 PM',
      applications: 19,
    },
  ];

  const jobsPerPage = 6;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <button className="create-job-button">Create New Job</button>
      <br></br>
      <div className='jobsearch'>
      <h1>Jobs</h1>
      
      <div className="search-bar">
        <input type="text" placeholder="Search in Jobs"/> 
        
       
        {/* <button className="search-button">
      
        </button> */}
      </div></div>
      <div className="jobs-table">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Position</th>
              <th>Status</th>
              <th>Posted At</th>
              <th># Applications</th>
            </tr>
          </thead>
          <tbody>
            {currentJobs.map((job) => (
              <tr key={job.company}>
                <td>{job.company}</td>
                <td>{job.position}</td>
                <td>
                  <button
                    className={`status-button ${job.status.toLowerCase()}`}
                  >
                    {job.status}
                  </button>
                </td>
                <td>{job.postedAt}</td>
                <td>
                  {job.applications}
                  
                </td>
                <td>
                <FontAwesomeIcon icon={faEdit}  style={{ color: '#BF9B30' }}/> </td>
                <td>
                <FontAwesomeIcon icon={faTrash} style={{ color: '#BF9B30' }} />
                {/* // onClick={() => handleDeleteArticle(article.id)} */}
                
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
    
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}  > 
             <FontAwesomeIcon icon={faAngleLeft} />
        </button>
      
        <span className="page-numbers">
          {Array.from({ length: Math.ceil(jobs.length / jobsPerPage) }).map(
            (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            )
          )}
        </span>  <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastJob >= jobs.length}
        >
           <FontAwesomeIcon icon={faChevronRight} />
        </button> 
      </div>
      
    </div>
  );
};

export default Jobs;