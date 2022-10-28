import 'tdesign-react/es/style/index.css'; // 库css
import '@/styles/index.less'; // 覆写库css
import { Button } from 'tdesign-react';
import React from 'react';

import { A } from './a';

const App = () => (
  <>
    <div>{A.length}</div>
    <Button></Button>
  </>
);

export default App;
