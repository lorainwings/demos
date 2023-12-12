import Block from '@/components/Block/Block'
import SyncExternalStore from '@/components/SyncExternalStore/Index'

function HookTest() {
  return (
    <div className="hook-test">
      <Block>
        <SyncExternalStore />
      </Block>
    </div>
  )
}

export default HookTest
