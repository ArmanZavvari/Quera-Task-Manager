import React, { useState, useEffect, useRef } from "react";
import icons from "../../../utils/icons/icons";

interface Option {
  value: string;
  label: string;
  description: string;
}

const options: Option[] = [
  {
    value: "Option 1",
    label: "دسترسی کامل",
    description:
      "توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه",
  },
  {
    value: "Option 2",
    label: "دسترسی ویرایش",
    description:
      "توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند پروژه را حذف یا تسک جدید بسازد.",
  },
  {
    value: "Option 3",
    label: "دسترسی کامنت",
    description:
      "توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما توانایی ویرایش تنظیمات پروژه را ندارد.",
  },
  {
    value: "Option 4",
    label: "فقط دسترسی مشاهده",
    description: "توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد.",
  },
];

interface SharedSelectorProps {
  onSelect: (value: string) => void;
}

const SharedSelector: React.FC<SharedSelectorProps> = ({ onSelect }) => {
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
        {selectedOption ? selectedOption.label : "دسترسی کامل"}
        {isOpen
          ? icons.chevron_down("gray", "20px")
          : icons.chevron_right("gray", "20px")}
      </button>
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-md w-[252px] max-h-[200px] overflow-y-auto scroll"
          ref={menuRef}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="p-2 cursor-pointer hover:bg-gray-100 border-b"
            >
              <h5 className="text-xs font-extrabold my-1">{option.label}</h5>
              <p className="text-xs font-normal">{option.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SharedSelector;
