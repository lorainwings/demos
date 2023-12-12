import {
  createElementVNode as _createElementVNode,
  resolveComponent as _resolveComponent,
  createVNode as _createVNode,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock
} from 'vue'

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_custom_component = _resolveComponent('custom-component')

  return (
    _openBlock(),
    _createElementBlock('template', null, [
      _createElementVNode('div', null, [
        _createElementVNode('p', null, 'Hello World'),
        _createVNode(_component_custom_component)
      ])
    ])
  )
}
s
