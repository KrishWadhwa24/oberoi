<script>
    import Scroll from '../scroll/scroll.svelte';
</script>
<style>
    .intro {
      background-image: url('/img/title.png');
      background-repeat: no-repeat;
      background-size: cover;
      height:100vh;
    }
    </style>
  <div class = "intro">
        <div class = "text-center flex flex-col justify-center">
            <h1 class = "text-3xl titlefont-bold text-black mt-20">
                The Spirit of <br>The Oberoi Udaivilas
            </h1>
            
            <div class = "content text-lg pb-10 pt-10 text-container ">
                <p class = "pb-4">
                    <b>Nestled amidst the majestic Aravalli Mountain Range, The Oberoi Udaivilas stands as a mesmerizing tribute to the opulent legacy of Mewar. Our sanctuary exudes an aura of tranquility and romance, promising to immerse you in an unforgettable journey of splendor.</b>
                </p>
                <p class = " mt-20">
                    <b>With meticulous attention to detail and heartfelt hospitality, we strive to craft an experience that transcends ordinary luxury. Each moment spent with us is infused with warmth and sincerity, destined to weave a tapestry of happiness that lingers in your memory.</b>
                </p>
            </div>
            <Scroll/>
        </div>
  </div>
  
