import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?format=json`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
      });
  }, [users]);

  const usersPerPage = 4;
  const pageVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pageVisited, pageVisited + usersPerPage)
    .map((user, index) => {
      return(
        <Service key={index} user={user}></Service>
      )
    });


  const pageCount = Math.ceil(users.length / usersPerPage);
//   console.log(users.length);

  const changePage = ({selected}) => {
    setPageNumber(selected);
  }

  return (
    <section className="users">
      <h2>Users & Contacts</h2>

      <div className="user_Items">
        {displayUsers}
      </div>

      <div className="pagination">
        <ReactPaginate
            previousLabel={'<<'}
            nextLabel={'>>'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationBttns'}
            previousLinkClassName={'previousBttn'}
            nextLinkClassName={'nextBttn'}
            activeClassName={'paginationActive'}
        />
      </div>
    </section>
  );
};

export default Services;
