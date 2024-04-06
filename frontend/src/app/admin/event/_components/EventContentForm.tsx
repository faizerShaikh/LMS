"use client";
import { EventInterface } from "interfaces/event";
import React from "react";
import EventWebinarForm from "components/admin/EventWebinarForm";
import { Tabs } from "components/layout";
import CommonContentEvent from "../_components/PageCommenContent";
import EventWebinarRagistration from "./PageRegistration";

type Props = {
  initialValues: EventInterface;
  type?: string;
  slug: string;
  data: EventInterface;
  isUpdate: boolean;
  apiEndPoint: string;
  apiEndPointImage: string;
  isWebinar: boolean;
};

const EventContentForm = ({
  initialValues,
  data,
  isUpdate,
  apiEndPointImage,
  apiEndPoint,
  isWebinar,
}: Props) => {
  return (
    <>
      <div className="mb-2">
        {isUpdate ? (
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
                component: (
                  <CommonContentEvent id={initialValues.id} type="Feature" />
                ),
              },
              {
                id: 2,
                buttonLabel: "Application Process",
                component: (
                  <CommonContentEvent
                    id={initialValues.id}
                    type="Application Process"
                  />
                ),
              },
              {
                id: 3,
                buttonLabel: "Selection Process",
                component: (
                  <CommonContentEvent
                    id={initialValues.id}
                    type="Selection Process"
                  />
                ),
              },
              {
                id: 4,
                buttonLabel: "Winners",
                component: (
                  <CommonContentEvent id={initialValues.id} type="Winner" />
                ),
              },
              {
                id: 5,
                buttonLabel: "Registration View",
                component: <EventWebinarRagistration id={initialValues.id} />,
              },
            ]}
          />
        ) : (
          <EventWebinarForm
            initialValues={initialValues}
            id={data ? data!.id : undefined}
            isUpdate={isUpdate}
            apiEndPoint={apiEndPoint}
            apiEndPointImage={apiEndPointImage}
            isWebinar={isWebinar}
          />
        )}
      </div>
    </>
  );
};

export default EventContentForm;
