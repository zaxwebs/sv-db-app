<script>
    export let id;
    export let title;
    export let content;
    export let author;
</script>

<div class="card mb-3">
    <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">
            {content}
        </p>
        <p class="card-text"><small class="text-muted">{author.name}</small></p>
        <a href="/update/{id}" class="btn btn-light btn-sm">Update</a>
    </div>
</div>
