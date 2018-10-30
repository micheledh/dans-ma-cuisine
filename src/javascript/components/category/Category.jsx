import React from 'react';
import {Link} from 'react-router-dom';

export default function Category() {
    return (
        <div>
            <Link to="/starters">Starters</Link>
            <Link to="/mains">Mains</Link>
            <Link to="/desserts">Desserts</Link>
            <Link to="others">Others</Link>
        </div>
    );
}
