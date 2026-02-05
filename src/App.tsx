import { RouterProvider } from 'react-router-dom';
import './App.css'
import { Layout } from './components/ui/layout/Layout';
import { router } from './utils/router';

function App() {

  return (
    <>
    <div className="App">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
    </>
  )
}

export default App
