window.CountStart = CountStart;
window.CountStop = CountStop;


var time;


//カウントダウン関数を1000ミリ秒毎に呼び出す関数
function CountStart() {
  ChangeButton(true);
  time = setInterval(CountDown,1000);
}


//タイマー停止関数
function CountStop() {
  ChangeButton(false);
  clearInterval(time);
}


// ボタンの切り替え関数
function ChangeButton(buttonSwitch) {
  // スタートボタンのelement
  const startButton = document.getElementById("start")
  // ストップボタンのelement
  const stopButton = document.getElementById("stop")
  // ボタンのフラグ
  const flag = buttonSwitch
  startButton.disabled = flag
  stopButton.disabled = !flag
}


//カウントダウン関数
function CountDown() {
  
  let min = document.getElementById("min").value;
  let sec = document.getElementById("sec").value;

  if( (min == "") && (sec == "") ) {
    alert("時刻を設定してください！");
    reset();
  } else {
    if (min == "") min = 0;
    min = parseInt(min);
    
    if (sec == "") sec = 0;
    sec = parseInt(sec);
    
    tmWrite(min*60+sec-1);
  }
}


//残り時間を書き出す関数
function tmWrite(int) {
  int = parseInt(int);
  if (int <= 0) {
    reset();
    // オーディオがなる
    audio(true);

  } else {
    //残り分数はintを60で割って切り捨てる
    document.getElementById("min").value = Math.floor(int/60);
    //残り秒数はintを60で割った余り
    document.getElementById("sec").value = int % 60;
  }
}


//オーディオ再生関数
function audio() {
  const alermMusic = document.getElementById("sound");
  alermMusic.play()
}

//フォームを初期状態に戻す
function reset() {
  document.getElementById("min").value="0";
  document.getElementById("sec").value="0";
  document.getElementById("start").disabled=false;
  clearInterval(time);
}

