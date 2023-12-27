<script>
    import Header from './components/Header.svelte';
    import Footer from './components/Footer.svelte';
    import CreatePollForm from './components/CreatePollForm.svelte';
    import Tabs from './shared/Tabs.svelte';
    import PollList from './components/PollList.svelte';

    // Tabs Management
    let tabs = ['Current Polls', 'Add New Poll'];
    let activeTab = 'Current Polls';
    let polls = [];

    const tabChange = (tab) => {
        activeTab = tab.detail;
    };

    const handleAddPoll = (poll) => {
        const data = poll.detail;
        polls = [...polls, data];
        console.log(polls);
        activeTab = 'Current Polls';
    };
</script>

<Header />
<main>
    <Tabs {tabs} {activeTab} on:tabChange={tabChange} />
    {#if activeTab === 'Current Polls'}
        <PollList {polls} />
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
