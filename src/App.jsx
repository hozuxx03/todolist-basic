import React, { useState } from 'react';

export const App = () => {
  // TODOを入力欄に入力された文字をstateで管理
  const [todoText, setTodoText] = useState('');

  // 未着手のTODOリストをstateで管理
  const [incompleteTodos, setIncompleteTodos] = useState([
    '未着手1',
    '未着手2',
  ]);
  //着手のTODOリストをstateで管理
  const [startedTodos, setStartedTodos] = useState(['着手1']);
  // 完了のTODOリストをstateで管理
  const [completeTodos, setCompleteTodos] = useState(['完了1']);

  // TODOを入力欄に何が文字が入力されたら初期値をその入力された文字に変更
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタンが押されたら
  const onClickAdd = () => {
    // もしTODOを入力欄が空だったら処理をreturnする
    if (todoText === '') return;
    // 未着手TODOリストの配列に入力したTODOを追加（スプレッド構文使用）
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    // 追加ボタンを押した後TODOを入力欄を空白に変更
    setTodoText('');
  };
  // 未着手TODOの削除ボタンが押されたらindexを取得
  const onClickDelete = (index) => {
    // 未着手TODOの配列をスプレッド構文で取得
    const newTodos = [...incompleteTodos];
    // spliceを使用して指定したindexを1つ削除する
    newTodos.splice(index, 1);
    // newTodosでsetIncompleteを更新
    setIncompleteTodos(newTodos);
  };
  console.log(incompleteTodos);

  // 着手TODOの削除ボタンが押されたらindexを取得
  const onClickDeleteS = (index) => {
    //着手TODOの配列をスプレッド構文で取得
    const newStartedTodos = [...startedTodos];
    // spliceを使用して指定したindexを1つ削除する
    newStartedTodos.splice(index, 1);
    // newStartedTodosでsetStartedTodosを更新
    setStartedTodos(newStartedTodos);
  };

  // 完了TODOの削除ボタンが押されたらindexを取得
  const onClickDeleteC = (index) => {
    //完了TODOの配列をスプレッド構文で取得
    const newCompleteTodos = [...completeTodos];
    // spliceを使用して指定したindexを1つ削除する
    newCompleteTodos.splice(index, 1);
    // newCompleteTodosでsetCompleteTodosを更新
    setCompleteTodos(newCompleteTodos);
  };
  // ステータスボタン
  const onClick2 = () => {
    alert('クリック');
    const status = ['未着手', '着手', '完了'];
    const pullDownMenu = () => {
      return (
        <>
          <select>
            {status.map((state) => {
              return <option key={state}>{state}</option>;
            })}
          </select>
        </>
      );
    };
  };

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
        <p className="title">未着手</p>
        <ul>
          {/* 未着手TODOの配列を取り出してTODOを追加して新しい配列をつくる（mapメソッド使用） */}
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
                {/* <button onClick={onClick2}>ステータス</button> */}
              </div>
            );
          })}
        </ul>
      </div>
      <div className="not-started-area">
        <p className="title">着手</p>
        <ul>
          {/* 着手TODOの配列を取り出しTODOを追加して新しい配列をつくる（mapメソッド使用 */}
          {startedTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button
                  onClick={() => {
                    onClickDeleteS(index);
                  }}
                >
                  削除
                </button>
                <button>ステータス</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了</p>
        <ul>
          {/* 完了TODOの配列を取り出してTODOを追加して新しい配列をつくる（mapメソッド使用） */}
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button
                  onClick={() => {
                    onClickDeleteC(index);
                  }}
                >
                  削除
                </button>
                <button>ステータス</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
