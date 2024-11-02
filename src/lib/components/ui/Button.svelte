<script lang="ts">
    export let variant: 'primary' | 'secondary' = 'primary';
    export let type: 'button' | 'submit' = 'button';
    export let cursor: 'default' | 'help' = 'default';
    export let classNames: string = '';
    export let href: string | undefined = undefined;

    const baseClasses = `
        px-4 sm:px-6 
        py-2 sm:py-3 
        rounded-lg 
        font-medium 
        inline-flex 
        items-center 
        justify-center 
        gap-2 
        text-sm sm:text-base 
        w-full sm:w-auto 
        ${cursor}
    `;
    const variantClasses = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200",
        secondary: "bg-white hover:bg-slate-50 text-blue-600 border border-slate-200 hover:border-slate-300 transition-all duration-200"
    };
</script>

{#if href}
    <a
        {href}
        target="_blank"
        rel="noopener noreferrer"
        class="{baseClasses} {variantClasses[variant]} {classNames}"
    >
        <slot />
    </a>
{:else}
    <button
        {type}
        class="{baseClasses} {variantClasses[variant]} {classNames}"
    >
        <slot />
    </button>
{/if}
