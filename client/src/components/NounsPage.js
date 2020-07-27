import React, { useState, useEffect } from 'react';
import { getNoun } from '../actions/nounActions';

export default function NounsPage({ match }) {
    const [currentNoun, setNoun] = useState(null);

    useEffect(() => {
        async function fetchData () {
            const noun = await getNoun(match.params.id);
            setNoun(noun);
        }
        fetchData();
    }, []);

    if (!currentNoun) {
        return <div>404 - File not found.</div>
    }

    return (
        <div>
            Noun index: {match.params.id}
        </div>
    )
}
