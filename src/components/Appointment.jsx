import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const Appointment = () => {
    console.log("test")
  return (
    <div>

      {/* <h1>Appointment</h1> */}

      <Table className=" ">
  {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Name</TableHead>
      <TableHead>Phone</TableHead>
      <TableHead>Date/Time</TableHead>
      <TableHead className="text-right">status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>

    <TableRow>
      <TableCell className="font-small w-auto">Daw Aye </TableCell>
      <TableCell>09123456789</TableCell>
      <TableCell>8.10.24/11pm</TableCell>
      <TableCell onClick={() => alert("test")}  className="text-right text-red-500">cancel</TableCell>
    </TableRow>

    <TableRow>
      <TableCell className="font-small w-auto">U Aung</TableCell>
      <TableCell>093217894</TableCell>
      <TableCell>9.10.24/10pm</TableCell>
      <TableCell onClick={() => alert("test")}  className="text-right text-red-500">cancel</TableCell>
    </TableRow>

    


  </TableBody>
</Table>





    </div>
  )
}

export default Appointment