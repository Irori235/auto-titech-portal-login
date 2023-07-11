const matrix = {
  A: ["", "", "", "", "", "", ""],
  B: ["", "", "", "", "", "", ""],
  C: ["", "", "", "", "", "", ""],
  D: ["", "", "", "", "", "", ""],
  E: ["", "", "", "", "", "", ""],
  F: ["", "", "", "", "", "", ""],
  G: ["", "", "", "", "", "", ""],
  H: ["", "", "", "", "", "", ""],
  I: ["", "", "", "", "", "", ""],
  J: ["", "", "", "", "", "", ""],
};

for (let i = 3; i < 6; i++) {
  const table = document.getElementById("authentication");

  let tr = table.getElementsByTagName("tr")[i];
  // trからthを取得する
  let th = tr.getElementsByTagName("th")[0];
  // thからテキストを取得する
  let text = th.textContent;

  // [B,5] のようになっているので、括弧を外し、Bと5に分割する
  let [row, col] = text.slice(1, -1).split(",");
  // 5を数値に変換する
  col = parseInt(col);
  // matrix から、行と列を指定して文字を取得する
  let char = matrix[row][col - 1];

  // テキストボックスに文字を入力する
  tr.getElementsByTagName("input")[0].value = char;
}

// 送信ボタンをクリックする
document.getElementsByTagName("input")[4].click();
