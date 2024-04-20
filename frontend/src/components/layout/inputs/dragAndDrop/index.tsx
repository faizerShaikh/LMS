"use client";

import { Upload } from "@carbon/icons-react";
import { Button, FormHelperText, Typography } from "@mui/material";
import { colors } from "constants/theme";
import { useField, useFormikContext } from "formik";
import { useMemo, useState } from "react";
import Dropzone, { DropzoneProps } from "react-dropzone";
import { Label } from "../label";
import Image from "next/image";

interface DropZoneProps extends DropzoneProps {
  name: string;
  label?: string;
  onChange?: any;
  accept?: any;
}

const DropZoneImage = ({ file }: { file: File | string }) => {
  const src = useMemo(() => {
    if (typeof file === "string") {
      return process.env.NEXT_PUBLIC_BASE_MEDIA_URL + file;
    } else {
      return URL.createObjectURL(file);
    }
  }, [file]);
  return (
    <Image
      fill
      alt="tr"
      src={src}
      className="w-full !static object-center object-scale-down rounded-md"
    ></Image>
  );
};

export const DropZone = <T extends {}>({
  name,
  label,
  onChange,
  accept,
  ...otherProps
}: DropZoneProps) => {
  const { setFieldValue, values } = useFormikContext<T | any>();

  const [field] = useField(name);
  const [errors, setError] = useState<string[]>([]);
  // console.log(values.name, "<====values name", name, values);
  return (
    <Dropzone
      minSize={0}
      accept={accept || { "image/*": [".png", ".gif", ".jpeg", ".jpg"] }}
      onDrop={(acceptedFiles, rejectedFiles) => {
        if (!acceptedFiles.length) {
          let err: string[] = [];
          rejectedFiles.forEach((item) => {
            err = [...err, ...item.errors.map((error) => error.message)];
          });
          setError(err);
        }
        if (otherProps.multiple) {
          setFieldValue(name, acceptedFiles);
        } else {
          setFieldValue(name, acceptedFiles[0]);
        }
        onChange ? onChange(acceptedFiles, rejectedFiles) : "";
        setError([]);
      }}
      {...otherProps}
    >
      {({ getRootProps, getInputProps, isDragActive }) => (
        <>
          {label && <Label className="text-sm ml-3" text={label} />}
          <div
            {...getRootProps()}
            className="drop-zone mt-2"
            style={{
              background: isDragActive ? colors.tertiary.light : "#fff",
            }}
          >
            <input {...getInputProps()} />

            {field.value ? (
              !Array.isArray(field.value) ? (
                <div className="h-[150px] w-full flex justify-center items-center">
                  {/* {process.env.NEXT_PUBLIC_BASE_MEDIA_URL+field.value} */}
                  <DropZoneImage file={field.value}></DropZoneImage>
                </div>
              ) : (
                <div className="w-full flex justify-start items-center gap-5 overflow-x-auto">
                  {field.value.map((item: File) => (
                    <DropZoneImage file={item}></DropZoneImage>
                  ))}
                </div>
              )
            ) : (
              ""
            )}

            <Button startIcon={<Upload />}>Click to upload your file</Button>
          </div>
          {errors[0] && (
            <FormHelperText className="text-red-600">
              {errors[0]}
            </FormHelperText>
          )}
        </>
      )}
    </Dropzone>
  );
};
