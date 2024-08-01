import React from "react";

import { Button, Modal } from "antd";

import "./delete-model.scss";

const DeleteModel = ({ open, onCancel, onConfirm, laoding }) => {
  return (
    <Modal
      maskClosable={false}
      open={open}
      onCancel={onCancel}
      footer={[
        <div className="delete_model_btn_wrapper" key={1}>
          <Button className="delete_modal_btn" type="primary" loading={laoding} onClick={onConfirm}>
            Yes
          </Button>
          <Button className="delete_modal_btn" onClick={onCancel}>
            No
          </Button>
        </div>,
      ]}
      className=""
      width={350}
      style={{
        top: 200,
      }}
    >
      <div className="delete_address_model">
        <h3>Delete address</h3>
        <p>Are you sure, you want to delete your saved address?</p>
      </div>
    </Modal>
  );
};

export default DeleteModel;
