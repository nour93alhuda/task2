import React, { useState } from 'react';
import './Main.css'

const Main = () => {
  const [articles, setArticles] = useState([
    { title: "Here's the article title", category: "Tech", status: "Published", date: "Monday, June 5th", time: "12:30 PM", id: 1 },
    { title: "Here's the article title", category: "Education", status: "Published", date: "Monday, June 5th", time: "12:30 PM", id: 2 },
    { title: "Here's the article title", category: "Business", status: "Draft", date: "Monday, June 5th", time: "12:30 PM", id: 3 },
    { title: "Here's the article title", category: "Tech", status: "Draft", date: "Monday, June 5th", time: "12:30 PM", id: 4 },
    { title: "Here's the article title", category: "Education", status: "Draft", date: "Monday, June 5th", time: "12:30 PM", id: 5 },
    { title: "Here's the article title", category: "Business", status: "Draft", date: "Monday, June 5th", time: "12:30 PM", id: 6 },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(6);

  // Logic for displaying articles on the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Pagination logic
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDeleteArticle = (id) => {
    setArticles(articles.filter(article => article.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">Articles</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search In Jobs" />
        <button>Search</button>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Date & Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentArticles.map(article => (
            <tr key={article.id}>
              <td>{article.title}</td>
              <td>{article.category}</td>
              <td>{article.status}</td>
              <td>{article.date} {article.time}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDeleteArticle(article.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: Math.ceil(articles.length / articlesPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(articles.length / articlesPerPage)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Main;
