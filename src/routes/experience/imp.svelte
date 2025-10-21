<script>
    export let name
    export let about
    export let duration
    export let price
    export let imageLocation
    export let note
</script>
<div class = "flex flex-col items-center">
    <h1 class = "text-center text-3xl titlefont-bold p-5">{name}</h1>
    <img src = {imageLocation} class = "border border-white border-8 w-80 m-5">
    <div class = "content-regular text-center">
    <p>{about}</p>
    <p>{duration}</p>
    <p>{price}</p>
    <p>{note}</p>
</div>
</div>