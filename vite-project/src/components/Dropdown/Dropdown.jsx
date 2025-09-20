import { useRef, useEffect, useState } from "react";
import { DropdownWrapper, DropdownButton, ButtonInner, DropdownList, DropdownListItem, DropdownListButton } from "./Dropdown.styles";

const useClickOutside = (ref, callback) => {
    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callback();
            }
        };
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [ref, callback]);
};

export const Dropdown = ({ buttonText, items, onItemClick }) => {
    const dropdownRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    const handleItemClick = (item) => {
        onItemClick(item);
        toggleIsOpen();
    };

    useClickOutside(dropdownRef, () => setIsOpen(false));

    return (
        <DropdownWrapper className={isOpen ? "open" : ""} ref={dropdownRef}>
            <DropdownButton onClick={toggleIsOpen}>
                <ButtonInner>
                    {buttonText}
                    <span className="material-symbols-outlined">arrow_drop_down</span>
                </ButtonInner>
            </DropdownButton>

            <DropdownList>
                {items.map((item) => (
                    <DropdownListItem key={item}>
                        <DropdownListButton onClick={() => handleItemClick(item)}>
                            <i className={`fa-brands fa-${item}`}></i>
                            {item}
                        </DropdownListButton>
                    </DropdownListItem>
                ))}
            </DropdownList>
        </DropdownWrapper>
    );
};
