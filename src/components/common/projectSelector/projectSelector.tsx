import React, { useState, useEffect, useRef } from "react";
import icons from "../../../utils/icons/icons";

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  {
    value: "Option 1",
    label: "همه پروژه ها",
  },
  {
    value: "Option 2",
    label: "پروژه اول",
  },
  {
    value: "Option 3",
    label: "پروژه دوم",
  },
  {
    value: "Option 4",
    label: "پروژه سوم",
  },
];

interface ProjectSelectorProps {
  onSelect: (value: string) => void;
}

const ProjectSelector: React.FC<ProjectSelectorProps> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick: EventListener = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !menuRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef} dir="rtl">
      <button
        onClick={toggleMenu}
        className="border rounded-md py-1 px-2 gap-x-1 text-xs font-normal focus:outline-none flex items-center"
      >
        {selectedOption ? selectedOption.label : " همه پروژه ها"}
        {isOpen
          ? icons.chevron_right("gray", "20px")
          : icons.chevron_down("gray", "20px")}
      </button>
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-md w-[100px] max-h-[200px] overflow-y-auto scroll z-10"
          ref={menuRef}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="p-2 cursor-pointer hover:bg-gray-100 border-b"
            >
              <h5 className="text-xs font-extrabold my-1">{option.label}</h5>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectSelector;
