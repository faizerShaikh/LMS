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

    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],

    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

export default function TextEditor({ name, label, setFieldValue, value }: any) {
  return (
    <div className="my-3">
      <QuillNoSSRWrapper
        onChange={(e) => setFieldValue(name, e)}
        value={value}
        modules={modules}
        placeholder="Type Here..."
        theme="snow"
        className="h-[200px]"
      />
    </div>
  );
}
