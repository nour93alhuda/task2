import React, { useState } from 'react';
import './Applications.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-solid-svg-icons';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Applications = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobs = [
    {
      Applicant: 'Here\'s the Applicant name',
      Experience: '2 years',
      Email: 'usertwo@gmail.com',
      MobileNumber: '002011289304',
     
    
    },
    {
        Applicant: 'Here\'s the Applicant name',
        Experience: '3 years',
        Email: 'usertwo@gmail.com',
        MobileNumber: '002011289304',
    
    },
    {
        Applicant: 'Here\'s the Applicant name',
        Experience: '1 years',
        Email: 'usertwo@gmail.com',
        MobileNumber: '002011289304',
    },
    {
        Applicant: 'Here\'s the Applicant name',
        Experience: '4 years',
        Email: 'usertwo@gmail.com',
        MobileNumber: '002011289304',
    },
    {
        Applicant: 'Here\'s the Applicant name',
        Experience: '3 years',
        Email: 'usertwo@gmail.com',
        MobileNumber: '002011289304',
    },
    {
        Applicant: 'Here\'s the Applicant name',
      Experience: '2 years',
      Email: 'usertwo@gmail.com',
      MobileNumber: '002011289304',
    },
    {
        Applicant: 'Here\'s the Applicant name',
        Experience: '1 years',
        Email: 'usertwo@gmail.com',
        MobileNumber: '002011289304',
    },
  ];

  const jobsPerPage = 6;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container col-md-6 col-sm-12" >
      
      <div className='jobsearch'>
      <h2>Applications For "job" at "coompany name"</h2>
      
   </div>
      <div className="jobs-table">
        <table>
          <thead>
            <tr>
              <th>Applicant</th>
              <th>Experience</th>
              <th>Email</th>
              <th>Mobile Number </th>
              
            </tr>
          </thead>
          <tbody>
            {currentJobs.map((job) => (
              <tr key={job.Applicant}>
                <td>{job.Applicant}</td>
                <td>{job.Experience}</td>
                {/* <td>{job.MobileNumber}</td> */}
                <td>
                  
                    {job.Email}
                
                </td>
                <td>{job.MobileNumber}</td>
                {/* <td>
                  {job.applications}
                  
                </td> */}
                <td>
                <button style={{ backgroundColor: '#BF9B30' ,color:'white',width:'120px',height:'40px',borderRadius:'5px'}}> Dawnload cv</button> </td>
              
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

export default Applications;
