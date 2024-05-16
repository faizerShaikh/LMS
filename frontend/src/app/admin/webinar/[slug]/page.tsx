import { PageHeader } from "components/layout/pageHeader";
import React from "react";
import { WebinarInterface, WebinarResponseInterface } from "interfaces/webinar";
import { getSingleWebinar } from "lib";
import { EventInterface } from "interfaces/event";
import WebinarContentForm from "../components/WebinarContentForm";

type Props = {
  params: { slug: string };
};

const SingleWebinar = async ({ params: { slug } }: Props) => {
  const isUpdate = slug !== "add";
  let initialValues: WebinarResponseInterface = {
    id: "",
    agenda: "",
    title: "",
    event: {
      id: "",
      name: "",
      eventImage: "",
      description: "",
      metaID: "",
      slug: "",
    },

    speakers: [
      {
        image: "",
        bio: "",
        name: "",
        linkdIn: "",
      },
    ],
  };

  const apiEndPoint = "/configurations/webinar";
  const apiEndPointImage = "/configurations/event/event-image";

  const isWebinar = true;
  let data: WebinarResponseInterface | null = null;
  if (isUpdate) {
    data = await getSingleWebinar(slug);
    if (data) {
      initialValues = {
        ...initialValues,
        ...data,
        ...data.event,
        id: data?.id,
      };
    }
  }
  console.log(data, "<<<<<<webinar data");
  return (
    <>
      <PageHeader title={"Add Webinar"}></PageHeader>
      {/* <EventWebinarForm
        initialValues={initialValues}
        id={data ? data!.id : undefined}
        isUpdate={isUpdate}
        apiEndPoint={apiEndPoint}
        apiEndPointImage={apiEndPointImage}
        isWebinar={isWebinar}
      /> */}
      <WebinarContentForm
        initialValues={initialValues}
        slug={slug}
        data={data || initialValues}
        isUpdate={isUpdate}
        apiEndPoint={apiEndPoint}
        apiEndPointImage={apiEndPointImage}
        isWebinar={isWebinar}
      ></WebinarContentForm>
    </>
  );
};

export default SingleWebinar;
