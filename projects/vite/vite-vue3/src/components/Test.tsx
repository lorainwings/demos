import { defineComponent } from 'vue'

export default defineComponent({
  props: { name: String },
  setup(props, { slots }) {
    return () => (
      <div style="border: 1px solid black">
        <h1>Test.jsx</h1>
        <div>{props.name}</div>
      </div>
    )
  }
})

