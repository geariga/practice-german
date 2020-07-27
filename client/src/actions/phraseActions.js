import Axios from "axios";

async function getAllPhrases () {
    try {
        const phrases = await Axios.get('/phrases');
        return phrases.data;
    } catch (error) {
        console.log({ message: error.message });
        return;
    }
};

export async function getPhrase (index) {
    try {
        const phrases = await getAllPhrases();
        if (phrases.length > index && index >= 0) {
            return phrases[index];
        }
    } catch (error) {
        console.log('Phrase not found, ', { message: error.message })
        return false;
    }
};