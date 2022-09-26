// https://charles098.tistory.com/190

import { useEffect, useState, useRef } from 'react';

const useDetectOver = (initialState) => {
    const [isOver, setIsOver] = useState(initialState);
    // useState를 사용할 때는 상태의 기본값을 파라미터로 넣어서 호출한다.
    // useState를 호출하면 배열이 반환되는데 첫 번째 원소는 현재 상태, 두 번째 원소는 Setter 함수이다.
    // 위 방식은 배열 비구조화 할당을 통한 방식이고, 
    // 원래는 const numberState = useState(0); const number = numberState[0]; const setNumber = numberState[1];
    const ref = useRef(null);

    useEffect(()=>{

        const onClick = (e) => {
            if (ref.current !== null && !ref.current.contains(e.target)) {
                setIsOver(!isOver);
            }
        };

        if (isOver) {
            window.addEventListener("click", onClick);
        }

        return () => {
            window.removeEventListener("click", onClick);
        };
    }, [isOver]);
    return [isOver, ref, setIsOver];
};

export default useDetectOver;