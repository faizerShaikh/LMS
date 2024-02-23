import { ReactTable, PageHeader } from "components/layout";

const columns = [
    {
        header: "Full name",
        accessorKey: "full_name",
        flex: 1,
        cellClassName: "text-dark",
    },
    {
        header: "Email",
        accessorKey: "email",
        flex: 1,
        cellClassName: "text-dark",
    },
]

export default function PageContent() {
    return <>
        <PageHeader title="Page Content" />
        <ReactTable columns={columns} data={[]} />
    </>
}
