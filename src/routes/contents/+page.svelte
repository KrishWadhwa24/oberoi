<style>
    .backgrounder {
      background-image: url('/img/toc.png');
      background-repeat: repeat;
      background-size: cover;
      height:auto;
      overflow: hidden;
    }
</style>
<script>
    let contents = [["Dining options in Udaipur","dining"],["Elevated Dining experience at Udaivilas","elevated"],["Guest experiences","experience"],["Shopping options","shopping"],["Sightseeing options","sightseeing"],["The Oberoi Spa","spa"]];
</script>
<div class = "backgrounder flex flex-col items-center">
    <div class = "text-3xl titlefont-regular p-5 pt-[50px] text-center content-regular">
        Navigating Your Stay
    </div>
    <div class = "text-center">
    {#each contents as content}
    <a href = "./{content[1]}"><p class = "text-black content-regular m-10 text-2xl ">{content[0]}</p></a>
    {/each}
    </div>
    <p class = "text-lg text-center w-[80%] pb-5">
        If you require assistance with booking any of these experiences or would like further information, please don't hesitate to reach out to our concierge team via the link provided below.
        <br><a href = "https://wa.me/9257052525" class = ""><em>Click Here</em></a>
    </p>
</div>