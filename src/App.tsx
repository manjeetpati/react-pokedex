import './App.css'
import Home from './components/pages/home/components/home';
import { Layout } from './components/ui/layout/Layout';

function App() {

  return (
    <>
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
    </>
  )
}

export default App
