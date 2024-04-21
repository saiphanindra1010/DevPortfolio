import React from 'react'

import { Link } from "react-router-dom"
import "../components/styles/notfound.css";
export const Notfoundpage = () => {
  return (
    <div className='not'>
<h1>
    404 oops !!
</h1>
<div className='txt'>
<p>page not found 🔍</p>
</div>

<Link  to="/">
        <h1 className="button-35 btnactive filter-control">Go back to Home</h1>
      </Link>
</div>
  )
}
