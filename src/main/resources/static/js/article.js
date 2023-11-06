//삭제
const deleteBtn = document.getElementById('delete-btn');
if(deleteBtn){
    deleteBtn.addEventListener('click', event => {
        let id = document.getElementById('article-id').value;
        fetch(`/api/articles/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                alert('해당 게시글이 삭제되었습니다.');
                location.replace('/articles');
            });
    });
}

//수정
const modifyBtn = document.getElementById('modify-btn');
if(modifyBtn){
    modifyBtn.addEventListener('click', event => {
        let params = new URLSearchParams(location.search);
        let id = params.get('id');

        fetch(`/api/articles/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: document.getElementById('title').value,
                content: document.getElementById('content').value
            })
        })
            .then(() => {
                alert("게시글이 수정되었습니다.");
                location.replace(`/articles/${id}`);
            });
    });
}

//생성
const createBtn = document.getElementById('create-btn');
if(createBtn){
    createBtn.addEventListener('click', event => {
        fetch("/api/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: document.getElementById("title").value,
                content: document.getElementById("content").value,
            }),
        })
            .then(() => {
                alert("게시글이 생성되었습니다.");
                location.replace("/articles");
            });
    });
}