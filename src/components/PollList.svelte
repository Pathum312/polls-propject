<script>
    import Poll from './Poll.svelte';
    import pollStore from '../stores/PollStores';
    import { onMount, onDestroy } from 'svelte';
    export let polls = [];

    const unsubscribe = pollStore.subscribe((data) => {
        polls = data;
    });

    // This function runs when the pollList component is compiled/mounted
    onMount(() => {
        console.log('Mounted');
    });

    // This function runs when we switch to a different component other than the pollList
    onDestroy(() => {
        console.log('Destroyed');
        unsubscribe();
    });
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
