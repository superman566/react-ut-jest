import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('[data-test="App"]')).toExist();
  expect(wrapper.find('[data-test="App"]')).toHaveProp('title','app');
});
