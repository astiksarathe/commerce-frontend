import { Drawer, Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { closeResponsiveModel } from "../../features/model-drawer";
const ModelDrawer = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 48rem)" });
  const { isModelDrawerOpen, modelDetails } = useSelector((state) => state.modelDrawer);
  const dispatch = useDispatch();

  const onCancelHandler = () => {
    dispatch(closeResponsiveModel());
  };
  const onOnHandler = () => {};
  return (
    <div>
      {isMobile ? (
        <div>
          <Drawer
            placement={"bottom"}
            closable={false}
            onClose={onCancelHandler}
            open={isModelDrawerOpen}
            footer={[]}
          >
            {modelDetails.body}
          </Drawer>
        </div>
      ) : (
        <div>
          <Modal open={isModelDrawerOpen} onOk={onOnHandler} onCancel={onCancelHandler} footer={[]}>
            {modelDetails.body}
          </Modal>
        </div>
      )}
    </div>
  );
};

export default ModelDrawer;
