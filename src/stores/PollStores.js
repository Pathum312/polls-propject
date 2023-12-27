import { writable } from 'svelte/store';

const pollStore = writable([
    {
        id: 1,
        question: 'Who is better?',
        answerA: 'Sasuke',
        answerB: 'Itachi',
        voteA: 5,
        voteB: 15,
    },
]);

export default pollStore;
