import React from 'react';
import ImProfile from "../profile.jpg";
import ImHTML from "../logo_HTML.png";
import ImCSS from "../logo_CSS.png";
import ImJavascript from "../logo_Javascript.png";
import ImPython from "../logo_Python.png";
import ImPHP from "../logo_PHP.png";
import ImReact from "../logo_React.png";
import ImLaravel from "../logo_Laravel.png";
import ImFlask from "../logo_Flask.png";
import ImQiita from "../logo_Qiita.png";

function Main() {
    return (
      <div className='main-wrapper'>
        <div className='main'>
          <h2 id='main-character'>ABOUT</h2>
          <ul className = 'main-about'>
            <li className='main-left'>
              <div class='ab-facephoto'>
                <img src={ImProfile} />
              </div>
              <div class='ab-profile'>
                <h2>松岡雄斗(25歳)</h2>
                <p>経歴：千葉大学修士卒/社会人1年目/webエンジニア</p>
                <p>所在地：東京都</p>
                <p>Email：august.04lim@gmail.com</p>
              </div>
            </li>
            <li className='main-right'>
              <h2>保有スキル</h2>
              <div className='ab-skill'>
                <h3>言語</h3>
                <ul>
                  <li>
                    <img src={ImHTML} />
                    <p>HTML</p>
                  </li>
                  <li>
                    <img src={ImCSS} />
                    <p>CSS</p>
                  </li>
                  <li>
                    <img src={ImJavascript} />
                    <p>Javascript</p>
                  </li>
                  <li>
                    <img src={ImPython} />
                    <p>Python</p>
                  </li>
                  <li>
                    <img src={ImPHP} />
                    <p>PHP</p>
                  </li>
                </ul>
                <h3>ライブラリ／フレームワーク</h3>
                <ul>
                  <li>
                    <img src={ImReact} />
                    <p>React</p>
                  </li>
                  <li>
                    <img src={ImLaravel} />
                    <p>Laravel</p>
                  </li>
                  <li>
                    <img src={ImFlask} />
                    <p>Flask</p>
                  </li>
                </ul>
              </div>
              <h2>SNS</h2>
              <div className='ab-SNS'>
                <img src={ImQiita} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Main;