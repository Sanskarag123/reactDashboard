import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const TableComponent = () => {
    const tableContent = [
      {
        Reg: 1,
        name: "sanskar Agrawal",
        inTime: "yes",
        lateBy: 5,
        status: "onTime",
        lateInWeek: 5,
      },
      {
        Reg: 1,
        name: "sanskar Agrawal",
        inTime: "yes",
        lateBy: 5,
        status: "onTime",
        lateInWeek: 5,
      },
    ];
    const style = {
        tablehead:{
            backgroundColor:"#F8F8F8"
        },
        empty:{
            backgroundColor:"white"
        },
        dangerText:{
            color:"red"
        },
        successText:{
            color:"green"
        }
    }
    return(
    <div>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Reg</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>In Time</TableCell>
                    <TableCell>Late By</TableCell>
                    <TableCell>Satus</TableCell>
                    <TableCell>Late in Week</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {tableContent.map((row,index) => {
                    let late = row.lateBy>5;
                    return (
                    <TableRow style={index%2?style.empty:style.tablehead}>
                        <TableCell>{row.Reg}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.inTime}</TableCell>
                        <TableCell>{row.lateBy}</TableCell>
                        <TableCell style={late?style.dangerText:style.successText}>{row.status}</TableCell>
                        <TableCell>{row.lateInWeek}</TableCell>
                    </TableRow>);
                })
                }
                
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    )
}
export default TableComponent;