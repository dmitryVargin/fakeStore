import { createRoot } from 'react-dom/client';
import App from './components/App';
import './reset.scss';
import 'react-tooltip/dist/react-tooltip.css';
import './style.scss';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
