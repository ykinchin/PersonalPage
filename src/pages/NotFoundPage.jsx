import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>Page doesn't exist. Try to visit <Link to = '/'>Home</Link></div>
  )
}

export default NotFoundPage