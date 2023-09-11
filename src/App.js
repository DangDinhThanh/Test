import logo from './logo.svg';
import './App.css';
import React,  { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {FormGroup } from React
// import example from './example';

function App(args) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Input placeholder="title"/>  
      <br />
      <Input placeholder="description"/> 
      <br />
      <Button color="danger" onClick={toggle}>
        ADD
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Table striped>
  <thead>
    <tr>
      <th>
        STT
      </th>
      <th>
        title Name
      </th>
      <th>
        description
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Bóng đá
      </td>
      <td>
        Tin tức thể thao bóng đá.....
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        quần vợt
      </td>
      <td>
        Trận đấu giữa 2 tay vợt hàng đầu
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Thời tiết
      </td>
      <td>
        Nhiệt độ trong hôm nay nắng nóng
      </td>
    </tr>
  </tbody>
</Table>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Save
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
