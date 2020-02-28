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
      title: 'About',
    };
  },
})

export default class About extends Vue {
  /**
   * The component name.
   *
   * @var {String}
   */
  name = 'About';
}
</script>

<template>
  <BaseLayout>
    <template slot="content">
      <div class="about">
        <h1>This is an about page</h1>
      </div>
    </template>
  </BaseLayout>
</template>
