import PropTypes from 'prop-types'
import React from 'react'
import { NavLink } from 'react-router-dom';
class HomeContent extends React.Component {
    render(){
        return (
            <div className='container'>
                <section className="content has-text-centered">
                    <h1>このページの説明</h1>
                    <div>
                        このページは、日本大学文理学部情報科学科3年前期のデジタルコンテンツの成果物発表のサイトです。<br></br>それぞれ、以下のボタンで仕様書、githubへのリンク、企画書のPDFページに飛べます。
                    </div>
                </section>
                <section className="content has-text-centered">
                    <h1>ゲームの説明</h1>
                    <div>
                    本ゲームは二人プレイのターン制のゲームを想定していて、一試合五ターンにかけおこなわれる。<br/>プレイヤーのアクションの選択によりお互いのライフを削り合い、最終的なライフによって勝敗が決するゲームである。<br/>
攻撃アクション、防御アクション、回復アクションの三種類が存在する。<br/>それぞれが三すくみになっており、防御は攻撃に強く、攻撃は回復に強く、回復は防御に強いように設定してある。<br/>
アクションにはそれぞれ長所、短所がある。相手がこのターン何を選択してくるか、相手の思考を読み切ることでより勝利に近づくことが出来る。
                    </div>
                </section>
                <section className="columns has-text-centered">
                    <div className="column"><a href="https://drive.google.com/file/d/1w5i8f3JI8svqCxleA7bYQ-v9Vjpq_S5r/view?usp=sharing"><button class="button is-large is-success is-outlined is-rounded">仕様書</button></a></div>
                    <div className="column"><a href="https://github.com/5418070YutaTanaka/extend_mag"><button class="button is-large is-success is-outlined is-rounded">github</button></a></div>
                    <div className="column"><a href="https://drive.google.com/file/d/16CS9YGzcyZsaLXyz5ZMVaz41jNpg56Nk/view"><button class="button is-large is-success is-outlined is-rounded">企画書</button></a></div>
                    <div className="column"><a href="https://drive.google.com/file/d/1f6LetelPV_yivywTKN4fbTXV1WTffi00/view"><button class="button is-large is-success is-outlined is-rounded">最終レポート</button></a></div>
                    
                </section>
            </div>
        );
    }
}
export default HomeContent;