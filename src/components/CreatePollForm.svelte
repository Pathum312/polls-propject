<script>
    import Button from '../shared/Button.svelte';

    let formData = {
        question: '',
        answerA: '',
        answerB: '',
    };

    const submitPoll = () => {
        console.log(formData);
    };
</script>

<form on:submit|preventDefault={submitPoll}>
    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input type="text" id="question" bind:value={formData.question} />
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input type="text" id="answer-a" bind:value={formData.answerA} />
    </div>
    <div class="form-field">
        <label for="answer-b">PAnswer B</label>
        <input type="text" id="answer-b" bind:value={formData.answerB} />
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
</style>
