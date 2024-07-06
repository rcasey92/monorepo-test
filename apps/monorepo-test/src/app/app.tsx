import NxWelcome from './nx-welcome';

import { Ui } from '@monorepo-test/ui';

export function App() {
  return (
    <div>
      <NxWelcome title="monorepo-test" />
      <Ui />
    </div>
  );
}

export default App;
