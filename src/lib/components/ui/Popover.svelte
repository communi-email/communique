<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
    
    export let open = false;
    export let id = crypto.randomUUID();
    
    const dispatch = createEventDispatcher();
    
    interface $$Slots {
        default: { open: boolean };
        trigger: {};
    }
    
    function handleMouseEnter() {
        open = true;
        dispatch('open');
    }
    
    function handleMouseLeave() {
        open = false;
        dispatch('close');
    }

    function handleFocus() {
        open = true;
        dispatch('open');
    }

    function handleBlur(event: FocusEvent) {
        const currentTarget = event.currentTarget as HTMLElement;
        const relatedTarget = event.relatedTarget as Node | null;
        
        if (currentTarget && relatedTarget && !currentTarget.contains(relatedTarget)) {
            open = false;
            dispatch('close');
        }
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape' && open) {
            open = false;
            dispatch('close');
        }
    }
</script>

<div 
    class="relative flex"
    role="button"
    tabindex="0"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    on:keydown={handleKeydown}
    on:focusin={handleFocus}
    on:focusout={handleBlur}
    aria-haspopup="true"
    aria-expanded={open}
>
    <slot 
        name="trigger" 
        aria-controls={id}
    />
    
    {#if open}
        <div 
            {id}
            role="tooltip"
            class="absolute top-full mt-4 bg-white rounded-xl shadow-xl border border-slate-200 z-10 right-0 md:right-auto md:left-0"
            transition:fade={{ duration: 200 }}
        >
            <slot {open} />
        </div>
    {/if}
</div>