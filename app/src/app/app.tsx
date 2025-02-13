import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Home } from './components/Home';
import { NewPost } from './components/NewPost';
import { Login } from './components/Login';

export function App() {
  return (
    <BrowserRouter>
      <header className="mb-4 p-2 bg-blue-100 flex items-center justify-between">
        <h1 className="p-2 text-4xl">brevityapp.me</h1>
        <nav className="flex justify-end">
          <ul className="flex justify-between gap-8">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/newpost">Create Post</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
