<script lang="ts">
    import { Shield, AtSign, ArrowRight, Network, Route, CheckCircle2, Building2, Landmark, UsersRound } from 'lucide-svelte';
    import { flip } from 'svelte/animate';
    import { fade } from 'svelte/transition';
    
    let selectedChannel: string | null = null;
    
    const channels = [
        {
            id: 'certified',
            title: 'Certified Delivery',
            icon: Shield,
            description: 'Send messages through official Congressional channels',
            features: [
                {
                    icon: Landmark,
                    text: "Congress's mail system (CWC)"
                },
                {
                    icon: CheckCircle2, 
                    text: 'Permanent blockchain record'
                },
                {
                    icon: UsersRound,
                    text: 'District-based routing'
                }
            ],
            color: 'emerald'
        },
        {
            id: 'direct',
            title: 'Direct Outreach',
            icon: AtSign,
            description: 'Join coordinated email campaigns to organizational leaders',
            features: [
                {
                    icon: Building2,
                    text: 'Message key decision makers'
                },
                {
                    icon: Network,
                    text: 'Add your verified voice'
                },
                {
                    icon: Route,
                    text: 'Send via your email client'
                }
            ],
            color: 'blue'
        }
    ];
</script>

<div class="w-full max-w-4xl mx-auto py-6">
    <div class="mb-8 text-center">
        <div class="flex items-center gap-3 mb-2 justify-center">
            <Network class="w-5 h-5 text-slate-600" />
            <h2 class="font-mono text-xs sm:text-sm tracking-wide uppercase text-slate-600">Two Ways to Make Impact</h2>
        </div>
        <div class="flex justify-center items-center">
            <h3 class="sm:text-3xl text-2xl font-light">Choose Your Outreach Channel</h3>
        </div>
    </div>


    <div class="grid sm:grid-cols-2 grid-cols-1 gap-6">
        {#each channels as channel}
            {@const isSelected = selectedChannel === channel.id}
            <div
                role="button"
                tabindex="0"
                class="relative overflow-hidden group cursor-pointer border-2 rounded-lg transition-all duration-300"
                class:border-emerald-500={isSelected && channel.id === 'certified'}
                class:border-blue-500={isSelected && channel.id === 'direct'}
                class:bg-emerald-50={isSelected && channel.id === 'certified'}
                class:bg-blue-50={isSelected && channel.id === 'direct'}
                class:border-slate-200={!isSelected}
                class:hover:border-slate-300={!isSelected}
                on:click={() => {
                    selectedChannel = channel.id;
                    document.getElementById('channel-continue')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }}
                on:keydown={e => {
                    if (e.key === 'Enter') {
                        selectedChannel = channel.id;
                        document.getElementById('channel-continue')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                }}
            >
                <div class="absolute inset-0 opacity-5 transition-opacity duration-300 pointer-events-none"
                    class:opacity-10={isSelected}>
                    <div class="absolute inset-0 grid grid-cols-8 gap-px">
                        {#each Array(32) as _, i}
                            <div class=" transform rotate-45 scale-150"></div>
                        {/each}
                    </div>
                </div>

                <div class="relative h-full p-4 sm:p-6">
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 transition-colors duration-200"
                        class:bg-emerald-100={isSelected && channel.id === 'certified'}
                        class:text-emerald-700={isSelected && channel.id === 'certified'}
                        class:bg-blue-100={isSelected && channel.id === 'direct'}
                        class:text-blue-700={isSelected && channel.id === 'direct'}
                        class:bg-slate-100={!isSelected}
                        class:text-slate-600={!isSelected}>
                        <svelte:component this={channel.icon} class="w-4 h-4" />
                        {channel.title}
                    </div>

                    <div class="space-y-4">
                        <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                            {channel.description}
                        </p>
                        
                        <ul class="space-y-3 pt-4 border-t border-slate-200">
                            {#each channel.features as feature (feature.text)}
                                <li 
                                    animate:flip={{ duration: 300 }}
                                    class="grid grid-cols-[20px_1fr] gap-2 items-start text-sm sm:text-base text-slate-600"
                                >
                                    <svelte:component this={feature.icon} class="w-4 h-4 text-slate-400 mt-1" />
                                    <span>{feature.text}</span>
                                </li>
                            {/each}
                        </ul>

                        {#if isSelected}
                            <div 
                                transition:fade={{ duration: 200 }}
                                class="pt-4 space-y-3"
                            >
                                <div class="flex flex-wrap items-center gap-4 px-4 py-3 rounded-lg w-full justify-between">
                                    <span class="inline-flex items-center gap-2 text-slate-600 whitespace-nowrap text-sm">
                                        <span class="relative flex h-2 w-2">
                                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                            <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                        </span>
                                        <span>In Development</span>
                                    </span>
                                    <a 
                                        href="https://github.com/communisaas/communique-site"
                                        class="group/link flex items-center text-sm text-slate-600 hover:text-slate-900 px-2"
                                    >
                                        <span class="mr-1.5">Follow Progress</span>
                                        <ArrowRight class="w-4 h-4 transform transition-transform duration-200 group-hover/link:translate-x-1" />
                                    </a>
                                </div>
                                <p class="text-xs text-center text-slate-500">
                                    {channel.id === 'certified' ? 'Congressional delivery system integration in progress' : 'Direct outreach system coming soon'}
                                </p>
                            </div>
                        {/if}

                        <!-- Keep the bottom border indicator -->
                        <div class="absolute bottom-0 left-0 w-full h-1 transition-all duration-300 transform"
                            class:bg-emerald-500={channel.id === 'certified'}
                            class:bg-blue-500={channel.id === 'direct'}
                            class:scale-x-100={isSelected}
                            class:bg-slate-200={!isSelected}
                            class:scale-x-0={!isSelected}
                            class:group-hover:scale-x-100={!isSelected}>
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
