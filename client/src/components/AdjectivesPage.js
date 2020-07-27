import React, { useState, useEffect, useMemo } from 'react';
import { getAllAdjectives } from '../actions/adjectiveActions';

export default function AdjectivesPage({ history, location, match }) {
    const [currentAdjective, setCurrentAdjective] = useState(null);

    const currentList = useMemo(async () => {
        return await getAllAdjectives();
    }, []);

    useEffect(() => {
        async function setCurrentWord () {
            const list = await currentList;
            setCurrentAdjective(list[match.params.id]);
        }
        setCurrentWord();
    }, [currentList]);

    if (currentAdjective) {
        return <div>{currentAdjective.word}</div>
    } else {
        return <div></div>
    }
}
