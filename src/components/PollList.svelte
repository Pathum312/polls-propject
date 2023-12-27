<script>
    import Poll from './Poll.svelte';
    import pollStore from '../stores/PollStores';
</script>

<div class="poll-list">
    {#each $pollStore as poll (poll.id)}
        <Poll {poll} on:vote />
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>
