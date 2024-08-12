import React from "react";

import { Modal } from "antd";
import Button from "../../../ui/button";
const DeleteModel = ({ open, onCancel, onConfirm, laoding }) => {
  return (
    <Modal
      maskClosable={false}
      open={open}
      onCancel={onCancel}
      footer={[
        <div className="flex gap-4" key={1}>
          <Button loading={laoding} onClick={onConfirm}>
            Yes
          </Button>
          <Button type="link" onClick={onCancel}>
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
      <div className="p-4 pb-0">
        <h3 className="text-base font-bold text-center">Delete address</h3>
        <p className="text-sm font-normal text-center mt-1">
          Are you sure, you want to delete your saved address?
        </p>
      </div>
    </Modal>
  );
};

export default DeleteModel;
