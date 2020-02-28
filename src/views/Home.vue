<script lang="ts">
/**
 * Modules
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  /**
   * The page meta.
   *
   * @var {Object}
   */
  metaInfo() {
    return {
      title: 'Home',
    };
  },
})

export default class Home extends Vue {
  /**
   * The component name.
   *
   * @var {String}
   */
  name = 'Home';
}
</script>

<template>
  <BaseLayout>
    <template slot="content">
      <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
    </template>
  </BaseLayout>
</template>
