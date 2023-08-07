import React, { useState } from 'react';

export const App = () => {
  // TODOを入力欄に入力された文字をstateで管理
  const [todoText, setTodoText] = useState('');

  // 現在入力済みのTODOリストをstateで管理
  const [incompleteTodos, setIncompleteTodos] = useState([
    '未着手1',
    '未着手2',
  ]);
  // TODOを入力欄に何が文字が入力されたら初期値をその入力された文字に変更
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタンが押されたら
  const onClickAdd = () => {
    // もしTODOを入力欄が空だったら処理をreturnする
    if (todoText === '') return;
    // TODOリストの配列に入力したTODOを追加（スプレッド構文使用）
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    // 追加ボタンを押した後TODOを入力欄を空白に変更
    setTodoText('');
  };
  // TODOの削除ボタンが押されたらindexを取得
  const onClickDelete = (index) => {
    // TODOの配列をスプレッド構文で取得
    const newTodos = [...incompleteTodos];
    // spliceを使用して指定したindexを1つ削除する
    newTodos.splice(index, 1);
    // newTodosでsetIncompleteを更新
    setIncompleteTodos(newTodos);
  };
  console.log(incompleteTodos);

  return (
    <>
      <h1>TODOリスト</h1>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area>">
        <ul>
          {/*現在入力されているTODOの配列を取り出してTODOを追加して新しい配列をつくる（mapメソッド使用） */}
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button
                  onClick={() => {
                    onClickDelete(index);
                  }}
                >
                  削除
                </button>
                <select>
                  <option value="すべて">すべて</option>
                  <option value="未着手">未着手</option>
                  <option value="着手">着手</option>
                  <option value="完了">完了</option>
                </select>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
