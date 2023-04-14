import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useParams } from "react-router-dom";
// import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import { mockBarData as data } from "../data/mockOutData";



function createData(name, percentage) {

  return { name, percentage };
}

const rows = [
  
  createData(
    localStorage.getItem("language") === "jp"
      ? "退職する予定年齢"
      : "Retirement Age",
    localStorage.getItem("language") === "jp" ? "65歳" : "65 Age"
  ),
  createData(
    localStorage.getItem("language") === "jp"
      ? "退職後の収入"
      : "Retirement income",
    localStorage.getItem("language") === "jp" ? "15万円" : "$15M"
  ),
  createData(
    localStorage.getItem("language") === "jp"
      ? "初期投資金額"
      : "Initial Investment Amount",
    localStorage.getItem("language") === "jp" ? "10万円" : "$10M"
  ),
  createData(
    localStorage.getItem("language") === "jp"
      ? "毎月積立額"
      : "Monthly Investment Amount",
    localStorage.getItem("language") === "jp" ? "5年" : "5 Year"
  ),
];

export default function ResultTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "none",
        "& .MuiTableCell-root": {
          padding: "10px",
        },
      }}
    >
      <Table sx={{}} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                width: "100%",
                height: "45px",
              }}
            >
              <TableCell
                sx={{ fontSize: "14px", p: "0px", color: "#808080" }}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell
                sx={{ p: "0px", fontSize: "16px", textAlign: "right" }}
              >
                {row.percentage}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
