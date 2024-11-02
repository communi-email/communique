<script lang="ts">
    import { onMount } from 'svelte';
    import { templateStore, selectedTemplate } from '$lib/stores/templates';
    import { messageCount } from '$lib/stores/messageCount';
    import Hero from '$lib/components/landing/hero/Hero.svelte';
    import ActivityFeed from '$lib/components/landing/activity/ActivityFeed.svelte';
    import ChannelExplainer from '$lib/components/landing/channel/ChannelExplainer.svelte';
    import TemplateList from '$lib/components/landing/template/TemplateList.svelte';
    import TemplatePreview from '$lib/components/landing/template/TemplatePreview.svelte';
    import Modal from '$lib/components/ui/Modal.svelte';
    import { browser } from '$app/environment';
	import { IdCard, Shield } from 'lucide-svelte';
    import IdentityDetail from '$lib/components/verification/IdentityDetail.svelte';
    
    // Start message counter on mount
    onMount(() => {
        messageCount.startCounting();
        return () => messageCount.stopCounting();
    });
    
    let showMobilePreview = false;
    
    function handleTemplateSelect(id: number) {
        templateStore.selectTemplate(id);
        if (browser && window.innerWidth < 640) { // sm breakpoint is 640px
            showMobilePreview = true;
        }
    }
</script>

<svelte:head>
    <title>Communiqué</title>
    <meta name="description" content="Reach and influence decision makers at every level" />
</svelte:head>

<!-- Hero Section - Simple Badge -->
<section class="pt-12">
    <div class="flex flex-row justify-center flex-wrap gap-8 items-center mb-6 max-w-6xl mx-auto">
        <span class="w-9/12 md:w-3/4 lg:w-7/12">
            <Hero />
        </span>
        <ChannelExplainer />
    </div>
</section>
