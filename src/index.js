import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liタグの生成
  const li = document.createElement("li");

  // divタグ(list-row)生成
  const div1 = document.createElement("div");
  div1.className = "list-row";

  // divタグ(item)生成
  const div2 = document.createElement("div");
  div2.className = "item";
  div2.innerText = inputText;

  // divタグ(list-row)の子要素に各要素を設定
  // liタグの子要素にdivタグを設定
  li.appendChild(div1.appendChild(div2));

  // 未完了リストに追加
  document.getElementById("incomlete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
