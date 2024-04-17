import { useEffect } from 'react';
import './App.scss';
import PageRoutes from './component/PageRoutes';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';

function App() {
  useEffect(() => {
    // const location = useLocation()
    // location.href = "/juicyadventure"
  }, [])

  return (
    <div>
      <PageRoutes />
    </div>
  )
}

export default App
