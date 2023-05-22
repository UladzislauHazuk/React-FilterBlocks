import style from "./style.module.scss";
import storage from "../../Storage/Storage.json";
import Item from "./Item";
import { Pagination } from "@mantine/core";
import { useState, useRef, useEffect } from "react";

const Content = ({ searchString }) => {
  const [list, setList] = useState(storage);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSizeRef = useRef(4);

  const filterVacancy = () => {
    if (!searchString) return storage;
    return storage.filter(({ vacancy }) =>
      vacancy.toLowerCase().includes(searchString.toLowerCase())
    );
  };

  const paginatedList = filterVacancy().slice(
    (currentPage - 1) * pageSizeRef.current,
    currentPage * pageSizeRef.current
  );

  useEffect(() => {
    setList(filterVacancy());
    setCurrentPage(1);
  }, [searchString]);

  return (
    <>
      {paginatedList.map((item) => (
        <Item
          vacancy={item.vacancy}
          salary={item.salary}
          workday={item.workday}
          city={item.city}
        ></Item>
      ))}
      <Pagination
        total={Math.ceil(list.length / pageSizeRef.current)}
        value={currentPage}
        onChange={(page) => setCurrentPage(page)}
        position="center"
      />
    </>
  );
};

export default Content;
