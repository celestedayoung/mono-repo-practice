import React from 'react';
interface DropDownBoxProps extends React.HTMLAttributes<HTMLElement> {
    options: string[];
}
/**
 * DropDownBox
 * @param {string[]} props.options - 드롭다운 메뉴에 표시될 옵션 배열 (필수)
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...any} props - 기타 HTML 속성
 */
export declare const DropDownBox: React.ForwardRefExoticComponent<DropDownBoxProps & React.RefAttributes<HTMLElement>>;
export {};
