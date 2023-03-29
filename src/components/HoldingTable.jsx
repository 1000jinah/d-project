import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import { mockBarData as data } from "../data/mockOutData";
function createData(name, detail, percentage) {
  return { name, detail, percentage };
}

const rows = [
  createData("VIG", "Vanguard Dividend Appreciation", "35%"),
  createData("VEA", "Vanguard FTSE Developed Markets", "25%"),
  createData("VWO", "Vanguard Emerging Makerts", "15%"),
  createData("IJH", "iShared S&P MidCap 400", "13%"),
  createData("RWR", "SPDR Dow Jones REIT ETF", "12%"),
];

export default function BasicTable() {
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
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableBody pb={2}>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                width: "100%",
                height: "45px",
              }}
            >
              <TableCell component="th" scope="row">
                <Box
                  sx={{
                    p: "0px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background:
                      row.name === "VIG"
                        ? "#ff754b"
                        : row.name === "VEA"
                        ? "#b8dec3"
                        : row.name === "VWO"
                        ? "#f9e002"
                        : row.name === "IJH"
                        ? "#4bceff"
                        : "#808080",
                  }}
                ></Box>
              </TableCell>
              <TableCell sx={{ fontSize: "14px", p: "0px" }}>
                {row.name}
              </TableCell>
              <TableCell sx={{ fontSize: "14px", p: "0px" }}>
                {row.detail}
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", p: "0px", fontSize: "16px" }}
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
