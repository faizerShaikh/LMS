"use client";
import { PageHeader } from "components/layout/pageHeader";
import { EventInterface } from "interfaces/event";
import { getSingleEvent } from "lib/get-data/event";
import React from "react";
import EventWebinarForm from "components/admin/EventWebinarForm";
import { Tabs } from "components/layout";
import CommonContentEvent from "../_components/PageCommenContent";

type Props = {
  params: { slug: string };
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
  const apiEndPoint = "/configurations/event";
  const apiEndPointImage = "/configurations/event/event-image";

  const isWebinar = false;
  let data: EventInterface | null = null;
  if (isUpdate) {
    data = await getSingleEvent(slug);
    if (data) {
      initialValues = { ...initialValues, ...data };
      console.log("Initial Values:", initialValues);
    }
  }
  return (
    <>
      <div>
        <Tabs
          tabs={[
            {
              id: 0,
              buttonLabel: "Event Form",
              component: (
                <EventWebinarForm
                  initialValues={initialValues}
                  id={data ? data!.id : undefined}
                  isUpdate={isUpdate}
                  apiEndPoint={apiEndPoint}
                  apiEndPointImage={apiEndPointImage}
                  isWebinar={isWebinar}
                />
              ),
            },
            {
              id: 1,
              buttonLabel: "Features",
              component: <CommonContentEvent />,
            },
            {
              id: 2,
              buttonLabel: "Application Process",
              component: <CommonContentEvent />,
            },
            {
              id: 3,
              buttonLabel: "Selection Process",
              component: <CommonContentEvent />,
            },
          ]}
        />
      </div>
    </>
  );
};

export default SingleEvent;
