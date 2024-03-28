import '../tailwind/tailwind.css';
import react, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
const Tailwind = () => {
  const [blogs, setBlogs] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    // Replace 'YOUR_BACKEND_API_URL' with your actual backend API URL
    fetch('http://localhost:5000/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []); // Empty dependency array ensures the effect runs only once when component mounts
  return (
    <>
      <div className="tail-head">
        <h1>Blog component works</h1>
      </div>
      <div className="dialog-div">
        <Button variant="outlined" onClick={handleClickOpen}>
          Click here
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <div className="dialog-body">
            <h2>Tail Title</h2>
            <p>This is the content of the blog!comes to you soon...!</p>
            <Button onClick={handleClose}>Close</Button>
          </div>
        </Dialog>
      </div>


      <div className="blogs">
        <h2>Latest Blogs</h2>
        <div className="blog-list">
          {blogs.map(blog => (
            <Link key={blog.id} to={blog.url} target="_blank" className="blog-link" rel="noopener noreferrer">
              <div className="blog-item">
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                <div className="blog-meta">
                  <span>{blog.date}</span>
                  <span>By {blog.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
export default Tailwind;