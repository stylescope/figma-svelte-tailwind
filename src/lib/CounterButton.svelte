<script lang="ts">
    let count: number = 0
        const increment = () => {
        count += 1
    }
</script>


<button on:click={increment} class="flex items-center justify-center min-w-32 text-sm cursor-pointer py-2.5 px-4 ring-1 ring-inset rounded-full text-grey-900 ring-gray-200">
    Count is {count}
</button>
