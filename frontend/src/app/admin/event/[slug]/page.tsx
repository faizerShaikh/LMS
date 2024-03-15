import { PageHeader } from "components/layout/pageHeader";
import { EventInterface } from "interfaces/event";
import { getSingleEvent } from "lib/get-data/event";
import React from "react";
import EventForm from "../_components/EventForm";

type Props = {
  params: { slug: string;  };
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
  };
  let data: EventInterface | null = null;
  if (isUpdate) {
    data = await getSingleEvent(slug);
    if (data) {
      initialValues = { ...initialValues, ...data };
    }
  }
  return (
    <>
      <PageHeader title={"Add Event"}></PageHeader>
      <EventForm initialValues={initialValues} id={data!.id} isUpdate={isUpdate} />
    </>
  );
};

export default SingleEvent;
