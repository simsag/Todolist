/** Todo List 데이터 예시  */
const todolistData3 = {
    "group1": [
        {"text": "수학 숙제 3장", "checked": false},
        {"text": "영어 숙제 5장", "checked": true}
    ],
    "group2": [
        {"text": "누룽이 밥주기", "checked": false},
        {"text": "누룽이 똥치우기", "checked": true},
        {"text": "누룽이 산책시키기", "checked": true}
    ],
    "group3": []
}


/** 초기설정 */
const init = () => {
    // Submit : form - 신규 생성.
    const createFormEl = document.createForm;
    createFormEl.addEventListener("submit", (ev) => {
        // 위에 ev로 event를 파라미터로 받아서 기존 이벤트반응 무시.
        ev.preventDefault();
    
        const inputText = createFormEl.textInput.value;
        const groupCode = createFormEl.groupSelect.value;
        
        // 새로운 데이터 생성 후 list에 넣어주기.
        const newData = {"text": inputText, "checked": false};
        todolistData[groupCode].push(newData);
        
    });

    // 전체, 그룹1, 그룹2, 그룹3
    const groupSelectBtnEls = document.querySelectorAll("#groupSelectBtnDiv > button");
    for (let btn of groupSelectBtnEls) {
        btn.addEventListener("click", () => {
            const groupCode = btn.value;
            
        });
    }

   
}

init();

