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

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // divタグ再利用するために、対象のノードに含まれるテキストは削除
    addTarget.textContent = null;

    // liタグの生成
    const li = document.createElement("li");

    // button(戻す)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // divタグ(item)生成
    const div2 = document.createElement("div");
    div2.className = "item";
    div2.innerText = text;

    // divタグの子要素に各要素を設定
    addTarget.appendChild(div2);
    addTarget.appendChild(backButton);
    li.appendChild(addTarget);
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // 未完了リストから指定の要素を削除する 共通の処理はまとめる！
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };

  // divタグ(list-row)の子要素に各要素を設定
  div1.appendChild(div2);
  div1.appendChild(completeButton);
  div1.appendChild(deleteButton);

  // liタグの子要素にdivタグを設定
  li.appendChild(div1);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div1);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
