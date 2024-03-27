import { PageHeader } from "components/layout/pageHeader";
import React from "react";
import EventWebinarForm from "components/admin/EventWebinarForm";
import { WebinarInterface, WebinarResponseInterface } from "interfaces/webinar";
import { getSingleWebinar } from "lib";
import { EventInterface } from "interfaces/event";

type Props = {
  params: { slug: string };
};

const SingleWebinar = async ({ params: { slug } }: Props) => {
  const isUpdate = slug !== "add";
  let initialValues: WebinarInterface & EventInterface = {
    id: "",
    slug: "",
    title: "",
    coverImage: "",
    description: "",
    agenda: "",
    createdAt: "",
    updatedAt: "",
    deletedAt: "",
    startDayTime: "",
    endDayTime: "",
    deadLine: "",
    eventType: "",
    eventLocation: "",
    eventImage: "",
    name: "",
    isFeatured: false,
    speakers: [
      {
        image: "",
        bio: "",
        name: "",
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

  return (
    <>
      <PageHeader title={"Add Webinar"}></PageHeader>
      <EventWebinarForm
        initialValues={initialValues}
        id={data ? data!.id : undefined}
        isUpdate={isUpdate}
        apiEndPoint={apiEndPoint}
        apiEndPointImage={apiEndPointImage}
        isWebinar={isWebinar}
      />
    </>
  );
};

export default SingleWebinar;