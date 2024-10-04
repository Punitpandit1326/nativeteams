import "./count.css"
import Pagination from 'react-bootstrap/Pagination';


function CountPages() {
  return (
    <Pagination>
   
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item active>{2}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
  );
}

export default CountPages;