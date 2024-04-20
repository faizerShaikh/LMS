"use client";
import { EventInterface } from "interfaces/event";
import React from "react";
import EventWebinarForm from "components/admin/EventWebinarForm";
import { Tabs } from "components/layout";
import EventWebinarRagistration from "app/admin/event/_components/PageRegistration";
import { WebinarInterface, WebinarResponseInterface } from "interfaces/webinar";

type Props = {
  initialValues: WebinarInterface & EventInterface;
  type?: string;
  slug: string;
  data: WebinarResponseInterface;
  isUpdate: boolean;
  apiEndPoint: string;
  apiEndPointImage: string;
  isWebinar: boolean;
};

const WebinarContentForm = ({
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
                buttonLabel: "Webinar Form",
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
                buttonLabel: "Registration View",
                component: <EventWebinarRagistration id={data.event?.id} />,
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

export default WebinarContentForm;
