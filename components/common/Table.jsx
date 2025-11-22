import React from "react";

const Table = ({ columns, data }) => {
   return (
      <table border="1">
         <thead>
            <tr>
               {columns.map((col, index) => (
                  <th key={index}>{col.header}</th>
               ))}
            </tr>
         </thead>
         <tbody>
            {data.map((row, rowIndex) => (
               <tr key={rowIndex}>
                  {columns.map((col, colIndex) => (
                     <td key={colIndex}>
                        {col.render ? col.render(row) : row[col.accessor]}
                     </td>
                  ))}
               </tr>
            ))}
         </tbody>
      </table>
   );
};

export default Table;
