<script>
    import Poll from './Poll.svelte';
    import pollStore from '../stores/PollStores';
    import { fade, slide, scale } from 'svelte/transition';
    import { flip } from 'svelte/animate';
</script>

<div class="poll-list">
    {#each $pollStore as poll (poll.id)}
        <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
            <Poll {poll} />
        </div>
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>
