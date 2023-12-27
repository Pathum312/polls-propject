<script>
    import Button from '../shared/Button.svelte';
    import { createEventDispatcher } from 'svelte';
    import pollStore from '../stores/PollStores';

    let formData = {
        question: '',
        answerA: '',
        answerB: '',
    };
    let errors = {
        question: '',
        answerA: '',
        answerB: '',
    };
    let disptach = createEventDispatcher();
    let isValid = false;

    const submitPoll = () => {
        isValid = true;

        // Validate Question
        if (formData.question.trim().length < 5) {
            isValid = false;
            errors.question = 'Question must be at least 5 characters long';
        } else errors.question = '';

        // Validate Answer A
        if (formData.answerA.trim().length < 1) {
            isValid = false;
            errors.answerA = 'Answer A cannot be empty';
        } else errors.answerA = '';

        // Validate Answer B
        if (formData.answerB.trim().length < 1) {
            isValid = false;
            errors.answerB = 'Answer B cannot be empty';
        } else errors.answerB = '';

        // Add New Poll
        if (isValid) {
            let poll = { ...formData, voteA: 0, voteB: 0, id: Math.random() };
            // Updating poll store
            pollStore.update((currentPolls) => {
                return [poll, ...currentPolls];
            });
            disptach('add');
        }
    };
</script>

<form on:submit|preventDefault={submitPoll}>
    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input type="text" id="question" bind:value={formData.question} />
        <div class="error">{errors.question}</div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input type="text" id="answer-a" bind:value={formData.answerA} />
        <div class="error">{errors.answerA}</div>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B</label>
        <input type="text" id="answer-b" bind:value={formData.answerB} />
        <div class="error">{errors.answerB}</div>
    </div>
    <Button type="secondary" flat={true}>Add Poll</Button>
</form>

<style>
    form {
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }

    .form-field {
        margin: 18px auto;
    }

    input {
        width: 100%;
        border-radius: 6px;
    }

    label {
        margin: 10px auto;
        text-align: left;
    }

    .error {
        font-weight: bold;
        font-size: 12px;
        color: #d91b42;
    }
</style>
