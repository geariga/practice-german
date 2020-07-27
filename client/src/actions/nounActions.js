import Axios from "axios";

async function getAllNouns () {
    try {
        const nouns = await Axios.get('/nouns');
        return nouns.data;
    } catch (error) {
        console.log({ message: error.message });
        return;
    }
};

export async function getNoun (index) {
    try {
        const nouns = await getAllNouns();
        if (nouns.length > index && index >= 0) {
            return nouns[index];
        }
    } catch (error) {
        console.log('Noun not found, ', { message: error.message })
        return false;
    }
};