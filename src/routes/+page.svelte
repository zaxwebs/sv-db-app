<script>
  export let data;
</script>

<div class="container py-5">
  <h1>My Blog</h1>
  <main>
    <div>
      {#each data.feed as post (post.id)}
        <h3>{post.title}</h3>
		<div>{post.content}</div>
		<div>{post.author.name}</div>
      {/each}
    </div>
  </main>
</div>
