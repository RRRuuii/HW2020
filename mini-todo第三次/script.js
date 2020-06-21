let tasks = [];
function renderEditor() {
    let inputEl = document.querySelector("#default-todo-panel .todo-editor > input");
    let subEl = document.querySelector("#default-todo-panel .todo-editor > button");
    let sub = () => {
        if (inputEl.value.length === 0) {
            return;
        }
        let newtesk = {
            title: inputEl.value,
            done: false,
        };           
        inputEl.value = "";
        tasks.push(newtesk);
        console.log("ok", tasks);
        rendertask();
    }
    subEl.onclick = () => {
        sub();
        //console.log("button");
    };
    inputEl.onkeypress = (e) => {
        if (e.key === "Enter") {
            sub();
        }
    }
}
function rendertask() {
    console.log("yes");
    let xiangmusEl = document.querySelector("#default-todo-panel .todo-items");
    xiangmusEl.querySelectorAll("div").forEach((node) => node.remove());        
    for (let i = 0; i < tasks.length; i++) {
        let xiangmuEl = document.createElement("div");
        xiangmusEl.append(xiangmuEl);     
        xiangmuEl.className = "task";
        let doneEl = document.createElement("input");
        doneEl.type = "checkbox";
        doneEl.checked = tasks[i].done;
        if (tasks[i].done) {
            xiangmuEl.classList.add("done");
        } else {
            xiangmuEl.classList.remove("done");
        };
        doneEl.onchange = (e) => {
            // console.log("checkbox: ",e);
            tasks[i].done = e.target.checked;
            if (tasks[i].done) {
                xiangmuEl.classList.add("done");
            } else {
                xiangmuEl.classList.remove("done");
            }
        };
        xiangmuEl.append(doneEl);  
        let titleEl = document.createElement("label");
        titleEl.innerText = tasks[i].title;
        xiangmuEl.append(titleEl);   
        let ctrlEl = rendercontrl(tasks, i);
        xiangmuEl.append(ctrlEl);
    }
}
function rendercontrl(tasks, taskidx){
    let ctrlEl = document.createElement("div");
   ctrlEl.className = "contrl";

   let upEl = document.createElement("button");
if(taskidx === 0){
upEl.disabled = true;
          }
      upEl.innerText = "↿";
      ctrlEl.append(upEl);
      upEl.onclick = () => {
         let news;
         news = tasks[taskidx];
         tasks[taskidx] = tasks[taskidx-1];
         tasks[taskidx-1] = news;
         rendertask();
      }
      let downEl = document.createElement("button");
      downEl.innerText = "⇂";
      ctrlEl.append(downEl);
      downEl.onclick = () => {
          let news;
         news = tasks[taskidx];
         tasks[taskidx] = tasks[taskidx+1];
         tasks[taskidx+1] = news;
         rendertask();
      }
      let bottEl = document.createElement("button");
      bottEl.innerText = "✖";
      bottEl.onclick = () => {
          tasks.splice(taskidx, 1);   
          rendertask();
      };
      ctrlEl.append(bottEl);   
return ctrlEl;
}
renderEditor();
rendertask();
