import './App.css';
import { useState, useEffect, lazy } from 'react';
import axios from 'axios';
import ChildClassComponent from './components/ChildClassComponet';
import { Route, Routes, Link } from 'react-router-dom';
// import { importEntry } from 'import-html-entry';
import StartTransition from './components/StartTransition';
import PostMessage from './modules/PostMessage/index.tsx';
const LazyModule1 = lazy(() => import('./modules/Module1/index.tsx'));

const routes = [
  {
    path: '/',
    name: '首页',
  },
  {
    path: '/app1',
    name: 'app1',
  },
  {
    path: '/module1',
    name: 'module1',
  },
  {
    path: '/starttrasnition',
    name: 'starttrasnition',
  },
  {
    path: '/postMessage',
    name: 'postMessage',
  }
]

function App() {
  const [value, setValue] = useState('');

  // TODO 特使
  const onBtn = () => {
    setValue(+new Date());
  }

  // useEffect(() => {
  //   axios.post('/api/user').then(res => {
  //     console.log(res);
  //   }).catch(err => {
  //     console.log(err, 111111111);
  //   })
  // }, [])

  // useEffect(() => {
  //   importEntry('http://localhost:3001/').then(res => {
  //     console.log(res, 88888888888888)
  //     console.log(res.template, 66666666666666666);

  //     res.execScripts().then(exports => {
  //       console.log(exports, 9999999999999);
  //     })
  //   });
  // }, [])

  return (
    <div className="App">
      <div className="App-header">
        {
          routes.map(({ path, name }) => <Link className='nav' key="path" to={path}>{name}</Link>)
        }
      </div>
      {/* <div id="child">nihao</div> */}
      <Routes>
        <Route path='/' exact element={(<div>首页</div>)} />
        <Route path='/app1' exact element={(<div id="child">nihao</div>)} />
        <Route path="/module1" exact element={<LazyModule1 />} />
        <Route path="/starttrasnition" exact element={<StartTransition />} />
        <Route path="/postMessage" exact element={<PostMessage />} />
      </Routes>
      <span className='blue red yellow'>{value}</span>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={onBtn}>修改value123</button>
      <ChildClassComponent />
    </div>
  );
}

export default App;