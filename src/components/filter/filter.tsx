import React, { useState } from 'react';
import icons from '../../utils/icons/icons';

// Assuming the task structure looks something like this
interface Task {
  id: number;
  date?: string;
  priority?: string;
  // Add more properties as needed
}

interface Filter {
  id: number;
  category?: string;
  option?: string;
}

interface Props {
  tasks: Task[];
  handleFilterClose: () => void;
}



const FilterComponent: React.FC<Props> = ({ tasks = [], handleFilterClose }) => {
  const [filters, setFilters] = useState<Filter[]>([{ id: 1 }]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

  const addFilter = () => {
    const newFilter: Filter = { id: filters.length + 1 };
    setFilters([...filters, newFilter]);
  };

  const removeFilter = (id: number) => {
    setFilters(filters.filter((filter) => filter.id !== id));
  };

  const handleSelectChange = (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    const updatedFilters = [...filters];
    updatedFilters[index] = { ...updatedFilters[index], [name]: value };
    setFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const applyFilters = (filters: Filter[]) => {
    let filtered: Task[] = [...tasks];
    filters.forEach((filter) => {
      // Implement filtering logic based on filter settings
      // This is just an example; adjust according to your actual filter logics
      filtered = filtered.filter((task) => {
        switch (filter.category) {
          case 'date':
            return filter.option === 'hasDate' ? task.date !== undefined : task.date === undefined;
          case 'priority':
            return task.priority === filter.option;
          // Implement other cases as needed
          default:
            return true;
        }
      });
    });
    setFilteredTasks(filtered);
  };

    return (
      <div dir="rtl" className=" flex flex-col w-[720px]">
        <div className="flex justify-between item-center">
          <h2 className="flex font-bold items-right text-2xl leading-8 my-2">
            فیلتر ها
          </h2>
          <div className="flex justify-center items-center">
            <button onClick={handleFilterClose}>
              {icons.close("#323232", "24px")}
            </button>
          </div>
        </div>
        {filters.map((filter, index) => (
          <div key={filter.id} className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <p>تسک هایی که</p>
              <select
                name="category"
                value={filter.category || ""}
                className="w-[182px] border border-gray-300 text-gray-900 text-sm rounded-lg block p-1"
                onChange={(e) => handleSelectChange(index, e)}
              >
                <option value="date">تاریخ</option>
                <option value="tag">تگ</option>
                <option value="member">اعضا</option>
                <option value="priority">اولویت</option>
              </select>
              <p>آن ها</p>
              <select
                name="option"
                value={filter.option || ""}
                className="w-[146px] border border-gray-300 text-gray-900 text-sm rounded-lg block p-1"
                onChange={(e) => handleSelectChange(index, e)}
              >
                <option value="option1">
                  <span className="rounded-md bg-red-800 text-blue-600">درس</span>
                </option>
                <option value="option2">کار</option>
                <option value="option3">پروژه</option>
              </select>
              <select
                name="option"
                value={filter.option || ""}
                className="w-[146px] border border-gray-300 text-gray-900 text-sm rounded-lg block p-1"
                onChange={(e) => handleSelectChange(index, e)}
              >
                <option value="hasDate">دارد</option>
                <option value="noDate">ندارد</option>
              </select>
            </div>
            <div>
              <button onClick={() => removeFilter(filter.id)}>
                {icons.trash("red", "19.5px")}
              </button>
            </div>
          </div>
        ))}
        <button onClick={addFilter} className="flex text-teal-500 font-bold mt-5">
          افزودن فیلتر جدید
        </button>
        {/* <ul>
          {filteredTasks.map((task, index) => (
            <li key={index}>
              {task.date && `Date: ${task.date}`} - {task.tag && `Tag: ${task.tag}`} - {task.member && `Member: ${task.member}`} - {task.priority && `Priority: ${task.priority}`}
            </li>
          ))}
        </ul> */}
      </div>
    );
};

export default FilterComponent;
