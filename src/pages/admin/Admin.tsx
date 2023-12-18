import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useSelector, useDispatch } from "react-redux";
import { obj } from "./../../redux/slices/newsSlice";
import { deleteNews } from "./../../redux/slices/newsSlice";
import type { RootState } from "./../../redux/store/store";
import Edit from "./Edit";
function Admin() {
  const [editId, setEditId] = useState<string>("");
  const [edit, setEdit] = useState<boolean>(false);
  const dispatch = useDispatch();
  const news: obj[] = useSelector((state: RootState) => state.news.news);
  const columns: string[] = ["id", "head", "edit", "delete"];
  console.log(news);
  interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
  }
  function createData(
    name: string,
    code: string,
    population: number,
    size: number
  ): Data {
    const density = population / size;
    return { name, code, population, size, density };
  }
  const rows = [
    createData("India", "IN", 1324171354, 3287263),
    createData("China", "CN", 1403500365, 9596961),
    createData("Italy", "IT", 60483973, 301340),
    createData("United States", "US", 327167434, 9833520),
    createData("Canada", "CA", 37602103, 9984670),
    createData("Australia", "AU", 25475400, 7692024),
    createData("Germany", "DE", 83019200, 357578),
    createData("Ireland", "IE", 4857000, 70273),
    createData("Mexico", "MX", 126577691, 1972550),
    createData("Japan", "JP", 126317000, 377973),
    createData("France", "FR", 67022000, 640679),
    createData("United Kingdom", "GB", 67545757, 242495),
    createData("Russia", "RU", 146793744, 17098246),
    createData("Nigeria", "NG", 200962417, 923768),
    createData("Brazil", "BR", 210147125, 8515767),
  ];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const navigate = useNavigate();
  return (
    <div>
      <h1>admin</h1>
      <Button
        onClick={() => {
          navigate("/admin/createNews");
        }}
        variant="contained"
      >
        Create News
      </Button>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column} align="right">
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {news &&
                news.map((element: obj) => {
                  const object: any = [
                    element.id,
                    element.newsHead,
                    <Button
                      onClick={() => {
                        setEditId(element.id);
                        setEdit(true);
                      }}
                      name={element.id}
                      variant="contained"
                    >
                      edit
                    </Button>,
                    <Button
                      onClick={(e) => {
                        console.log(element.id);
                        e.preventDefault();
                        dispatch(deleteNews(element.id));
                      }}
                      name={element.id}
                      color="error"
                      variant="contained"
                    >
                      delete
                    </Button>,
                  ];

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={element.id}
                    >
                      {object
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((elem: any) => {
                          // const value = row[column.id];
                          return (
                            <TableCell key={elem} align="center">
                              {elem}
                            </TableCell>
                          );
                        })}
                    </TableRow>
                  );
                })}
              {/* {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {news.map((elem: obj) => {
                        // const value = row[column.id];
                        return (
                          <TableCell key={elem.id} align="left">
                            {(elem.id, elem.newsHead)}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })} */}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={news.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {edit ? <Edit id={editId} /> : null}
    </div>
  );
}

export default Admin;
