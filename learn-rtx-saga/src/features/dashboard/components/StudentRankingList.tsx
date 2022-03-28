import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Student } from "models";

export interface StudentRankingListProps {
    studentList: Student[];
}

export function StudentRankingList({ studentList }: StudentRankingListProps) {
    console.log(studentList);
    
    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">#</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Mark</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.map((student, index) => (
            <TableRow key={student.id}>
              <TableCell >{index + 1}</TableCell>
              <TableCell align="right">{student.name}</TableCell>
              <TableCell align="right">{student.mark}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}