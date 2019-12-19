import React from 'react'
import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav>
      <ul>
        <li>
          <Link to="/salao">Cozinha</Link>
        </li>
        <li>
          <Link to="/cozinha">Salao</Link>
        </li>
      </ul>
    </nav>
    );
}