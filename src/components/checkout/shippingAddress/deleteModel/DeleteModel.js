import React from "react";

import { Button, Modal } from "antd";

const DeleteModel = ({ open, onCancel, onConfirm, laoding }) => {
  return (
    <Modal
      maskClosable={false}
      open={open}
      onCancel={onCancel}
      footer={[
        <div className="w-fit m-auto mt-6" key={1}>
          <Button
            className="py-3 px-5"
            type="primary"
            loading={laoding}
            onClick={onConfirm}
          >
            Yes
          </Button>
          <Button className="py-3 px-5" onClick={onCancel}>
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
        <p className="text-sm font-normal text-right mt-1">
          Are you sure, you want to delete your saved address?
        </p>
      </div>
    </Modal>
  );
};

export default DeleteModel;
