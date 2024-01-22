// plugins/virtual-plugin-calc.ts
import type { Plugin, ResolvedConfig } from 'vite';

// 虚拟模块名称
const virtualSumModuleId = 'virtual:calc';

// 在内部，使用了虚拟模块的插件在解析时应该将模块 ID 加上前缀 \0，这一约定来自 rollup 生态
const resolvedSumVirtualModuleId = '\0' + virtualSumModuleId;

export default function virtualSumModulePlugin(): Plugin {
  let config: ResolvedConfig | null = null;
  return {
    name: 'vite-plugin-virtual-calc',
    resolveId(id) {
      if (id === virtualSumModuleId) {
        return resolvedSumVirtualModuleId;
      }
    },
    load(id) {
      // 加载虚拟模块
      if (id === resolvedSumVirtualModuleId) {
        return 'export default function sum(arr, i = 0) { return i >= arr.length ? 0 : arr[i] + sum(arr, i + 1); }';
      }
    }
  }
}
