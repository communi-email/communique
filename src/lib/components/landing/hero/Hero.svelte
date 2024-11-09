<script lang="ts">
    import { Github, ArrowRight } from 'lucide-svelte';
    import Button from '../../ui/Button.svelte';
    import HowItWorks from './HowItWorks.svelte';
    import IdentityBadge from '$lib/components/verification/IdentityBadge.svelte';

</script>

<!-- New subheader above hero -->
<div class="flex justify-end mb-4">
    <IdentityBadge />
</div>

<div class="space-y-6 sm:space-y-8">
    <div>
        <h1 class="sm:text-5xl text-3xl font-bold tracking-tight text-slate-900 mb-6">
            Make Your Voice 
            <span class="text-blue-600">Count</span>
            <span class="block sm:text-3xl text-2xl font-normal text-slate-600 mt-2">
                On record.
            </span>
        </h1>

        <p class="sm:text-xl text-base text-slate-600 mb-8">
            Reach and influence decision makers at every level. From Congress to corporate 
            leaders, make your voice heard where it matters most.
        </p>
    </div>

    <div class="flex flex-col gap-3 sm:gap-4 sm:items-start items-stretch">
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Button variant="primary" href="https://github.com/communisaas/communique-site">
                <Github class="w-4 h-4" />
                Follow Our Progress
            </Button>
            <HowItWorks />
        </div>
        
        <a 
            href="https://github.com/communisaas/communique-site/discussions"
            class="group inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200 sm:text-base text-sm"
            target="_blank"
        >
            Join the discussion
            <ArrowRight class="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600"></span>
        </a>
    </div>
</div>