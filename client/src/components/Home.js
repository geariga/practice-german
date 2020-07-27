import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            Home Screen
            <Link to='/phrases/0'>
                Go to phrases.
            </Link>
        </div>
    )
}
