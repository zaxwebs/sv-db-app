<script>
    export let data;
</script>

<div class="container py-5">
    <h1 class="mb-3">My Blog</h1>
    <main>
        <div>
            {#each data.feed as post (post.id)}
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">{post.title}</h5>
                        <p class="card-text">
                            {post.author.name}
                        </p>
                        <a href={post.content} class="btn btn-primary">Read Blog</a>
                    </div>
                </div>
            {/each}
        </div>
    </main>
</div>
