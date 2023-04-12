<script>
    import Post from '$lib/components/Post.svelte';
    export let data;
</script>

<h1 class="mb-3">My Blog</h1>
<main>
    <div>
        {#each data.feed as post (post.id)}
            <Post title={post.title} content={post.content} author={post.author} />
        {/each}
    </div>
</main>
