<script lang="ts">
    import { IdCard, Shield, Scan, Users2 } from 'lucide-svelte';
    import Popover from '../ui/Popover.svelte';
    
    const idChecks = [
        {
            icon: IdCard,
            title: 'Government ID Check',
            description: 'Federal-grade identity verification'
        },
        {
            icon: Scan,
            title: 'Biometric Verification',
            description: 'Liveliness check'
        },
        {
            icon: Users2,
            title: 'One Person, One Voice',
            description: 'No duplicate or anonymous messages'
        }
    ];
</script>

<div class="inline-block w-full sm:w-auto">
    <Popover let:open>
        <!-- Trigger -->
        <div class="relative group w-full sm:w-auto" slot="trigger">
            <div class="inline-flex items-center gap-2 px-2 sm:px-3 py-1.5 bg-slate-50 border 
                        border-slate-200 rounded-lg text-slate-700 cursor-help w-full sm:w-auto justify-center sm:justify-start">
                <IdCard class="w-4 h-4" />
                <span class="text-xs md:text-sm font-medium">Government ID Required</span>
            </div>
            <div class="absolute w-full h-4 bottom-0 translate-y-full"></div>
        </div>

        <!-- Popover content -->
        <div class="w-[280px] md:w-[320px] p-3 sm:p-4 max-w-[calc(100vw-2rem)] origin-top-left hover:opacity-100">
            <div class="space-y-6">
                {#each idChecks as check}
                    <div 
                        class="flex items-start gap-4 sm:text-base text-sm tracking-normal"
                        class:opacity-0={!open}
                    >
                        <div class="p-2 bg-blue-50 rounded-lg">
                            <svelte:component this={check.icon} class="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                            <h3 class="font-medium text-slate-900 mb-1">
                                {check.title}
                            </h3>
                            <p class="text-slate-600 text-sm font-normal">
                                {check.description}
                            </p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </Popover>
</div>
