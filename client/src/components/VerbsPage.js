import React, { useState, useEffect } from 'react';
import { getVerb } from '../actions/verbActions';

export default function VerbsPage({ match }) {
    const [currentVerb, setVerb] = useState(null);

    useEffect(() => {
        async function fetchData () {
            const verb = await getVerb(match.params.id);
            console.log(verb);
            setVerb(verb);
        }
        fetchData();
    }, []);

    if (!currentVerb) {
        return <div>404 - File not found.</div>
    }

    return (
        <div>
            Verb index: {match.params.id}
        </div>
    )
}
