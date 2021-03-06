// @flow

/* eslint-disable import/exports-last */

// eslint-disable-next-line flowtype/no-weak-types
export type HttpClientType = (url: string) => Promise<Object>;

type ContainerResourceUsageType = {|
  +name: string,
  +usage: {|
    +cpu: string,
    +memory: string
  |}
|};

export type PodResourceUsageType = {|
  +name: string,
  +containers: $ReadOnlyArray<ContainerResourceUsageType>
|};

type ResourceType = {|
  +cpu: string | null,
  +memory: string | null
|};

type ContainerResourceSpecificationType = {|
  +name: string,
  +resources: {|
    +limits: ResourceType | null,
    +requests: ResourceType | null
  |}
|};

export type PodResourceSpecificationType = {|
  +containers: $ReadOnlyArray<ContainerResourceSpecificationType>,
  +name: string
|};

export type IntervalCallbackType = (podResourceSpecification: PodResourceSpecificationType, podResourceUsage: PodResourceUsageType) => void;
