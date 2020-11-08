1. 为了使元素可拖动，把 draggable 属性设置为 true
2. ondragstart开始拖动。e.dataTransfer.setData("",e.target.id) 方法设置被拖数据的数据类型和值
3. ondragover结束拖动 e.preventDefault()阻止默认事件
4. ondrop被拖入 var data=e.dataTransfer.getData("")获取数据 e.target.appendChild(data)插入