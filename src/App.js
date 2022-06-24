import "./App.css";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Breadcrumb } from "./components/Breadcrumb";
import { EmployeeList } from "./components/List";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";
import Modal, {ModalBtn} from "./components/Modal";
import axios from "axios";

function App() {

  const initialData = {
    name: "",
    username: "",
    email: "", 
    adress: {
      street: "",
      suite: "",
      city: "",
      zipcode: ""
    },
    phone: "",
    website: ""
  }

  const [sidebarClass, setSidebarClass] = useState("sb-nav-fixed");
  const [modalStyle, setModalStyle] = useState('ModalHide');
  const [modalContentStyle, setModalContentStyle] = useState('ModalHide');
  const [data, setData] = useState(initialData);
  const [adressTemp, setAdressTemp] = useState({street: '', suite: '', city: '', zipcode: ''})
  const [database, setDatabase] = useState([]);
  const [modif, setModif]  = useState(false);
  const [temp, setTemp] = useState(-1);
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      setDatabase(res.data)
    })
    .catch((err) => {
      
    })
  }, []);
  
  const changement = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const changementAdress = (e) => {
    const { name, value } = e.target;
    setAdressTemp({
      ...adressTemp,
      [name]: value
    });
  };
  useEffect(() => {
    setData({
      ...data,
      ["adress"]: adressTemp
    })
  }, [adressTemp]);
  
  const hideModal = () => {
    setModalContentStyle('ModalHide');
    setModalStyle('ModalHide');
    setModif(false)
  }

  const showModal = () => {
    setModalContentStyle('ModalContent0');
    setModalStyle('ModalShow')
  }

  const sendUsers = (e) => {
    setDatabase([...database, data])
    setData(initialData)
    hideModal()
  }

  const modifyUser = (e) => {
    for (const item of database) {
      if (item.id == temp) {
        
      }
    }
    setData(initialData)
    hideModal()
  }

  function toggleSidebarClass() {
    setSidebarClass(
      sidebarClass.includes("toggled")
        ? "sb-nav-fixed"
        : "sb-nav-fixed sb-sidenav-toggled"
    );
  }

  return (
    <div className={sidebarClass}>
      <Navbar toggleSidebarClass={toggleSidebarClass} />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            
            <div className="container-fluid px-4">
              <h1 className="mt-4">Tables</h1>
              <Modal modalStyle={modalStyle} modalContentStyle={modalContentStyle} hideModal={hideModal} sendUsers={sendUsers} changement={changement} changementAdress={changementAdress} data={data} modif={modif} modifyUser={modifyUser} />
              <Breadcrumb />
              <Card>
                DataTables is a third party plugin that is used to generate the
                demo table below. For more information about DataTables, please
                visit the
                <a target="_blank" href="https://datatables.net/">
                  official DataTables documentation
                </a>
              </Card>
              <Card title="DataTable Example">
                {database.length>0 && <EmployeeList showModal={showModal} database={database} setData={setData} setModif={setModif} setTemp={setTemp}/>}
              </Card>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
