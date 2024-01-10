"use client";

import { Close } from "@carbon/icons-react";
import {
  Box,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { Button } from "components";
import { colors } from "constants/theme";
import {
  cloneElement,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface DialogeBoxProps {
  button: ReactElement;
  children: ReactNode;
  title: ReactNode;
  isLoading?: boolean;
  submitHandler?: (func: VoidFunction) => void;
}

export const Confirm = ({
  button,
  title,
  children,
  isLoading,
  submitHandler,
}: DialogeBoxProps) => {
  const [open, setOpen] = useState(false);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  useEffect(() => {
    setContainer(document.getElementById("LMS"));
  }, []);

  return (
    <>
      {cloneElement(button, { onClick: onOpen })}
      <MuiDialog
        container={container}
        fullWidth
        maxWidth={"sm"}
        open={open}
        onClose={onClose}
      >
        <div className='p-5'>
          <div style={{ border: `1px solid ${colors.secondary.dark}60` }}>
            <DialogTitle
              sx={{
                color: colors.text.dark,
              }}
              className='dailog-heading'
            >
              <span>{title}</span>
              <IconButton onClick={onClose}>
                <Close size={24} fill={colors.text.dark} />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ color: colors.text.dark, mt: 2 }}>{children}</Box>
            </DialogContent>
            <DialogActions
              sx={{
                mx: "20px",
                paddingBottom: "15px",
              }}
            >
              <Button
                onClick={onClose}
                variant='outlined'
                size='small'
                color='secondary'
              >
                Close
              </Button>
              {submitHandler && (
                <Button
                  isLoading={isLoading}
                  size='small'
                  className='ml-4 capitalize  xl:text-sm 2xl:text-base'
                  onClick={() => submitHandler(onClose)}
                >
                  Confirm
                </Button>
              )}
            </DialogActions>
          </div>
        </div>
      </MuiDialog>
    </>
  );
};
