<template>
  <q-page class="constrain-more q-pa-md">
    <div class="camera-frame q-pa-md">
      <img class="full-width" src="https://cdn.quasar.dev/img/parallax2.jpg" />
    </div>
    <div class="text-center q-pa-md">
      <q-btn round color="grey-10" size="lg" icon="eva-camera" />
    </div>
    <div class="row justify-center q-ma-md">
      <q-input
        class="col col-sm-6"
        dense
        v-model="post.caption"
        label="Caption"
      />
    </div>
    <div class="row justify-center q-ma-md">
      <q-input
        class="col col-sm-6"
        dense
        v-model="post.location"
        label="Location"
      >
        <template v-slot:append>
          <q-btn round dense flat icon="eva-navigation-2-outline" />
        </template>
      </q-input>
    </div>
    <div class="row justify-center q-mt-lg">
      <q-btn unelevated rounded color="primary" label="Post Image" />
    </div>
  </q-page>
</template>

<script>
import { uid } from "quasar";
export default {
  name: "PageCamera",
  data() {
    return {
      post: {
        id: uid(),
        caption: "",
        location: "",
        photo: null,
        date: Date.now()
      }
    };
  }
};
</script>

<style lang="sass">
.camera-frame
  border: 2px solid $grey-10
  border-radius: 10px
</style>
