import { Footer } from './footer';
import './layout.css';

export const Layout = () => {
  return (
    <div className="layout">
      <div className="sidebar">sidebar</div>
      <div className="toolbar">toolbar </div>
      <main>main</main>
      <Footer className="footer">footer</Footer>
    </div>
  );
};
