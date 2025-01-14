/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: InstanceHealthForBackfillsQuery
// ====================================================

export interface InstanceHealthForBackfillsQuery_instance_daemonHealth_allDaemonStatuses_lastHeartbeatErrors_errorChain_error {
  __typename: "PythonError";
  message: string;
  stack: string[];
}

export interface InstanceHealthForBackfillsQuery_instance_daemonHealth_allDaemonStatuses_lastHeartbeatErrors_errorChain {
  __typename: "ErrorChainLink";
  isExplicitLink: boolean;
  error: InstanceHealthForBackfillsQuery_instance_daemonHealth_allDaemonStatuses_lastHeartbeatErrors_errorChain_error;
}

export interface InstanceHealthForBackfillsQuery_instance_daemonHealth_allDaemonStatuses_lastHeartbeatErrors {
  __typename: "PythonError";
  message: string;
  stack: string[];
  errorChain: InstanceHealthForBackfillsQuery_instance_daemonHealth_allDaemonStatuses_lastHeartbeatErrors_errorChain[];
}

export interface InstanceHealthForBackfillsQuery_instance_daemonHealth_allDaemonStatuses {
  __typename: "DaemonStatus";
  id: string;
  daemonType: string;
  required: boolean;
  healthy: boolean | null;
  lastHeartbeatErrors: InstanceHealthForBackfillsQuery_instance_daemonHealth_allDaemonStatuses_lastHeartbeatErrors[];
  lastHeartbeatTime: number | null;
}

export interface InstanceHealthForBackfillsQuery_instance_daemonHealth {
  __typename: "DaemonHealth";
  id: string;
  allDaemonStatuses: InstanceHealthForBackfillsQuery_instance_daemonHealth_allDaemonStatuses[];
}

export interface InstanceHealthForBackfillsQuery_instance {
  __typename: "Instance";
  daemonHealth: InstanceHealthForBackfillsQuery_instance_daemonHealth;
  hasInfo: boolean;
}

export interface InstanceHealthForBackfillsQuery {
  instance: InstanceHealthForBackfillsQuery_instance;
}
