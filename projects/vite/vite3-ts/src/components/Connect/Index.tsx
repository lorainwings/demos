export const connect =
  (mapStateToProps: any, mapDispatchToProps: any) =>
  (WrappedComponent: any) => {
    // 1. 检查 WrappedComponent 是否为 React 组件
    if (typeof WrappedComponent !== 'function') {
      throw new Error('WrappedComponent 必须是一个 React 组件。')
    }

    // 2. 创建一个新的组件
    const ConnectedComponent = (props: any) => {
      // 4. 渲染 WrappedComponent
      return (
        <WrappedComponent
          // 3. 将 Redux 状态和动作映射到 props 上
          {...props}
          {...mapStateToProps(props)}
          {...mapDispatchToProps(props.dispatch)}
        />
      )
    }

    ConnectedComponent.displayName = 'Connected' + WrappedComponent.displayName

    // 5. 返回新的组件
    return ConnectedComponent
  }
