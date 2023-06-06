import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';
import Moment from 'react-moment';


import { useSelector } from 'react-redux';
const Book = () => {
    const { books, loading } = useSelector(state => state.bookReducer);
    
    function getImageName(filePath) {
        var parts = filePath.split('/');
        var imageName = parts.pop();
        return imageName;
      }
    return (

        <div style={{ backgroundColor: "#efefef", minHeight: "100vh", paddingTop: "100px" }}>

            <Container maxWidth="lg">
                {
                    loading ?
                        <div style={{ textAlign: "center" }}>
                            <CircularProgress />
                        </div>

                        :
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell >Description</TableCell>
                                        <TableCell >Writer</TableCell>
                                        <TableCell >Add Date</TableCell>
                                        <TableCell >Publish Date</TableCell>
                                        <TableCell >Writer Contry</TableCell>
                                        <TableCell >Img</TableCell>
                                        {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {books && books.map((row) => (
                                        <TableRow
                                            key={row._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>{row.name} </TableCell>
                                            <TableCell>{row.description}</TableCell>
                                            <TableCell>{row.writer?.firstName + " " + row.writer?.lastName}</TableCell>
                                            <TableCell>
                                                <Moment format="YYYY/MM/DD">
                                                    {row.addDate}
                                                </Moment>
                                            </TableCell>
                                            <TableCell>
                                                <Moment format="YYYY/MM/DD">
                                                    {row.publishDate}
                                                </Moment>
                                            </TableCell>
                                            <TableCell>{row.writer?.country?.name}</TableCell>
                                            <TableCell><img src={'http://localhost:3000/api/book/foto/'+getImageName(row.imgPath)} alt="img" style={{width:"100px", height:"100px" , objectFit:"cover"}}/></TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                }


            </Container>
        </div>
    )
}

export default Book
