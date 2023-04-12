<script>
    export let data;
    export let form;
</script>

<h1 class="mb-3">Create Post</h1>
{#if form?.error}
    <div class="alert alert-danger" role="alert">{form.error}</div>
{/if}
<form method="post" action="/update/{data.id}">
    <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
            type="text"
            class="form-control"
            id="title"
            name="title"
            value={form?.title ? form.title : data.title}
        />
    </div>
    <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea class="form-control" id="content" name="content" rows="3"
            >{form?.content ? form.content : data.content}</textarea
        >
    </div>
    <button type="submit" class="btn btn-primary">Update Post</button>
</form>
