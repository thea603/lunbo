(function(){ // 立即执行函数，避免命名冲突
         
    var listGroup = document.querySelector('.list-group'),
        fileSelect = document.forms['upload']['fileselect'],
        selectBtn = document.getElementById('selectbtn');
    
    selectBtn.addEventListener('click', function (event) {
        fileSelect.click();
        event.preventDefault();
    }, false);
    
    // 监听 选择文件 表单元素的 change 事件
    fileSelect.addEventListener('change', displayFileInfo, false);
    
    function displayFileInfo(event) {
        // console.log(event);
        listGroup.innerHTML = '';
        event.stopPropagation();
        event.preventDefault();
        
        var file = event.target.files || event.dataTransfer.files;
        
        // 显示文件数的小徽章
        document.querySelector('.badge').innerHTML = file.length;
        
        // 循环输出所选择的文件
        for (i = 0; i < file.length; i ++) {
            var li = document.createElement('li'),
                img = document.createElement('img'),
                url = window.URL.createObjectURL(file[i]),
                thumbnailContainer = document.createElement('div');
            img.src = url;
            img.onload = function (event) {
                window.URL.revokeObjectURL(this.src);
            };
            img.classList.add('thumbnail');
            thumbnailContainer.classList.add('col-md-3');
            thumbnailContainer.appendChild(img);
            listGroup.appendChild(thumbnailContainer);

        }
    }
    
    // 提示内容
    listGroup.innerHTML = '<p class="hint">拖放文件到这里</p>';
    
    // 监听 drop 与 dragover 事件
    listGroup.addEventListener('drop', displayFileInfo, false);
    listGroup.addEventListener('dragover', onDragOver, false);
    
    function onDragOver(event) {
        event.stopPropagation();
        event.preventDefault();
    }

})() 



















