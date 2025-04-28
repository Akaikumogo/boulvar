import SelectionOfApartments from './app/SelectionOfApartments';
import Slider from './app/Slider';
import Table from './app/Table';
import NavigatePage from './middleware/NavigatePage';
import WelcomePage from './middleware/WelcomePage';

export const router = [
  {
    path: '',
    element: <NavigatePage />,
    children: [
      {
        path: '/:lang',
        element: <WelcomePage />, // This is the main page and layout
        children: [
          {
            path: '',
            element: <Slider />
          },
          {
            path: 'selling-apartments',
            element: <SelectionOfApartments />
          },
          { path: 'table', element: <Table /> }
        ]
      }
    ]
  },
  { path: '*', element: <div>404</div> }
];
