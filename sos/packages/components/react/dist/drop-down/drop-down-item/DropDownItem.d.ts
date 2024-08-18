import React from 'react';
interface DropDownItemProps extends React.HTMLAttributes<HTMLElement> {
    state?: 'default' | 'active';
}
/**
 * DropDownItem
 *
 * @param {'default' | 'active'} props.state - 드롭다운 항목의 상태 (선택, 기본값: 'default')
 * @param {React.ReactNode} props.children - 드롭다운 항목의 내용
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...any} props - 기타 HTML 속성
 */
export declare const DropDownItem: React.ForwardRefExoticComponent<DropDownItemProps & React.RefAttributes<HTMLElement>>;
export {};
