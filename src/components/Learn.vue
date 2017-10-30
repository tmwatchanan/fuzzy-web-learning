<template>
  <div>
    <p>Learn component</p>

    <div class="latex">
        \int_{0}^{\pi}\frac{x^{4}\left(1-x\right)^{4}}{1+x^{2}}dx =\frac{22}{7}-\pi
    </div>

    <hr>
    <p class="latex">
      \begin{aligned}x^2+4x-21&=0\\x^2+4x&=25\\x^2+4x+4&=21+4\\(x+2)^2&=25\\x+2&=\pm 5\\x&=-2\pm 5\end{aligned} 
    </p>
  </div>
</template>

<script>
export default {
  mounted() {
    $(".latex").latex();
  }
}
</script>

<style>

</style>
