import React, { useState } from "react";
import { Drawer } from "antd";
const MDrawer = () => {
  const [open, setOpen] = useState(true);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement={"bottom"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"bottom"}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default MDrawer;
