import { Demo } from './Demo'
import { Main } from './Main'
import { AsyncItem } from './Async'

const Block: React.FC = (props) => {
  return (
    <div>
      <h1>Zustand</h1>
      <Demo></Demo>
      <hr style={{ margin: '40px 0' }} />
      <Main></Main>
      <hr style={{ margin: '40px 0' }} />
      <AsyncItem></AsyncItem>
    </div>
  )
}

export default Block
