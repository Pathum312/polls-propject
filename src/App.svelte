<script>
    import Header from './components/Header.svelte';
    import Footer from './components/Footer.svelte';
    import Tabs from './shared/Tabs.svelte';

    // Tabs Management
    let tabs = ['Current Polls', 'Add New Poll'];
    let activeTab = 'Current Polls';

    const tabChange = (tab) => {
        activeTab = tab.detail;
    };
</script>

<Header />
<main>
    <Tabs {tabs} {activeTab} on:tabChange={tabChange} />
    {#if activeTab === 'Current Polls'}
        <p>Poll List</p>
    {:else if activeTab === 'Add New Poll'}
        <p>Poll Add Form</p>
    {/if}
</main>
<Footer />

<style>
    main {
        max-width: 960px;
        margin: 40px auto;
    }
</style>
