<script lang="ts">
    export let variant: 'primary' | 'secondary' = 'primary';
    export let type: 'button' | 'submit' = 'button';
    export let cursor: 'default' | 'help' = 'default';
    export let classNames: string = '';

    interface $$Slots {
        default: {};
        trigger?: {}; // Add this to support the trigger slot
    }
</script>

<button
    {type}
    class="px-6 py-3 sm:text-base text-sm rounded-lg font-medium flex items-center gap-2 transition-all duration-200 cursor-{cursor} {classNames}"
    class:bg-blue-600={variant === 'primary'}
    class:text-white={variant === 'primary'}
    class:hover:bg-blue-700={variant === 'primary'}
    class:bg-white={variant === 'secondary'}
    class:text-blue-600={variant === 'secondary'}
    class:border={variant === 'secondary'}
    class:border-blue-200={variant === 'secondary'}
    class:hover:border-blue-300={variant === 'secondary'}
>
    <slot />
</button>