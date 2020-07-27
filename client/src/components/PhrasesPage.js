import React, { useState, useEffect } from 'react';
import { getPhrase } from '../actions/phraseActions';

export default function PhrasesPage({ match }) {
    const [currentPhrase, setPhrase] = useState(null);

    useEffect(() => {
        async function fetchData () {
            const phrase = await getPhrase(match.params.id);
            setPhrase(phrase);
        }
        fetchData();
    }, []);

    if (!currentPhrase) {
        return <div>404 - File not found.</div>
    }

    return (
        <div>
            Phrase index: {match.params.id}
        </div>
    )
}
