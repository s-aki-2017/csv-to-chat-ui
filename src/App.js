import './App.css';
import { useEffect, useState } from 'react';

function App(){

  const [csvData, setCsvData] = useState(null);
  // const [username, setUsername] = useState("");
  // const [usericon, setUsericon] = useState("");
  // const [chattext, setChattext] = useState("");
  const [list, setList] = useState(null);
  let row_data;
  let tmp;
  let column_dict = {};

  useEffect(() => {
    if(!csvData) return;
    console.log('副作用関数が実行されました！')
    setList(handleCsvData(csvData));
  },[csvData])

  const move = (datas) => {
    let list = [];
    for(let i=0; i<datas.length; i++){
      
    }
    return(
      <div>
        {datas.map((d)=>{
          
        })}
      </div>
    );
  }

  const handleCsvData = (input_data) => {
    const datas_arr = input_data.split('\n');
    const columns = datas_arr[0].split(',');
    for(let i=1; i<columns.length; i++){
      column_dict[columns[i]] = i;
    }
    return(
      <div className='view'>
        {datas_arr.slice(1).map((datas, index)=>{
          // setUsername(data[column_dict['username']]);
          // setUsericon(data[column_dict['usericon']]);
          // setChattext(data[column_dict['text']]);
          if(index == datas_arr.length-2) return; // be careful
          const data = datas.split(',');
          const username = data[column_dict['username']];
          const usericon = data[column_dict['usericon']];
          const text = data[column_dict['text']];
          let files = data[column_dict['files']];
          let file_tag = null;
          if(files != ''){
            file_tag = (
              <p className='files'>添付画像:<a href={files}>{files}</a></p>
            );
          }
          const reply_count = data[column_dict['reply_count']];
          let reply_tag = null;
          console.log(reply_count);
          if(reply_count < 0){
            reply_tag = (
              <div className='reply-blank'>|__________</div>
            );
          }

          const ts = parseInt(data[column_dict['ts']]);

          const date = new Date(ts * 1000);
          const day = date.toLocaleDateString();
          const time = date.toLocaleTimeString();
          const daytime = day + '  ' + time;
          const key = "chat_data_" + index;
          return(
          // <SingleChat
          //   key={key}
          //   username={data[column_dict['username']]}
          //   usericon={data[column_dict['usericon']]}
          //   text={data[column_dict['text']]}
          // />
          <div key={key} className='single'>
            {reply_tag}
            <img className='icon' src={usericon}/>
            <div className='prof'>
              <div className='head'>
                <p className='name'>{username}</p>
                
                <p className='ts'>{daytime}</p>
              </div>
              <p className='chat'>{text}</p>
              {file_tag}
            </div>
            
          </div>
        )})}
      </div>
    );
  }

  const onFileInputChange = (e) => { // (e: React.ChangeEvent<HTMLInputElement>)
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.readAsText(file);
    reader.onload = (event) => {
      setCsvData(event.target.result);
    }
  };

  return(
    <div>
      <input className='btn btn-primary' type='file' onChange={onFileInputChange}/>
      <div>{list}</div>
      {/* <SingleChat></SingleChat> */}
    </div>
  );
}

export default App;
