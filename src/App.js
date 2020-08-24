import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
//import screens
import Home from './screens/Home';
//成果物公開用のページを virgo.is.chs.nihon-u.ac.jp 上に作成してください。
//このページには、プログラムの使い方を記したページ、
//企画書・最終レポート・ポスターへのリンク、GitHubのレポジトリーへのリンクを含めてください。
class App extends React.Component {
  render(){
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </BrowserRouter>
      );
  }

  
}

export default App;
