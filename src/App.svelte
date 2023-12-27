<script>
    import Header from './components/Header.svelte';
    import Footer from './components/Footer.svelte';
    import CreatePollForm from './components/CreatePollForm.svelte';
    import Tabs from './shared/Tabs.svelte';
    import PollList from './components/PollList.svelte';

    // Tabs Management
    let tabs = ['Current Polls', 'Add New Poll'];
    let activeTab = 'Current Polls';

    const tabChange = (tab) => {
        activeTab = tab.detail;
    };

    const handleAddPoll = (poll) => {
        const data = poll.detail;
        polls = [...polls, data];
        console.log(polls);
        activeTab = 'Current Polls';
    };

    const handleVote = (voteData) => {
        const { option, id } = voteData.detail;

        let copiedPolls = [...polls];
        let updatedPoll = copiedPolls.find((poll) => poll.id == id);

        if (option === 'a') updatedPoll.voteA++;
        if (option === 'b') updatedPoll.voteB++;

        polls = copiedPolls;
    };
</script>

<Header />
<main>
    <Tabs {tabs} {activeTab} on:tabChange={tabChange} />
    {#if activeTab === 'Current Polls'}
        <PollList on:vote={handleVote} />
    {:else if activeTab === 'Add New Poll'}
        <CreatePollForm on:add={handleAddPoll} />
    {/if}
</main>
<Footer />

<style>
    main {
        max-width: 960px;
        margin: 40px auto;
    }
</style>
