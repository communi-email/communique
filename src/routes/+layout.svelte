<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { templateStore } from '$lib/stores/templates';
	import { onMount } from 'svelte';
	import '../app.css';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();

	// Initialize templates on app load
	onMount(() => {
		// templateStore.setTemplates([
		// 	{
		// 		id: 1,
		// 		title: "Climate Action Support",
		// 		description: "Support the Clean Energy Jobs Act",
		// 		category: "Environment",
		// 		type: "certified",
		// 		deliveryMethod: "Congressional CWC System",
		// 		metrics: {
		// 			messages: "2,847 certified deliveries",
		// 			districts: "34% of US House districts",
		// 			tooltip: "Messages certified through Congressional CWC system with blockchain verification",
		// 			verification: "Permanent Record",
		// 			reach: "112 Congressional offices reached"
		// 		},
		// 		preview: `Dear [Representative],...` // Template string
		// 	},
		// 	// ... other templates
		// ]);
		// In development, mock data is auto-loaded
		// In production, we'll uncomment and use:
		// templateStore.fetchTemplates();
	});
</script>

<ParaglideJS {i18n}>
	<div class="md:p-10 p-6 min-h-screen bg-gradient-to-b from-slate-50 to-white">
		{@render children()}
		<Footer />
	</div>
</ParaglideJS>
