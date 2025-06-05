import type { KeyboardEvent } from "react";
import searchImg from "../assets/search.svg";

type searchSection = {
  value: string;
  setValue: (value: string) => void;
  onSearch: (value: string) => void;
};

const SearchSection = ({ value, setValue, onSearch }: searchSection) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, value: string) => {
    if (e.key === "Enter") {
      onSearch(value);
    }
  };

  return (
    <div className="search-section">
      <input
        placeholder="도시를 입력하세요."
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e, value)}
      />
      <button onClick={() => onSearch(value)}>
        <img src={searchImg} alt="검색" width={20} height={20} />
      </button>
    </div>
  );
};

export default SearchSection;
