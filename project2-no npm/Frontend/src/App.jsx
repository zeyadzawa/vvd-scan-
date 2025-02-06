import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import Help from './ui/Help';
import VirusScan, {
  action as virusscanAction,
} from './features/ScanVirus/VirusScan';
import DirectoryScan, {
  action as directoryscanAction,
} from './features/ScanDirectory/DirectoryScan';
import VulnerabilityScan, {
  action as vulnerabilityAction,
} from './features/ScanVulnerability/VulnerabilityScan';
import SiteInfo from './features/Site Info/SiteInfo';
import { SiteInfoProvider } from './contexts/SiteInfoContext';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/help',
        element: <Help />,
      },
      {
        path: '/virusscan',
        element: <VirusScan />,
        action: virusscanAction,
      },
      {
        path: '/directoryscan',
        element: <DirectoryScan />,
        action: directoryscanAction,
      },
      {
        path: '/vulnerabilityscan',
        element: <VulnerabilityScan />,
        action: vulnerabilityAction,
      },
      {
        path: '/siteInfo',
        element: (
          <SiteInfoProvider>
            <SiteInfo />
          </SiteInfoProvider>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
