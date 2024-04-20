import { PageHeader } from "components/layout/pageHeader";
import { EventInterface } from "interfaces/event";
import { getSingleEvent } from "lib/get-data/event";
import React from "react";
import EventContentForm from "../_components/EventContentForm";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};
export let metadata: Metadata = {
  title: "",
  description: "",
};

const SingleEvent = async ({ params: { slug } }: Props) => {
  const isUpdate = slug !== "add";
  let initialValues: EventInterface = {
    id: "",
    slug: "",
    name: "",
    description: "",
    eventImage: "",
    startDayTime: "",
    endDayTime: "",
    deadLine: "",
    eventType: "",
    eventLocation: "",

    isFeatured: false,
    stratigicPartners: [],
  };
  const apiEndPoint = "/configurations/event";
  const apiEndPointImage = "/configurations/event/event-image";

  const isWebinar = false;
  let data: EventInterface | null = null;
  if (isUpdate) {
    data = await getSingleEvent(slug);
    if (data) {
      initialValues = { ...initialValues, ...data };
      if (data.metaData) {
        metadata = { ...data.metaData };
      }
    }
  }
  return (
    <>
      <PageHeader title={"Add Event"} className="mb-2"></PageHeader>
      <EventContentForm
        initialValues={initialValues}
        slug={slug}
        data={data || initialValues}
        isUpdate={isUpdate}
        apiEndPoint={apiEndPoint}
        apiEndPointImage={apiEndPointImage}
        isWebinar={isWebinar}
      ></EventContentForm>
    </>
  );
};

export default SingleEvent;
