import searchImg from "../assets/search.svg";

const SearchSection = () => {
  return (
    <div className="search-section">
        <input placeholder="도시를 입력하세요." type="search" />
        <button>
          <img src={searchImg} alt="검색" width={20} height={20}/>
        </button>
      </div>
  )
}

export default SearchSection