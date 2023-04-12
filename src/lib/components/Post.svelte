<script>
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
        <p class="card-text"><small class="text-muted">Post by {author.name}</small></p>
    </div>
</div>
