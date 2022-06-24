import React from 'react';
import "./styles/Modal.css";

const Modal = ({modalStyle, hideModal, modalContentStyle, changement, data, changementAdress, sendUsers, modif, modifyUser}) => {
    return (
        <div>
            <div className={modalStyle} onClick={e => {hideModal()}} >
            </div>
            <div className={modalContentStyle} >
                {modif && <h3>Modifier les données</h3> || <h3>Ajouter un User</h3>}
                <div className='form-group row my-2'>
                    <label className='col-sm-2 col-form-label'>Name</label>
                    <div className='col-sm-10'>
                        <input type="text" placeholder='name...' className='form-control' name='name' value={data.name} onChange={e => changement(e)}/>
                    </div>
                </div>
                <div className='form-group row my-2'>
                    <label className='col-sm-2 col-form-label'>Username</label>
                    <div className='col-sm-10'>
                        <input type="text" placeholder='username...' className='form-control' name='username' value={data.username} onChange={e => changement(e)}/>
                    </div>
                </div>
                <div className='form-group row my-2'>
                    <label className='col-sm-2 col-form-label'>Email</label>
                    <div className='col-sm-10'>
                        <input type="text" placeholder='tepr@tepr.tp' className='form-control' name='email' value={data.email} onChange={e => changement(e)}/>
                    </div>
                </div>
                <div className='my-4'>
                    <h5>Adress</h5>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group row my-2'>
                                <label className='col-sm-2 col-form-label'>Street</label>
                                <div className='col-sm-10'>
                                    <input type="text" placeholder='Clementina DuBuque' className='form-control' name='street' value={data.adress.street} onChange={e => changementAdress(e)}/>
                                </div>
                            </div>
                            <div className='form-group row my-2'>
                                <label className='col-sm-2 col-form-label'>Suite</label>
                                <div className='col-sm-10'>
                                    <input type="text" placeholder='Suite 192' className='form-control' name='suite' value={data.adress.suite} onChange={e => changementAdress(e)}/>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group row my-2'>
                                <label className='col-sm-2 col-form-label'>City</label>
                                <div className='col-sm-10'>
                                    <input type="text" placeholder='Lebsackbury' className='form-control' name='city' value={data.adress.city} onChange={e => changementAdress(e)}/>
                                </div>
                            </div>
                            <div className='form-group row my-2'>
                                <label className='col-sm-2 col-form-label'>Zipcode</label>
                                <div className='col-sm-10'>
                                    <input type="text" placeholder='31428-2261' className='form-control' name='zipcode' value={data.adress.zipcode} onChange={e => changementAdress(e)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='form-group row my-2'>
                    <label className='col-sm-2 col-form-label'>Phone</label>
                    <div className='col-sm-10'>
                        <input type="text" placeholder='+33214563...' className='form-control' name='phone' value={data.phone} onChange={e => changement(e)}/>
                    </div>
                </div>
                <div className='form-group row my-2'>
                    <label className='col-sm-2 col-form-label'>Website</label>
                    <div className='col-sm-10'>
                        <input type="text" placeholder='tepr.tpr' className='form-control' name='website' value={data.website} onChange={e => changement(e)}/>
                    </div>
                </div>

                {modif && <a href="#" onClick={e => modifyUser(e)} className='form-control btn btn-primary' >Modifier les informations</a> ||
                <a href="#" onClick={e => sendUsers(e)} className='form-control btn btn-primary' >Ajouter l'Utilisateur</a>}
            </div>
        </div>
    );
};

export const ModalBtn = ({showModal}) => {

    return (
        <a className='btn btn-primary' href="#" onClick={e => {showModal()}}>Ajouter</a>
    )
}

export default Modal;