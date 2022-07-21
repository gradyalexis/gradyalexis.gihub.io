import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component({
  props: {
    label: {
      type: String,
      default: 'greetings.'
    }
  }
})
export default class Loading extends Vue {
  data() {
    return {
      animation: {
        background: { duration: 1, delay: 3.8, y: '-100%', ease: 'power3.in', onComplete: () => { this.loadingFinished } },
        backdrop: { duration: 1, delay: 3.8, y: '-100%', ease: 'power4.in' },
        progress: { duration: 2, width: '100%', yoyo: true },
        text: { duration: .5, width: 'auto', delay: 2, opacity: 100, ease: 'power.in' }
      }
    }
  }

  loadingFinished() {
    this.$emit('loading-finished')
  }
}
