import axios from "axios";
import { useState } from "react";
import Modal, { ModalBtn } from "../Modal";
import "./style.css";

export function EmployeeList(props) {
  const { items, showModal, database, setData, setModif, setTemp } = props;
  const objKey = Object.keys(database[0])

  const modifyData = (e, item) => {
    setTemp(item.id)
    setData({
      name: item.name,
      username: item.username,
      email: item.email, 
      adress: {
        street: item.address.street,
        suite: item.address.suite,
        city: item.address.city,
        zipcode: item.address.zipcode
      },
      phone: item.phone,
      website: item.website
    })
    setModif(true)
    showModal()
  }

  return (
    <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
      <div className="dataTable-top">
        <div className="dataTable-dropdown">
          <label>
            <select className="dataTable-selector">
              <option value="5">5</option>
              <option value="10" selected="">
                10
              </option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>{" "}
            entries per page
          </label>
        </div>
        <div className="dataTable-search">
          <ModalBtn showModal={showModal} />
        </div>
      </div>
      <div className="dataTable-container">
        <table className="table-bordered">
          <thead>
            <tr>
              {
                objKey.map((val, index) => {
                  if (index != 0 && index != 4 && index != 7) {
                    return(<th>{val}</th>)
                  }
                })
              }
            </tr>
          </thead>
          <tfoot>
            <tr>
              {
                objKey.map((val, index) => {
                  if (index != 0 && index != 4 && index != 7) {
                    return(<th>{val}</th>)
                  }
                })
              }
            </tr>
          </tfoot>
          <tbody>
            {(database || []).map((item) => (
              <tr key={item.name} onClick={(e) => modifyData(e, item)}>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="dataTable-bottom">
        <div className="dataTable-info">Showing 1 to 10 of 57 entries</div>
        <nav className="dataTable-pagination">
          <ul className="dataTable-pagination-list">
            <li className="active">
              <a href="#" data-page="1">
                1
              </a>
            </li>
            <li className="">
              <a href="#" data-page="2">
                2
              </a>
            </li>
            <li className="">
              <a href="#" data-page="3">
                3
              </a>
            </li>
            <li className="">
              <a href="#" data-page="4">
                4
              </a>
            </li>
            <li className="">
              <a href="#" data-page="5">
                5
              </a>
            </li>
            <li className="">
              <a href="#" data-page="6">
                6
              </a>
            </li>
            <li className="pager">
              <a href="#" data-page="2">
                ›
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
