import dynamic from "next/dynamic";
import ReactQuill from "react-quill";

const QuillNoSSRWrapper = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return ({ ...props }) => <RQ {...props} />;
  },
  {
    ssr: false,
  }
) as typeof ReactQuill;

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    ["link", "formula"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

export default function TextEditor({ name, label, setFieldValue, value }: any) {
  return (
    <div className="my-3">
      <label
        style={{
          color: "#4F4F4F",
          fontSize: "0.85rem",
          fontWeight: 500,
          paddingLeft: "3px",
          margin: "0",
        }}
      >
        {label}
      </label>
      <QuillNoSSRWrapper
        onChange={(e) => setFieldValue(name, e)}
        value={value}
        modules={modules}
        placeholder="Type Here..."
        theme="snow"
      />
    </div>
  );
}
