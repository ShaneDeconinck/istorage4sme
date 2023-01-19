
<template>
  <div v-if="type === 'panopto'">
    <iframe
      :src="`https://howest.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=${videoId}&autoplay=false&offerviewer=true&showtitle=true&showbrand=true&captions=false&interactivity=all`"
      height="405"
      width="720"
      style="border: 1px solid #464646"
      allowfullscreen
      allow="autoplay"
    ></iframe>
  </div>
  <div v-if="type === 'youtube'">
    <iframe
      width="560"
      height="315"
      :src="`https://www.youtube.com/embed/${videoId}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      required: true,
    },
  },
};
</script>