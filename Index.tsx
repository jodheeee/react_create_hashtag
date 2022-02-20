import React, { ChangeEventHandler, useState } from "react";
import {
  MainBox,
  FilterBar,
  BoldTypo,
  ArrowBox,
  SearchBox,
  SearchBar,
  ResultBox,
  ResultTypo,
  PickBox,
  PickTag,
  SearchIconSet,
  NormalBox,
} from "./style";
import { temp } from "./data";

const FilterBox = () => {
  const [filterState, setFilterState] = useState(true);
  const [resultList, setResultList] = useState([...temp]);

  const searchBoxOpen = () => {
    setResultList([...temp]);
    setFilterState((prev) => !prev);
  };

  const replaceAll = (str :string, searchStr :string, replaceStr :string) => {
    return str.split(searchStr).join(replaceStr);
  }

  const searchHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const tx = e.target.value;
    const boldChange = temp.map((obj) => {
      const tempObj = {...obj};
      if (tempObj.name.indexOf(tx) > -1) {
        tempObj.name = replaceAll(tempObj.name, tx, `<b style='color:black'>${tx}</b>`);
      }
      return tempObj;
    });
    const filterList = boldChange.filter((obj) => obj.name.indexOf(tx) > -1);
    setResultList([...filterList]);
  };
 
  // 결과 선택 기능
  interface PinkType {
    "idx"      : number, 
    "name"     : string,
    "origName" : string,
  }
  const [pinkList, setPinktList] = useState<PinkType[]>([]);
  const pinkHandler = (obj :PinkType) => () => {
    searchBoxOpen();
    const set = new Set([...pinkList, obj]);
    setPinktList([...Array.from(set)]);
  };

  // 호버 이벤트(삭제 전환)
  const [hoverState, setHoverState] = useState<number>();
  
  // 태그 삭제
  const removeTag = (idx :number) => {
    const removeList = pinkList.filter((obj) => obj.idx !== idx);
    setPinktList([...removeList]);
  }

  return (
    <NormalBox>
      <MainBox onClick={searchBoxOpen}>
        <FilterBar>
          <BoldTypo variant="body1">필터링할 언어 추가하기</BoldTypo>
          <ArrowBox filterState={filterState} />
        </FilterBar>
      </MainBox>
      {!filterState ? (
        <SearchBox>
          <SearchBar onChange={searchHandler} />
          <SearchIconSet/>
          <ResultBox>
            {resultList?.map((obj) => {
              return (
                <ResultTypo onClick={pinkHandler(obj)} key={obj.idx}
                  dangerouslySetInnerHTML={{__html: obj.name}}
                />
              );
            })}
          </ResultBox>
        </SearchBox>
      ) : (
        <PickBox>
          {pinkList?.map((obj) => {
            return (
              <PickTag 
                hover={obj.idx === hoverState}
                onMouseOver={()=>{setHoverState(obj.idx)}}
                onMouseOut={()=>{setHoverState(0)}}
                onClick={()=>{removeTag(obj.idx)}}
              >{obj.origName}
              </PickTag>
            );
          })}
        </PickBox>
      )}
    </NormalBox>
  );
};

export default FilterBox;
