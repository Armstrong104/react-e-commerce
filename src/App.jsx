import { LeftPanel, RightPanel } from './components';

function App() {
  return (
    <main className='flex flex-col md:flex-row justify-between gap-6 p-4 w-[90%] mx-auto'>
      <LeftPanel />
      <RightPanel />
    </main>
  );
}

export default App;
