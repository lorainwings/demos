import { defineComponent } from 'vue'

export default defineComponent({
  props: { name: String },
  setup(props, { slots }) {
    return () => <div>{props.name}</div>
  }
})

