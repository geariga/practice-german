import Axios from "axios";

async function getAllVerbs () {
    try {
        const verbs = await Axios.get('/verbs');
        return verbs.data;
    } catch (error) {
        console.log({ message: error.message });
        return;
    }
};

export async function getVerb (index) {
    try {
        const verbs = await getAllVerbs();
        if (verbs.length > index && index >= 0) {
            return verbs[index];
        }
    } catch (error) {
        console.log('Verb not found, ', { message: error.message })
        return false;
    }
};