import dva from 'dva';
import './index.css';
import {createBrowserHistory as createHistory} from 'history';

// 1. Initialize
// const app = dva();//默认hash路由 #
const app = dva({
  history: createHistory(),//BrowserHistory浏览器路由
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
// 引入model
app.model(require('./models/indexTest').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
