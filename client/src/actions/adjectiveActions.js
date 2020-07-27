import Axios from "axios";

export async function getAllAdjectives () {
    try {
        const adjectives = await Axios.get('/adjectives');
        return adjectives.data;
    } catch (error) {
        console.log({ message: error.message });
        return;
    }
};

// export async function getAdjective (index) {
//     try {
//         const adjectives = await getAllAdjectives();
//         if (adjectives.length > index && index >= 0) {
//             return adjectives[index];
//         }
//     } catch (error) {
//         console.log('Adjective not found, ', { message: error.message })
//         return false;
//     }
// };