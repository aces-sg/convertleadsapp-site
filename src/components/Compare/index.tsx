import React, { useContext, useEffect, useState } from "react";
import { Box, ResponsiveContext } from "grommet";
import comparedata from "./compare-2.json";
import "./compare.scss";

const data = comparedata;

interface CompareType {
  data: {
    tables: any;
  };
}

const Compare = (props: CompareType) => {
  const size = useContext(ResponsiveContext);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (data) {
      setTableData(data.tables);
    }
  }, [props]);

  const handleRow = (tableIndex, gid, id) => {
    let elem = document.querySelector(
      ".row" + "-" + tableIndex + "_" + gid + "_" + id
    );

    if (elem && window.getComputedStyle(elem).display !== "none") {
      elem.style.display = "none";
      return;
    }
    if (elem) elem.style.display = "table-row";
  };

  return (
    <Box id="bim-packages" className="compare_container">
      <h2 className="text-center">BIM Packages</h2>

      {tableData.length &&
        tableData.map((tableItem, tableIndex) => {
          return (
            <table className="data_table" key={tableIndex}>
              <caption>{tableItem.title}</caption>
              <tbody className="">
                <tr>
                  {tableItem.header.length &&
                    tableItem.header.map(
                      (tableHeaderItem, headIndex) => (
                        <th className="p-4" key={headIndex}>
                          <span>{tableHeaderItem}</span>
                        </th>
                      )
                    )}
                </tr>
                {tableItem.groups.length &&
                  tableItem.groups.map((group, groupId) => (
                    <React.Fragment key={groupId}>
                      <tr className="group">
                        {group.head.map((gItem, gid) => {
                          if (gItem.type === "image")
                            return (
                              <td key={gid}>
                                <img
                                  src={gItem.content}
                                  alt={gItem.alt}
                                />
                              </td>
                            );
                          return <td key={gid}>{gItem.content}</td>;
                        })}
                      </tr>

                      {group.body.map((bodyItem, bId) => {
                        return (
                          <React.Fragment key={bId}>
                            <tr className="head_row">
                              {bodyItem.head.map((headItem, hid) => {
                                if (headItem.type === "shape") {
                                  return (
                                    <td key={hid}>
                                      <div
                                        className={`round_mark ${headItem.content}`}
                                      ></div>
                                    </td>
                                  );
                                }
                                if (headItem.type === "number") {
                                  return (
                                    <td key={hid}>
                                      <div>{headItem.content}</div>
                                    </td>
                                  );
                                }
                                return (
                                  <th key={hid}>
                                    <button
                                      onClick={() =>
                                        handleRow(
                                          tableIndex,
                                          groupId,
                                          bId
                                        )
                                      }
                                    >
                                      <div>
                                        {headItem.content}
                                        <span>
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            className="css-zarn21"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fill="none"
                                              d="M0 0h24v24H0V0z"
                                            ></path>
                                            <path d="M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                          </svg>
                                        </span>
                                      </div>
                                    </button>
                                  </th>
                                );
                              })}
                            </tr>
                            <tr
                              className={`content_row row-${tableIndex}_${groupId}_${bId}`}
                            >
                              <td colSpan={3}>
                                <span>{bodyItem.subcontent}</span>
                              </td>
                            </tr>
                          </React.Fragment>
                        );
                      })}
                    </React.Fragment>
                  ))}
              </tbody>
            </table>
          );
        })}
    </Box>
  );
};

export default Compare;
