<script>
    import Card from '../shared/Card.svelte';
    import pollStore from '../stores/PollStores';
    import Button from '../shared/Button.svelte';
    import { tweened } from 'svelte/motion';
    export let poll;

    //reactive value
    $: totalVotes = poll.voteA + poll.voteB;
    $: percentA = Math.floor((poll.voteA / totalVotes) * 100) || 0;
    $: percentB = Math.floor((poll.voteB / totalVotes) * 100) || 0;

    // Tweened Percentages
    const tweenedA = tweened(0);
    const tweenedB = tweened(0);
    $: tweenedA.set(percentA);
    $: tweenedB.set(percentB);
    // $: console.log($tweenedA, $tweenedB);

    const handleVote = (option, id) => {
        // Updating the poll store with new votes
        pollStore.update((currentPolls) => {
            let copiedPolls = [...currentPolls];
            let updatedPoll = copiedPolls.find((poll) => poll.id == id);

            if (option === 'a') updatedPoll.voteA++;
            if (option === 'b') updatedPoll.voteB++;

            return copiedPolls;
        });
    };

    // Deleting a store
    const handleDelete = (id) => {
        pollStore.update((currentPolls) => {
            return currentPolls.filter((poll) => poll.id != id);
        });
    };
</script>

<Card>
    <div class="poll">
        <h3>{poll.question}</h3>
        <p>Total Votes: {totalVotes}</p>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="answer" on:click={() => handleVote('a', poll.id)}>
            <div class="percent percent-a" style="width: {$tweenedA}%;"></div>
            <span>{poll.answerA} ({poll.voteA})</span>
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="answer" on:click={() => handleVote('b', poll.id)}>
            <div class="percent percent-b" style="width: {$tweenedB}%;"></div>
            <span>{poll.answerB} ({poll.voteB})</span>
        </div>
        <div class="delete">
            <Button flat={true} on:click={() => handleDelete(poll.id)}>
                Delete
            </Button>
        </div>
    </div>
</Card>

<style>
    h3 {
        margin: 0 auto;
        color: #555;
    }

    p {
        margin-top: 6px;
        font-size: 14px;
        color: #aaa;
        margin-bottom: 30px;
    }

    .answer {
        background: #fafafa;
        cursor: pointer;
        margin: 10px auto;
        position: relative;
    }

    .answer:hover {
        opacity: 0.6;
    }

    span {
        display: inline-block;
        padding: 10px 20px;
    }

    .percent {
        height: 100%;
        position: absolute;
        box-sizing: border-box;
    }

    .percent-a {
        border-left: 4px solid #d91b42;
        background: rgba(217, 27, 66, 0.6);
    }

    .percent-b {
        border-left: 4px solid #45c496;
        background: rgba(69, 196, 150, 0.2);
    }

    .delete {
        margin-top: 30px;
        text-align: center;
    }
</style>
